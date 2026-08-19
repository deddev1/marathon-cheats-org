#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefrommarathon.com)
	['published by ${EXT.activision}', 'published by Bungie (${EXT.marathon})'],
	['from ${EXT.activision}', 'from ${EXT.marathon}'],
	['via ${EXT.activision}', 'via ${EXT.marathon}'],
	['belong with ${EXT.activision}', 'belong with Bungie'],
	['${EXT.activision} terms', 'Bungie terms'],
	['${EXT.activision} season updates', '${EXT.marathon} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Marathon
	['vehicles, carcasses', 'players, enemy forces, carcasses'],
	['notice vehicles before they push your position', 'spot runners and UESC forces before they push your angle'],
	['Player, boss, and carcasses', 'Player, apex, and carcass'],
	['boss and extract awareness cues', 'apex and nest awareness cues'],
	['boss threat cues', 'apex threat cues'],
	['bosses, and carcasses', 'apex dinosaurs, and carcasses'],
	['track apex dinosaurs and carcasses', 'track apex dinosaurs and carcasses'],
	['ARs, SMGs, and long-ranges', 'carnivores, ambush builds, and long-range species'],
	['long-range DMR fights and dorms clears', 'long-range ambush pushs and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and long-ranges', 'Save separate Aimbot profiles for carnivores, ambush builds, and long-range species'],
	['building and rooftop fights', 'forest and river bank ambushes'],
	['weapons, and BattlEye', 'species balance, and BattlEye'],
	['major weapon updates', 'major species balance updates'],
	['boss threat cues, carcasses and loot markers', 'apex threat cues, carcass and water markers'],
	['carcasses, carcasses, and bosses', 'carcasses, water sources, and apex dinosaurs'],
	['weapons, camos, skins, or battle pass tiers', 'dinosaurs, skins, or growth tiers'],
	['instant access to weapons', 'instant access to dinosaurs'],
	['enemy packs, bosses, and high-value loot', 'enemy packs, apex dinosaurs, and high-value loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and carcasses or chest pins so only BR-critical',
		'apex markers, exfil cues, and carcass pins so only run-critical',
	],
	['Vehicle and supply-drop threat cues', 'Apex and nest awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'carcass and carcass pins'],
	['Carcass and chest markers', 'Carcass and loot markers'],
	['carcass and chest markers', 'carcass and loot markers'],
	['chests worth the detour', 'high-value loot worth the detour'],
	['vehicles, and chests', 'bosses, and carcasses'],
	['loot, vehicles, and chests', 'loot, bosses, and carcasses'],
	['players, carcasses, and vehicles', 'players, enemy forces, and carcasses'],
	['players, carcasses, vehicles', 'players, enemy forces, carcasses'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track apex dinosaurs and carcasses'],
	['full BR loop', 'full run loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'session-critical'],
	['endgame circles', 'exfil zones'],
	['final circles', 'late-session exfils'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first run'],
	['before ranked', 'before you drop in'],
	['reboot rounds', 'close-range pack fights'],
	['Battle Pass', 'patch cycle progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every run',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and long-ranges'],
	['AR / SMG / sniper', 'AR / SMG / long-range'],
	['players, carcasses, and vehicles', 'players, enemy forces, and carcasses'],
	['for players, carcasses, and vehicles', 'for players, carcasses, and exfils'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RBattlEye out for', 'Reach out for'],
	['an BattlEye', 'a BattlEye'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['marathon cheats & marathon cheats', 'marathon cheats'],
	[
		'covering both marathon cheats and marathon cheats search intent',
		'covering both “marathon cheats” and “marathon cheats” search intent',
	],
	[
		'also searched as marathon cheats and marathon cheat.',
		'built for Marathon on Windows PC.',
	],
	[
		'marathon cheats vs marathon cheats — same stack, clear pages',
		'How this Marathon Cheats pillar fits nearby pages',
	],
	[
		'Searchers use marathon cheats and marathon cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/marathon-esp-hack/', '/marathon-esp/'],
	['/marathon-aimbot-hack/', '/marathon-aimbot/'],
	['/best-marathon-cheats/', '/'],
	['best marathon cheats guide', 'Marathon Cheats pillar'],
	['best marathon cheats checklist', 'marathon cheats checklist'],
	['best marathon cheats', 'marathon cheats'],
	[
		'Prefer softer tracking? Read the <a href="/marathon-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/marathon-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/marathon-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/marathon-cheat-download/">cheat download</a>, <a href="/marathon-mod-menu/">mod menu</a>, <a href="/marathon-aimbot/">aimbot hack</a>, <a href="/marathon-esp/">ESP hack</a>.',
		'Related landings: <a href="/marathon-cheat-download/">cheat download</a>, <a href="/marathon-mod-menu/">mod menu</a>, <a href="/marathon-aimbot/">aimbot</a>, <a href="/marathon-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
