#!/usr/bin/env node
/**
 * One-time migration: The Isle Hacks → Marathon Cheats.
 * Domain: marathoncheats.org
 * Run from project root: node scripts/adapt-marathon.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['isle-aimbot', 'marathon-aimbot'],
	['isle-esp', 'marathon-esp'],
	['isle-wallhack', 'marathon-wallhack'],
	['isle-radar-hack', 'marathon-radar-hack'],
	['undetected-isle-hacks', 'undetected-marathon-cheats'],
	['isle-hacks-2026', 'marathon-cheats-2026'],
	['eac-bypass', 'battleye-bypass'],
	['isle-hack-download', 'marathon-cheat-download'],
	['isle-mod-menu', 'marathon-mod-menu'],
	['isle-soft-aim', 'marathon-soft-aim'],
	['best-isle-hacks', 'best-marathon-cheats'],
	['isle-aimbot-hack', 'marathon-aimbot-hack'],
	['isle-esp-hack', 'marathon-esp-hack'],
	['isle-unlock-all', 'marathon-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.theislehacks.org', 'https://www.marathoncheats.org'],
	['https://theislehacks.org', 'https://marathoncheats.org'],
	['www.theislehacks.org', 'www.marathoncheats.org'],
	['theislehacks.org', 'marathoncheats.org'],
	['support@theislehacks.org', 'support@marathoncheats.org'],
	['theislehack.org', 'marathoncheat.org'],
	['www.theislehack.org', 'www.marathoncheat.org'],
	['bestislecheats.com', 'bestmarathoncheats.com'],
	['www.bestislecheats.com', 'www.bestmarathoncheats.com'],
	['https://store.steampowered.com/app/376210/The_Isle/', 'https://store.steampowered.com/app/3065800/Marathon/'],
	['store.steampowered.com/app/376210/The_Isle', 'store.steampowered.com/app/3065800/Marathon'],
	['https://www.easy.ac/', 'https://www.battleye.com/'],
	['www.easy.ac', 'www.battleye.com'],
	['/products/the-isle-novaxware', '/products/marathon-novaxware'],
	['/products/the-isle', '/products/marathon'],
	['project-name=theislehacks', 'project-name=marathoncheats'],
	['name = "theislehacks"', 'name = "marathoncheats"'],
	['"name": "the-isle-hacks"', '"name": "marathon-cheats"'],
	['the-isle-hacks-.org', 'marathon-cheats-org'],
	['the-isle-hacks--org', 'marathon-cheats-org'],
	['isle-esp-player-tags', 'marathon-esp-player-tags'],
	['isle-wallhack-skeleton', 'marathon-wallhack-skeleton'],
	['isle-aimbot-skeleton', 'marathon-aimbot-skeleton'],
	['isle-aimbot-sniper', 'marathon-aimbot-sniper'],
	['isle-esp-radar', 'marathon-esp-radar'],
	['isle-hacks-combat', 'marathon-cheats-combat'],
	['isle-hacks-wallhack', 'marathon-cheats-wallhack'],
	['isle-hacks-aimbot-view', 'marathon-cheats-aimbot-view'],
	['isle-hacks-aimbot', 'marathon-cheats-aimbot'],
	['isle-hacks-radar', 'marathon-cheats-radar'],
	['isle-hacks-hero', 'marathon-cheats-hero'],
	['isle-hacks-logo', 'marathon-cheats-logo'],
	['isle-hacks-session', 'marathon-cheats-run'],
	['isle-hacks-esp', 'marathon-cheats-esp'],
	['isle-hero-banner', 'marathon-hero-banner'],
	['isle-hero-ghost', 'marathon-hero-ghost'],
	['isle-hero-source', 'marathon-hero-source'],
	['undetected-isle-hacks', 'undetected-marathon-cheats'],
	['best-isle-hacks', 'best-marathon-cheats'],
	['isle-hack-download', 'marathon-cheat-download'],
	['isle-hacks-2026', 'marathon-cheats-2026'],
	['isle-radar-hack', 'marathon-radar-hack'],
	['isle-aimbot-hack', 'marathon-aimbot-hack'],
	['isle-esp-hack', 'marathon-esp-hack'],
	['isle-unlock-all', 'marathon-unlock-all'],
	['isle-soft-aim', 'marathon-soft-aim'],
	['isle-mod-menu', 'marathon-mod-menu'],
	['isle-wallhack', 'marathon-wallhack'],
	['the-isle-hacks', 'marathon-cheats'],
	['/isle-hacks/', '/marathon-cheats/'],
	['isle-aimbot', 'marathon-aimbot'],
	['isle-esp', 'marathon-esp'],
	['eac-bypass', 'battleye-bypass'],
	["'eac'", "'battleye'"],
	['"eac"', '"battleye"'],
	['pageId="eac"', 'pageId="battleye"'],
	["pageId: 'eac'", "pageId: 'battleye'"],
	['| eac', '| battleye'],
	['isleImages', 'marathonImages'],
	["from './isle'", "from './marathon'"],
	["from '../data/isle'", "from '../data/marathon'"],
	["from '../../data/isle'", "from '../../data/marathon'"],
	['fetch-isle-images', 'fetch-marathon-images'],
	['fetch-isle-hero', 'fetch-marathon-hero'],
	['import-isle-screenshots', 'import-marathon-screenshots'],
	['isle-hack-overlays', 'marathon-cheat-overlays'],
	['fix-isle-copy', 'fix-marathon-copy'],
	['fix-isle-content', 'fix-marathon-content'],
	['adapt-theisle', 'adapt-marathon'],
	['isle-screenshot', 'marathon-screenshot'],
	['Isla Spire, forests, and river zones', 'Tau Ceti IV, outposts, and extraction zones'],
	['Isla Spire, forests and river zones', 'Tau Ceti IV, outposts and extraction zones'],
	['herbivore and carnivore survival sessions', 'PvP and PvE extraction runs'],
	['herbivore and carnivore survival session', 'PvP and PvE extraction run'],
	['herbivore & carnivore', 'PvP & PvE'],
	['herbivore and carnivore', 'rival runners and UESC patrols'],
	['PMCs and Scavs', 'runners and enemy forces'],
	['players and wild dinosaurs', 'runners and UESC forces'],
	['wild dinosaurs', 'enemy forces'],
	['nest and carcass markers', 'loot and exfil markers'],
	['nest markers', 'exfil markers'],
	['nest cues', 'exfil cues'],
	['nest zones', 'exfil zones'],
	['nest fights', 'exfil fights'],
	['nest fight', 'exfil fight'],
	['near nests and water', 'near exfil and loot zones'],
	['Nests', 'Exfil zones'],
	['nests', 'exfils'],
	['growth timer', 'exfil timer'],
	['fresh carcasses', 'high-value loot'],
	['hunting routes', 'loot routes'],
	['carcass markers', 'loot markers'],
	['carcass ESP', 'loot ESP'],
	['Carcass and water ESP', 'Loot and container ESP'],
	['carcasses worth the detour', 'loot worth the detour'],
	['spawn rules', 'loot spawn rules'],
	['growth tools', 'loot tools'],
	['The Isle team', 'Bungie'],
	['Easy Anti-Cheat maintenance', 'BattlEye maintenance'],
	['Easy Anti-Cheat bypass', 'BattlEye bypass'],
	['Easy Anti-Cheat Bypass', 'BattlEye Bypass'],
	['Easy Anti-Cheat patches', 'BattlEye patches'],
	['Easy Anti-Cheat patch', 'BattlEye patch'],
	['Easy Anti-Cheat updates', 'BattlEye updates'],
	['Easy Anti-Cheat update', 'BattlEye update'],
	['after Easy Anti-Cheat', 'after BattlEye'],
	['Easy Anti-Cheat rebuilds', 'BattlEye rebuilds'],
	['Easy Anti-Cheat security', 'BattlEye security'],
	['Easy Anti-Cheat guide', 'BattlEye guide'],
	['undetected Easy Anti-Cheat notes', 'undetected BattlEye notes'],
	['Easy Anti-Cheat', 'BattlEye'],
	['last major update', 'last major patch'],
	['this update cycle', 'this wipe cycle'],
	['Isla Spire', 'Tau Ceti IV'],
	['in forest zones', 'in outpost zones'],
	['in high-traffic zones', 'in contested zones'],
	['hunt', 'push'],
	['hunts', 'pushes'],
	['survival flow', 'raid flow'],
	['session rounds', 'run rounds'],
	['survival tips', 'extraction tips'],
	['island map', 'Tau Ceti IV maps'],
	['spawn in faster', 'drop in faster'],
	['before you spawn in', 'before you drop in'],
	['you spawn in', 'you drop in'],
	['spawn in', 'drop in'],
	[' a session', ' a run'],
	[' sessions', ' runs'],
	[' session', ' run'],
	['survival sessions', 'extraction runs'],
	['survival session', 'extraction run'],
	['The Isle on Steam', 'Marathon on Steam'],
	['IsleHacksSite', 'MarathonCheatsSite'],
	['Isle Intel', 'Marathon Intel'],
	['The Isle Hacks', 'Marathon Cheats'],
	['the isle hacks', 'marathon cheats'],
	['The Isle cheats', 'Marathon cheats'],
	['the isle cheats', 'marathon cheats'],
	['isle cheats', 'marathon cheats'],
	['isle evrima', 'marathon extraction'],
	['The Isle cheat', 'Marathon cheat'],
	['the isle cheat', 'marathon cheat'],
	['The Isle hack', 'Marathon cheat'],
	['the isle hack', 'marathon cheat'],
	['isle hack', 'marathon cheat'],
	['Isle ESP', 'Marathon ESP'],
	['Isle Aimbot', 'Marathon Aimbot'],
	['isle esp', 'marathon esp'],
	['isle aimbot', 'marathon aimbot'],
	['isle wallhack', 'marathon wallhack'],
	['isle radar', 'marathon radar'],
	['undetected isle hacks', 'undetected marathon cheats'],
	['best isle hacks', 'best marathon cheats'],
	['Buy The Isle Hacks', 'Buy Marathon Cheats'],
	['EXT.isle', 'EXT.marathon'],
	['KW.eac', 'KW.battleye'],
	['what-are-isle-hacks', 'what-are-marathon-cheats'],
	['are-isle-hacks-undetected-in-2026', 'are-marathon-cheats-undetected-in-2026'],
	['herbivore-and-carnivore-sessions', 'pvp-and-pve-extraction-runs'],
	['what-is-an-isle-wallhack', 'what-is-a-marathon-wallhack'],
	['does-isle-hacks-include-radar-hack', 'does-marathon-cheats-include-radar-hack'],
	['eac-anti-cheat-and-isle-hacks', 'battleye-anti-cheat-and-marathon-cheats'],
	['buy-undetected-isle-hacks-windows-pc', 'buy-undetected-marathon-cheats-windows-pc'],
	['isle-soft-aim-review', 'marathon-soft-aim-review'],
	['isle-esp-growth-run-review', 'marathon-esp-loot-run-review'],
	['isle-cloud-dma-review', 'marathon-cloud-dma-review'],
	['isle-hack-setup-review', 'marathon-cheat-setup-review'],
	['isle-carcass-esp-review', 'marathon-loot-esp-review'],
	['isle-soft-aim-session-review', 'marathon-soft-aim-run-review'],
	['isle-radar-hack-review', 'marathon-radar-hack-review'],
	['isle-eac-update-review', 'marathon-battleye-update-review'],
	['isle-sniper-soft-aim-review', 'marathon-sniper-soft-aim-review'],
	['xKrypt0_Isle', 'xKrypt0_Marathon'],
	['vanLifeIsle', 'vanLifeMarathon'],
	['trucos-isla', 'trucos-marathon'],
	['triche-isla', 'triche-marathon'],
	['cheats-isla', 'cheats-marathon'],
	['trucchi-isla', 'trucchi-marathon'],
	['cheaty-isla', 'cheaty-marathon'],
	['chity-isla', 'chity-marathon'],
	['chitov-isla', 'chitov-marathon'],
	['chitiv-isla', 'chitiv-marathon'],
	['cheatow-isla', 'cheatow-marathon'],
	['hile-isla', 'hile-marathon'],
	['isle-hile', 'marathon-hile'],
	['isle-esp-chity', 'marathon-esp-chity'],
	['isle-aimbot-chity', 'marathon-aimbot-chity'],
	['unentdeckte-isle-hacks', 'unentdeckte-marathon-cheats'],
	['cheats-isla-indetectaveis', 'cheats-marathon-indetectaveis'],
	['trucchi-isla-indetectabili', 'trucchi-marathon-indetectabili'],
	['niewykrywalne-cheats-isla', 'niewykrywalne-cheats-marathon'],
	['nedecektiruemye-chity-isla', 'nedecektiruemye-chity-marathon'],
	['tespit-edilemeyen-isle-hileleri', 'tespit-edilemeyen-marathon-hileleri'],
	['nedecektovani-chity-isla', 'nedecektovani-chity-marathon'],
	['cheats-isla-nedetectabile', 'cheats-marathon-nedetectabile'],
	['basta-isle-hacks', 'basta-marathon-cheats'],
	['isle-hacks-funktionen', 'marathon-cheats-funktionen'],
	['isle-hacks-functies', 'marathon-cheats-functies'],
	['caracteristicas-trucos-isla', 'caracteristicas-trucos-marathon'],
	['fonctionnalites-triche-isla', 'fonctionnalites-triche-marathon'],
	['recursos-cheats-isla', 'recursos-cheats-marathon'],
	['dinosaur survival', 'extraction shooter'],
	['growth runs', 'loot runs'],
	['growth run', 'loot run'],
	['growth stage', 'loadout tier'],
	['Per-species profiles', 'Per-weapon profiles'],
	['Herbivore and carnivore ESP / wallhack', 'Runner and UESC ESP / wallhack'],
	['Corpse and carcass highlights', 'Container and loot highlights'],
	['Works in herbivore and carnivore survival sessions', 'Works in PvP and PvE extraction runs'],
	['The Isle', 'Marathon'],
	['the isle', 'marathon'],
	['isle', 'marathon'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-marathon.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataTs() {
	const from = path.join(ROOT, 'src', 'data', 'isle.ts');
	const to = path.join(ROOT, 'src', 'data', 'marathon.ts');
	try {
		await rename(from, to);
		console.log('Renamed isle.ts → marathon.ts');
	} catch (e) {
		console.warn(`isle.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-isle-images.mjs', 'fetch-marathon-images.mjs'],
		['fetch-isle-hero.mjs', 'fetch-marathon-hero.mjs'],
		['import-isle-screenshots.mjs', 'import-marathon-screenshots.mjs'],
		['isle-hack-overlays.mjs', 'marathon-cheat-overlays.mjs'],
		['fix-isle-copy.mjs', 'fix-marathon-copy.mjs'],
		['fix-isle-content.mjs', 'fix-marathon-content.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'marathon-aimbot': 'marathon-aimbot',
		'marathon-esp': 'marathon-esp',
		'marathon-wallhack': 'wallhack',
		'marathon-radar-hack': 'radar',
		'undetected-marathon-cheats': 'undetected',
		'marathon-cheats-2026': 'cheats-2026',
		'battleye-bypass': 'battleye',
		'marathon-cheat-download': 'cheat-download',
		'marathon-mod-menu': 'mod-menu',
		'marathon-soft-aim': 'soft-aim',
		'best-marathon-cheats': 'best-cheats',
		'marathon-aimbot-hack': 'aimbot-hack',
		'marathon-esp-hack': 'esp-hack',
		'marathon-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function createMarathonCheatsPage() {
	const dir = path.join(ROOT, 'src', 'pages', 'marathon-cheats');
	const file = path.join(dir, 'index.astro');
	try {
		await writeFile(
			file,
			`---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="hacks" />
`,
			'utf8',
		);
		console.log('Created marathon-cheats page');
	} catch (e) {
		console.warn(`marathon-cheats page: ${e.message}`);
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('isle')) continue;
		const newName = file
			.replace(/isle-hacks/g, 'marathon-cheats')
			.replace(/isle/g, 'marathon');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting The Isle Hacks → Marathon Cheats (marathoncheats.org)...\n');
	await renamePageDirs();
	await renameDataTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await createMarathonCheatsPage();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, sync:brand, generate:i18n, generate blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
