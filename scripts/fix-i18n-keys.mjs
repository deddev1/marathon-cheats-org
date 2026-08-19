#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Marathon Cheats', 'Marathon Cheats'],
	['marathon cheats', 'marathon cheats'],
	['Marathon Cheats', 'Marathon Cheats'],
	['Marathon', 'Marathon'],
	['Marathon', 'Marathon'],
	['Call of Duty', 'Marathon'],
	['Marathon PC', 'Marathon PC'],
	['for Marathon', 'for Marathon'],
	['Marathon ', 'Marathon '],
	['marathon ', 'marathon '],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye', 'BattlEye'],
	['BattlEye', 'BattlEye'],
	['operatorEsp', 'dinoEsp'],
	['extractFight', 'ambushFight'],
	['alMazrah', 'survivalIsland'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['loot run', 'loot run'],
	['extract', 'extract'],
	['marathoncheats.org', 'marathoncheats.org'],
	['Trucos Marathon', 'Trucos Marathon'],
	['Triches Marathon', 'Triches Marathon'],
	['Cheats Marathon', 'Cheats Marathon'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'battleye': {");
pagesEn = pagesEn.replace(/Marathon Marathon/g, 'Marathon');
pagesEn = pagesEn.replace(/for Marathon Marathon/g, 'for Marathon');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'battleye'/g, "'battleye'");
pagesI18n = pagesI18n.replace(/eac:/g, "'battleye':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
