#!/usr/bin/env node
/**
 * SEO verify: leftover Fortnite/Warzone copy + Isle/The Isle leaks in blog and EN pages.
 * Default: verify only (safe for CI/prebuild). Pass --fix to auto-rewrite known patterns.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { applyIsleReplacements, findIsleLeaks } from './isle-blog-guard.mjs';

const FIX = process.argv.includes('--fix');

const BLOG_PATH = 'src/data/blog/posts.generated.ts';
const PAGES_EN = 'scripts/i18n-data/pages-en.mjs';
const CONTENT_GEN = 'src/data/i18n/content.generated.ts';

const FORTNITE_BAD = [
	'supply-drop',
	'BR-critical',
	'BR loop',
	'vehicles',
	'ranked block',
	'Controllers',
	'Battle Pass',
	'reboot rounds',
	'endgame circles',
	'Verdansk',
	'Activision',
	'soft aim, and .',
	'ESP, Soft Aim,',
	'best-marathon-cheats',
	'marathon-esp-hack',
	'marathon-aimbot-hack',
];

const TYPO_REPLACEMENTS = [
	['RadarRadar', 'Radar'],
	['RBattlEye', 'Reach out'],
];

function applyTypoFixes(text) {
	let out = text;
	for (const [from, to] of TYPO_REPLACEMENTS) {
		if (out.includes(from)) out = out.split(from).join(to);
	}
	return out;
}

function maybeWrite(path, next, prev) {
	if (next === prev) return false;
	if (!FIX) return false;
	writeFileSync(path, next);
	return true;
}

function scanTypos(label, text) {
	const hits = [];
	for (const [bad] of TYPO_REPLACEMENTS) {
		if (text.includes(bad)) hits.push({ label, match: bad });
	}
	if (hits.length) {
		console.log(`--- ${label} typos (${hits.length}) ---`);
		for (const h of hits) console.log(`  ${h.match}`);
	}
	return hits;
}

function scan(label, text, patterns) {
	console.log(`--- ${label} ---`);
	for (const b of patterns) {
		const n = text.split(b).length - 1;
		if (n) console.log(`${b}: ${n}`);
	}
}

function scanIsle(label, text) {
	const hits = findIsleLeaks(text, label);
	if (hits.length) {
		console.log(`--- ${label} Isle leaks (${hits.length}) ---`);
		for (const h of hits.slice(0, 30)) console.log(`  ${h.match} (${h.pattern})`);
		if (hits.length > 30) console.log(`  ... and ${hits.length - 30} more`);
	}
	return hits;
}

// --- pages-en ---
const pagesOriginal = readFileSync(PAGES_EN, 'utf8');
let pagesRaw = applyTypoFixes(pagesOriginal);
maybeWrite(PAGES_EN, pagesRaw, pagesOriginal);
scan('pages-en Fortnite leftovers', pagesRaw, FORTNITE_BAD);

// --- generated i18n ---
const genOriginal = readFileSync(CONTENT_GEN, 'utf8');
let gen = applyTypoFixes(genOriginal);
maybeWrite(CONTENT_GEN, gen, genOriginal);
const enEnd = gen.indexOf('\n\t\tes:');
const enSlice = enEnd > 0 ? gen.slice(0, enEnd) : gen.slice(0, 120000);
scan('EN generated Fortnite leftovers', enSlice, [
	'supply-drop',
	'BR-critical',
	'full BR',
	'vehicles before',
	'Controllers',
	'Battle Pass',
	'RBattlEye',
	'soft aim, and .',
	'best-marathon-cheats',
	'marathon-esp-hack',
]);

// --- blog ---
const blogOriginal = readFileSync(BLOG_PATH, 'utf8');
let blog = blogOriginal;
const blogReps = [
	['V-Bucks', 'credits'],
	['Item Shop', 'in-game store'],
	['Battle Pass', 'patch cycle progression'],
	['FNCS', 'Marathon community event'],
	['Hammer AR', 'M4A1'],
	['mythics', 'meta guns'],
	['island codes', 'practice server runs maps'],
	['Creative 1v1s', 'aim training'],
	['creative 1v1s', 'aim training'],
	['Epic health', 'Bungie server status'],
	['Epic terms', 'Bungie terms'],
	["Epic's BattlEye", 'BattlEye'],
	['Epic patch', 'Marathon patch'],
	['EliteFN', 'a budget cheat shop'],
	['GhostWare', 'a slim cheat vendor'],
	['CheatVault', 'another cheat shop'],
	['/marathon-aimbot-hack/', '/marathon-aimbot/'],
	['/marathon-esp-hack/', '/marathon-esp/'],
	['/best-marathon-cheats/', '/'],
	['best marathon cheats', 'marathon cheats'],
	['hot drops', 'hot spawns'],
	['ranked grinders', 'session grinders'],
	['before Ranked', 'before a run'],
];
let blogFixCount = 0;
if (FIX) {
	for (const [a, b] of blogReps) {
		if (blog.includes(a)) {
			blog = blog.split(a).join(b);
			blogFixCount += 1;
		}
	}
	blog = applyIsleReplacements(blog);
	blog = applyTypoFixes(blog);
}
maybeWrite(BLOG_PATH, blog, blogOriginal);
if (FIX) console.log(`blog patterns fixed: ${blogFixCount} (+ Isle replacements)`);

// --- final scan ---
const blogHits = scanIsle('blog', blog);
const pagesHits = scanIsle('pages-en', pagesRaw);
const enHits = scanIsle('EN generated', enSlice);
const typoHits = [
	...scanTypos('pages-en', pagesRaw),
	...scanTypos('content.generated (all locales)', gen),
	...scanTypos('blog', blog),
];

const allHits = [...blogHits, ...pagesHits, ...enHits, ...typoHits];
if (allHits.length) {
	console.error(`\nFAIL: ${allHits.length} Isle/off-topic term(s) or typo(s) remain in published copy.`);
	if (!FIX) console.error('Run: node scripts/seo-verify-and-blog.mjs --fix');
	process.exit(1);
}

console.log('\nOK: no Isle leaks, typos, or banned off-topic patterns in blog / EN pages.');
