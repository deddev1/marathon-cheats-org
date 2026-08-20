#!/usr/bin/env node
/**
 * Import Marathon gameplay images from Supabase public bucket.
 * Replaces screenshots + product page images — does NOT touch homepage hero ladder.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 80, effort: 6, smartSubsample: true };

const SOURCES = [
	{
		label: 'marathon.png',
		url: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/marathon.png',
	},
	{
		label: 'marathon (2).png',
		url: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/marathon%20(2).png',
	},
	{
		label: 'marathon (3).png',
		url: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/marathon%20(3).png',
	},
	{
		label: 'sc2.webp',
		url: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/sc2.webp',
	},
	{
		label: 'sc3.webp',
		url: 'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/marathon/sc3.webp',
	},
];

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

async function downloadSources() {
	const buffers = [];
	for (const source of SOURCES) {
		const res = await fetch(source.url, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MarathonCheatsSite/1.0)' },
		});
		if (!res.ok) throw new Error(`Download failed for ${source.label}: HTTP ${res.status}`);
		buffers.push(Buffer.from(await res.arrayBuffer()));
		console.log(`✓ downloaded ${source.label}`);
	}
	return buffers;
}

async function encodeWebp(input, width) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: false })
		.webp(WEBP)
		.toBuffer();
}

async function writeScreenshotSet(input, baseName) {
	let canonical = null;
	for (const width of CONTENT_WIDTHS) {
		const webp = await encodeWebp(input, width);
		await writeFile(path.join(imagesDir, `${baseName}-${width}w.webp`), webp);
	}
	canonical = await encodeWebp(input, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	for (const name of LEGACY_MAP[baseName] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
	}
	return canonical;
}

const sources = await downloadSources();

for (let n = 1; n <= 15; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `marathon-screenshot-${num}`;
	const source = sources[(n - 1) % sources.length];
	console.log(`Processing ${base} ← ${SOURCES[(n - 1) % SOURCES.length].label}`);
	await writeScreenshotSet(source, base);
}

console.log('\nDone — replaced marathon-screenshot-01…15 and linked product images (hero untouched).');
