#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'marathon cheats', espWallhack: 'marathon cheats wallhack', aimbotCombat: 'marathon cheats aimbot', packFight: 'marathon cheats', dinoEsp: 'marathon cheats esp', headerArt: 'marathon cheats aimbot', hacksPackage: 'marathon cheats radar', ambushFight: 'marathon cheats aimbot', battleRoyale: 'marathon cheats', survivalIsland: 'marathon cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', packFight: '[^']+', dinoEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', ambushFight: '[^']+', battleRoyale: '[^']+', survivalIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Marathon ESP player tags hack'", "imageAlt: 'marathon cheats esp'"],
	["imageAlt: 'Marathon ESP radar hack'", "imageAlt: 'marathon cheats radar'"],
	["imageAlt: 'Marathon Aimbot sniper kill'", "imageAlt: 'marathon cheats aimbot'"],
	["imageAlt: 'Marathon Aimbot skeleton targeting'", "imageAlt: 'marathon cheats aimbot'"],
	["imageAlt: 'marathon cheats ADS combat'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats setup PC activation'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats updates BattlEye maintenance'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats FAQ ESP aimbot'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats support license help'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'Undetected marathon cheats ESP wallhack'", "imageAlt: 'undetected marathon cheats'"],
	["imageAlt: 'marathon wallhack skeleton ESP'", "imageAlt: 'marathon cheats wallhack'"],
	["imageAlt: 'BattlEye bypass marathon ESP aimbot'", "imageAlt: 'marathon cheats eac'"],
	["imageAlt: 'marathon cheats 2026 ESP aimbot'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats combat aimbot'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheat download ESP aimbot'", "imageAlt: 'marathon cheats download'"],
	["imageAlt: 'Marathon mod menu ESP aimbot'", "imageAlt: 'marathon cheats mod menu'"],
	["imageAlt: 'Marathon soft aim aimbot settings'", "imageAlt: 'marathon cheats soft aim'"],
	["imageAlt: 'Best marathon cheats 2026 ESP'", "imageAlt: 'best marathon cheats'"],
	["imageAlt: 'Marathon Aimbot hack combat'", "imageAlt: 'marathon cheats aimbot'"],
	["imageAlt: 'Marathon ESP hack wallhack'", "imageAlt: 'marathon cheats esp'"],
	["imageAlt: 'Marathon unlock all species ESP aimbot guide'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats privacy policy'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats refund policy'", "imageAlt: 'marathon cheats'"],
	["imageAlt: 'marathon cheats terms of use'", "imageAlt: 'marathon cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Marathon ${meta.altKeyword}`")
	.join("imageAlt: 'marathon cheats'")
	.split("galleryTitle: `Marathon Cheats ${topicName}`")
	.join("galleryTitle: 'marathon cheats'")
	.split("imageAlt: `marathon cheats ${kind} policy`")
	.join("imageAlt: 'marathon cheats'")
	.split("galleryTitle: `Marathon Cheats ${kind} resources`")
	.join("galleryTitle: 'marathon cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
