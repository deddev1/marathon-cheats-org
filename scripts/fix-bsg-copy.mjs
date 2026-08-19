#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Bungie'"],
	['Activision\u2019', "Bungie'"],
	['Activision services', 'Bungie services'],
	['Activision service', 'Bungie service'],
	['Activision platform', 'Bungie platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Bungie bans'],
	['Activision security', 'BattlEye security'],
	['Activision Status', 'Marathon on Steam'],
	['Activision Marathon', 'Marathon'],
	['Activision Support', 'Marathon on Steam'],
	['Activision', 'Bungie'],
	['EAC guide', 'BattlEye guide'],
	['undetected EAC notes', 'undetected BattlEye notes'],
	['status.epicgames.com', 'store.steampowered.com/app/3065800/Marathon'],
	['www.epicgames.com/marathon', 'store.steampowered.com/app/3065800/Marathon'],
	['www.marathon.com/official server', 'store.steampowered.com/app/3065800/Marathon'],
	['https://www.marathon.com/', 'https://store.steampowered.com/app/3065800/Marathon/'],
	['Marathon.com', 'Marathon'],
	['Marathon Competitive', 'Marathon'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
