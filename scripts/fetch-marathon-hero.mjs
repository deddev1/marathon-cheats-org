import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const HERO_URL =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/ChatGPT%20Image%20Aug%2019,%202026,%2005_51_32%20PM.png';
const imagesDir = path.resolve('public/images');
const HERO_WEBP = { quality: 84, effort: 6, smartSubsample: true };

/** Match homepage hero — preserve source aspect ratio (~16:9). */
const BANNER_RATIO = 1672 / 941;

function enhanceHero(pipeline) {
	return pipeline
		.modulate({ brightness: 1.1, saturation: 1.38 })
		.linear(1.12, -18)
		.gamma(1.04)
		.sharpen({ sigma: 0.9, m1: 1.1, m2: 0.45 });
}

async function renderHero(width) {
	const height = Math.round(width / BANNER_RATIO);
	return enhanceHero(
		sharp(heroBuffer).resize(width, height, { fit: 'cover', position: 'centre' }),
	)
		.webp(HERO_WEBP)
		.toBuffer();
}

const heroBuffer = Buffer.from(
	await fetch(HERO_URL, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TheMarathonCheatsSite/1.0)' },
	}).then((r) => {
		if (!r.ok) throw new Error(`HTTP ${r.status}`);
		return r.arrayBuffer();
	}),
);

for (const width of [640, 1024, 1536]) {
	const height = Math.round(width / BANNER_RATIO);
	const webp = await renderHero(width);
	await writeFile(path.join(imagesDir, `marathon-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ marathon-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const canonicalHeight = Math.round(1024 / BANNER_RATIO);
const canonical = await renderHero(1024);
const canonicalPng = await enhanceHero(
	sharp(heroBuffer).resize(1024, canonicalHeight, { fit: 'cover', position: 'centre' }),
)
	.png()
	.toBuffer();
for (const name of ['marathon-cheats-hero.webp', 'marathon-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}
await writeFile(path.join(imagesDir, 'marathon-cheats-hero.png'), canonicalPng);
await writeFile(path.join(imagesDir, 'marathon-hero-source.png'), heroBuffer);

console.log(`Done — enhanced hero banner ${BANNER_RATIO.toFixed(2)}:1 (1024x${canonicalHeight})`);
