/** Shared Isle/The Isle leak detection and Marathon Cheats replacements. */

/** Regex patterns that must not appear in published blog or EN page copy. */
export const ISLE_BANNED = [
	/\bdinosaur(s)?\b/i,
	/\bjuvenile(s)?\b/i,
	/\bnest(s)?\b/i,
	/\bspecies\b/i,
	/\bcarnivore(s)?\b/i,
	/\bapex spawn\b/i,
	/\bgrowth tier(s)?\b/i,
	/\bgrown dinosaur\b/i,
	/\bCarcass ESP\b/i,
	/\bNest cues\b/i,
	/\bper-species\b/i,
	/\bbite (damage|height)\b/i,
	/\bAI dinosaur\b/i,
	/\bmarathon-dinosaur-tier-list\b/i,
	/\bmarathon-growth-run-aggressive-strategies\b/i,
	/\bundetected-marathon-cheats-eac\b/i,
	/\bEAC maintenance\b/i,
	/\beac patch\b/i,
	/\beac 2026\b/i,
	/\beac marathon\b/i,
	/\b\bEAC\b/,
];

/** Ordered replacements — longer / URL-specific patterns first. */
export const ISLE_REPLACEMENTS = [
	['/blog/marathon-dinosaur-tier-list/', '/blog/marathon-loadout-tier-list/'],
	['/blog/marathon-growth-run-aggressive-strategies/', '/blog/marathon-extraction-run-strategies/'],
	['/blog/undetected-marathon-cheats-eac/', '/blog/undetected-marathon-cheats-battleye/'],
	['marathon-dinosaur-tier-list', 'marathon-loadout-tier-list'],
	['marathon-growth-run-aggressive-strategies', 'marathon-extraction-run-strategies'],
	['undetected-marathon-cheats-eac', 'undetected-marathon-cheats-battleye'],
	['Marathon Dinosaur Tier List', 'Marathon Loadout Tier List'],
	['Marathon dinosaur tier list', 'Marathon loadout tier list'],
	['dinosaur tier list', 'loadout tier list'],
	['dinosaur tiers', 'loadout tiers'],
	['dinosaur build', 'loadout build'],
	['meta dinosaurs', 'meta loadouts'],
	['best marathon dinosaurs', 'best marathon loadouts'],
	['marathon meta dinosaurs', 'marathon meta loadouts'],
	['marathon dinosaur tier list', 'marathon loadout tier list'],
	['Marathon Growth Run Strategies', 'Marathon Extraction Run Strategies'],
	['Marathon Growth Run Strategies That Actually Find Carcasses', 'Marathon Extraction Run Strategies That Actually Pay Off'],
	['growth-run strategies', 'extraction-run strategies'],
	['growth aggression guide', 'extraction aggression guide'],
	['growth aggression', 'extraction aggression'],
	['growth strategies article', 'extraction strategies article'],
	['growth strategies', 'extraction strategies'],
	['growth advantage', 'kit advantage'],
	['growth panic', 'loot panic'],
	['growth path', 'loot route'],
	['growth goals', 'credit goals'],
	['growth economy', 'loot economy'],
	['growth stats', 'weapon stats'],
	['Growth Runs', 'Extraction Runs'],
	['growth run', 'extraction run'],
	['Growth run', 'Extraction run'],
	['marathon juvenile', 'marathon extraction'],
	['Juvenile timing', 'Early-run timing'],
	['spawn as a juvenile', 'queue your first run'],
	['Passive juvenile players', 'Passive early-run players'],
	['juvenile builds', 'starter kits'],
	['focused juvenile', 'focused practice'],
	['quiet juvenile', 'quiet practice lobby'],
	['Carcass ESP', 'Loot ESP'],
	['Nest cues', 'Exfil cues'],
	['nest awareness', 'exfil awareness'],
	['nest campers', 'exfil campers'],
	['nest camping', 'exfil camping'],
	['nest camping patterns', 'exfil hold patterns'],
	['nest plans', 'exfil plans'],
	['nest plan', 'exfil plan'],
	['nest route', 'exfil route'],
	['nest timing', 'exfil timing'],
	['holding a nest', 'holding an exfil'],
	['who holds nest', 'who holds exfil'],
	['nest calls', 'exfil callouts'],
	['nest safety', 'exfil safety'],
	['and nest before', 'and extract before'],
	['per-species profiles', 'per-weapon profiles'],
	['species profiles', 'weapon profiles'],
	['species choice', 'loadout choice'],
	['main species', 'main loadout'],
	['species unlocks', 'loadout unlocks'],
	['mid-tier species', 'mid-tier weapons'],
	['long-range species', 'long-range weapons'],
	['adult carnivores', 'contested loadouts'],
	['mid-tier carnivore', 'reliable primary'],
	['mid-tier carnivores', 'reliable primaries'],
	['reliable mid-tier carnivore', 'reliable primary weapon'],
	['carnivore, ambush', 'SMG, DMR'],
	['carnivores, ambush', 'SMG, DMR'],
	['carnivore, ambush, and long-range', 'SMG, DMR, and long-range'],
	['Save carnivore, ambush, and long-range profiles', 'Save SMG, DMR, and long-range profiles'],
	['grown dinosaur', 'expensive kit'],
	['grown dinosaurs', 'expensive kits'],
	['AI dinosaur shuffle', 'AI patrol shuffle'],
	['AI dinosaurs', 'AI patrols'],
	['practice server with AI dinosaurs', 'firing range with moving targets'],
	['pre-aim bite height', 'pre-aim head level'],
	['bite damage', 'damage'],
	['attack timing', 'recoil control'],
	['apex spawn rates', 'hot spawn rates'],
	['apex spawn changes', 'hot spawn changes'],
	['an growth tier', 'a backup loadout'],
	['growth tier', 'loadout tier'],
	['EAC maintenance', 'BattlEye maintenance'],
	['eac patch', 'battleye patch'],
	['eac 2026', 'battleye 2026'],
	['eac marathon', 'battleye marathon'],
	['eac updates', 'battleye updates'],
	['${EXT.battleye}', '${EXT.battleye}'], // no-op anchor
];

export function applyIsleReplacements(text) {
	let out = text;
	for (const [from, to] of ISLE_REPLACEMENTS) {
		if (out.includes(from)) out = out.split(from).join(to);
	}
	return out;
}

export function findIsleLeaks(text, label = 'content') {
	const hits = [];
	for (const re of ISLE_BANNED) {
		const m = text.match(re);
		if (m) hits.push({ label, pattern: re.source, match: m[0] });
	}
	return hits;
}
