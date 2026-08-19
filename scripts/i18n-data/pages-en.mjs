import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Marathon Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		description:
			'Marathon cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		h1: 'Marathon Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Marathon Cheats is the undetected Marathon Cheats package for Windows PC — built for Marathon on Windows PC. Marathon ESP wallhack, 2D radar, and Marathon Aimbot with BattlEye maintenance after every major patch.',
		imageAlt: "Marathon Cheats homepage hero — ESP and aimbot for Marathon",
		galleryTitle: 'Marathon Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose marathon cheats in 2026',
				'Marathon rewards map awareness. Marathon Cheats combines ESP wallhack for enemy players and loot drops, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on PvP and PvE runs, and official servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.marathon} and ${EXT.battleye}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/marathon-cheats/">Marathon Cheats pillar</a>, <a href="/marathon-esp/">ESP guide</a>, <a href="/marathon-aimbot/">Aimbot controls</a>, and <a href="/marathon-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Marathon Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PvP and PvE extraction runs — covering both “marathon cheats” and “marathon cheats” search intent.',
				'Browse the <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, <a href="/marathon-esp/">wallhack</a>, and <a href="/marathon-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Bungie service health, then confirm our maintenance notes so you are not dropping in on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'marathon-esp': {
		title: 'Marathon ESP 2026 | Player Boxes & Wallhack',
		description:
			'Marathon ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected marathon cheats for Marathon.',
		h1: 'Marathon ESP — Player Boxes & Wallhack',
		intro:
			'Marathon ESP visibility tools for run and extraction run. Read enemy squads, players, enemy forces, loot drops, and distance before you commit — toggleable Marathon ESP wallhack overlays bundled in our Marathon Cheats package.',
		imageAlt: "Marathon ESP player boxes and distance readouts in a run",
		galleryTitle: 'Marathon ESP overlay visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'marathon wallhack guide',
		ctaSecondaryHref: '/marathon-esp/',
		sections: [
			section(
				'What Marathon ESP solves in runs',
				'Marathon maps punish incomplete information. Marathon Cheats ESP wallhack helps you spot enemy squads early, spot runners and UESC forces before they push your angle, and mark high-value loot worth the detour.',
				'On run, extraction run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Marathon’s live seasons and map updates are published by Bungie (${EXT.marathon}). When POIs or loot spawn rules shift, ESP categories stay useful because they track players and loot drops — not a single static landmark.`,
			),
			section(
				'Player, apex, and loot ESP wallhack categories',
				'Toggle enemy player outlines, threat markers, exfil cues, and loot pins so only run-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PvP and PvE extraction runs lobbies alike.',
				'Compare category detail on the <a href="/marathon-esp/">wallhack page</a> and pair visibility with the <a href="/marathon-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Carcass and loot markers for faster rotations',
					'Apex and nest awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with BattlEye maintenance',
				'Marathon Cheats ESP wallhack is maintained for Marathon with rebuilds after BattlEye patches. Check the <a href="/updates/">Updates page</a> before you drop in — no cheat guarantees permanent undetected status.',
				`Read ${EXT.battleye} for how anti-cheat updates ship, then cross-check our <a href="/updates/">BattlEye maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first run.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the push. Review <a href="/marathon-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/marathon-cheats/">Marathon Cheats pillar</a> and <a href="/marathon-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'marathon-aimbot': {
		title: 'Marathon Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Marathon Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Marathon Cheats package.',
		h1: 'Marathon Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Marathon pushs. Smoothness, FOV, bone priority, and per-species profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Marathon Aimbot combat previews',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/marathon-esp/',
		sections: [
			section(
				'Aimbot tuned for Marathon combat pace',
				'Marathon mixes long-range mid-size pushs with close-quarters ambush rushes. Marathon Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during pack fights and close-range pack fights.',
				`Weapon balance and season rules change via ${EXT.marathon}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.`,
			),
			section(
				'Per-species Aimbot profiles',
				'Save separate Aimbot profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush pushs and high-traffic zone clears without reopening menus every run.',
				'Prefer softer tracking? Read the <a href="/marathon-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/marathon-esp/">ESP wallhack</a> and <a href="/marathon-radar-hack/">2D radar</a> in the same Marathon Cheats license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-species profile slots for AR / SMG / long-range',
				],
			),
			section(
				'BattlEye maintenance for undetected Aimbot',
				'Marathon Cheats rebuilds Aimbot behavior when BattlEye or major Marathon patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.battleye}, then follow our <a href="/updates/">BattlEye maintenance guide</a> before dropping in on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Marathon Cheats Features | ESP, Soft Aim & RadarRadar',
		description:
			'Full marathon cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Marathon Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in Marathon Cheats for Marathon on Windows PC — with BattlEye maintenance after major patches.',
		imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Marathon Cheats feature gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, threat and exfil awareness cues, loot and water markers, distance readouts, snaplines, and toggleable ESP categories for run-critical overlays only.',
				'Team and enemy colour coding supports PvP and PvE extraction runs. Deep-dive the <a href="/marathon-esp/">ESP page</a> and <a href="/marathon-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot drops systems evolve with ${EXT.marathon} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-session exfils, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-species profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Marathon runs. See <a href="/marathon-radar-hack/">radar</a> and <a href="/marathon-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/marathon-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and BattlEye maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you drop in. Setup and billing help lives on <a href="/support/">Support</a> and support@marathoncheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/marathon-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Marathon Cheats Pricing | $35/mo or $150 Life',
		description:
			'marathon cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Marathon Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Marathon Cheats — ESP wallhack, radar hack, and Aimbot for Marathon on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Marathon Cheats package visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Marathon Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Marathon Cheats package — ideal if you play Marathon regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye or major Marathon patches.',
				`Season calendars and client updates come from ${EXT.marathon}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/marathon-cheats/">marathon cheats</a>, <a href="/marathon-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Marathon Cheats Setup | Windows PC Guide',
		description:
			'Set up marathon cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first drop in.',
		h1: 'Marathon Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Marathon Cheats for Marathon on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before dropping in.',
		imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Marathon Cheats setup visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Marathon Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest BattlEye maintenance build before launching Marathon.',
				`Also glance at ${EXT.status} if Bungie services look unstable on patch day — a platform outage is not a license fault.`,
				'Marathon Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, enemy forces, and loot drops — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, and <a href="/marathon-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/marathon-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Marathon or BattlEye patches',
				'When Bungie ships a major Marathon update or BattlEye patch, revisit Updates before dropping in. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.battleye}. Our practical workflow is documented on the <a href="/updates/">BattlEye bypass page</a> and <a href="/marathon-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Marathon Cheats Updates | BattlEye Maintenance Log',
		description:
			'marathon cheats update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before dropping in after patches.',
		h1: 'Marathon Cheats Updates — Maintenance Log',
		intro:
			'Track BattlEye maintenance and Marathon patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before dropping in after major updates.',
		imageAlt: "Marathon Cheats live status after BattlEye and game patches",
		galleryTitle: 'Marathon patch and maintenance visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/marathon-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Marathon and BattlEye receive frequent patches. Marathon Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Bungie platform health and this page for Marathon Cheats build status — both matter on big update days.`,
				'Checking this log before you drop in reduces surprises after game days or seasonal launches on run and extraction run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note BattlEye compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after species balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">BattlEye bypass guide</a> and <a href="/marathon-cheats/">undetected marathon cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.marathon}, then confirm our rebuild is live before you drop in.`,
				'For urgent status questions after a BattlEye update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Marathon Cheats FAQ | ESP, Soft Aim & RadarRadar Answers',
		description:
			'marathon cheats FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Marathon Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Marathon Cheats — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Marathon compatibility on Windows PC.',
		imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Marathon Cheats FAQ visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Marathon Cheats?',
				'Marathon Cheats is an undetected cheat package for Marathon on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.',
				'Packages cover run and extraction run. Explore <a href="/features/">Features</a> for the full control list and <a href="/marathon-esp/">ESP</a> / <a href="/marathon-aimbot/">Aimbot</a> for module detail.',
				`Marathon itself is published by Bungie (${EXT.marathon}). Cheats are third-player tools and may violate Bungie' rules — use is at your own risk.`,
			),
			section(
				'Are Marathon Cheats undetected in 2026?',
				'Marathon Cheats is maintained with rebuilds after BattlEye and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/marathon-cheats/">undetected marathon cheats</a> and the <a href="/updates/">BattlEye guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before dropping in are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@marathoncheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Marathon Cheats Support | Help & Contact',
		description:
			'Contact marathon cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Marathon Cheats Support — Contact Us',
		intro:
			'Get help with Marathon Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Marathon on Windows PC.',
		imageAlt: "Marathon Cheats support page for license and setup help",
		galleryTitle: 'Marathon Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Marathon Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Bungie bans.',
				`Account and game policy questions belong with Bungie. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href="/updates/">BattlEye page</a>.',
				'Email: support@marathoncheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Marathon Cheats 2026 | BattlEye Maintenance',
		description:
			'Undetected marathon cheats with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you drop in.',
		h1: 'Undetected Marathon Cheats — BattlEye Maintenance',
		intro:
			'How Marathon Cheats stays maintained for Marathon after BattlEye patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Marathon Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Marathon Cheats visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'BattlEye bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Marathon Cheats',
				'Undetected Marathon Cheats means the package is actively maintained against BattlEye and major Marathon patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.',
				`Anti-cheat technology is documented by ${EXT.battleye}; Marathon client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'BattlEye maintenance workflow',
				'When BattlEye or Marathon updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">BattlEye bypass Marathon guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/marathon-cheats/">marathon cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Marathon Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'marathon wallhack ESP with player boxes and loot markers for Windows PC. Undetected marathon cheats — learn overlays and buy.',
		h1: 'Marathon Wallhack — ESP Boxes & Visibility',
		intro:
			'Marathon wallhack ESP for Marathon — see players, loot drops, rival runners, and containers through toggleable wallhack overlays built for PvP and PvE extraction runs.',
		imageAlt: "marathon wallhack visibility through walls in a run",
		galleryTitle: 'marathon wallhack ESP gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Marathon ESP page',
		ctaSecondaryHref: '/marathon-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An Marathon wallhack focuses on information — player outlines, loot pins, threat cues — rather than automatic aiming. Marathon Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and exfil zones.',
				'For the broader ESP keyword page see <a href="/marathon-esp/">Marathon ESP</a>; for combat assist see <a href="/marathon-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support run, extraction run, and official servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.marathon}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/marathon-radar-hack/">radar hack</a> cues for flanks during forest and river bank ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after BattlEye patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/marathon-cheats/">undetected marathon cheats</a> and <a href="/updates/">BattlEye bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/marathon-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Marathon Radar Hack 2026 | 2D Threat Overlay',
		description:
			'marathon radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Marathon Cheats package.',
		h1: 'Marathon Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Marathon — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Marathon 2D radar overlay showing nearby threats",
		galleryTitle: 'marathon radar hack visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/marathon-esp/',
		sections: [
			section(
				'Why radar hack matters in Marathon',
				'survival pushs happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'Marathon Cheats radar complements <a href="/marathon-esp/">ESP wallhack</a> markers during pack pushes and nest zone fights.',
				`Mode rules and seasonal changes come from ${EXT.marathon}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight exfil zones. Directional cues highlight flanks during building clears and flank pushes across run and extraction run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/marathon-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/marathon-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive BattlEye maintenance rebuilds with the full Marathon Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Marathon patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/marathon-cheats/">undetected status</a>.',
			),
		],
	},
	'battleye': {
		title: 'BattlEye Bypass Marathon | Marathon Cheats Maintenance',
		description:
			'How marathon cheats rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before dropping in.',
		h1: 'BattlEye Bypass — Marathon Cheats Maintenance',
		intro:
			'Understand BattlEye maintenance for Marathon Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Marathon security updates.',
		imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
		galleryTitle: 'BattlEye maintenance visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'BattlEye overview',
				`BattlEye is Bungie' anti-cheat for Marathon on PC (see ${EXT.battleye}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Marathon Cheats monitors BattlEye patch notes and Marathon seasonal updates from ${EXT.marathon} to schedule module reviews.`,
				'“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a BattlEye patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Bungie service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid dropping in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/marathon-cheats/">undetected marathon cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every run.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Marathon Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best marathon cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected marathon cheats with BattlEye maintenance — compare and buy.',
		h1: 'Marathon Cheats 2026 — ESP, Soft Aim & RadarRadar',
		intro:
			'The 2026 Marathon Cheats package for Marathon — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Marathon Cheats product overview for Marathon",
		galleryTitle: 'Marathon Cheats 2026 gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why marathon cheats buyers choose Marathon Cheats in 2026',
				'2026 updates bring new maps, weapon balance changes, and BattlEye patches. Marathon Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.marathon}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover run and extraction run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/marathon-cheats/">Marathon Cheats pillar</a>, <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, <a href="/marathon-esp/">wallhack</a>, <a href="/marathon-radar-hack/">radar</a>, <a href="/marathon-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/marathon-cheats/">marathon cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/marathon-cheats/">marathon cheats</a> checklist, <a href="/blog/marathon-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@marathoncheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Marathon Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'marathon cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare marathon cheats options and buy the full package.',
		h1: 'Marathon Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'marathon cheats for run and extraction run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye patches. This is the pillar guide for marathon cheats in 2026.',
		imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'marathon cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/marathon-cheats/',
		sections: [
			section(
				'What marathon cheats include in 2026',
				'Players searching for marathon cheats usually want visibility and combat tools without stacking separate downloads. Marathon Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called marathon cheats.',
				'Coverage spans run and extraction run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.marathon}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day drop ins.`,
			),
			section(
				'How this Marathon Cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/marathon-cheats/">marathon cheats 2026</a> and <a href="/marathon-cheats/">marathon cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/marathon-esp/">Marathon ESP</a>, <a href="/marathon-aimbot/">Marathon Aimbot</a>, <a href="/marathon-esp/">wallhack</a>, <a href="/marathon-radar-hack/">radar hack</a>, and <a href="/marathon-aimbot/">soft aim</a>.',
				'Blog guides expand BattlEye keyword: <a href="/blog/marathon-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/marathon-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-marathon-cheats-eac/">undetected BattlEye notes</a>.',
			),
			section(
				'marathon cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Marathon Cheats maps the full survival loop: read enemy squads, track rival runners and loot drops, spot flanks on radar, and tune Aimbot per weapon.',
				'Compare the <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/marathon-cheats/">mod menu</a>, <a href="/marathon-aimbot/">aimbot</a>, <a href="/marathon-esp/">ESP</a>.',
			),
			section(
				'Undetected marathon cheats with BattlEye maintenance',
				'Undetected marathon cheats require rebuilds after BattlEye and major Marathon patches. Check Updates before dropping in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.battleye} for anti-cheat background and our <a href="/updates/">BattlEye bypass guide</a> for the practical workflow. Pair with <a href="/marathon-cheats/">undetected marathon cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Marathon Hack Download 2026 | Instant Access',
		description:
			'marathon cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Marathon Hack Download — Instant License Delivery',
		intro:
			'How marathon cheat download works for Marathon — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Marathon Cheats download and install delivery flow",
		galleryTitle: 'marathon cheat download visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How marathon cheat download delivery works',
				'After checkout confirms payment, Marathon Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Bungie services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every marathon cheat download includes player ESP wallhack, loot drops and loot markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PvP and PvE extraction runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Marathon or BattlEye patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/marathon-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Marathon Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Marathon mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Marathon Cheats package.',
		h1: 'Marathon Mod Menu — In-Client Control Panel',
		intro:
			'Marathon mod menu controls for Marathon — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Marathon run on Windows PC.',
		imageAlt: "Marathon Cheats in-game menu controls",
		galleryTitle: 'Marathon mod menu gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Marathon mod menu controls',
				'A Marathon mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Marathon Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-species Aimbot settings without alt-tabbing out of Marathon.',
				'Control deep-dives: <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, <a href="/marathon-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for PvP and PvE extraction runs',
				'Separate ESP wallhack categories for players, loot drops, containers, and rival runners let you reduce overlay noise during rotations and exfil zones.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.marathon} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/marathon-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after BattlEye patches',
				'Marathon mod menu behavior is rebuilt when BattlEye or major Marathon updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before dropping in on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Marathon Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Marathon soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our marathon cheats with ESP boxes.',
		h1: 'Marathon Soft Aim — Smooth Aimbot Controls',
		intro:
			'Marathon soft aim settings for Marathon — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Marathon soft aim FOV and smoothness settings",
		galleryTitle: 'Marathon soft aim gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/marathon-aimbot/',
		sections: [
			section(
				'What Marathon soft aim means',
				'Marathon soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Marathon Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR pushs.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during pack fights.',
				'Full Aimbot documentation: <a href="/marathon-aimbot/">Marathon Aimbot</a>. Alternate wording: <a href="/marathon-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon',
				'Save separate soft aim profiles for carnivores, ambush builds, and long-range species. Switch between long-range ambush pushs and close pack fights with hotkeys mid-session.',
				`Weapon kill speeds shift with ${EXT.marathon} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/marathon-esp/">ESP wallhack</a> and <a href="/marathon-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with BattlEye maintenance',
				'Aimbot modules rebuild after BattlEye patches. Check the <a href="/updates/">Updates page</a> before dropping in — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Marathon Cheats 2026 | Buyer Guide',
		description:
			'Best marathon cheats for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Marathon Cheats — 2026 Buyer Guide',
		intro:
			'Compare marathon cheats for Marathon in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye rebuilds and instant delivery.',
		imageAlt: "Marathon Cheats overview for Marathon on PC",
		galleryTitle: 'Best marathon cheats gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes marathon cheats in 2026',
				'The marathon cheats combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Marathon Cheats covers run and extraction run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best marathon cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Marathon patches.',
				'Review <a href="/features/">Features</a>, <a href="/marathon-cheats/">undetected status</a>, and <a href="/marathon-cheats/">marathon cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/marathon-esp/">ESP</a>, <a href="/marathon-aimbot/">Aimbot</a>, <a href="/marathon-cheats/">hacks</a>.',
			),
			section(
				'Buying marathon cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first drop in — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Bungie terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Marathon Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Marathon Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Marathon Cheats package.',
		h1: 'Marathon Aimbot Hack — Soft Aim Assist',
		intro:
			'Marathon Aimbot hack tools for Marathon — smoothness, FOV, bone priority, per-species profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Marathon Aimbot hack controls and bone priority",
		galleryTitle: 'Marathon Aimbot hack gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/marathon-aimbot/',
		sections: [
			section(
				'Marathon Aimbot hack vs visibility tools',
				'A Marathon Aimbot hack focuses on assisted targeting during pushs — while ESP wallhack and radar handle map awareness. Marathon Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for Marathon combat pace across PvP and PvE extraction runs.',
				'Prefer softer tracking language? See <a href="/marathon-aimbot/">soft aim</a>. Full settings: <a href="/marathon-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session exfils.',
				'Per-species profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.marathon} can change ideal FOV — retune after major species balance updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after BattlEye updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before dropping in after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/marathon-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Marathon ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Marathon ESP hack with player boxes and loot markers for Windows PC. Undetected marathon cheats with — see overlays and buy.',
		h1: 'Marathon ESP Hack — Player Boxes Guide',
		intro:
			'Marathon ESP hack overlays for Marathon — player outlines, threat cues, loot and water markers with distance readouts across run and extraction run.',
		imageAlt: "Marathon ESP hack boxes and loot markers",
		galleryTitle: 'Marathon ESP hack gallery',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/marathon-esp/',
		sections: [
			section(
				'What a Marathon ESP hack shows',
				'A Marathon ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during pack pushes and third-player scenarios.',
				'Canonical visibility guide: <a href="/marathon-esp/">Marathon ESP</a>. Wallhack wording: <a href="/marathon-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for runs',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only run-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports PvP and PvE extraction runs.',
				`POI and loot drops changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with BattlEye maintenance',
				'ESP hack modules rebuild after BattlEye and Marathon patches. Check the <a href="/updates/">Updates page</a> before dropping in — pair ESP hack awareness with <a href="/marathon-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/marathon-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Marathon Unlock All 2026 | What It Really Means',
		description:
			'Marathon unlock-all explained vs real marathon cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Marathon Unlock All — What Players Search For',
		intro:
			'Marathon unlock-all is a common search term for Marathon — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Marathon Cheats actually provides on Windows PC.',
		imageAlt: "Marathon Cheats license features overview",
		galleryTitle: 'Marathon unlock-all guide visuals',
		ctaPrimary: 'Buy Marathon Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Marathon unlock-all usually means',
				'Marathon unlock-all searches often refer to instant access to loadouts, skins, or growth tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Marathon Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle progression items are sold through ${EXT.marathon}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, rival runners, and high-value loot during live runs. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot drops and loot markers speed map rotations — see the <a href="/marathon-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/marathon-cheats/">marathon cheats</a> and <a href="/marathon-cheats/">marathon cheats</a>.',
			),
			section(
				'Buying Marathon Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Marathon on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after BattlEye patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Marathon Cheats',
		description:
			'Privacy policy for Marathon Cheats. How we handle support emails, order data, and checkout for marathon cheats licenses on marathoncheats.org.',
		h1: 'Privacy Policy',
		intro: 'How Marathon Cheats handles information when you browse marathoncheats.org or contact support about a Marathon license.',
		imageAlt: "Marathon Cheats privacy policy page",
		galleryTitle: 'Marathon Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Marathon Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@marathoncheats.org with your request details.',
				'Policy updates publish on this page. Continued use of marathoncheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Marathon Cheats',
		description:
			'Refund policy for Marathon Cheats. Digital delivery terms and eligibility for Marathon Cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Marathon Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Marathon.',
		imageAlt: "Marathon Cheats refund policy page",
		galleryTitle: 'Marathon Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Marathon Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@marathoncheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Marathon Cheats Rules',
		description:
			'Terms of use for marathoncheats.org and Marathon Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of marathoncheats.org and Marathon Cheats licenses for Marathon on Windows PC.',
		imageAlt: "Marathon Cheats terms of use page",
		galleryTitle: 'Marathon Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Marathon Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Marathon on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Marathon may violate Bungie terms and result in account penalties. Marathon Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/marathon-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@marathoncheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
