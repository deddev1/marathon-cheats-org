/**
 * Import Marathon gameplay screenshots from the Supabase zip bundle.
 * Writes simple crawl URLs: /images/marathon-screenshot-01.webp … 15.webp
 * plus -480w / -960w responsive variants for fast page loads.
 */
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ZIP_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathonimages/marathon/the-marathon-screenshots-for-cursor.zip';
const STEAM_LIBRARY_HERO =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathonimages/ChatGPT%20Image%20Aug%2015,%202026,%2009_04_18%20AM.png';
const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/marathon-screenshots');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 78, effort: 6, smartSubsample: true };
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

const LEGACY_MAP = {
	'marathon-screenshot-02': ['marathon-cheats-esp.webp'],
	'marathon-screenshot-03': ['marathon-cheats-wallhack.webp'],
	'marathon-screenshot-04': ['marathon-cheats-aimbot.webp'],
	'marathon-screenshot-05': ['marathon-cheats-aimbot-view.webp'],
	'marathon-screenshot-06': ['marathon-cheats-radar.webp'],
	'marathon-screenshot-07': ['marathon-cheats-run.webp'],
	'marathon-screenshot-08': ['marathon-cheats-combat.webp'],
	'marathon-screenshot-09': ['marathon-esp-player-tags.webp', 'marathon-esp-radar.webp'],
	'marathon-screenshot-10': ['marathon-aimbot-skeleton.webp', 'marathon-aimbot-sniper.webp'],
	'marathon-screenshot-11': ['marathon-extract-fight.webp'],
	'marathon-screenshot-12': ['marathon-growth-run-combat.webp'],
	'marathon-screenshot-13': ['marathon-growth-run-mode.webp'],
	'marathon-screenshot-14': ['marathon-verdansk-map.webp'],
	'marathon-screenshot-15': ['marathon-wallhack-skeleton.webp'],
};

/** Drop heavy unused PNG masters left from older pipelines. */
const REMOVE_ORPHANS = [
	'marathon-cheats-hero.png',
	'marathon-cheats-hero-full.png',
	'marathon-cheats-hero-1024w.png',
	'marathon-cheats-hero-1536w.png',
	'marathon-cheats-hero.tmp.png',
	'marathon-cheats-esp.png',
	'marathon-cheats-aimbot.png',
	'marathon-cheats-wallhack.png',
	'hero-banner.png',
	'marathon-hero-banner.png',
	'marathon-hero-ghost.png',
	'marathon-hero-ghost.webp',
	'marathon-hero-ghost-2x.png',
	'marathon-hero-ghost-hi.png',
	'marathon-hero-source.png',
];

async function fetchZip() {
	await mkdir(tmpDir, { recursive: true });
	const zipPath = path.join(tmpDir, 'bundle.zip');
	const res = await fetch(ZIP_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheMarathonCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Download failed: HTTP ${res.status}`);
	await writeFile(zipPath, Buffer.from(await res.arrayBuffer()));
	return zipPath;
}

async function extractZip(zipPath) {
	const { execFile } = await import('node:child_process');
	const { promisify } = await import('node:util');
	const exec = promisify(execFile);
	const outDir = path.join(tmpDir, 'extracted');
	await mkdir(outDir, { recursive: true });
	await exec('unzip', ['-o', zipPath, '-d', outDir]);
	return path.join(outDir, 'the-marathon-screenshots');
}

async function encodeWebp(input, width, options = WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

async function writeScreenshotSet(pngPath, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

async function fetchSteamLibraryHero() {
	const res = await fetch(STEAM_LIBRARY_HERO, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheMarathonCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Hero image download failed: HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeHeroLadder(sourceBuffer) {
	const bannerHeight = (width) => Math.round(width / 3.15);

	for (const width of [640, 1024]) {
		const height = bannerHeight(width);
		const webp = await sharp(sourceBuffer)
			.resize(width, height, { fit: 'cover', position: 'centre' })
			.webp(HERO_WEBP)
			.toBuffer();
		await writeFile(path.join(imagesDir, `marathon-cheats-hero-${width}w.webp`), webp);
		console.log(`  ✓ marathon-cheats-hero-${width}w.webp (${Math.round(webp.length / 1024)}KB)`);
	}

	const canonical = await sharp(sourceBuffer)
		.resize(1024, bannerHeight(1024), { fit: 'cover', position: 'centre' })
		.webp(HERO_WEBP)
		.toBuffer();
	for (const name of ['marathon-cheats-hero.webp', 'marathon-hero-banner.webp', 'hero-banner.webp']) {
		await writeFile(path.join(imagesDir, name), canonical);
	}
}

async function cleanupOrphans() {
	for (const file of REMOVE_ORPHANS) {
		try {
			await unlink(path.join(imagesDir, file));
			console.log(`  removed orphan ${file}`);
		} catch {
			// already gone
		}
	}
}

await mkdir(imagesDir, { recursive: true });

console.log('Downloading screenshot bundle…');
const zipPath = await fetchZip();
console.log('Extracting…');
const sourceDir = await extractZip(zipPath);

let totalBytes = 0;

for (let n = 1; n <= 15; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `marathon-screenshot-${num}`;
	const png = path.join(sourceDir, `${base}.png`);

	console.log(`Processing ${base}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, base);
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
	}

}

console.log('Generating hero ladder from Supabase hero…');
await writeHeroLadder(await fetchSteamLibraryHero());

console.log('\nCleaning unused heavy PNG masters…');
await cleanupOrphans();

console.log(`\nDone — 15 canonical URLs + 480w/960w variants (~${Math.round(totalBytes / 1024)}KB total webp)`);
