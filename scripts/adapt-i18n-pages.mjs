#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Marathon source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['marathon-esp', 'marathon-esp'],
	['marathon-aimbot', 'marathon-aimbot'],
	["'battleye'", "'battleye'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-marathon-cheats', 'undetected-marathon-cheats'],
	['marathon-wallhack', 'marathon-wallhack'],
	['marathon-radar-hack', 'marathon-radar-hack'],
	['marathon-cheats-2026', 'marathon-cheats-2026'],
	['marathon-cheats', 'marathon-cheats'],
	['the-marathon', 'marathon'],
	['Marathon', 'Marathon'],
	['Marathon', 'Marathon'],
	['Marathon Cheats', 'Marathon Cheats'],
	['marathon cheats', 'marathon cheats'],
	['marathon cheat', 'marathon cheat'],
	['Marathon ESP', 'The Marathon ESP'],
	['Marathon Aimbot', 'The Marathon Aimbot'],
	['marathon wallhack', 'Marathon wallhack'],
	['marathon radar', 'Marathon radar'],
	['Marathon pushs', 'Marathon pushs'],
	['Marathon combat', 'Marathon combat'],
	['Marathon patches', 'Marathon patches'],
	['Marathon updates', 'Marathon updates'],
	['Marathon setup', 'Marathon setup'],
	['Marathon license', 'Marathon license'],
	['Marathon licenses', 'Marathon licenses'],
	['Marathon runs', 'Marathon runs'],
	['in Marathon', 'in Marathon'],
	['for Marathon', 'for Marathon'],
	['Marathon on', 'Marathon on'],
	['Marathon or', 'Marathon or'],
	['Marathon\'s', 'Marathon\'s'],
	['Marathon ', 'Marathon '],
	['BattlEye', 'BattlEye'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye'],
	['battleye', 'battleye'],
	['support@marathoncheats.org', 'support@marathoncheats.org'],
	['Tau Ceti IV, outposts, and extraction zones', 'Tau Ceti IV, outposts, and extraction zones'],
	['Tau Ceti IV, outposts and extraction zones', 'Tau Ceti IV, outposts and extraction zones'],
	['exfil fights', 'exfil fights'],
	['exfil fight', 'exfil fight'],
	['run rounds', 'run rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['exfil timer', 'exfil timer'],
	['PvP and PvE extraction runs', 'PvP and PvE extraction runs'],
	['PvP and PvE extraction runs', 'PvP and PvE extraction runs'],
	['PvP & PvE', 'PvP & PvE'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Marathon combat pace'],
	['COD', 'Marathon'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Marathon Cheats',
	game: 'Marathon',
	checkout: 'Zadeyo',
	eac: 'BattlEye',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Tau Ceti IV, outposts, and extraction zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
