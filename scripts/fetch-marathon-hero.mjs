import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const HERO_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/Screenshot%202026-08-19%20174006.png';
const imagesDir = path.resolve('public/images');
const HERO_WEBP = { quality: 82, effort: 6, smartSubsample: true };

/** Match homepage hero bar — preserve source aspect ratio (~2.67:1). */
const BANNER_RATIO = 769 / 288;

const heroBuffer = Buffer.from(
	await fetch(HERO_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheMarathonCheatsSite/1.0)' },
	}).then((r) => {
		if (!r.ok) throw new Error(`HTTP ${r.status}`);
		return r.arrayBuffer();
	}),
);

function bannerHeight(width) {
	return Math.round(width / BANNER_RATIO);
}

for (const width of [640, 1024, 1536]) {
	const height = bannerHeight(width);
	const webp = await sharp(heroBuffer)
		.resize(width, height, { fit: 'cover', position: 'centre' })
		.webp(HERO_WEBP)
		.toBuffer();
	await writeFile(path.join(imagesDir, `marathon-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ marathon-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const canonicalHeight = bannerHeight(1024);
const canonical = await sharp(heroBuffer)
	.resize(1024, canonicalHeight, { fit: 'cover', position: 'centre' })
	.webp(HERO_WEBP)
	.toBuffer();
for (const name of ['marathon-cheats-hero.webp', 'marathon-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

console.log(`Done — hero banner ${BANNER_RATIO}:1 (1024x${canonicalHeight})`);
