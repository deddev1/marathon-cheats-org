#!/usr/bin/env node
/**
 * Completes marathon-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'marathon-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'marathon-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'marathon-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'marathon-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-marathon-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'marathon-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'marathon-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'marathon-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/marathon-marathon/g, 'marathon'],
	[/battleye-bypass-marathon/g, 'battleye-bypass'],
	[/Marathon/g, 'Marathon'],
	[/Marathon/g, 'Marathon'],
	[/Call of Duty/g, 'Marathon'],
	[/Marathon Wallhack/g, 'Marathon Wallhack'],
	[/Marathon Radar Hack/g, 'Marathon Radar Hack'],
	[/Marathon Cheat Features/g, 'Marathon Cheat Features'],
	[/Marathon Cheat Pricing/g, 'Marathon Cheat Pricing'],
	[/Marathon Cheat Setup/g, 'Marathon Cheat Setup'],
	[/Marathon Cheat Status/g, 'Marathon Cheat Status'],
	[/Marathon Cheat Support/g, 'Marathon Cheat Support'],
	[/Marathon pack fight/g, 'Marathon pack fight'],
	[/Marathon pack builder/g, 'Marathon loadout builder'],
	[/Marathon store header/g, 'Marathon header'],
	[/Marathon wasteland combat/g, 'Marathon battle royale combat'],
	[/Marathon loadout builder/g, 'Marathon loadout builder'],
	[/Marathon pricing/g, 'Marathon pricing'],
	[/Marathon BattlEye/g, 'Marathon BattlEye'],
	[/on Marathon/g, 'on Marathon'],
	[/for Marathon/g, 'for Marathon'],
	[/Marathon guides/g, 'Marathon guides'],
	[/Marathon guide/g, 'Marathon guide'],
	[/Marathon hileleri/g, 'Marathon hileleri'],
	[/Marathon hile/g, 'Marathon hile'],
	[/Marathon hileleri/g, 'Marathon hileleri'],
	[/cheatów Marathon/g, 'cheatów Marathon'],
	[/cheat Marathon/g, 'cheat Marathon'],
	[/cheats Marathon/g, 'cheats Marathon'],
	[/trucos Marathon/g, 'trucos Marathon'],
	[/triche Marathon/g, 'triche Marathon'],
	[/trucchi Marathon/g, 'trucchi Marathon'],
	[/Wallhack Marathon/g, 'Marathon Wallhack'],
	[/cheat Marathon undetected/g, 'cheat Marathon undetected'],
	[/cheats Marathon undetected/g, 'cheats Marathon undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/loot run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and loot run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, loot run'],
	[/session and loot run/g, 'session and loot run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'battleye'],
	[/BattlEye/g, 'BattlEye'],
	[/marathon-cheats/g, 'marathon-cheats'],
	[/the-marathon/g, 'marathon'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Marathon'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Marathon anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Marathon Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Marathon guides/g, 'Marathon guides');
	content = content.replace(/Marathon guide/g, 'Marathon guide');
	content = content.replace(/Marathon hileleri/g, 'Marathon hileleri');
	content = content.replace(/Marathon hile/g, 'Marathon hile');
	content = content.replace(/cheat Marathon/g, 'cheat Marathon');
	content = content.replace(/cheats Marathon/g, 'cheats Marathon');
	content = content.replace(/trucos Marathon/g, 'trucos Marathon');
	content = content.replace(/triche Marathon/g, 'triche Marathon');
	content = content.replace(/trucchi Marathon/g, 'trucchi Marathon');
	content = content.replace(/cheatów Marathon/g, 'cheatów Marathon');
	content = content.replace(/читов Marathon/g, 'читов Marathon');
	content = content.replace(/читів Marathon/g, 'читів Marathon');
	content = content.replace(/Marathonチート/g, 'Marathonチート');
	content = content.replace(/Marathon 치트/g, 'Marathon 치트');
	content = content.replace(/Marathon作弊/g, 'Marathon作弊');
	content = content.replace(/Marathon rehberleri/g, 'Marathon rehberleri');
	content = content.replace(/Marathon gidsen/g, 'Marathon gidsen');
	content = content.replace(/Marathon průvodce/g, 'Marathon průvodce');
	content = content.replace(/Marathon guider/g, 'Marathon guider');
	content = content.replace(/Marathon related/g, 'Marathon related');
	content = content.replace(/Marathon ガイド/g, 'Marathon ガイド');
	content = content.replace(/Marathon 가이드/g, 'Marathon 가이드');
	content = content.replace(/Marathon指南/g, 'Marathon指南');
	content = content.replace(/Marathon गाइड/g, 'Marathon गाइड');
	content = content.replace(/Marathon panduan/g, 'Marathon panduan');
	content = content.replace(/Marathon คู่มือ/g, 'Marathon คู่มือ');
	content = content.replace(/Marathon hướng dẫn/g, 'Marathon hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Marathon Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
