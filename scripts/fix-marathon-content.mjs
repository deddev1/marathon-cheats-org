#!/usr/bin/env node
/**
 * Second-pass cleanup: fix broken partial replacements after adapt-marathon.mjs
 * Run: node scripts/fix-marathon-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	// Broken slugs / URLs
	['marathon-growth-run-aggressive-strategies', 'marathon-growth-run-aggressive-strategies'],
	['marathon-growth-run-meta', 'marathon-growth-run-meta'],
	['marathon-loot run', 'marathon-growth-run'],
	['escape from marathon', 'marathon'],
	['escape-from-marathon', 'the-marathon'],
	['escape from marathon', 'marathon'],
	['escape-from-the-marathon', 'the-marathon'],
	['eft cheats', 'marathon cheats'],
	['eft hacks', 'marathon cheats'],
	['eft esp', 'marathon esp'],
	['eft undetected', 'marathon undetected'],
	['budget eft', 'budget marathon'],
	['EFT Cheat', 'Isle Hack'],
	['EFT cheat', 'marathon cheat'],
	['EFT shops', 'marathon cheat shops'],
	['EFT Shop', 'Isle Hack Shop'],
	['EFT ', 'Isle '],
	[' eft', ' marathon'],
	['"eft', '"marathon'],
	['eft"', 'marathon"'],

	// Tarkov maps → Isle locations
	['Streets of Marathon', 'Tau Ceti IV river zones'],
	['Interchange', 'Gateway'],
	['Factory', 'high-traffic zones'],
	['Woods, and Interchange', 'forests, and river zones'],
	['Woods and Interchange', 'forests and river zones'],
	['in outpost zones or in dark Gateway hallways', 'in outpost zones or near river banks'],
	['in outpost zones or dark Gateway interiors', 'in outpost zones or dense river cover'],

	// Tarkov mechanics → Isle mechanics
	['PMC loadouts', 'dinosaur builds'],
	['PMC loadout', 'dinosaur build'],
	['PMC and Scav', 'rival runners and UESC patrols'],
	['PMC and loot runs', 'rival runners and UESC patrols'],
	['PMC fights', 'player pushs'],
	['PMC fight', 'player push'],
	['PMC queues', 'survival queues'],
	['PMC queue', 'survival queue'],
	['PMC block', 'session block'],
	['PMC kit', 'grown dinosaur'],
	['PMC kits', 'grown dinosaurs'],
	['PMC Raid', 'Survival Session'],
	['PMC Raids', 'Survival Sessions'],
	['PMC raid', 'survival run'],
	['PMC raids', 'survival runs'],
	['PMC ', 'player '],
	[' PMC', ' player'],
	['PMCs', 'players'],
	['PMC', 'player'],
	['Scav Runs', 'Growth Runs'],
	['Scav Run', 'Growth Run'],
	['Scav runs', 'loot runs'],
	['Scav run', 'loot run'],
	['Scav strategies', 'growth strategies'],
	['Scav player', 'juvenile player'],
	['Scav players', 'juvenile players'],
	['Scav kits', 'juvenile builds'],
	['Scav kit', 'juvenile build'],
	['Scav aggression', 'growth aggression'],
	['Scav strategies', 'growth strategies'],
	['Scav AI', 'AI dinosaur'],
	['Scav ', 'juvenile '],
	[' Scav', ' juvenile'],
	['Scavs', 'juveniles'],
	['Scav', 'juvenile'],
	['scav fights', 'pack fights'],
	['scav fight', 'pack fight'],
	['scav AI', 'AI dinosaur'],
	['scav strategies', 'growth strategies'],
	['scav run', 'loot run'],
	['scav runs', 'loot runs'],

	// Weapons / loadout terms
	['weapon tier list', 'dinosaur tier list'],
	['Weapon Tier List', 'Dinosaur Tier List'],
	['weapon tier', 'dinosaur tier'],
	['Best Guns for Raids', 'Best Dinosaurs for Survival'],
	['What Wins Raids', 'What Wins Sessions'],
	['ARs, SMGs, long-ranges', 'carnivores, ambush builds, long-range species'],
	['AR fights', 'mid-size pushs'],
	['SMG pushes', 'ambush rushes'],
	['long-range AR fights', 'long-range ambush pushs'],
	['Per-weapon', 'Per-species'],
	['per-weapon', 'per-species'],
	['Ammo tables', 'Growth stat tables'],
	['ammo economy', 'growth economy'],
	['ammo that win', 'stats that win'],
	['armor pen', 'damage output'],
	['armor classes', 'growth tiers'],
	['class-five plates', 'adult carnivores'],
	['M4 looks boring', 'mid-tier species looks boring'],
	['m4a1 marathon', 'rex marathon'],
	['Flea Market', 'in-game store'],
	['flea market', 'in-game store'],
	['flea money', 'in-game currency'],
	['roubles', 'growth points'],
	['growth stat tables', 'growth stat tables'],
	['stash', 'progress'],
	['meds', 'stamina recovery'],
	['healing items', 'stamina recovery'],
	['magazine reloads', 'ability cooldowns'],
	['mag ', 'ability '],
	['recoil', 'attack timing'],
	['TTK', 'kill speed'],
	['time-to-kill', 'kill speed'],
	['shooting range', 'practice server'],
	['offline mode', 'practice server'],
	['offline bots', 'AI dinosaurs'],
	['offline practice', 'practice server runs'],
	['peek practice', 'ambush practice'],
	['head height', 'bite height'],
	['sensitivity', 'aim smoothing'],
	['footsteps', 'dinosaur calls'],
	['Operators', 'species'],
	['loadout drops', 'high-value loot'],
	['loadout spine', 'growth path'],
	['loadout comparison', 'species comparison'],
	['Battle Royale', 'survival'],
	['battle-royale', 'survival-game'],
	['unlock all', 'unlock all species'],

	// Misc game terms
	['boss spawn rates', 'apex spawn rates'],
	['Boss and Scav filters', 'Apex and juvenile filters'],
	['Boss and extract', 'Apex and nest'],
	['boss markers', 'apex markers'],
	['boss and player', 'apex and player'],
	['container highlights', 'carcass highlights'],
	['containers', 'carcasses'],
	['container', 'carcass'],
	['Corpse and container', 'Corpse and carcass'],
	['Player gear', 'Player loadout tier'],
	['third-party', 'third-player'],
	['third-parties', 'third-players'],
	['squad fights', 'pack fights'],
	['squad fight', 'pack fight'],
	['squad drops', 'pack spawns'],
	['squad', 'pack'],
	['duos', 'pairs'],
	['competitive lobbies', 'official servers'],
	['competitive', 'official server'],
	['tournament', 'community event'],
	['VOD', 'stream replay'],
	['spawn rich', 'spawn with growth advantage'],
	['spawn plans', 'nest plans'],
	['drop in a juvenile', 'spawn as a juvenile'],
	['queue anyway', 'drop in anyway'],
	['queueing', 'spawning in'],
	['queue', 'drop in'],
	['an Marathon', 'a Marathon'],
	['what-are-marathon-cheats', 'what-are-marathon-cheats'],
	['are-marathon-cheats-undetected', 'are-marathon-hacks-undetected'],
	['what-is-a-marathon-wallhack', 'what-is-an-marathon-wallhack'],
	['pmc-sessions-and-loot runs', 'pvp-and-pve-extraction-runs'],
	['PMC Raid and Scav Support', 'Herbivore and Carnivore Support'],
	['vanlifeeft', 'vanlifemarathon'],
	['vanLifeMarathon', 'vanLifeMarathon'],
	['BattlEye Anti-Cheat', 'BattlEye'],
	['BattlEye bypass maintenance guide', 'BattlEye maintenance guide'],
	['BattlEye updates', 'BattlEye updates'],
	['update cycled', 'patched'],
	['update cycle update', 'major update'],
	['update cycle', 'patch cycle'],
	['loot run-aggressive', 'growth-run-aggressive'],
	['loot run strategies', 'growth-run strategies'],
	['loot run player', 'growth-run player'],
	['loot run,', 'loot run,'],
	['loot run.', 'loot run.'],
	['loot run ', 'loot run '],
	['loot runs', 'loot runs'],
	['loot run', 'loot run'],
	['loot filters', 'carcass filters'],
	['loot pins', 'carcass pins'],
	['loot is worth looting', 'carcasses are worth pushing'],
	['loot ESP', 'loot ESP'],
	['loot routes', 'loot routes'],
	['loot worth', 'carcass worth'],
	[' loot', ' carcasses'],
	['Loot and', 'Carcass and'],
	['loot and', 'carcass and'],
	['enemy players and loot', 'enemy players and carcasses'],
	['spotting loot', 'spotting carcasses'],
	['Print Loot', 'Find Carcasses'],
	['empty pockets', 'low growth'],
	['gear instead', 'growth instead'],
	['Leave With Gear', 'Leave With Growth'],
	['gear appearance', 'skin appearance'],
	['apparel', 'skins'],
	['cosmetic shop', 'in-game cosmetics'],
	['skin leaks', 'skin previews'],
	['Skin Leaks', 'Skin Previews'],
	['patch notes change player loadouts', 'patch notes change dinosaur stats'],
	['Raids in 2026', 'Sessions in 2026'],
	['for Raids', 'for Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['before you drop in a juvenile', 'before you spawn as a juvenile'],
	['Isle cheats pillar', 'Marathon Cheats pillar'],
	['marathon cheats pillar', 'Marathon Cheats pillar'],
	['"marathon cheats"', '"marathon cheats"'],
	['"escape from marathon cheats"', '"marathon cheats"'],
	['Isle cheats package', 'Marathon Cheats package'],
	['marathon cheats package', 'Marathon Cheats package'],
	['undetected marathon cheats', 'undetected marathon cheats'],
	['Isle cheats', 'Marathon Cheats'],
	['marathon cheats', 'marathon cheats'],
	['Isle cheat', 'Marathon cheat'],
	['marathon cheat', 'marathon cheat'],
	['Marathon Intel', 'Marathon Intel'],
	['Isle esp', 'Marathon ESP'],
	['marathon esp', 'Marathon ESP'],
	['Isle aimbot', 'Marathon Aimbot'],
	['marathon aimbot', 'Marathon Aimbot'],
	['Isle wallhack', 'Isle wallhack'],
	['Isle radar', 'Isle radar'],
	['Isle Hacks vs Typical Budget EFT', 'Marathon Cheats vs Typical Budget Isle'],
	['Budget EFT Cheat Shops', 'Budget Isle Hack Shops'],
	['Budget EFT', 'Budget Isle'],
	['against budget EFT', 'against budget marathon'],
	['EFT Cheat Shops', 'Isle Hack Shops'],
	['scavRunCombat', 'growthRunCombat'],
	['scavRunMode', 'growthRunMode'],
	['battleRoyaleCombat', 'survivalCombat'],
	['battleRoyaleIsland', 'survivalIsland'],
	['rebootFight', 'ambushFight'],
	['squadFight', 'packFight'],
	['loadoutBuilder', 'nestBuilder'],
	['cheatsCombat', 'hacksCombat'],
	['cheatsPackage', 'hacksPackage'],
	['headerArt', 'headerArt'],
	['playerEsp', 'dinoEsp'],
	['aimbotCombat', 'aimbotCombat'],
	['espWallhack', 'espWallhack'],
	['heroImage', 'heroImage'],
	['Undetected EFT cheats for PC.', 'Undetected Marathon Cheats for PC.'],
	['besttarkovcheats.com', 'marathoncheats.org'],
	['www.besttarkovcheats.com', 'www.marathoncheats.org'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-marathon.mjs', 'fix-marathon-content.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
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

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const base = path.join(ROOT, dir);
		const files = await walk(base);
		for (const file of files) {
			if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
			if (SKIP_FILES.has(path.basename(file))) continue;
			const original = await readFile(file, 'utf8');
			const updated = applyReplacements(original);
			if (updated !== original) {
				await writeFile(file, updated, 'utf8');
				changed++;
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
