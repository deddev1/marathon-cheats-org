import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; packFight: string; dinoEsp: string;
		headerArt: string; hacksPackage: string; ambushFight: string; battleRoyale: string; survivalIsland: string;
	};
};
export type PageId = 'home' | 'marathon-esp' | 'marathon-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected marathon cheats 2026",
					subtitle: "marathon cheats with Marathon ESP, radar hack and Marathon Aimbot for Windows PC — BattlEye maintenance included.",
					subtitleShort: "Marathon ESP, radar & aimbot for PC",
					buyNow: "Buy Marathon Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Marathon Cheats — undetected marathon cheats live for Marathon on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye maintenance supported",
					antiCheatShort: "BattlEye supported",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected marathon cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Marathon Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Marathon Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected marathon cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats | Undetected Aimbot, ESP & Wallhack 2026",
					description: "Marathon cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Marathon Cheats is the undetected Marathon Cheats package for Windows PC — built for Marathon on Windows PC. Marathon ESP wallhack, 2D radar, and Marathon Aimbot with BattlEye maintenance after every major patch.",
					imageAlt: "Marathon Cheats homepage hero — ESP and aimbot for Marathon",
					galleryTitle: "Marathon Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose marathon cheats in 2026",
							paragraphs: [
								"Marathon rewards map awareness. Marathon Cheats combines ESP wallhack for enemy players and loot drops, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on PvP and PvE runs, and official servers.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> and <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/marathon-cheats/\">Marathon Cheats pillar</a>, <a href=\"/marathon-esp/\">ESP guide</a>, <a href=\"/marathon-aimbot/\">Aimbot controls</a>, and <a href=\"/marathon-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Marathon Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PvP and PvE extraction runs — covering both “marathon cheats” and “marathon cheats” search intent.",
								"Browse the <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, <a href=\"/marathon-esp/\">wallhack</a>, and <a href=\"/marathon-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> for Bungie service health, then confirm our maintenance notes so you are not dropping in on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-esp.webp",
				},
				"marathon-esp": {
					title: "Marathon ESP 2026 | Player Boxes & Wallhack",
					description: "Marathon ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected marathon cheats for Marathon.",
					h1: "Marathon ESP — Player Boxes & Wallhack",
					intro: "Marathon ESP visibility tools for run and extraction run. Read enemy squads, players, enemy forces, loot drops, and distance before you commit — toggleable Marathon ESP wallhack overlays bundled in our Marathon Cheats package.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP overlay visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "marathon wallhack guide",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "What Marathon ESP solves in runs",
							paragraphs: [
								"Marathon maps punish incomplete information. Marathon Cheats ESP wallhack helps you spot enemy squads early, spot runners and UESC forces before they push your angle, and mark high-value loot worth the detour.",
								"On run, extraction run, and official servers, that visibility gap is often the difference between a clean third-player and a patched pack. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Marathon’s live seasons and map updates are published by Bungie (<a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>). When POIs or loot spawn rules shift, ESP categories stay useful because they track players and loot drops — not a single static landmark.",
							],
						},
						{
							h2: "Player, apex, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, threat markers, exfil cues, and loot pins so only run-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PvP and PvE extraction runs lobbies alike.",
								"Compare category detail on the <a href=\"/marathon-esp/\">wallhack page</a> and pair visibility with the <a href=\"/marathon-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot markers for faster rotations",
								"Exfil and threat awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with BattlEye maintenance",
							paragraphs: [
								"Marathon Cheats ESP wallhack is maintained for Marathon with rebuilds after BattlEye patches. Check the <a href=\"/updates/\">Updates page</a> before you drop in — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">BattlEye maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first run.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the push. Review <a href=\"/marathon-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/marathon-cheats/\">Marathon Cheats pillar</a> and <a href=\"/marathon-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-radar.webp",
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot 2026 | Soft Aim for Windows PC",
					description: "Marathon Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Marathon Cheats package.",
					h1: "Marathon Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Marathon pushs. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot combat previews",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Marathon combat pace",
							paragraphs: [
								"Marathon mixes long-range mid-size pushs with close-quarters ambush rushes. Marathon Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during pack fights and close-range pack fights.",
								"Weapon balance and season rules change via <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for AR, SMG, and DMR loadouts. Switch between long-range ambush pushs and high-traffic zone clears without reopening menus every run.",
								"Prefer softer tracking? Read the <a href=\"/marathon-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/marathon-esp/\">ESP wallhack</a> and <a href=\"/marathon-radar-hack/\">2D radar</a> in the same Marathon Cheats license.",
							],
							list: [
								"Smoothness, FOV, and aim smoothing sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / long-range",
							],
						},
						{
							h2: "BattlEye maintenance for undetected Aimbot",
							paragraphs: [
								"Marathon Cheats rebuilds Aimbot behavior when BattlEye or major Marathon patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> and anti-cheat context on <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a>, then follow our <a href=\"/updates/\">BattlEye maintenance guide</a> before dropping in on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot.webp",
				},
				features: {
					title: "Marathon Cheats Features | ESP, Soft Aim & Radar",
					description: "Full marathon cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Marathon Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in Marathon Cheats for Marathon on Windows PC — with BattlEye maintenance after major patches.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Marathon Cheats feature gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, threat and exfil awareness cues, loot and water markers, distance readouts, snaplines, and toggleable ESP categories for run-critical overlays only.",
								"Team and enemy colour coding supports PvP and PvE extraction runs. Deep-dive the <a href=\"/marathon-esp/\">ESP page</a> and <a href=\"/marathon-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot drops systems evolve with <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-session exfils, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Marathon runs. See <a href=\"/marathon-radar-hack/\">radar</a> and <a href=\"/marathon-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/marathon-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and BattlEye maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> on patch days, then confirm rebuild notes before you drop in. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@marathoncheats.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/marathon-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "Marathon Cheats Pricing | $35/mo or $150 Life",
					description: "marathon cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Marathon Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Marathon Cheats — ESP wallhack, radar hack, and Aimbot for Marathon on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Marathon Cheats package visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Marathon Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Marathon Cheats package — ideal if you play Marathon regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye or major Marathon patches.",
								"Season calendars and client updates come from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/marathon-cheats/\">marathon cheats</a>, <a href=\"/marathon-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-run.webp",
				},
				setup: {
					title: "Marathon Cheats Setup | Windows PC Guide",
					description: "Set up marathon cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first drop in.",
					h1: "Marathon Cheats Setup — Windows PC Guide",
					intro: "Install and configure Marathon Cheats for Marathon on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before dropping in.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Marathon Cheats setup visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Marathon Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest BattlEye maintenance build before launching Marathon.",
								"Also glance at <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> if Bungie services look unstable on patch day — a platform outage is not a license fault.",
								"Marathon Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, enemy forces, and loot drops — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, and <a href=\"/marathon-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/marathon-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Marathon or BattlEye patches",
							paragraphs: [
								"When Bungie ships a major Marathon update or BattlEye patch, revisit Updates before dropping in. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a>. Our practical workflow is documented on the <a href=\"/updates/\">BattlEye bypass page</a> and <a href=\"/marathon-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-radar.webp",
				},
				updates: {
					title: "Marathon Cheats Updates | BattlEye Maintenance Log",
					description: "marathon cheats update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before dropping in after patches.",
					h1: "Marathon Cheats Updates — Maintenance Log",
					intro: "Track BattlEye maintenance and Marathon patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before dropping in after major updates.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Marathon patch and maintenance visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Marathon and BattlEye receive frequent patches. Marathon Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> for Bungie platform health and this page for Marathon Cheats build status — both matter on big update days.",
								"Checking this log before you drop in reduces surprises after game days or seasonal launches on run and extraction run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note BattlEye compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">BattlEye bypass guide</a> and <a href=\"/marathon-cheats/\">undetected marathon cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>, then confirm our rebuild is live before you drop in.",
								"For urgent status questions after a BattlEye update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-esp.webp",
				},
				faq: {
					title: "Marathon Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "marathon cheats FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Marathon Cheats FAQ — Common Questions",
					intro: "Answers about undetected Marathon Cheats — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Marathon compatibility on Windows PC.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Marathon Cheats FAQ visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Marathon Cheats?",
							paragraphs: [
								"Marathon Cheats is an undetected cheat package for Marathon on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.",
								"Packages cover run and extraction run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/marathon-esp/\">ESP</a> / <a href=\"/marathon-aimbot/\">Aimbot</a> for module detail.",
								"Marathon itself is published by Bungie (<a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>). Cheats are third-player tools and may violate Bungie' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Marathon Cheats undetected in 2026?",
							paragraphs: [
								"Marathon Cheats is maintained with rebuilds after BattlEye and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/marathon-cheats/\">undetected marathon cheats</a> and the <a href=\"/updates/\">BattlEye guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before dropping in are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@marathoncheats.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
				},
				support: {
					title: "Marathon Cheats Support | Help & Contact",
					description: "Contact marathon cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Marathon Cheats Support — Contact Us",
					intro: "Get help with Marathon Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Marathon on Windows PC.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Marathon Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Marathon Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Bungie bans.",
								"Account and game policy questions belong with Bungie. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href=\"/updates/\">BattlEye page</a>.",
								"Email: support@marathoncheats.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-run.webp",
				},
				undetected: {
					title: "Undetected Marathon Cheats 2026 | BattlEye Maintenance",
					description: "Undetected marathon cheats with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you drop in.",
					h1: "Undetected Marathon Cheats — BattlEye Maintenance",
					intro: "How Marathon Cheats stays maintained for Marathon after BattlEye patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Marathon Cheats visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "BattlEye bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Marathon Cheats",
							paragraphs: [
								"Undetected Marathon Cheats means the package is actively maintained against BattlEye and major Marathon patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a>; Marathon client updates ship through <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "BattlEye maintenance workflow",
							paragraphs: [
								"When BattlEye or Marathon updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">BattlEye bypass Marathon guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/marathon-cheats/\">marathon cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Marathon Wallhack 2026 | ESP Boxes & Visibility",
					description: "marathon wallhack ESP with player boxes and loot markers for Windows PC. Undetected marathon cheats — learn overlays and buy.",
					h1: "Marathon Wallhack — ESP Boxes & Visibility",
					intro: "Marathon wallhack ESP for Marathon — see players, loot drops, rival runners, and containers through toggleable wallhack overlays built for PvP and PvE extraction runs.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "marathon wallhack ESP gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Marathon ESP page",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"An Marathon wallhack focuses on information — player outlines, loot pins, threat cues — rather than automatic aiming. Marathon Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and exfil zones.",
								"For the broader ESP keyword page see <a href=\"/marathon-esp/\">Marathon ESP</a>; for combat assist see <a href=\"/marathon-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support run, extraction run, and official servers with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/marathon-radar-hack/\">radar hack</a> cues for flanks during forest and river bank ambushes.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after BattlEye patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/marathon-cheats/\">undetected marathon cheats</a> and <a href=\"/updates/\">BattlEye bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/marathon-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-wallhack.webp",
				},
				radar: {
					title: "Marathon Radar Hack 2026 | 2D Threat Overlay",
					description: "marathon radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Marathon Cheats package.",
					h1: "Marathon Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Marathon — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "marathon radar hack visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Marathon",
							paragraphs: [
								"survival pushs happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.",
								"Marathon Cheats radar complements <a href=\"/marathon-esp/\">ESP wallhack</a> markers during squad pushes and exfil zone fights.",
								"Mode rules and seasonal changes come from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight exfil zones. Directional cues highlight flanks during building clears and flank pushes across run and extraction run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/marathon-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/marathon-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive BattlEye maintenance rebuilds with the full Marathon Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Marathon patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/marathon-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-radar.webp",
				},
				battleye: {
					title: "BattlEye Bypass Marathon | Marathon Cheats Maintenance",
					description: "How marathon cheats rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before dropping in.",
					h1: "BattlEye Bypass — Marathon Cheats Maintenance",
					intro: "Understand BattlEye maintenance for Marathon Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Marathon security updates.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye maintenance visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye overview",
							paragraphs: [
								"BattlEye is Bungie' anti-cheat for Marathon on PC (see <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Marathon Cheats monitors BattlEye patch notes and Marathon seasonal updates from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> to schedule module reviews.",
								"“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a BattlEye patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Bungie service health on <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> if the launcher or matchmaking fails during the same window.",
								"Avoid dropping in on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/marathon-cheats/\">undetected marathon cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every run.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best marathon cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected marathon cheats with BattlEye maintenance — compare and buy.",
					h1: "Marathon Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Marathon Cheats package for Marathon — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026 gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why marathon cheats buyers choose Marathon Cheats in 2026",
							paragraphs: [
								"2026 updates bring new maps, weapon balance changes, and BattlEye patches. Marathon Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover run and extraction run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/marathon-cheats/\">Marathon Cheats pillar</a>, <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, <a href=\"/marathon-esp/\">wallhack</a>, <a href=\"/marathon-radar-hack/\">radar</a>, <a href=\"/marathon-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/marathon-cheats/\">marathon cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/marathon-cheats/\">marathon cheats</a> checklist, <a href=\"/blog/marathon-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@marathoncheats.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-esp.webp",
				},
				hacks: {
					title: "Marathon Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "marathon cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare marathon cheats options and buy the full",
					h1: "Marathon Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "marathon cheats for run and extraction run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye patches. This is the pillar guide for marathon cheats in 2026.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "marathon cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "What marathon cheats include in 2026",
							paragraphs: [
								"Players searching for marathon cheats usually want visibility and combat tools without stacking separate downloads. Marathon Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called marathon cheats.",
								"Coverage spans run and extraction run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> before patch-day drop ins.",
							],
						},
						{
							h2: "How this Marathon Cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/marathon-cheats/\">marathon cheats 2026</a> and <a href=\"/marathon-cheats/\">marathon cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/marathon-esp/\">Marathon ESP</a>, <a href=\"/marathon-aimbot/\">Marathon Aimbot</a>, <a href=\"/marathon-esp/\">wallhack</a>, <a href=\"/marathon-radar-hack/\">radar hack</a>, and <a href=\"/marathon-aimbot/\">soft aim</a>.",
								"Blog guides expand BattlEye keyword: <a href=\"/blog/marathon-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/marathon-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-marathon-cheats-battleye/\">undetected BattlEye notes</a>.",
							],
						},
						{
							h2: "marathon cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Marathon Cheats maps the full survival loop: read enemy squads, track rival runners and loot drops, spot flanks on radar, and tune Aimbot per weapon.",
								"Compare the <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/marathon-cheats/\">mod menu</a>, <a href=\"/marathon-aimbot/\">aimbot</a>, <a href=\"/marathon-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected marathon cheats with BattlEye maintenance",
							paragraphs: [
								"Undetected marathon cheats require rebuilds after BattlEye and major Marathon patches. Check Updates before dropping in — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye</a> for anti-cheat background and our <a href=\"/updates/\">BattlEye bypass guide</a> for the practical workflow. Pair with <a href=\"/marathon-cheats/\">undetected marathon cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-run.webp",
				},
				"cheat-download": {
					title: "Marathon Hack Download 2026 | Instant Access",
					description: "marathon cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Marathon Hack Download — Instant License Delivery",
					intro: "How marathon cheat download works for Marathon — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "marathon cheat download visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How marathon cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Marathon Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Bungie services are down, check <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every marathon cheat download includes player ESP wallhack, loot drops and loot markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PvP and PvE extraction runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Marathon or BattlEye patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/marathon-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-run.webp",
				},
				"mod-menu": {
					title: "Marathon Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Marathon mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Marathon Cheats package.",
					h1: "Marathon Mod Menu — In-Client Control Panel",
					intro: "Marathon mod menu controls for Marathon — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Marathon run on Windows PC.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon mod menu gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Marathon mod menu controls",
							paragraphs: [
								"A Marathon mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Marathon Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Marathon.",
								"Control deep-dives: <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, <a href=\"/marathon-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for PvP and PvE extraction runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot drops, containers, and rival runners let you reduce overlay noise during rotations and exfil zones.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.marathon} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/marathon-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after BattlEye patches",
							paragraphs: [
								"Marathon mod menu behavior is rebuilt when BattlEye or major Marathon updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before dropping in on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Marathon Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Marathon soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our marathon cheats with ESP boxes.",
					h1: "Marathon Soft Aim — Smooth Aimbot Controls",
					intro: "Marathon soft aim settings for Marathon — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon soft aim gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "What Marathon soft aim means",
							paragraphs: [
								"Marathon soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Marathon Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR pushs.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during pack fights.",
								"Full Aimbot documentation: <a href=\"/marathon-aimbot/\">Marathon Aimbot</a>. Alternate wording: <a href=\"/marathon-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon",
							paragraphs: [
								"Save separate soft aim profiles for AR, SMG, and DMR loadouts. Switch between long-range ambush pushs and close squad fights with hotkeys mid-session.",
								"Weapon kill speeds shift with <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/marathon-esp/\">ESP wallhack</a> and <a href=\"/marathon-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with BattlEye maintenance",
							paragraphs: [
								"Aimbot modules rebuild after BattlEye patches. Check the <a href=\"/updates/\">Updates page</a> before dropping in — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Marathon Cheats 2026 | Buyer Guide",
					description: "Best marathon cheats for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Marathon Cheats — 2026 Buyer Guide",
					intro: "Compare marathon cheats for Marathon in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye rebuilds and instant delivery.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Best marathon cheats gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes marathon cheats in 2026",
							paragraphs: [
								"The marathon cheats combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Marathon Cheats covers run and extraction run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon on Steam</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best marathon cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Marathon patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/marathon-cheats/\">undetected status</a>, and <a href=\"/marathon-cheats/\">marathon cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/marathon-esp/\">ESP</a>, <a href=\"/marathon-aimbot/\">Aimbot</a>, <a href=\"/marathon-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying marathon cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first drop in — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Bungie terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack 2026 | Soft Aim Assist",
					description: "Marathon Aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Marathon Cheats package.",
					h1: "Marathon Aimbot Hack — Soft Aim Assist",
					intro: "Marathon Aimbot hack tools for Marathon — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot hack gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot hack vs visibility tools",
							paragraphs: [
								"A Marathon Aimbot hack focuses on assisted targeting during pushs — while ESP wallhack and radar handle map awareness. Marathon Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and aim smoothing controls tune assist for Marathon combat pace across PvP and PvE extraction runs.",
								"Prefer softer tracking language? See <a href=\"/marathon-aimbot/\">soft aim</a>. Full settings: <a href=\"/marathon-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-session exfils.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> can change ideal FOV — retune after major weapon balance updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after BattlEye updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before dropping in after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/marathon-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Marathon ESP Hack 2026 | Player Boxes & Loot",
					description: "Marathon ESP hack with player boxes and loot markers for Windows PC. Undetected marathon cheats with — see overlays and buy.",
					h1: "Marathon ESP Hack — Player Boxes Guide",
					intro: "Marathon ESP hack overlays for Marathon — player outlines, threat cues, loot and water markers with distance readouts across run and extraction run.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP hack gallery",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "What a Marathon ESP hack shows",
							paragraphs: [
								"A Marathon ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during pack pushes and third-player scenarios.",
								"Canonical visibility guide: <a href=\"/marathon-esp/\">Marathon ESP</a>. Wallhack wording: <a href=\"/marathon-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for runs",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only run-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports PvP and PvE extraction runs.",
								"POI and loot drops changes publish through <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with BattlEye maintenance",
							paragraphs: [
								"ESP hack modules rebuild after BattlEye and Marathon patches. Check the <a href=\"/updates/\">Updates page</a> before dropping in — pair ESP hack awareness with <a href=\"/marathon-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/marathon-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Marathon Unlock All 2026 | What It Really Means",
					description: "Marathon unlock-all explained vs real marathon cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Marathon Unlock All — What Players Search For",
					intro: "Marathon unlock-all is a common search term for Marathon — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Marathon Cheats actually provides on Windows PC.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon unlock-all guide visuals",
					ctaPrimary: "Buy Marathon Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Marathon unlock-all usually means",
							paragraphs: [
								"Marathon unlock-all searches often refer to instant access to loadouts, skins, or premium gear. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Marathon Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and patch cycle progression items are sold through <a href=\"https://store.steampowered.com/app/3065800/Marathon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marathon</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, rival runners, and high-value loot during live runs. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot drops and loot markers speed map rotations — see the <a href=\"/marathon-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/marathon-cheats/\">marathon cheats</a> and <a href=\"/marathon-cheats/\">marathon cheats</a>.",
							],
						},
						{
							h2: "Buying Marathon Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Marathon on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after BattlEye patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Marathon Cheats",
					description: "Privacy policy for Marathon Cheats. How we handle support emails, order data, and checkout for marathon cheats licenses on marathoncheats.org.",
					h1: "Privacy Policy",
					intro: "How Marathon Cheats handles information when you browse marathoncheats.org or contact support about a Marathon license.",
					imageAlt: "Marathon Cheats privacy policy page",
					galleryTitle: "Marathon Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Marathon Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@marathoncheats.org with your request details.",
								"Policy updates publish on this page. Continued use of marathoncheats.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Marathon Cheats",
					description: "Refund policy for Marathon Cheats. Digital delivery terms and eligibility for Marathon Cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Marathon Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Marathon.",
					imageAlt: "Marathon Cheats refund policy page",
					galleryTitle: "Marathon Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Marathon Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@marathoncheats.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-run.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Marathon Cheats Rules",
					description: "Terms of use for marathoncheats.org and Marathon Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of marathoncheats.org and Marathon Cheats licenses for Marathon on Windows PC.",
					imageAlt: "Marathon Cheats terms of use page",
					galleryTitle: "Marathon Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Marathon Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Marathon on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Marathon may violate Bungie terms and result in account penalties. Marathon Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/marathon-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@marathoncheats.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Marathon indetectables",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack y Aimbot para Marathon en PC Windows — mantenimiento BattlEye incluido.",
					subtitleShort: "ESP, radar y Aimbot para Marathon PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Marathon Cheats está activo para Marathon en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento BattlEye incluido",
					antiCheatShort: "BattlEye incluido",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Marathon",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Marathon Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Marathon — checkout en Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Marathon indetectables para Marathon en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye. Entrega digital instantánea.",
					h1: "Marathon Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Marathon en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye tras cada parche.",
					imageAlt: "Marathon ESP — etiquetas de jugador hack",
					galleryTitle: "Galería Marathon Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Marathon Cheats en 2026",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Ideal para leer escuadrones enemigos en BR y loot run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Cajas de jugador y wallhack",
					description: "ESP Marathon: cajas de jugador, marcadores de carcasa y overlays wallhack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. cajas de jugador, marcadores de carcasa y overlays wallhack.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Controles soft aim",
					description: "Aimbot Marathon: soft aim, FOV y perfiles Aimbot por especie. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. soft aim, FOV y perfiles Aimbot por especie.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, controles de radar. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Funciones.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. ESP, soft aim, controles de radar.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: licencias de $35 mensuales o $150 de por vida. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Precios.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. licencias de $35 mensuales o $150 de por vida.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: activación en Windows PC y configuración del primer arranque. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Instalación.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. activación en Windows PC y configuración del primer arranque.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro BattlEye",
					description: "Actualizaciones: estado de parches BattlEye y notas de reconstrucción. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Actualizaciones.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. estado de parches BattlEye y notas de reconstrucción.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: preguntas sobre ESP, soft aim, entrega y BattlEye. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. preguntas sobre ESP, soft aim, entrega y BattlEye.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: ayuda con pedidos y contacto de soporte de licencias. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Soporte.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. ayuda con pedidos y contacto de soporte de licencias.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: mantenimiento undetected tras parches BattlEye. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Trucos indetectables.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. mantenimiento undetected tras parches BattlEye.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | Visibilidad ESP",
					description: "Marathon Wallhack: wallhack ESP para jugadores, carcasses y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. wallhack ESP para jugadores, carcasses y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: señales de radar 2D para flancos y rotaciones. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. señales de radar 2D para flancos y rotaciones.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Mantenimiento de parches",
					description: "Bypass BattlEye: cómo se gestionan las actualizaciones BattlEye para Marathon cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. cómo se gestionan las actualizaciones BattlEye para Marathon cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Marathon 2026 | Guía del comprador",
					description: "Trucos Marathon 2026: checklist de marathon cheats 2026 antes del checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Marathon 2026",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Trucos Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Trucos Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Trucos Marathon 2026",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. checklist de marathon cheats 2026 antes del checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Marathon | Guía ESP y Aimbot",
					description: "Trucos Marathon: pilar Marathon Cheats para ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Trucos Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. pilar Marathon Cheats para ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Marathon Cheats | Acceso instantáneo",
					description: "Descarga Marathon Cheats: descarga de licencia digital tras el pago. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Marathon Cheats",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Descarga Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Descarga Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Marathon Cheats",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. descarga de licencia digital tras el pago.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Marathon | Controles en partida",
					description: "Menú mod Marathon: toggles de ESP y soft aim en el cliente. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Menú mod Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Menú mod Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. toggles de ESP y soft aim en el cliente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Ajustes soft aim",
					description: "Soft aim Marathon: ajustes suaves de soft aim para Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. ajustes suaves de soft aim para Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Marathon | Lista de compra",
					description: "Mejores trucos Marathon: qué comparar antes de comprar marathon cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Mejores trucos Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Mejores trucos Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. qué comparar antes de comprar marathon cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Asistencia soft aim",
					description: "Hack aimbot Marathon: asistencia undetected de hack Aimbot para Marathon. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. asistencia undetected de hack Aimbot para Marathon.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Cajas y carcasses",
					description: "Hack ESP Marathon: cajas ESP hack, pins de carcasa y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. cajas ESP hack, pins de carcasa y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | Qué significa",
					description: "Unlock all Marathon: búsquedas unlock-all vs herramientas reales ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. búsquedas unlock-all vs herramientas reales ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Marathon Cheats",
					description: "Política de privacidad para Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Política de privacidad para marathoncheats.org y licencias de Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Los datos de pago se procesan en el checkout de Zadeyo — no se almacenan en marathoncheats.org.",
							],
						},
						{
							h2: "Cómo usamos los datos",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
								"Correo: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Marathon Cheats",
					description: "Política de reembolso para Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Política de reembolso para marathoncheats.org y licencias de Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "Aprobación de reembolso",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
								"Correo: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Marathon Cheats",
					description: "Términos de uso para Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Términos de uso para marathoncheats.org y licencias de Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento BattlEye.",
							],
						},
						{
							h2: "Aviso de riesgos",
							paragraphs: [
								"Marathon Cheats ofrece ESP wallhack, radar hack y Marathon Aimbot indetectables para Marathon en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Usar cheats puede violar los términos del equipo de Marathon — asumes todo riesgo de ban.",
							],
						},
						{
							h2: "Cambios de política",
							paragraphs: [
								"Contacta support@marathoncheats.org para solicitudes legales o de soporte.",
								"Correo: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Marathon indétectables",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Marathon sur PC Windows — maintenance BattlEye incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Marathon PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Marathon Cheats est actif pour Marathon sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance BattlEye incluse",
					antiCheatShort: "BattlEye inclus",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Marathon",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Marathon Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Marathon indétectables pour Marathon sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye. Livraison numérique instantanée.",
					h1: "Marathon Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Marathon sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye après chaque patch.",
					imageAlt: "Marathon ESP — tags joueur hack",
					galleryTitle: "Galerie Marathon Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Marathon Cheats en 2026",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Parfait pour lire les escouades ennemies en BR et loot run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Boîtes joueur et wallhack",
					description: "ESP Marathon: boîtes joueur, marqueurs de carcasse et overlays wallhack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. boîtes joueur, marqueurs de carcasse et overlays wallhack.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Contrôles soft aim",
					description: "Aimbot Marathon: soft aim, FOV et profils Aimbot par espèce. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. soft aim, FOV et profils Aimbot par espèce.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, contrôles radar. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Fonctions.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. ESP, soft aim, contrôles radar.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: licences à $35/mois ou $150 à vie. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Tarifs.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. licences à $35/mois ou $150 à vie.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: activation Windows PC et configuration au premier lancement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Installation.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. activation Windows PC et configuration au premier lancement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal BattlEye",
					description: "Mises à jour: statut des patchs BattlEye et notes de rebuild. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Mises à jour.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. statut des patchs BattlEye et notes de rebuild.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: questions ESP, soft aim, livraison et BattlEye. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. questions ESP, soft aim, livraison et BattlEye.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: aide commande et contact support licence. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Support.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. aide commande et contact support licence.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance undetected après patchs BattlEye. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Triches indétectables.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. maintenance undetected après patchs BattlEye.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | Visibilité ESP",
					description: "Marathon Wallhack: wallhack ESP pour joueurs, carcasses et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. wallhack ESP pour joueurs, carcasses et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: indices radar 2D pour flancs et rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. indices radar 2D pour flancs et rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Maintenance des patchs",
					description: "Bypass BattlEye: gestion des mises à jour BattlEye pour Marathon cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. gestion des mises à jour BattlEye pour Marathon cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Marathon 2026 | Guide acheteur",
					description: "Triches Marathon 2026: checklist marathon cheats 2026 avant checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Marathon 2026",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Triches Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Triches Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Triches Marathon 2026",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. checklist marathon cheats 2026 avant checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Marathon | Guide ESP et Aimbot",
					description: "Triches Marathon: pilier Marathon Cheats pour ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Triches Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. pilier Marathon Cheats pour ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Marathon Cheats | Accès instantané",
					description: "Téléchargement Marathon Cheats: téléchargement licence numérique après paiement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Marathon Cheats",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Téléchargement Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Téléchargement Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Marathon Cheats",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. téléchargement licence numérique après paiement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marathon | Contrôles en jeu",
					description: "Menu mod Marathon: toggles ESP et soft aim in-client. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Menu mod Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Menu mod Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. toggles ESP et soft aim in-client.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Réglages soft aim",
					description: "Soft aim Marathon: réglages soft aim fluides pour Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. réglages soft aim fluides pour Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Marathon | Checklist acheteur",
					description: "Meilleures triches Marathon: quoi comparer avant d'acheter marathon cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Meilleures triches Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Meilleures triches Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. quoi comparer avant d'acheter marathon cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Assistance soft aim",
					description: "Hack aimbot Marathon: assist hack Aimbot undetected pour Marathon. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. assist hack Aimbot undetected pour Marathon.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boîtes et carcasses",
					description: "Hack ESP Marathon: boîtes ESP hack, pins carcasse et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. boîtes ESP hack, pins carcasse et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | Ce que ça signifie",
					description: "Unlock all Marathon: recherches unlock-all vs vrais outils ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acheter Marathon Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. recherches unlock-all vs vrais outils ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Marathon Cheats",
					description: "Politique de confidentialité pour Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Politique de confidentialité pour marathoncheats.org et les licences Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire les conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Les détails de paiement sont traités par le checkout Zadeyo — non stockés sur marathoncheats.org.",
							],
						},
						{
							h2: "Utilisation des données",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
								"E-mail : support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Marathon Cheats",
					description: "Politique de remboursement pour Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Politique de remboursement pour marathoncheats.org et les licences Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "Approbation du remboursement",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs BattlEye. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
								"E-mail : support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Marathon Cheats",
					description: "Conditions d'utilisation pour Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Conditions d'utilisation pour marathoncheats.org et les licences Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation des conditions",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye.",
							],
						},
						{
							h2: "Avertissement sur les risques",
							paragraphs: [
								"Marathon Cheats combine ESP wallhack, radar hack et Marathon Aimbot indétectables pour Marathon sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Utiliser des cheats peut enfreindre les conditions de l'équipe Marathon — vous assumez tout risque de bannissement.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@marathoncheats.org pour le support ou les demandes légales.",
								"E-mail : support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Marathon Cheats",
					accentShort: "Marathon Cheats",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Marathon auf Windows PC — BattlEye-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Marathon PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Marathon Cheats Paket ist live für Marathon auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye-Wartung unterstützt",
					antiCheatShort: "BattlEye Support",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Marathon Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Marathon — Checkout über Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Marathon Cheats für Marathon auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye-Wartung. Sofortige digitale Lieferung.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack und Aimbot",
					intro: "Undetected Windows PC Paket für Marathon: ESP Wallhack, Radar und Aimbot mit BattlEye-Wartung nach jedem Patch.",
					imageAlt: "Marathon ESP — Spieler-Tags Hack",
					galleryTitle: "Marathon Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Marathon Cheats 2026 führt",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Ideal um feindliche Squads in BR und loot run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Spielerboxen & Wallhack",
					description: "Marathon ESP: Spielerboxen, Kadaver-Marker und Wallhack-Overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Spielerboxen, Kadaver-Marker und Wallhack-Overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft-Aim Steuerung",
					description: "Marathon Aimbot: Soft Aim, FOV und Aimbot-Profile pro Spezies. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Soft Aim, FOV und Aimbot-Profile pro Spezies.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, Soft Aim, Radar-Steuerung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Features.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. ESP, Soft Aim, Radar-Steuerung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monatliche oder $150 Lifetime-Lizenzen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Preise.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. $35 monatliche oder $150 Lifetime-Lizenzen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC Aktivierung und Erststart-Setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Setup.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Windows PC Aktivierung und Erststart-Setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Wartungslog",
					description: "Updates: BattlEye Patch-Status und Rebuild-Notizen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Updates.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. BattlEye Patch-Status und Rebuild-Notizen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: Fragen zu ESP, Soft Aim, Lieferung und BattlEye. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Fragen zu ESP, Soft Aim, Lieferung und BattlEye.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: Bestellhilfe und Lizenz-Support-Kontakt. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Support.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Bestellhilfe und Lizenz-Support-Kontakt.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: Undetected-Wartung nach BattlEye Patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Undetected Cheats.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Undetected-Wartung nach BattlEye Patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Sichtbarkeit",
					description: "Marathon Wallhack: Wallhack ESP für Spieler, Kadaver und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Wallhack ESP für Spieler, Kadaver und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D-Radar-Hinweise für Flanken und Rotationen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. 2D-Radar-Hinweise für Flanken und Rotationen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch-Wartung",
					description: "BattlEye Bypass: wie BattlEye Updates für Marathon Cheats gehandhabt werden. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. wie BattlEye Updates für Marathon Cheats gehandhabt werden.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Käuferleitfaden",
					description: "Marathon Cheats 2026: 2026 marathon cheats Checkliste vor dem Checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. 2026 marathon cheats Checkliste vor dem Checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: Marathon Cheats Säule für ESP und Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Cheats Säule für ESP und Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Sofortzugang",
					description: "Marathon Cheat Download: digitaler Lizenz-Download nach Zahlung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. digitaler Lizenz-Download nach Zahlung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod-Menü | In-Game Toggles",
					description: "Marathon Mod-Menü: In-Client ESP- und Soft-Aim-Toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Mod-Menü",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Mod-Menü.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod-Menü",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod-Menü",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. In-Client ESP- und Soft-Aim-Toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Soft-Aim Einstellungen",
					description: "Marathon Soft Aim: sanfte Soft-Aim-Einstellungen für Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. sanfte Soft-Aim-Einstellungen für Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Marathon Cheats | Käufer-Checkliste",
					description: "Beste Marathon Cheats: was vor dem Kauf der marathon cheats verglichen werden sollte. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Marathon Cheats",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Beste Marathon Cheats.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Beste Marathon Cheats",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Marathon Cheats",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. was vor dem Kauf der marathon cheats verglichen werden sollte.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack | Soft-Aim Assist",
					description: "Marathon Aimbot Hack: undetected Aimbot-Hack-Assist für Marathon. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Aimbot Hack",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Aimbot Hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hack",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. undetected Aimbot-Hack-Assist für Marathon.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hack | Boxen & Loot",
					description: "Marathon ESP Hack: ESP-Hack-Boxen, Kadaver-Pins und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon ESP Hack",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon ESP Hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hack",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. ESP-Hack-Boxen, Kadaver-Pins und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | Was es bedeutet",
					description: "Marathon Unlock All: unlock-all Suchen vs echte ESP- und Aimbot-Tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. unlock-all Suchen vs echte ESP- und Aimbot-Tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Marathon Cheats",
					description: "Datenschutz für Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Datenschutz für marathoncheats.org und Marathon-Lizenzen.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Zahlungsdaten werden über Zadeyo-Checkout verarbeitet — nicht auf marathoncheats.org gespeichert.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Marathon Cheats",
					description: "Rückerstattung für Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Rückerstattung für marathoncheats.org und Marathon-Lizenzen.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "Rückerstattungsgenehmigung",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach BattlEye-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "So beantragen",
							paragraphs: [
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Marathon Cheats",
					description: "Nutzungsbedingungen für Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Nutzungsbedingungen für marathoncheats.org und Marathon-Lizenzen.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme der Bedingungen",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye-Wartung.",
							],
						},
						{
							h2: "Risikohinweis",
							paragraphs: [
								"Marathon Cheats bündelt ESP wallhack, radar hack und Marathon Aimbot als undetected Paket für Marathon auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Cheats können gegen die Nutzungsbedingungen des Marathon Teams verstoßen — Sie tragen das volle Ban-Risiko.",
							],
						},
						{
							h2: "Richtlinienänderungen",
							paragraphs: [
								"support@marathoncheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Marathon indetectáveis",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot para Marathon no PC Windows — manutenção BattlEye incluída.",
					subtitleShort: "ESP, radar e Aimbot para Marathon PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Marathon Cheats está ativo para Marathon no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção BattlEye incluída",
					antiCheatShort: "BattlEye incluído",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Marathon",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Marathon Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Marathon indetectáveis para Marathon no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye. Entrega digital instantánea.",
					h1: "Marathon Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Marathon no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye após cada patch.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galeria Marathon Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Marathon Cheats em 2026",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Ideal para ler epackrões inimigos em BR e loot run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Caixas de jogador e wallhack",
					description: "ESP Marathon: caixas de jogador, marcadores de carcaça e overlays wallhack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. caixas de jogador, marcadores de carcaça e overlays wallhack.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Controles soft aim",
					description: "Aimbot Marathon: soft aim, FOV e perfis Aimbot por espécie. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. soft aim, FOV e perfis Aimbot por espécie.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, controles de radar. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Recursos.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. ESP, soft aim, controles de radar.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: licenças de $35 mensais ou $150 vitalícias. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Preços.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. licenças de $35 mensais ou $150 vitalícias.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: ativação no Windows PC e configuração do primeiro lançamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Instalação.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. ativação no Windows PC e configuração do primeiro lançamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro BattlEye",
					description: "Atualizações: status de patches BattlEye e notas de rebuild. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Atualizações.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. status de patches BattlEye e notas de rebuild.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: perguntas sobre ESP, soft aim, entrega e BattlEye. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. perguntas sobre ESP, soft aim, entrega e BattlEye.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: ajuda com pedidos e contato de suporte de licenças. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Suporte.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. ajuda com pedidos e contato de suporte de licenças.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: manutenção undetected após patches BattlEye. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Cheats indetectáveis.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. manutenção undetected após patches BattlEye.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | Visibilidade ESP",
					description: "Marathon Wallhack: wallhack ESP para jogadores, carcaças e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. wallhack ESP para jogadores, carcaças e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: sinais de radar 2D para flancos e rotações. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. sinais de radar 2D para flancos e rotações.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenção de patches",
					description: "Bypass BattlEye: como as atualizações BattlEye são tratadas para Marathon cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. como as atualizações BattlEye são tratadas para Marathon cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Marathon 2026 | Guia do comprador",
					description: "Cheats Marathon 2026: checklist de marathon cheats 2026 antes do checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Marathon 2026",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Cheats Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheats Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheats Marathon 2026",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. checklist de marathon cheats 2026 antes do checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Marathon | Guia ESP e Aimbot",
					description: "Cheats Marathon: pilar Marathon Cheats para ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Cheats Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. pilar Marathon Cheats para ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Marathon Cheats | Acesso instantâneo",
					description: "Download Marathon Cheats: download de licença digital após pagamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Marathon Cheats",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Download Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Download Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Marathon Cheats",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. download de licença digital após pagamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marathon | Controles in-game",
					description: "Menu mod Marathon: toggles de ESP e soft aim no cliente. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Menu mod Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Menu mod Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. toggles de ESP e soft aim no cliente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Ajustes soft aim",
					description: "Soft aim Marathon: ajustes suaves de soft aim para Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. ajustes suaves de soft aim para Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Marathon | Checklist do comprador",
					description: "Melhores cheats Marathon: o que comparar antes de comprar marathon cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Melhores cheats Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Melhores cheats Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. o que comparar antes de comprar marathon cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Assistência soft aim",
					description: "Hack aimbot Marathon: assistência undetected de hack Aimbot para Marathon. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. assistência undetected de hack Aimbot para Marathon.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Caixas e carcasses",
					description: "Hack ESP Marathon: caixas ESP hack, pins de carcaça e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. caixas ESP hack, pins de carcaça e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | O que significa",
					description: "Unlock all Marathon: buscas unlock-all vs ferramentas reais ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Comprar Marathon Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. buscas unlock-all vs ferramentas reais ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Marathon Cheats",
					description: "Política de privacidade para Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Política de privacidade para marathoncheats.org e licenças Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler termos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informações que coletamos",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Detalhes de pagamento são processados pelo checkout Zadeyo — não armazenados em marathoncheats.org.",
							],
						},
						{
							h2: "Como usamos os dados",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Seus direitos",
							paragraphs: [
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Marathon Cheats",
					description: "Política de reembolso para Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Política de reembolso para marathoncheats.org e licenças Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "Aprovação de reembolso",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches BattlEye. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Como solicitar",
							paragraphs: [
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Marathon Cheats",
					description: "Termos de uso para Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Termos de uso para marathoncheats.org e licenças Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceitação dos termos",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye.",
							],
						},
						{
							h2: "Aviso de risco",
							paragraphs: [
								"Marathon Cheats reúne ESP wallhack, radar hack e Marathon Aimbot indetectáveis para Marathon no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Usar cheats pode violar os termos da equipe Marathon — você assume todo risco de ban.",
							],
						},
						{
							h2: "Alterações de política",
							paragraphs: [
								"Contacte support@marathoncheats.org para suporte ou questões legais.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Marathon indetectable",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot per Marathon su PC Windows — manutenzione BattlEye inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Marathon PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Marathon Cheats è attivo per Marathon su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione BattlEye supportata",
					antiCheatShort: "BattlEye supportato",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Marathon",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Marathon Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Marathon indetectable per Marathon su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye. Consegna digitale istantanea.",
					h1: "Marathon Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Marathon su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye dopo ogni patch.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galleria Marathon Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Marathon Cheats nel 2026",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Ideale per leggere packre nemiche in BR e loot run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Box giocatore e wallhack",
					description: "ESP Marathon: box giocatore, marcatori carcassa e overlay wallhack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. box giocatore, marcatori carcassa e overlay wallhack.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Controlli soft aim",
					description: "Aimbot Marathon: soft aim, FOV e profili Aimbot per specie. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. soft aim, FOV e profili Aimbot per specie.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, controlli radar. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Funzioni.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. ESP, soft aim, controlli radar.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: licenze $35 mensili o $150 lifetime. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Prezzi.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. licenze $35 mensili o $150 lifetime.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: attivazione Windows PC e setup al primo avvio. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Setup.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. attivazione Windows PC e setup al primo avvio.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione BattlEye",
					description: "Aggiornamenti: stato patch BattlEye e note di rebuild. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Aggiornamenti.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. stato patch BattlEye e note di rebuild.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: domande su ESP, soft aim, consegna e BattlEye. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. domande su ESP, soft aim, consegna e BattlEye.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: aiuto ordini e contatto supporto licenze. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Supporto.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. aiuto ordini e contatto supporto licenze.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: manutenzione undetected dopo patch BattlEye. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Cheat indetectable.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. manutenzione undetected dopo patch BattlEye.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | Visibilità ESP",
					description: "Marathon Wallhack: wallhack ESP per giocatori, carcasses e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. wallhack ESP per giocatori, carcasses e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: segnali radar 2D per flanchi e rotazioni. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. segnali radar 2D per flanchi e rotazioni.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenzione patch",
					description: "Bypass BattlEye: come vengono gestiti gli aggiornamenti BattlEye per Marathon cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. come vengono gestiti gli aggiornamenti BattlEye per Marathon cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marathon 2026 | Guida acquirente",
					description: "Cheat Marathon 2026: checklist marathon cheats 2026 prima del checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Marathon 2026",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Cheat Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheat Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat Marathon 2026",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. checklist marathon cheats 2026 prima del checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marathon | Guida ESP e Aimbot",
					description: "Cheat Marathon: pilastro Marathon Cheats per ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Cheat Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. pilastro Marathon Cheats per ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Marathon Cheats | Accesso istantaneo",
					description: "Download Marathon Cheats: download licenza digitale dopo il pagamento. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Marathon Cheats",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Download Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Download Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Marathon Cheats",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. download licenza digitale dopo il pagamento.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marathon | Toggle in-game",
					description: "Mod menu Marathon: toggle ESP e soft aim in-client. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Mod menu Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Mod menu Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. toggle ESP e soft aim in-client.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Impostazioni soft aim",
					description: "Soft aim Marathon: impostazioni soft aim fluide per Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. impostazioni soft aim fluide per Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Marathon | Checklist acquirente",
					description: "Migliori cheat Marathon: cosa confrontare prima di acquistare marathon cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Migliori cheat Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Migliori cheat Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. cosa confrontare prima di acquistare marathon cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Assist soft aim",
					description: "Hack aimbot Marathon: assist undetected hack Aimbot per Marathon. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. assist undetected hack Aimbot per Marathon.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Box e carcasses",
					description: "Hack ESP Marathon: box ESP hack, pin carcassa e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. box ESP hack, pin carcassa e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | Cosa significa",
					description: "Unlock all Marathon: ricerche unlock-all vs veri strumenti ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Acquista Marathon Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. ricerche unlock-all vs veri strumenti ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Marathon Cheats",
					description: "Informativa privacy per Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Informativa privacy per marathoncheats.org e licenze Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi i termini",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informazioni raccolte",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"I dati di pagamento sono elaborati dal checkout Zadeyo — non memorizzati su marathoncheats.org.",
							],
						},
						{
							h2: "Uso dei dati",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "I tuoi diritti",
							paragraphs: [
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Marathon Cheats",
					description: "Politica di rimborso per Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Politica di rimborso per marathoncheats.org e licenze Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Consegna digitale",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "Approvazione rimborso",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch BattlEye. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Come richiedere",
							paragraphs: [
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Marathon Cheats",
					description: "Termini di utilizzo per Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Termini di utilizzo per marathoncheats.org e licenze Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Accettazione dei termini",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye.",
							],
						},
						{
							h2: "Avviso sui rischi",
							paragraphs: [
								"Marathon Cheats unisce ESP wallhack, radar hack e Marathon Aimbot indetectable per Marathon su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Usare cheat può violare i termini del team Marathon — assumi tutto il rischio di ban.",
							],
						},
						{
							h2: "Modifiche alla policy",
							paragraphs: [
								"Contatta support@marathoncheats.org per supporto o richieste legali.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Marathon Cheats",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Marathon op Windows PC — BattlEye-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Marathon PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Marathon Cheats pakket is live voor Marathon op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye-onderhoud ondersteund",
					antiCheatShort: "BattlEye support",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback va Marathon Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected marathon cheats voor Marathon op PC. ESP wallhack, radar hack en Aimbot met BattlEye-onderhoud. Directe digitale levering.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Marathon: ESP wallhack, radar en Aimbot met BattlEye-onderhoud na elke patch.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Marathon Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Marathon Cheats in 2026",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Ideaal om vijandelijke packs te lezen in BR en loot run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: spelerboxen, karkas-markers en wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. spelerboxen, karkas-markers en wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV en Aimbot-profielen per soort. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. soft aim, FOV en Aimbot-profielen per soort.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar bediening. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Functies.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. ESP, soft aim, radar bediening.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 maandelijkse of $150 lifetime licenties. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Prijzen.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. $35 maandelijkse of $150 lifetime licenties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activatie en eerste-start setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Setup.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Windows PC activatie en eerste-start setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Maintenance Log",
					description: "Updates: BattlEye patchstatus en rebuild-notities. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Updates.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. BattlEye patchstatus en rebuild-notities.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: vragen over ESP, soft aim, levering en BattlEye. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. vragen over ESP, soft aim, levering en BattlEye.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: bestelhulp en licentie support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Support.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. bestelhulp en licentie support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | BattlEye Safe Status",
					description: "Undetected Cheats: undetected onderhoud na BattlEye patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Undetected Cheats.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. undetected onderhoud na BattlEye patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP voor spelers, karkassen en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. wallhack ESP voor spelers, karkassen en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signalen voor flanks en rotaties. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. 2D radar signalen voor flanks en rotaties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: hoe BattlEye updates worden afgehandeld voor Marathon cheats. directe digitale levering. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. hoe BattlEye updates worden afgehandeld voor Marathon cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: 2026 marathon cheats checklist vóór checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. 2026 marathon cheats checklist vóór checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: Marathon Cheats pijler voor ESP en Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Cheats pijler voor ESP en Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Instant Access",
					description: "Marathon Cheat Download: digitale licentiedownload na betaling. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. digitale licentiedownload na betaling.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod Menu | In-Game Toggles",
					description: "Marathon Mod Menu: in-client ESP en soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Mod Menu",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Mod Menu.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod Menu",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod Menu",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. in-client ESP en soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: vloeiende soft aim instellingen voor Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. vloeiende soft aim instellingen voor Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Marathon Cheats | Buyer Checklist",
					description: "Beste Marathon Cheats: wat te vergelijken vóór aankoop van marathon cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Marathon Cheats",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Beste Marathon Cheats.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Beste Marathon Cheats",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Marathon Cheats",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. wat te vergelijken vóór aankoop van marathon cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack | Soft Aim Assist",
					description: "Marathon Aimbot Hack: undetected Aimbot hack assist voor Marathon. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Aimbot Hack",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Aimbot Hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hack",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. undetected Aimbot hack assist voor Marathon.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hack | Boxes & Loot",
					description: "Marathon ESP Hack: ESP hack boxen, karkas pins en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon ESP Hack",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon ESP Hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hack",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. ESP hack boxen, karkas pins en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all zoekopdrachten vs echte ESP en Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. unlock-all zoekopdrachten vs echte ESP en Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
								"support@marathoncheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Marathon Cheats",
					description: "Privacybeleid voor Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Privacybeleid voor marathoncheats.org en Marathon-licenties.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Voorwaarden lezen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informatie die we verzamelen",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Betalingsgegevens worden verwerkt via Zadeyo checkout — niet opgeslagen op marathoncheats.org.",
							],
						},
						{
							h2: "Hoe we gegevens gebruiken",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Uw rechten",
							paragraphs: [
								"support@marathoncheats.org voor support en juridische vragen.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Marathon Cheats",
					description: "Restitutiebeleid voor Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Restitutiebeleid voor marathoncheats.org en Marathon-licenties.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale levering",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "Restitutiegoedkeuring",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na BattlEye-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Hoe aanvragen",
							paragraphs: [
								"support@marathoncheats.org voor support en juridische vragen.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Marathon Cheats",
					description: "Gebruiksvoorwaarden voor Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Gebruiksvoorwaarden voor marathoncheats.org en Marathon-licenties.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptatie van voorwaarden",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye-onderhoud.",
							],
						},
						{
							h2: "Risicowaarschuwing",
							paragraphs: [
								"Marathon Cheats bundelt ESP wallhack, radar hack en Marathon Aimbot als undetected pakket voor Marathon op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Cheats gebruiken kan in strijd zijn met de voorwaarden van het Bungie — u neemt alle ban-risico's op u.",
							],
						},
						{
							h2: "Beleidswijzigingen",
							paragraphs: [
								"support@marathoncheats.org voor support en juridische vragen.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Marathon",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack i Aimbot do Marathon na PC Windows — konserwacja BattlEye w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Marathon PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Marathon Cheats jest aktywny dla Marathon na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji BattlEye",
					antiCheatShort: "BattlEye wsparcie",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Marathon",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Marathon Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Marathon — checkout przez Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Marathon dla Marathon na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye. Natychmiastowa dostawa cyfrowa.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Marathon na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye po każdym patchu.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galeria Marathon Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Marathon Cheats w 2026",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Idealny do czytania wrogich packów w BR i loot run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: boxy graczy, markery tusz i overlay wallhack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. boxy graczy, markery tusz i overlay wallhack.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim, FOV i profile Aimbot per gatunek. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. soft aim, FOV i profile Aimbot per gatunek.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, sterowanie radar. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Funkcje.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. ESP, soft aim, sterowanie radar.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: licencje $35 miesięcznie lub $150 lifetime. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Cennik.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. licencje $35 miesięcznie lub $150 lifetime.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: aktywacja Windows PC i konfiguracja pierwszego uruchomienia. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Instalacja.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. aktywacja Windows PC i konfiguracja pierwszego uruchomienia.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | BattlEye Maintenance Log",
					description: "Aktualizacje: status patchy BattlEye i notatki rebuild. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Aktualizacje.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. status patchy BattlEye i notatki rebuild.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pytania o ESP, soft aim, dostawę i BattlEye. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. pytania o ESP, soft aim, dostawę i BattlEye.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: pomoc przy zamówieniu i kontakt wsparcia licencji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Wsparcie.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. pomoc przy zamówieniu i kontakt wsparcia licencji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | BattlEye Safe Status",
					description: "Cheaty undetected: undetected konserwacja po patchach BattlEye. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Cheaty undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. undetected konserwacja po patchach BattlEye.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP dla graczy, tusz i dystansu. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. wallhack ESP dla graczy, tusz i dystansu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar wskazówki dla flank i rotacji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. 2D radar wskazówki dla flank i rotacji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: jak obsługiwane są aktualizacje BattlEye dla Marathon cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. jak obsługiwane są aktualizacje BattlEye dla Marathon cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Marathon 2026 | Buyer Guide",
					description: "Cheaty Marathon 2026: checklista marathon cheats 2026 przed checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Marathon 2026",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Cheaty Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheaty Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheaty Marathon 2026",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. checklista marathon cheats 2026 przed checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Marathon | ESP Aimbot Guide",
					description: "Cheaty Marathon: filary Marathon Cheats dla ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Cheaty Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. filary Marathon Cheats dla ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Marathon Cheats | Instant Access",
					description: "Pobieranie Marathon Cheats: cyfrowe pobranie licencji po płatności. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Marathon Cheats",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Pobieranie Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Pobieranie Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Marathon Cheats",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. cyfrowe pobranie licencji po płatności.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marathon | In-Game Toggles",
					description: "Mod menu Marathon: przełączniki ESP i soft aim w kliencie. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Mod menu Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Mod menu Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. przełączniki ESP i soft aim w kliencie.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: płynne ustawienia soft aim dla Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. płynne ustawienia soft aim dla Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Marathon | Buyer Checklist",
					description: "Najlepsze cheaty Marathon: co porównać przed zakupem marathon cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Najlepsze cheaty Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Najlepsze cheaty Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. co porównać przed zakupem marathon cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Soft Aim Assist",
					description: "Hack aimbot Marathon: undetected Aimbot hack assist dla Marathon. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. undetected Aimbot hack assist dla Marathon.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boxes & Loot",
					description: "Hack ESP Marathon: boxy ESP hack, piny tusz i dystans. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. boxy ESP hack, piny tusz i dystans.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Kup Marathon Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Marathon Cheats",
					description: "Polityka prywatności dla Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Polityka prywatności dla marathoncheats.org i licencji Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj warunki",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informacje, które zbieramy",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Dane płatności są przetwarzane przez checkout Zadeyo — nie przechowywane na marathoncheats.org.",
							],
						},
						{
							h2: "Jak wykorzystujemy dane",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Twoje prawa",
							paragraphs: [
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Marathon Cheats",
					description: "Polityka zwrotów dla Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Polityka zwrotów dla marathoncheats.org i licencji Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dostawa cyfrowa",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "Zatwierdzenie zwrotu",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach BattlEye. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Jak złożyć wniosek",
							paragraphs: [
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Marathon Cheats",
					description: "Warunki użytkowania dla Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Warunki użytkowania dla marathoncheats.org i licencji Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Akceptacja warunków",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye.",
							],
						},
						{
							h2: "Ostrzeżenie o ryzyku",
							paragraphs: [
								"Marathon Cheats łączy ESP wallhack, radar hack i Marathon Aimbot jako pakiet undetected dla Marathon na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Korzystanie z cheatów może naruszać warunki zespołu Marathon — bierzesz na siebie ryzyko bana.",
							],
						},
						{
							h2: "Zmiany polityki",
							paragraphs: [
								"support@marathoncheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Marathon",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack и Aimbot для Marathon на Windows PC — обслуживание BattlEye включено.",
					subtitleShort: "ESP, radar и Aimbot для Marathon PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Marathon Cheats активен для Marathon на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания BattlEye",
					antiCheatShort: "BattlEye поддержка",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Marathon Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Marathon — оплата через Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Marathon для Marathon на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye. Мгновенная цифровая доставка.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Marathon на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye после патчей.",
					imageAlt: "Marathon ESP — теги игроков hack",
					galleryTitle: "Галерея Marathon Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Marathon Cheats в 2026",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Идеально для чтения вражеских отрядов в BR и loot run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Боксы игроков и wallhack",
					description: "ESP Marathon: боксы игроков, маркеры туш и wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. боксы игроков, маркеры туш и wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Управление soft aim",
					description: "Aimbot Marathon: soft aim, FOV и профили Aimbot по видам. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. soft aim, FOV и профили Aimbot по видам.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, управление radar. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Функции.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. ESP, soft aim, управление radar.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: лицензии $35 в месяц или $150 lifetime. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Цены.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. лицензии $35 в месяц или $150 lifetime.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: активация на Windows PC и настройка первого запуска. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Установка.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. активация на Windows PC и настройка первого запуска.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал BattlEye",
					description: "Обновления: статус патчей BattlEye и заметки о rebuild. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Обновления.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. статус патчей BattlEye и заметки о rebuild.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: вопросы об ESP, soft aim, доставке и BattlEye. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. вопросы об ESP, soft aim, доставке и BattlEye.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: помощь с заказом и контакт поддержки лицензий. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Поддержка.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. помощь с заказом и контакт поддержки лицензий.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected обслуживание после патчей BattlEye. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Undetected читы.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. undetected обслуживание после патчей BattlEye.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | Видимость ESP",
					description: "Marathon Wallhack: wallhack ESP для игроков, туш и дистанции. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. wallhack ESP для игроков, туш и дистанции.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar подсказки для флангов и ротаций. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. 2D radar подсказки для флангов и ротаций.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Обслуживание патчей",
					description: "Bypass BattlEye: как обрабатываются обновления BattlEye для Marathon cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. как обрабатываются обновления BattlEye для Marathon cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Marathon 2026 | Гайд покупателя",
					description: "Читы Marathon 2026: чеклист marathon cheats 2026 перед checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Marathon 2026",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Читы Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Читы Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Читы Marathon 2026",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. чеклист marathon cheats 2026 перед checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Marathon | Гайд ESP и Aimbot",
					description: "Читы Marathon: столп Marathon Cheats для ESP и Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Читы Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. столп Marathon Cheats для ESP и Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Marathon Cheats | Мгновенный доступ",
					description: "Скачать Marathon Cheats: цифровая загрузка лицензии после оплаты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Marathon Cheats",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Скачать Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Скачать Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Marathon Cheats",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. цифровая загрузка лицензии после оплаты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Marathon | Игровые переключатели",
					description: "Мод-меню Marathon: переключатели ESP и soft aim в клиенте. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Мод-меню Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Мод-меню Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. переключатели ESP и soft aim в клиенте.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Настройки soft aim",
					description: "Soft aim Marathon: плавные настройки soft aim для Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. плавные настройки soft aim для Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Marathon | Чеклист покупателя",
					description: "Лучшие читы Marathon: что сравнить перед покупкой marathon cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Лучшие читы Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Лучшие читы Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. что сравнить перед покупкой marathon cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Marathon | Soft aim ассист",
					description: "Хак aimbot Marathon: undetected Aimbot hack assist для Marathon. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Хак aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. undetected Aimbot hack assist для Marathon.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Marathon | Боксы и лут",
					description: "Хак ESP Marathon: ESP hack боксы, pins туш и дистанция. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Хак ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Хак ESP Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. ESP hack боксы, pins туш и дистанция.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | Что это значит",
					description: "Unlock all Marathon: поиски unlock-all vs настоящие ESP и Aimbot инструменты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купить Marathon Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. поиски unlock-all vs настоящие ESP и Aimbot инструменты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
								"support@marathoncheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Marathon Cheats",
					description: "Политика конфиденциальности для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Политика конфиденциальности для marathoncheats.org и лицензий Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать условия",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Информация, которую мы собираем",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Платёжные данные обрабатываются через checkout Zadeyo — не хранятся на marathoncheats.org.",
							],
						},
						{
							h2: "Как мы используем данные",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Ваши права",
							paragraphs: [
								"support@marathoncheats.org для поддержки и юридических вопросов.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Marathon Cheats",
					description: "Политика возврата для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Политика возврата для marathoncheats.org и лицензий Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифровая доставка",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "Одобрение возврата",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей BattlEye. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Как запросить",
							paragraphs: [
								"support@marathoncheats.org для поддержки и юридических вопросов.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Marathon Cheats",
					description: "Условия использования для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Условия использования для marathoncheats.org и лицензий Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Принятие условий",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye.",
							],
						},
						{
							h2: "Предупреждение о рисках",
							paragraphs: [
								"Marathon Cheats объединяет ESP wallhack, radar hack и Marathon Aimbot в undetected пакете для Marathon на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Использование читов может нарушать условия команды Marathon — вы принимаете на себя риск бана.",
							],
						},
						{
							h2: "Изменения политики",
							paragraphs: [
								"support@marathoncheats.org для поддержки и юридических вопросов.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Marathon hileleri",
					accentShort: "Marathon Cheats",
					subtitle: "Marathon Windows PC için ESP wallhack, radar hack ve Aimbot — BattlEye bakımı dahil.",
					subtitleShort: "Marathon PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Marathon Cheats paketi Marathon Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "BattlEye bakım desteği",
					antiCheatShort: "BattlEye destek",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Marathon Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Marathon için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Marathon için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye bakımı. Anında dijital teslimat.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Marathon Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye bakımı dahil.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Marathon Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Marathon Cheats",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. BR ve loot run'da düşman pack okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: oyuncu kutuları, leş işaretleri ve wallhack overlay'leri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. oyuncu kutuları, leş işaretleri ve wallhack overlay'leri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV ve türe özel Aimbot profilleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. soft aim, FOV ve türe özel Aimbot profilleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar kontrolleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. ESP, soft aim, radar kontrolleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: aylık $35 veya lifetime $150 lisanslar. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. aylık $35 veya lifetime $150 lisanslar.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC aktivasyonu ve ilk açılış kurulumu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Windows PC aktivasyonu ve ilk açılış kurulumu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | BattlEye Maintenance Log",
					description: "Güncellemeler: BattlEye yama durumu ve rebuild notları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. BattlEye yama durumu ve rebuild notları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, teslimat ve BattlEye soruları. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. SSS.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. ESP, soft aim, teslimat ve BattlEye soruları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: sipariş yardımı ve lisans destek iletişimi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Destek.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. sipariş yardımı ve lisans destek iletişimi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | BattlEye Safe Status",
					description: "Undetected hileler: BattlEye yamalarından sonra undetected bakım. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. BattlEye yamalarından sonra undetected bakım.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: oyuncular, leşler ve mesafe için wallhack ESP. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. oyuncular, leşler ve mesafe için wallhack ESP.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: flank ve rotasyonlar için 2D radar ipuçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. flank ve rotasyonlar için 2D radar ipuçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye bypass | Patch Maintenance",
					description: "BattlEye bypass: Marathon cheats için BattlEye güncellemelerinin nasıl yönetildiği. anında dijital teslimat. undetected — Windows PC.",
					h1: "BattlEye bypass",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. BattlEye bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye bypass",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon cheats için BattlEye güncellemelerinin nasıl yönetildiği.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Hileleri 2026 | Buyer Guide",
					description: "Marathon Hileleri 2026: checkout öncesi 2026 marathon cheats kontrol listesi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Hileleri 2026",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Hileleri 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Hileleri 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Hileleri 2026",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. checkout öncesi 2026 marathon cheats kontrol listesi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Hileleri | ESP Aimbot Guide",
					description: "Marathon Hileleri: ESP ve Aimbot için Marathon Cheats sütunu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Hileleri",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Hileleri.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Hileleri",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Hileleri",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. ESP ve Aimbot için Marathon Cheats sütunu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Hile İndir | Instant Access",
					description: "Marathon Hile İndir: ödeme sonrası dijital lisans indirme. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Hile İndir",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Hile İndir.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Hile İndir",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Hile İndir",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. ödeme sonrası dijital lisans indirme.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod Menü | In-Game Toggles",
					description: "Marathon Mod Menü: istemci içi ESP ve soft aim toggle'ları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Mod Menü",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Mod Menü.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod Menü",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod Menü",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. istemci içi ESP ve soft aim toggle'ları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: Windows PC için akıcı soft aim ayarları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Windows PC için akıcı soft aim ayarları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Marathon Hileleri | Buyer Checklist",
					description: "En İyi Marathon Hileleri: marathon cheats satın almadan önce ne karşılaştırılmalı. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Marathon Hileleri",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. En İyi Marathon Hileleri.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "En İyi Marathon Hileleri",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Marathon Hileleri",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. marathon cheats satın almadan önce ne karşılaştırılmalı.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hilesi | Soft Aim Assist",
					description: "Marathon Aimbot Hilesi: Marathon için undetected Aimbot hack assist. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Aimbot Hilesi",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Aimbot Hilesi.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hilesi",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hilesi",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon için undetected Aimbot hack assist.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hilesi | Boxes & Loot",
					description: "Marathon ESP Hilesi: ESP hack kutuları, leş pinleri ve mesafe. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon ESP Hilesi",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon ESP Hilesi.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hilesi",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hilesi",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. ESP hack kutuları, leş pinleri ve mesafe.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all aramaları vs gerçek ESP ve Aimbot araçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. unlock-all aramaları vs gerçek ESP ve Aimbot araçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
								"Destek ve yasal sorular için support@marathoncheats.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Marathon Cheats",
					description: "Gizlilik politikası Marathon Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Gizlilik politikası marathoncheats.org ve Marathon lisansları için.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Şartları oku",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Topladığımız bilgiler",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Ödeme bilgileri Zadeyo checkout ile işlenir — marathoncheats.org'da saklanmaz.",
							],
						},
						{
							h2: "Verileri nasıl kullanıyoruz",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Haklarınız",
							paragraphs: [
								"Destek ve yasal sorular için support@marathoncheats.org.",
								"E-posta: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Marathon Cheats",
					description: "İade politikası Marathon Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "İade politikası",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. İade politikası marathoncheats.org ve Marathon lisansları için.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dijital teslimat",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "İade onayı",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"BattlEye yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Nasıl talep edilir",
							paragraphs: [
								"Destek ve yasal sorular için support@marathoncheats.org.",
								"E-posta: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Marathon Cheats",
					description: "Kullanım şartları Marathon Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Kullanım şartları marathoncheats.org ve Marathon lisansları için.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Şartların kabulü",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye bakımı içerir.",
							],
						},
						{
							h2: "Risk uyarısı",
							paragraphs: [
								"Marathon Cheats, Marathon için Windows PC üzerinde ESP wallhack, radar hack ve Marathon Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Hile kullanmak Marathon ekibi şartlarını ihlal edebilir — tüm ban riskini üstlenirsiniz.",
							],
						},
						{
							h2: "Politika değişiklikleri",
							paragraphs: [
								"Destek ve yasal sorular için support@marathoncheats.org.",
								"E-posta: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Marathon غير مكتشف",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Marathon على Windows PC — صيانة BattlEye مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Marathon PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Marathon Cheats نشطة لـ Marathon على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة BattlEye",
					antiCheatShort: "دعم BattlEye",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Marathon Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Marathon — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Marathon undetected لـ Marathon على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye. تسليم رقمي فوري.",
					h1: "Marathon Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Marathon على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "معرض Marathon Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Marathon Cheats في 2026",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. مثالي لقراءة فرق العدو في BR وloot run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: صناديق اللاعبين وعلامات الجيفة وoverlays wallhack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. صناديق اللاعبين وعلامات الجيفة وoverlays wallhack.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim وFOV وملفات Aimbot لكل نوع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. soft aim وFOV وملفات Aimbot لكل نوع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP وsoft aim وضوابط radar. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. الميزات.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ESP وsoft aim وضوابط radar.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: تراخيص $35 شهرياً أو $150 lifetime. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. الأسعار.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. تراخيص $35 شهرياً أو $150 lifetime.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: تفعيل Windows PC وإعداد أول تشغيل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. التثبيت.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. تفعيل Windows PC وإعداد أول تشغيل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | BattlEye Maintenance Log",
					description: "التحديثات: حالة patch BattlEye وملاحظات rebuild. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. التحديثات.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. حالة patch BattlEye وملاحظات rebuild.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: أسئلة ESP وsoft aim والتسليم وBattlEye. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. الأسئلة.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. أسئلة ESP وsoft aim والتسليم وBattlEye.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: مساعدة الطلبات واتصال دعم التراخيص. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. الدعم.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. مساعدة الطلبات واتصال دعم التراخيص.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | BattlEye Safe Status",
					description: "غش undetected: صيانة undetected بعد patch BattlEye. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. غش undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. صيانة undetected بعد patch BattlEye.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP للاعبين والجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. wallhack ESP للاعبين والجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: كيف تُدار تحديثات BattlEye لـ Marathon cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. كيف تُدار تحديثات BattlEye لـ Marathon cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Marathon 2026 | Buyer Guide",
					description: "غش Marathon 2026: قائمة marathon cheats 2026 قبل checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Marathon 2026",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. غش Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "غش Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "غش Marathon 2026",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. قائمة marathon cheats 2026 قبل checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Marathon | ESP Aimbot Guide",
					description: "غش Marathon: ركيزة Marathon Cheats لـ ESP وAimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. غش Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ركيزة Marathon Cheats لـ ESP وAimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Marathon Cheats | Instant Access",
					description: "تحميل Marathon Cheats: تنزيل ترخيص رقمي بعد الدفع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Marathon Cheats",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. تحميل Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "تحميل Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Marathon Cheats",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. تنزيل ترخيص رقمي بعد الدفع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Marathon | In-Game Toggles",
					description: "قائمة مود Marathon: مفاتيح ESP وsoft aim داخل العميل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. قائمة مود Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "قائمة مود Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. مفاتيح ESP وsoft aim داخل العميل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: إعدادات soft aim سلسة لـ Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. إعدادات soft aim سلسة لـ Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Marathon | Buyer Checklist",
					description: "أفضل غش Marathon: ما يجب مقارنته قبل شراء marathon cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. أفضل غش Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "أفضل غش Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ما يجب مقارنته قبل شراء marathon cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Marathon | Soft Aim Assist",
					description: "هاك Aimbot Marathon: مساعدة hack Aimbot undetected لـ Marathon. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. هاك Aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. مساعدة hack Aimbot undetected لـ Marathon.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Marathon | Boxes & Loot",
					description: "هاك ESP Marathon: صناديق ESP hack وpins الجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. هاك ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "هاك ESP Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. صناديق ESP hack وpins الجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "اشترِ Marathon Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
								"support@marathoncheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Marathon Cheats",
					description: "سياسة الخصوصية لـ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. سياسة الخصوصية لـ marathoncheats.org وتراخيص Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تُعالَج تفاصيل الدفع عبر checkout Zadeyo — ولا تُخزَّن على marathoncheats.org.",
							],
						},
						{
							h2: "كيف نستخدم البيانات",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@marathoncheats.org للدعم والطلبات القانونية.",
								"البريد: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Marathon Cheats",
					description: "سياسة الاسترداد لـ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. سياسة الاسترداد لـ marathoncheats.org وتراخيص Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches BattlEye. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@marathoncheats.org للدعم والطلبات القانونية.",
								"البريد: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Marathon Cheats",
					description: "شروط الاستخدام لـ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. شروط الاستخدام لـ marathoncheats.org وتراخيص Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye.",
							],
						},
						{
							h2: "إخلاء المسؤولية عن المخاطر",
							paragraphs: [
								"Marathon Cheats يجمع ESP wallhack وradar hack وMarathon Aimbot غير مكتشف لـ Marathon على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"استخدام الغش قد ينتهك شروط فريق Marathon — أنت تتحمل كل مخاطر الحظر.",
							],
						},
						{
							h2: "تغييرات السياسة",
							paragraphs: [
								"support@marathoncheats.org للدعم والطلبات القانونية.",
								"البريد: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Marathonチート",
					accentShort: "Marathon Cheats",
					subtitle: "Marathon Windows PC向けESP wallhack、radar hack、Aimbot — BattlEyeメンテナンス付き。",
					subtitleShort: "Marathon PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Marathon CheatsパッケージはMarathon Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEyeメンテナンス対応",
					antiCheatShort: "BattlEye対応",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Marathon Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Marathon向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Marathon向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEyeメンテナンス。即時デジタル配信。",
					h1: "Marathon Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Marathon Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEyeメンテナンス付き。",
					imageAlt: "marathon cheats hero ESP aimbot wallhack",
					galleryTitle: "Marathon Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にMarathon Cheatsを選ぶ理由",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。BRとloot runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: プレイヤーボックス、死体マーカー、wallhackオーバーレイ. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。プレイヤーボックス、死体マーカー、wallhackオーバーレイ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim、FOV、種別ごとのAimbotプロファイル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。soft aim、FOV、種別ごとのAimbotプロファイル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP、soft aim、radarコントロール. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。機能.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。ESP、soft aim、radarコントロール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: 月額$35またはlifetime $150ライセンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。料金.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。月額$35またはlifetime $150ライセンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PCアクティベーションと初回起動セットアップ. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Windows PCアクティベーションと初回起動セットアップ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEyeパッチ状況とrebuildメモ. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。更新.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。BattlEyeパッチ状況とrebuildメモ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP、soft aim、配信、BattlEyeに関する質問. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。ESP、soft aim、配信、BattlEyeに関する質問.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: 注文ヘルプとライセンスサポート連絡先. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。注文ヘルプとライセンスサポート連絡先.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | BattlEye Safe Status",
					description: "Undetectedチート: BattlEyeパッチ後のundetectedメンテナンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。BattlEyeパッチ後のundetectedメンテナンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: プレイヤー、死体、距離向けwallhack ESP. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。プレイヤー、死体、距離向けwallhack ESP.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 側面攻撃とローテーション向け2D radarキュー. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。側面攻撃とローテーション向け2D radarキュー.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: Marathon cheats向けBattlEye更新の対応方法. 即時デジタル配信. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon cheats向けBattlEye更新の対応方法.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: checkout前の2026 marathon cheatsチェックリスト. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。checkout前の2026 marathon cheatsチェックリスト.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: ESPとAimbotのMarathon Cheats柱. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。ESPとAimbotのMarathon Cheats柱.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Instant Access",
					description: "Marathon Cheat Download: 支払い後のデジタルライセンスダウンロード. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。支払い後のデジタルライセンスダウンロード.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod Menu | In-Game Toggles",
					description: "Marathon Mod Menu: クライアント内ESPとsoft aimトグル. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Mod Menu",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Mod Menu.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod Menu",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod Menu",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。クライアント内ESPとsoft aimトグル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: Windows PC向けスムーズなsoft aim設定. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Windows PC向けスムーズなsoft aim設定.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Marathonチート | Buyer Checklist",
					description: "最強Marathonチート: marathon cheats購入前に比較すべき点. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Marathonチート",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。最強Marathonチート.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "最強Marathonチート",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Marathonチート",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。marathon cheats購入前に比較すべき点.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack | Soft Aim Assist",
					description: "Marathon Aimbot Hack: Marathon向けundetected Aimbot hack assist. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Aimbot Hack",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Aimbot Hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hack",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon向けundetected Aimbot hack assist.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hack | Boxes & Loot",
					description: "Marathon ESP Hack: ESP hackボックス、死体pin、距離. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon ESP Hack",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon ESP Hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hack",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。ESP hackボックス、死体pin、距離.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all検索 vs 本物のESPとAimbotツール. 即時デジタル配信. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。unlock-all検索 vs 本物のESPとAimbotツール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
								"サポート・法務: support@marathoncheats.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Marathon Cheats",
					description: "プライバシーポリシー Marathon Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。プライバシーポリシー marathoncheats.orgおよびMarathonライセンス向け。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約を読む",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"支払い情報はZadeyo checkoutで処理され、marathoncheats.orgには保存されません。",
							],
						},
						{
							h2: "データの利用方法",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@marathoncheats.org",
								"メール: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Marathon Cheats",
					description: "返金ポリシー Marathon Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "返金ポリシー",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。返金ポリシー marathoncheats.orgおよびMarathonライセンス向け。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"BattlEyeパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@marathoncheats.org",
								"メール: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Marathon Cheats",
					description: "利用規約 Marathon Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "利用規約",
					intro: "Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。利用規約 marathoncheats.orgおよびMarathonライセンス向け。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEyeメンテナンス含む。",
							],
						},
						{
							h2: "リスク免責",
							paragraphs: [
								"Marathon CheatsはMarathon向けWindows PC用ESP wallhack、radar hack、Marathon Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"チートの使用はMarathonチームの利用規約に違反する可能性があり、BANリスクはすべて自己負担です。",
							],
						},
						{
							h2: "ポリシー変更",
							paragraphs: [
								"サポート・法務: support@marathoncheats.org",
								"メール: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Marathon 치트",
					accentShort: "Marathon Cheats",
					subtitle: "Marathon Windows PC용 ESP wallhack, radar hack, Aimbot — BattlEye 유지보수 포함.",
					subtitleShort: "Marathon PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Marathon Cheats 패키지는 Marathon Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye 유지보수 지원",
					antiCheatShort: "BattlEye 지원",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Marathon Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Marathon용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Marathon undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye 유지보수. 즉시 디지털 배송.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Marathon Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye 유지보수 포함.",
					imageAlt: "marathon cheats hero ESP aimbot wallhack",
					galleryTitle: "Marathon Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Marathon Cheats를 선택하는 이유",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. BR 및 loot run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: 플레이어 박스, 시체 마커, wallhack 오버레이. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 플레이어 박스, 시체 마커, wallhack 오버레이.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV, 종별 Aimbot 프로필. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. soft aim, FOV, 종별 Aimbot 프로필.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar 컨트롤. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. ESP, soft aim, radar 컨트롤.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: 월 $35 또는 lifetime $150 라이선스. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 월 $35 또는 lifetime $150 라이선스.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC 활성화 및 첫 실행 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Windows PC 활성화 및 첫 실행 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | BattlEye Maintenance Log",
					description: "업데이트: BattlEye 패치 상태 및 rebuild 메모. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. BattlEye 패치 상태 및 rebuild 메모.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, 배송, BattlEye 질문. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. ESP, soft aim, 배송, BattlEye 질문.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: 주문 도움 및 라이선스 지원 연락처. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 주문 도움 및 라이선스 지원 연락처.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | BattlEye Safe Status",
					description: "Undetected 치트: BattlEye 패치 후 undetected 유지보수. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. BattlEye 패치 후 undetected 유지보수.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: 플레이어, 시체, 거리용 wallhack ESP. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 플레이어, 시체, 거리용 wallhack ESP.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 측면 공격과 로테이션용 2D radar 신호. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 측면 공격과 로테이션용 2D radar 신호.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: Marathon cheats용 BattlEye 업데이트 처리 방법. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon cheats용 BattlEye 업데이트 처리 방법.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: checkout 전 2026 marathon cheats 체크리스트. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. checkout 전 2026 marathon cheats 체크리스트.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: ESP와 Aimbot을 위한 Marathon Cheats 기둥. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. ESP와 Aimbot을 위한 Marathon Cheats 기둥.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Instant Access",
					description: "Marathon Cheat Download: 결제 후 디지털 라이선스 다운로드. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 결제 후 디지털 라이선스 다운로드.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon 모드 메뉴 | In-Game Toggles",
					description: "Marathon 모드 메뉴: 클라이언트 내 ESP 및 soft aim 토글. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon 모드 메뉴",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon 모드 메뉴.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon 모드 메뉴",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon 모드 메뉴",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 클라이언트 내 ESP 및 soft aim 토글.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: Windows PC용 부드러운 soft aim 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Windows PC용 부드러운 soft aim 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Marathon 치트 | Buyer Checklist",
					description: "최고의 Marathon 치트: marathon cheats 구매 전 비교할 항목. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Marathon 치트",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 최고의 Marathon 치트.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "최고의 Marathon 치트",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Marathon 치트",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. marathon cheats 구매 전 비교할 항목.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon 에임봇 핵 | Soft Aim Assist",
					description: "Marathon 에임봇 핵: Marathon용 undetected Aimbot hack assist. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon 에임봇 핵",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon 에임봇 핵.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon 에임봇 핵",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon 에임봇 핵",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon용 undetected Aimbot hack assist.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP 핵 | Boxes & Loot",
					description: "Marathon ESP 핵: ESP hack 박스, 시체 pin, 거리. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon ESP 핵",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon ESP 핵.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP 핵",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP 핵",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. ESP hack 박스, 시체 pin, 거리.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all 검색 vs 실제 ESP 및 Aimbot 도구. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. unlock-all 검색 vs 실제 ESP 및 Aimbot 도구.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
								"지원 및 법무: support@marathoncheats.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Marathon Cheats",
					description: "개인정보 처리방침 Marathon Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 개인정보 처리방침 marathoncheats.org 및 Marathon 라이선스용.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "이용 약관 읽기",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "수집하는 정보",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"결제 정보는 Zadeyo checkout에서 처리되며 marathoncheats.org에 저장되지 않습니다.",
							],
						},
						{
							h2: "데이터 사용 방법",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "귀하의 권리",
							paragraphs: [
								"지원 및 법무: support@marathoncheats.org",
								"이메일: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Marathon Cheats",
					description: "환불 정책 Marathon Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "환불 정책",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 환불 정책 marathoncheats.org 및 Marathon 라이선스용.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "디지털 배송",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "환불 승인",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"BattlEye 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "신청 방법",
							paragraphs: [
								"지원 및 법무: support@marathoncheats.org",
								"이메일: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Marathon Cheats",
					description: "이용 약관 Marathon Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "이용 약관",
					intro: "Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 이용 약관 marathoncheats.org 및 Marathon 라이선스용.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "약관 동의",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye 유지보수 포함.",
							],
						},
						{
							h2: "위험 고지",
							paragraphs: [
								"Marathon Cheats는 Marathon Windows PC용 ESP wallhack, radar hack, Marathon Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"치트 사용은 Marathon 팀 약관 위반일 수 있으며 모든 밴 위험은 본인 부담입니다.",
							],
						},
						{
							h2: "정책 변경",
							paragraphs: [
								"지원 및 법무: support@marathoncheats.org",
								"이메일: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Marathon作弊",
					accentShort: "Marathon Cheats",
					subtitle: "适用于Marathon Windows PC的ESP wallhack、radar hack和Aimbot — 含BattlEye维护。",
					subtitleShort: "Marathon PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Marathon Cheats套餐已在Marathon Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持BattlEye维护",
					antiCheatShort: "BattlEye支持",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Marathon Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Marathon undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Marathon undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye维护。即时数字交付。",
					h1: "Marathon Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Marathon Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye维护。",
					imageAlt: "marathon cheats hero ESP aimbot wallhack",
					galleryTitle: "Marathon Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Marathon Cheats的原因",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。适合在BR和loot run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。一个许可证而非多个工具。",
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: 玩家方框、尸体标记和wallhack overlay. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。玩家方框、尸体标记和wallhack overlay.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim、FOV和按物种的Aimbot配置. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。soft aim、FOV和按物种的Aimbot配置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP、soft aim、radar控制. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。功能.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。ESP、soft aim、radar控制.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: 月付$35或lifetime $150许可证. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。价格.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。月付$35或lifetime $150许可证.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC激活和首次启动设置. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。安装.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Windows PC激活和首次启动设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye补丁状态和rebuild说明. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。更新.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。BattlEye补丁状态和rebuild说明.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP、soft aim、交付和BattlEye问题. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。常见问题.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。ESP、soft aim、交付和BattlEye问题.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: 订单帮助和许可证支持联系方式. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。支持.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。订单帮助和许可证支持联系方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | BattlEye Safe Status",
					description: "Undetected作弊: BattlEye补丁后的undetected维护. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。BattlEye补丁后的undetected维护.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: 玩家、尸体和距离的wallhack ESP. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。玩家、尸体和距离的wallhack ESP.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 侧翼和轮换的2D radar提示. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。侧翼和轮换的2D radar提示.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: Marathon cheats的BattlEye更新处理方式. 即时数字交付. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon cheats的BattlEye更新处理方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon作弊 2026 | Buyer Guide",
					description: "Marathon作弊 2026: checkout前的2026 marathon cheats清单. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon作弊 2026",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon作弊 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon作弊 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon作弊 2026",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。checkout前的2026 marathon cheats清单.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Marathon作弊 | ESP Aimbot Guide",
					description: "Marathon作弊: ESP和Aimbot的Marathon Cheats支柱. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon作弊",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon作弊.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon作弊",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon作弊",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。ESP和Aimbot的Marathon Cheats支柱.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon作弊下载 | Instant Access",
					description: "Marathon作弊下载: 付款后的数字许可证下载. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon作弊下载",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon作弊下载.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon作弊下载",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon作弊下载",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。付款后的数字许可证下载.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon修改菜单 | In-Game Toggles",
					description: "Marathon修改菜单: 客户端内ESP和soft aim开关. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon修改菜单",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon修改菜单.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon修改菜单",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon修改菜单",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。客户端内ESP和soft aim开关.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: Windows PC的流畅soft aim设置. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Windows PC的流畅soft aim设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Marathon作弊 | Buyer Checklist",
					description: "最佳Marathon作弊: 购买marathon cheats前应比较的内容. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Marathon作弊",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。最佳Marathon作弊.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "最佳Marathon作弊",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Marathon作弊",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。购买marathon cheats前应比较的内容.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon自瞄外挂 | Soft Aim Assist",
					description: "Marathon自瞄外挂: Marathon的undetected Aimbot hack assist. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon自瞄外挂",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon自瞄外挂.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon自瞄外挂",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon自瞄外挂",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon的undetected Aimbot hack assist.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP外挂 | Boxes & Loot",
					description: "Marathon ESP外挂: ESP hack方框、尸体pin和距离. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon ESP外挂",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon ESP外挂.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP外挂",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP外挂",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。ESP hack方框、尸体pin和距离.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all搜索 vs 真正的ESP和Aimbot工具. 即时数字交付. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "购买 Marathon Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。unlock-all搜索 vs 真正的ESP和Aimbot工具.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
								"支持与法务：support@marathoncheats.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Marathon Cheats",
					description: "隐私政策 Marathon Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。隐私政策 适用于 marathoncheats.org 和 Marathon 许可证。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读使用条款",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "我们收集的信息",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"支付详情由 Zadeyo checkout 处理 — 不存储在 marathoncheats.org。",
							],
						},
						{
							h2: "数据使用方式",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "您的权利",
							paragraphs: [
								"支持与法务：support@marathoncheats.org",
								"邮箱: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Marathon Cheats",
					description: "退款政策 Marathon Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。退款政策 适用于 marathoncheats.org 和 Marathon 许可证。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "数字交付",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "退款批准",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"BattlEye补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "如何申请",
							paragraphs: [
								"支持与法务：support@marathoncheats.org",
								"邮箱: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Marathon Cheats",
					description: "使用条款 Marathon Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。使用条款 适用于 marathoncheats.org 和 Marathon 许可证。",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "接受条款",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye维护。",
							],
						},
						{
							h2: "风险免责声明",
							paragraphs: [
								"Marathon Cheats为MarathonWindows PC提供ESP wallhack、radar hack和Marathon Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"使用作弊可能违反 Marathon 团队条款 — 您承担所有封禁风险。",
							],
						},
						{
							h2: "政策变更",
							paragraphs: [
								"支持与法务：support@marathoncheats.org",
								"邮箱: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected marathon cheats",
					accentShort: "Marathon Cheats",
					subtitle: "Marathon Windows PC के लिए ESP wallhack, radar hack और Aimbot — BattlEye maintenance शामिल।",
					subtitleShort: "Marathon PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Marathon Cheats पैकेज Marathon Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "BattlEye maintenance समर्थित",
					antiCheatShort: "BattlEye समर्थित",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Marathon Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Marathon के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Marathon undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Marathon Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.",
					imageAlt: "marathon cheats hero ESP aimbot wallhack",
					galleryTitle: "Marathon Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Marathon Cheats क्यों",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। BR और loot run में दुश्मन pack पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: प्लेयर बॉक्स, loot markers और wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। प्लेयर बॉक्स, loot markers और wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV और प्रजाति-वार Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। soft aim, FOV और प्रजाति-वार Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly या $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। $35 monthly या $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation और first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Windows PC activation और first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | BattlEye Maintenance Log",
					description: "अपडेट: BattlEye patch status और rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। BattlEye patch status और rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery और BattlEye questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। ESP, soft aim, delivery और BattlEye questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help और license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। order help और license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: BattlEye patches के बाद undetected maintenance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। BattlEye patches के बाद undetected maintenance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: players, carcasses और distance के लिए wallhack ESP. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। players, carcasses और distance के लिए wallhack ESP.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: flanks और rotations के लिए 2D radar cues. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। flanks और rotations के लिए 2D radar cues.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: Marathon cheats के लिए BattlEye updates कैसे handle होते हैं. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon cheats के लिए BattlEye updates कैसे handle होते हैं.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: checkout से पहले 2026 marathon cheats checklist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। checkout से पहले 2026 marathon cheats checklist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: ESP और Aimbot के लिए Marathon Cheats pillar. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। ESP और Aimbot के लिए Marathon Cheats pillar.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Instant Access",
					description: "Marathon Cheat Download: payment के बाद digital license download. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। payment के बाद digital license download.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod Menu | In-Game Toggles",
					description: "Marathon Mod Menu: in-client ESP और soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Mod Menu",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Mod Menu.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod Menu",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod Menu",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। in-client ESP और soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: Windows PC के लिए smooth soft aim settings. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Windows PC के लिए smooth soft aim settings.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Marathon Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Marathon Cheats: marathon cheats खरीदने से पहले क्या compare करें. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Marathon Cheats",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Marathon Cheats.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "सर्वश्रेष्ठ Marathon Cheats",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Marathon Cheats",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। marathon cheats खरीदने से पहले क्या compare करें.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack | Soft Aim Assist",
					description: "Marathon Aimbot Hack: Marathon के लिए undetected Aimbot hack assist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Aimbot Hack",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Aimbot Hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hack",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon के लिए undetected Aimbot hack assist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hack | Boxes & Loot",
					description: "Marathon ESP Hack: ESP hack boxes, carcass pins और distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon ESP Hack",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon ESP Hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hack",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। ESP hack boxes, carcass pins और distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all searches vs real ESP और Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Marathon Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। unlock-all searches vs real ESP और Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
								"सहायता: support@marathoncheats.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Marathon Cheats",
					description: "गोपनीयता नीति Marathon Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। गोपनीयता नीति marathoncheats.org और Marathon लाइसेंस के लिए।",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "शर्तें पढ़ें",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "हम जो जानकारी एकत्र करते हैं",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"भुगतान विवरण Zadeyo checkout द्वारा संसाधित — marathoncheats.org पर संग्रहीत नहीं।",
							],
						},
						{
							h2: "हम डेटा का उपयोग कैसे करते हैं",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "आपके अधिकार",
							paragraphs: [
								"सहायता: support@marathoncheats.org",
								"ईमेल: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Marathon Cheats",
					description: "रिफंड नीति Marathon Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। रिफंड नीति marathoncheats.org और Marathon लाइसेंस के लिए।",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "डिजिटल डिलीवरी",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "रिफंड स्वीकृति",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"BattlEye पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "कैसे अनुरोध करें",
							paragraphs: [
								"सहायता: support@marathoncheats.org",
								"ईमेल: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Marathon Cheats",
					description: "उपयोग की शर्तें Marathon Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। उपयोग की शर्तें marathoncheats.org और Marathon लाइसेंस के लिए।",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "शर्तों की स्वीकृति",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye maintenance शामिल।",
							],
						},
						{
							h2: "जोखिम अस्वीकरण",
							paragraphs: [
								"Marathon Cheats Marathon के लिए Windows PC पर ESP wallhack, radar hack और Marathon Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"cheat का उपयोग Marathon टीम की शर्तों का उल्लंघन हो सकता है — आप सभी ban जोखिम स्वीकार करते हैं।",
							],
						},
						{
							h2: "नीति परिवर्तन",
							paragraphs: [
								"सहायता: support@marathoncheats.org",
								"ईमेल: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Marathon undetected",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Marathon di PC Windows — pemeliharaan BattlEye termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Marathon PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Marathon Cheats aktif untuk Marathon di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan BattlEye didukung",
					antiCheatShort: "BattlEye didukung",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Marathon Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Marathon undetected untuk Marathon di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye. Pengiriman digital instan.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Marathon di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galeri Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Marathon Cheats di 2026",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Ideal membaca pack musuh di BR dan loot run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: kotak pemain, penanda bangkai, dan overlay wallhack. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. kotak pemain, penanda bangkai, dan overlay wallhack.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim, FOV, dan profil Aimbot per spesies. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. soft aim, FOV, dan profil Aimbot per spesies.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, kontrol radar. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Fitur.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. ESP, soft aim, kontrol radar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: lisensi $35 bulanan atau $150 lifetime. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Harga.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. lisensi $35 bulanan atau $150 lifetime.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: aktivasi Windows PC dan setup peluncuran pertama. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Setup.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. aktivasi Windows PC dan setup peluncuran pertama.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | BattlEye Maintenance Log",
					description: "Pembaruan: status patch BattlEye dan catatan rebuild. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Pembaruan.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. status patch BattlEye dan catatan rebuild.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pertanyaan ESP, soft aim, pengiriman, dan BattlEye. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. pertanyaan ESP, soft aim, pengiriman, dan BattlEye.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: bantuan pesanan dan kontak dukungan lisensi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Dukungan.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. bantuan pesanan dan kontak dukungan lisensi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: pemeliharaan undetected setelah patch BattlEye. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Cheat undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. pemeliharaan undetected setelah patch BattlEye.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP untuk pemain, bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. wallhack ESP untuk pemain, bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: petunjuk radar 2D untuk flanking dan rotasi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. petunjuk radar 2D untuk flanking dan rotasi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: cara pembaruan BattlEye ditangani untuk Marathon cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. cara pembaruan BattlEye ditangani untuk Marathon cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marathon 2026 | Buyer Guide",
					description: "Cheat Marathon 2026: checklist marathon cheats 2026 sebelum checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marathon 2026",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Cheat Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheat Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat Marathon 2026",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. checklist marathon cheats 2026 sebelum checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marathon | ESP Aimbot Guide",
					description: "Cheat Marathon: pilar Marathon Cheats untuk ESP dan Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Cheat Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. pilar Marathon Cheats untuk ESP dan Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Marathon | Instant Access",
					description: "Download Cheat Marathon: unduhan lisensi digital setelah pembayaran. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Download Cheat Marathon.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. unduhan lisensi digital setelah pembayaran.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Marathon | In-Game Toggles",
					description: "Menu mod Marathon: toggle ESP dan soft aim in-client. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Menu mod Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Menu mod Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. toggle ESP dan soft aim in-client.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: pengaturan soft aim halus untuk Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. pengaturan soft aim halus untuk Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marathon terbaik | Buyer Checklist",
					description: "Cheat Marathon terbaik: apa yang dibandingkan sebelum membeli marathon cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Marathon terbaik",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Cheat Marathon terbaik.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Cheat Marathon terbaik",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marathon terbaik",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. apa yang dibandingkan sebelum membeli marathon cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Soft Aim Assist",
					description: "Hack aimbot Marathon: assist hack Aimbot undetected untuk Marathon. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. assist hack Aimbot undetected untuk Marathon.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boxes & Loot",
					description: "Hack ESP Marathon: kotak ESP hack, pin bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. kotak ESP hack, pin bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: pencarian unlock-all vs alat ESP dan Aimbot asli. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Beli Marathon Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. pencarian unlock-all vs alat ESP dan Aimbot asli.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
								"support@marathoncheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Marathon Cheats",
					description: "Kebijakan privasi untuk Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Kebijakan privasi untuk marathoncheats.org dan lisensi Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca syarat",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informasi yang kami kumpulkan",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"Detail pembayaran diproses oleh checkout Zadeyo — tidak disimpan di marathoncheats.org.",
							],
						},
						{
							h2: "Cara kami menggunakan data",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Hak Anda",
							paragraphs: [
								"support@marathoncheats.org untuk dukungan dan legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Marathon Cheats",
					description: "Kebijakan refund untuk Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Kebijakan refund untuk marathoncheats.org dan lisensi Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Pengiriman digital",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "Persetujuan refund",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch BattlEye. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Cara meminta",
							paragraphs: [
								"support@marathoncheats.org untuk dukungan dan legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Marathon Cheats",
					description: "Syarat penggunaan untuk Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Syarat penggunaan untuk marathoncheats.org dan lisensi Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Penerimaan syarat",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye.",
							],
						},
						{
							h2: "Penyangkalan risiko",
							paragraphs: [
								"Marathon Cheats menyediakan ESP wallhack, radar hack, dan Marathon Aimbot undetected untuk Marathon di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Menggunakan cheat dapat melanggar ketentuan tim Marathon — Anda menanggung semua risiko ban.",
							],
						},
						{
							h2: "Perubahan kebijakan",
							paragraphs: [
								"support@marathoncheats.org untuk dukungan dan legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "marathon cheats ไม่ถูกตรวจจับ",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Marathon บน Windows PC — รวมการดูแล BattlEye",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Marathon PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Marathon Cheats พร้อมใช้งานสำหรับ Marathon บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล BattlEye",
					antiCheatShort: "BattlEye รองรับ",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Marathon Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Marathon — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Marathon undetected สำหรับ Marathon บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Marathon บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "แกลเลอรี Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Marathon Cheats ปี 2026",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC เหมาะสำหรับอ่าน pack ศัตรูใน BR และ loot run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, การควบคุม radar. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ฟีเจอร์.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ESP, soft aim, การควบคุม radar.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: ใบอนุญาต $35 รายเดือนหรือ $150 lifetime. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ราคา.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ใบอนุญาต $35 รายเดือนหรือ $150 lifetime.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ติดตั้ง.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | BattlEye Maintenance Log",
					description: "อัปเดต: สถานะ patch BattlEye และบันทึก rebuild. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC อัปเดต.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC สถานะ patch BattlEye และบันทึก rebuild.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: คำถาม ESP, soft aim, การจัดส่ง และ BattlEye. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC คำถาม ESP, soft aim, การจัดส่ง และ BattlEye.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC สนับสนุน.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: การบำรุงรักษา undetected หลัง patch BattlEye. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Cheats undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การบำรุงรักษา undetected หลัง patch BattlEye.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: วิธีจัดการอัปเดต BattlEye สำหรับ Marathon cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC วิธีจัดการอัปเดต BattlEye สำหรับ Marathon cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: checklist marathon cheats 2026 ก่อน checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC checklist marathon cheats 2026 ก่อน checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: เสาหลัก Marathon Cheats สำหรับ ESP และ Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC เสาหลัก Marathon Cheats สำหรับ ESP และ Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Marathon Cheats | Instant Access",
					description: "ดาวน์โหลด Marathon Cheats: ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Marathon Cheats",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ดาวน์โหลด Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Marathon Cheats",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Marathon | In-Game Toggles",
					description: "เมนูมอด Marathon: สวิตช์ ESP และ soft aim ในไคลเอนต์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Marathon",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC เมนูมอด Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Marathon",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC สวิตช์ ESP และ soft aim ในไคลเอนต์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marathon ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Marathon ที่ดีที่สุด: สิ่งที่ควรเปรียบเทียบก่อนซื้อ marathon cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Marathon ที่ดีที่สุด",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Cheat Marathon ที่ดีที่สุด.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Cheat Marathon ที่ดีที่สุด",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marathon ที่ดีที่สุด",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC สิ่งที่ควรเปรียบเทียบก่อนซื้อ marathon cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Marathon | Soft Aim Assist",
					description: "Hack Aimbot Marathon: assist hack Aimbot undetected สำหรับ Marathon. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Marathon",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Hack Aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC assist hack Aimbot undetected สำหรับ Marathon.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boxes & Loot",
					description: "Hack ESP Marathon: กล่อง ESP hack, pin ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC กล่อง ESP hack, pin ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "ซื้อ Marathon Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
								"support@marathoncheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Marathon Cheats",
					description: "นโยบายความเป็นส่วนตัว สำหรับ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC นโยบายความเป็นส่วนตัว สำหรับ marathoncheats.org และใบอนุญาต Marathon",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านข้อกำหนด",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "ข้อมูลที่เราเก็บ",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"รายละเอียดการชำระเงินประมวลผลผ่าน checkout Zadeyo — ไม่เก็บบน marathoncheats.org",
							],
						},
						{
							h2: "การใช้ข้อมูล",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "สิทธิของคุณ",
							paragraphs: [
								"support@marathoncheats.org สำหรับการสนับสนุน",
								"อีเมล: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Marathon Cheats",
					description: "นโยบายการคืนเงิน สำหรับ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC นโยบายการคืนเงิน สำหรับ marathoncheats.org และใบอนุญาต Marathon",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การจัดส่งดิจิทัล",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "การอนุมัติคืนเงิน",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ BattlEye ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "วิธีขอคืนเงิน",
							paragraphs: [
								"support@marathoncheats.org สำหรับการสนับสนุน",
								"อีเมล: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Marathon Cheats",
					description: "ข้อกำหนดการใช้งาน สำหรับ Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC ข้อกำหนดการใช้งาน สำหรับ marathoncheats.org และใบอนุญาต Marathon",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การยอมรับข้อกำหนด",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye",
							],
						},
						{
							h2: "ข้อจำกัดความรับผิดชอบด้านความเสี่ยง",
							paragraphs: [
								"Marathon Cheats รวม ESP wallhack, radar hack และ Marathon Aimbot แบบ undetected สำหรับ Marathon บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"การใช้ cheat อาจละเมิดข้อกำหนดของทีม Marathon — คุณรับความเสี่ยง ban ทั้งหมด",
							],
						},
						{
							h2: "การเปลี่ยนแปลงนโยบาย",
							paragraphs: [
								"support@marathoncheats.org สำหรับการสนับสนุน",
								"อีเมล: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Marathon undetected",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Marathon trên PC Windows — bảo trì BattlEye bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Marathon PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Marathon Cheats đang hoạt động cho Marathon trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì BattlEye",
					antiCheatShort: "Hỗ trợ BattlEye",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Marathon Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Marathon — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Marathon undetected cho Marathon trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye. Giao hàng kỹ thuật số tức thì.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Marathon trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Thư viện Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Lý tưởng đọc pack địch trong BR và loot run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: hộp người chơi, đánh dấu xác thịt và overlay wallhack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. hộp người chơi, đánh dấu xác thịt và overlay wallhack.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim, FOV và hồ sơ Aimbot theo loài. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. soft aim, FOV và hồ sơ Aimbot theo loài.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, điều khiển radar. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Tính năng.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. ESP, soft aim, điều khiển radar.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: giấy phép $35 hàng tháng hoặc $150 lifetime. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Giá.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. giấy phép $35 hàng tháng hoặc $150 lifetime.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: kích hoạt Windows PC và thiết lập lần chạy đầu. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cài đặt.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. kích hoạt Windows PC và thiết lập lần chạy đầu.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | BattlEye Maintenance Log",
					description: "Cập nhật: trạng thái patch BattlEye và ghi chú rebuild. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cập nhật.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. trạng thái patch BattlEye và ghi chú rebuild.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: câu hỏi ESP, soft aim, giao hàng và BattlEye. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. câu hỏi ESP, soft aim, giao hàng và BattlEye.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Hỗ trợ.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: bảo trì undetected sau patch BattlEye. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cheat undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. bảo trì undetected sau patch BattlEye.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP cho người chơi, xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. wallhack ESP cho người chơi, xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: tín hiệu radar 2D cho đánh hông và xoay vòng. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. tín hiệu radar 2D cho đánh hông và xoay vòng.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: cách xử lý cập nhật BattlEye cho Marathon cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. cách xử lý cập nhật BattlEye cho Marathon cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Marathon 2026 | Buyer Guide",
					description: "Cheat Marathon 2026: checklist marathon cheats 2026 trước checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marathon 2026",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cheat Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheat Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheat Marathon 2026",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. checklist marathon cheats 2026 trước checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Marathon | ESP Aimbot Guide",
					description: "Cheat Marathon: trụ cột Marathon Cheats cho ESP và Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cheat Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. trụ cột Marathon Cheats cho ESP và Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Marathon | Instant Access",
					description: "Tải Cheat Marathon: tải giấy phép kỹ thuật số sau thanh toán. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Tải Cheat Marathon.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. tải giấy phép kỹ thuật số sau thanh toán.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Marathon | In-Game Toggles",
					description: "Mod menu Marathon: công tắc ESP và soft aim trong client. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Mod menu Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Mod menu Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. công tắc ESP và soft aim trong client.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: cài đặt soft aim mượt cho Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. cài đặt soft aim mượt cho Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Marathon tốt nhất | Buyer Checklist",
					description: "Cheat Marathon tốt nhất: nên so sánh gì trước khi mua marathon cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Marathon tốt nhất",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Cheat Marathon tốt nhất.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Cheat Marathon tốt nhất",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Marathon tốt nhất",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. nên so sánh gì trước khi mua marathon cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Soft Aim Assist",
					description: "Hack aimbot Marathon: hỗ trợ hack Aimbot undetected cho Marathon. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. hỗ trợ hack Aimbot undetected cho Marathon.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boxes & Loot",
					description: "Hack ESP Marathon: hộp ESP hack, pin xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. hộp ESP hack, pin xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: tìm kiếm unlock-all vs công cụ ESP và Aimbot thật. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Mua Marathon Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. tìm kiếm unlock-all vs công cụ ESP và Aimbot thật.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Marathon Cheats",
					description: "Chính sách bảo mật cho Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Chính sách bảo mật cho marathoncheats.org và giấy phép Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc điều khoản",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Thông tin chúng tôi thu thập",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"Chi tiết thanh toán được xử lý qua checkout Zadeyo — không lưu trên marathoncheats.org.",
							],
						},
						{
							h2: "Cách chúng tôi sử dụng dữ liệu",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Quyền của bạn",
							paragraphs: [
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Marathon Cheats",
					description: "Chính sách hoàn tiền cho Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Chính sách hoàn tiền cho marathoncheats.org và giấy phép Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Giao hàng kỹ thuật số",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "Phê duyệt hoàn tiền",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá BattlEye. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Cách yêu cầu",
							paragraphs: [
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Marathon Cheats",
					description: "Điều khoản sử dụng cho Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Điều khoản sử dụng cho marathoncheats.org và giấy phép Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Chấp nhận điều khoản",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye.",
							],
						},
						{
							h2: "Tuyên bố miễn trừ rủi ro",
							paragraphs: [
								"Marathon Cheats cung cấp ESP wallhack, radar hack và Marathon Aimbot undetected cho Marathon trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Dùng cheat có thể vi phạm điều khoản của đội Marathon — bạn chịu mọi rủi ro ban.",
							],
						},
						{
							h2: "Thay đổi chính sách",
							paragraphs: [
								"support@marathoncheats.org cho hỗ trợ và pháp lý.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Marathon",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack і Aimbot для Marathon на Windows PC — обслуговування BattlEye включено.",
					subtitleShort: "ESP, radar і Aimbot для Marathon PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Marathon Cheats активний для Marathon на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування BattlEye",
					antiCheatShort: "BattlEye підтримка",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Marathon Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Marathon — оплата через Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Marathon для Marathon на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye. Мгновенная цифровая доставка.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Marathon на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Галерея Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Marathon Cheats у 2026",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Ідеально для читання ворожих загонів у BR і loot run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: бокси гравців, маркери туш і wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. бокси гравців, маркери туш і wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim, FOV і профілі Aimbot за видами. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. soft aim, FOV і профілі Aimbot за видами.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, керування radar. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Функції.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. ESP, soft aim, керування radar.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: ліцензії $35 на місяць або $150 lifetime. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Ціни.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. ліцензії $35 на місяць або $150 lifetime.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: активація Windows PC і налаштування першого запуску. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Встановлення.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. активація Windows PC і налаштування першого запуску.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | BattlEye Maintenance Log",
					description: "Оновлення: статус патчів BattlEye і нотатки rebuild. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Оновлення.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. статус патчів BattlEye і нотатки rebuild.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: питання про ESP, soft aim, доставку та BattlEye. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. питання про ESP, soft aim, доставку та BattlEye.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: допомога з замовленням і контакт підтримки ліцензій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Підтримка.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. допомога з замовленням і контакт підтримки ліцензій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | BattlEye Safe Status",
					description: "Undetected чіти: undetected обслуговування після патчів BattlEye. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Undetected чіти.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. undetected обслуговування після патчів BattlEye.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP для гравців, туш і дистанції. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. wallhack ESP для гравців, туш і дистанції.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar підказки для флангів і ротацій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. 2D radar підказки для флангів і ротацій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: як обробляються оновлення BattlEye для Marathon cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. як обробляються оновлення BattlEye для Marathon cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Marathon 2026 | Buyer Guide",
					description: "Чіти Marathon 2026: чеклист marathon cheats 2026 перед checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Marathon 2026",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Чіти Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Чіти Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Чіти Marathon 2026",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. чеклист marathon cheats 2026 перед checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Marathon | ESP Aimbot Guide",
					description: "Чіти Marathon: стовп Marathon Cheats для ESP і Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Чіти Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. стовп Marathon Cheats для ESP і Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Marathon Cheats | Instant Access",
					description: "Завантаження Marathon Cheats: цифрове завантаження ліцензії після оплати. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Marathon Cheats",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Завантаження Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Завантаження Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Marathon Cheats",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. цифрове завантаження ліцензії після оплати.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Marathon | In-Game Toggles",
					description: "Мод-меню Marathon: перемикачі ESP і soft aim у клієнті. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Мод-меню Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Мод-меню Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. перемикачі ESP і soft aim у клієнті.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: плавні налаштування soft aim для Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. плавні налаштування soft aim для Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Marathon | Buyer Checklist",
					description: "Найкращі чіти Marathon: що порівняти перед покупкою marathon cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Найкращі чіти Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Найкращі чіти Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. що порівняти перед покупкою marathon cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Marathon | Soft Aim Assist",
					description: "Хак aimbot Marathon: undetected Aimbot hack assist для Marathon. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Хак aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. undetected Aimbot hack assist для Marathon.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Marathon | Boxes & Loot",
					description: "Хак ESP Marathon: ESP hack бокси, pins туш і дистанція. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Хак ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Хак ESP Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. ESP hack бокси, pins туш і дистанція.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: пошуки unlock-all vs справжні ESP і Aimbot інструменти. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Купити Marathon Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. пошуки unlock-all vs справжні ESP і Aimbot інструменти.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
								"support@marathoncheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Marathon Cheats",
					description: "Політика конфіденційності для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Політика конфіденційності для marathoncheats.org та ліцензій Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати умови",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Інформація, яку ми збираємо",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Платіжні дані обробляються через checkout Zadeyo — не зберігаються на marathoncheats.org.",
							],
						},
						{
							h2: "Як ми використовуємо дані",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Ваші права",
							paragraphs: [
								"support@marathoncheats.org для підтримки та правових питань.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Marathon Cheats",
					description: "Політика повернення для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Політика повернення для marathoncheats.org та ліцензій Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифрова доставка",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "Схвалення повернення",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів BattlEye. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Як подати запит",
							paragraphs: [
								"support@marathoncheats.org для підтримки та правових питань.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Marathon Cheats",
					description: "Умови використання для Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Умови використання для marathoncheats.org та ліцензій Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Прийняття умов",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye.",
							],
						},
						{
							h2: "Попередження про ризики",
							paragraphs: [
								"Marathon Cheats об'єднує ESP wallhack, radar hack і Marathon Aimbot у undetected пакеті для Marathon на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Використання читів може порушувати умови команди Marathon — ви приймаєте на себе ризик бану.",
							],
						},
						{
							h2: "Зміни політики",
							paragraphs: [
								"support@marathoncheats.org для підтримки та правових питань.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected marathon cheaty",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Marathon na Windows PC — údržba BattlEye v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Marathon PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Marathon Cheats je aktivní pro Marathon na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby BattlEye",
					antiCheatShort: "BattlEye podpora",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Marathon Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Marathon — checkout přes Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected marathon cheaty pro Marathon na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye. Okamžité digitální doručení.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Marathon na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galerie Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Marathon Cheats v roce 2026",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Ideální pro čtení nepřátelských packů v BR a loot run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: hráčské boxy, markery kadáverů a wallhack overlaye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. hráčské boxy, markery kadáverů a wallhack overlaye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV a Aimbot profily podle druhu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. soft aim, FOV a Aimbot profily podle druhu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, ovládání radar. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Funkce.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. ESP, soft aim, ovládání radar.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: licence $35 měsíčně nebo $150 lifetime. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Ceny.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. licence $35 měsíčně nebo $150 lifetime.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: aktivace Windows PC a nastavení prvního spuštění. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Instalace.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. aktivace Windows PC a nastavení prvního spuštění.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | BattlEye Maintenance Log",
					description: "Aktualizace: stav patchů BattlEye a poznámky k rebuild. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Aktualizace.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. stav patchů BattlEye a poznámky k rebuild.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: otázky k ESP, soft aim, doručení a BattlEye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. otázky k ESP, soft aim, doručení a BattlEye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: pomoc s objednávkou a kontakt podpory licencí. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Podpora.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. pomoc s objednávkou a kontakt podpory licencí.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | BattlEye Safe Status",
					description: "Undetected cheaty: undetected údržba po patchech BattlEye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Undetected cheaty.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. undetected údržba po patchech BattlEye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP pro hráče, kadávery a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. wallhack ESP pro hráče, kadávery a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar signály pro flanly a rotace. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. 2D radar signály pro flanly a rotace.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: jak se řeší aktualizace BattlEye pro Marathon cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. jak se řeší aktualizace BattlEye pro Marathon cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "marathon cheaty 2026 | Buyer Guide",
					description: "marathon cheaty 2026: checklist marathon cheats 2026 před checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "marathon cheaty 2026",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. marathon cheaty 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "marathon cheaty 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "marathon cheaty 2026",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. checklist marathon cheats 2026 před checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "marathon cheaty | ESP Aimbot Guide",
					description: "marathon cheaty: pilíř Marathon Cheats pro ESP a Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "marathon cheaty",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. marathon cheaty.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "marathon cheaty",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "marathon cheaty",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. pilíř Marathon Cheats pro ESP a Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Marathon Cheats | Instant Access",
					description: "Stáhnout Marathon Cheats: digitální stažení licence po platbě. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Marathon Cheats",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Stáhnout Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Stáhnout Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Marathon Cheats",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. digitální stažení licence po platbě.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon mod menu | In-Game Toggles",
					description: "Marathon mod menu: přepínače ESP a soft aim v klientu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon mod menu",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon mod menu.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon mod menu",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon mod menu",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. přepínače ESP a soft aim v klientu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: plynulé nastavení soft aim pro Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. plynulé nastavení soft aim pro Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší marathon cheaty | Buyer Checklist",
					description: "Nejlepší marathon cheaty: co porovnat před nákupem marathon cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší marathon cheaty",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Nejlepší marathon cheaty.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Nejlepší marathon cheaty",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší marathon cheaty",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. co porovnat před nákupem marathon cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot hack | Soft Aim Assist",
					description: "Marathon Aimbot hack: undetected Aimbot hack assist pro Marathon. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon Aimbot hack",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon Aimbot hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot hack",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. undetected Aimbot hack assist pro Marathon.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP hack | Boxes & Loot",
					description: "Marathon ESP hack: ESP hack boxy, piny kadáverů a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon ESP hack",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon ESP hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP hack",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. ESP hack boxy, piny kadáverů a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Koupit Marathon Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
								"support@marathoncheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Marathon Cheats",
					description: "Zásady ochrany soukromí pro Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Zásady ochrany soukromí pro marathoncheats.org a licence Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst podmínky",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informace, které shromažďujeme",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Platební údaje zpracovává checkout Zadeyo — neukládají se na marathoncheats.org.",
							],
						},
						{
							h2: "Jak používáme data",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Vaše práva",
							paragraphs: [
								"support@marathoncheats.org pro podporu a právní dotazy.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Marathon Cheats",
					description: "Zásady vrácení peněz pro Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Zásady vrácení peněz pro marathoncheats.org a licence Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitální doručení",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "Schválení vrácení",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích BattlEye zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Jak požádat",
							paragraphs: [
								"support@marathoncheats.org pro podporu a právní dotazy.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Marathon Cheats",
					description: "Podmínky použití pro Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Podmínky použití pro marathoncheats.org a licence Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Přijetí podmínek",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye.",
							],
						},
						{
							h2: "Upozornění na rizika",
							paragraphs: [
								"Marathon Cheats spojuje ESP wallhack, radar hack a Marathon Aimbot jako undetected balíček pro Marathon na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Používání cheatů může porušovat podmínky týmu Marathon — nesete veškeré riziko bana.",
							],
						},
						{
							h2: "Změny zásad",
							paragraphs: [
								"support@marathoncheats.org pro podporu a právní dotazy.",
								"E-mail: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Marathon undetected",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Marathon pe PC Windows — mentenanță BattlEye inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Marathon PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Marathon Cheats este activ pentru Marathon pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță BattlEye suportată",
					antiCheatShort: "BattlEye suportat",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Marathon Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Marathon undetected pentru Marathon pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye. Livrare digitală instantă.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Marathon pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Galerie Marathon Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Marathon Cheats în 2026",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Ideal pentru citirea pack-urilor inamice în BR și loot run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "ESP Marathon | Player Boxes & Wallhack",
					description: "ESP Marathon: casete jucător, markere carcase și overlay-uri wallhack. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. ESP Marathon.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "ESP Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "ESP Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. casete jucător, markere carcase și overlay-uri wallhack.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Aimbot Marathon | Soft Aim Controls",
					description: "Aimbot Marathon: soft aim, FOV și profile Aimbot pe specie. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Aimbot Marathon.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Aimbot Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. soft aim, FOV și profile Aimbot pe specie.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, controale radar. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Funcții.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. ESP, soft aim, controale radar.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: licențe $35 lunar sau $150 lifetime. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Prețuri.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. licențe $35 lunar sau $150 lifetime.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: activare Windows PC și setup la prima lansare. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Instalare.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. activare Windows PC și setup la prima lansare.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | BattlEye Maintenance Log",
					description: "Actualizări: status patch BattlEye și note rebuild. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Actualizări.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. status patch BattlEye și note rebuild.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: întrebări ESP, soft aim, livrare și BattlEye. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. întrebări ESP, soft aim, livrare și BattlEye.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: ajutor comenzi și contact suport licențe. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Suport.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. ajutor comenzi și contact suport licențe.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: mentenanță undetected după patch-uri BattlEye. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Cheats undetected.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. mentenanță undetected după patch-uri BattlEye.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP pentru jucători, carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. wallhack ESP pentru jucători, carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: indicii radar 2D pentru flancuri și rotații. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Radar hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. indicii radar 2D pentru flancuri și rotații.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: cum sunt gestionate actualizările BattlEye pentru Marathon cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Bypass BattlEye.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. cum sunt gestionate actualizările BattlEye pentru Marathon cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Marathon 2026 | Buyer Guide",
					description: "Cheats Marathon 2026: checklist marathon cheats 2026 înainte de checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Marathon 2026",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Cheats Marathon 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Cheats Marathon 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Cheats Marathon 2026",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. checklist marathon cheats 2026 înainte de checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Marathon | ESP Aimbot Guide",
					description: "Cheats Marathon: pilon Marathon Cheats pentru ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Cheats Marathon.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Marathon",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. pilon Marathon Cheats pentru ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Marathon Cheats | Instant Access",
					description: "Descărcare Marathon Cheats: descărcare licență digitală după plată. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Marathon Cheats",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Descărcare Marathon Cheats.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Descărcare Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Marathon Cheats",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. descărcare licență digitală după plată.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Marathon | In-Game Toggles",
					description: "Meniu mod Marathon: toggle-uri ESP și soft aim in-client. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Meniu mod Marathon.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Meniu mod Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. toggle-uri ESP și soft aim in-client.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Marathon | Smooth Aim Settings",
					description: "Soft aim Marathon: setări soft aim fluide pentru Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Soft aim Marathon.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Soft aim Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. setări soft aim fluide pentru Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Marathon | Buyer Checklist",
					description: "Cele mai bune cheats Marathon: ce să compari înainte de a cumpăra marathon cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Cele mai bune cheats Marathon.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Cele mai bune cheats Marathon",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. ce să compari înainte de a cumpăra marathon cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Marathon | Soft Aim Assist",
					description: "Hack aimbot Marathon: assist hack Aimbot undetected pentru Marathon. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Hack aimbot Marathon.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Marathon",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. assist hack Aimbot undetected pentru Marathon.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Marathon | Boxes & Loot",
					description: "Hack ESP Marathon: casete ESP hack, pin-uri carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Hack ESP Marathon.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Marathon",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Hack ESP Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. casete ESP hack, pin-uri carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Marathon | What It Means",
					description: "Unlock all Marathon: căutări unlock-all vs instrumente reale ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Marathon",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Unlock all Marathon.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Unlock all Marathon",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Cumpără Marathon Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Marathon",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. căutări unlock-all vs instrumente reale ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
								"support@marathoncheats.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Marathon Cheats",
					description: "Politica de confidențialitate pentru Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Politica de confidențialitate pentru marathoncheats.org și licențe Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește termenii",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informații pe care le colectăm",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Detaliile de plată sunt procesate prin checkout Zadeyo — nu sunt stocate pe marathoncheats.org.",
							],
						},
						{
							h2: "Cum folosim datele",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Drepturile tale",
							paragraphs: [
								"support@marathoncheats.org pentru suport și legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Marathon Cheats",
					description: "Politica de rambursare pentru Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Politica de rambursare pentru marathoncheats.org și licențe Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livrare digitală",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "Aprobare rambursare",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri BattlEye. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Cum să soliciți",
							paragraphs: [
								"support@marathoncheats.org pentru suport și legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Marathon Cheats",
					description: "Termeni de utilizare pentru Marathon Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Termeni de utilizare pentru marathoncheats.org și licențe Marathon.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptarea termenilor",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye.",
							],
						},
						{
							h2: "Declinare responsabilitate",
							paragraphs: [
								"Marathon Cheats combină ESP wallhack, radar hack și Marathon Aimbot undetected pentru Marathon pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Folosirea cheat-urilor poate încălca termenii echipei Marathon — îți asumi tot riscul de ban.",
							],
						},
						{
							h2: "Modificări de politică",
							paragraphs: [
								"support@marathoncheats.org pentru suport și legal.",
								"Email: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected marathon cheats",
					accentShort: "Marathon Cheats",
					subtitle: "ESP wallhack, radar hack och Aimbot för Marathon på Windows PC — BattlEye-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Marathon PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Marathon Cheats-paketet är live för Marathon på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye-underhåll stöds",
					antiCheatShort: "BattlEye stöd",
				},
				product: {
					title: "Marathon Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Marathon",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Marathon Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Marathon — checkout via Zadeyo.",
				},
				images: {
					hero: "Marathon Cheats hero — ESP and aimbot overlay in Marathon",
					espWallhack: "Wallhack outlines showing runners and UESC forces through walls",
					aimbotCombat: "Soft aim assist overlay during a Marathon run",
					packFight: "Marathon Cheats combat overlay during a pack fight",
					dinoEsp: "Player ESP boxes and distance readouts in a Marathon run",
					headerArt: "Aimbot view and bone priority controls for Marathon",
					hacksPackage: "2D radar threat overlay for Marathon",
					ambushFight: "Aimbot assist during a Marathon push",
					battleRoyale: "Marathon Cheats in-session overview for Windows PC",
					survivalIsland: "ESP markers for carcasses and exfils in Marathon",
				},
			},
			pages: {
				home: {
					title: "Marathon Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected marathon cheats för Marathon på PC. ESP wallhack, radar hack, Aimbot, BattlEye-underhåll. Omedelbar digital leverans.",
					h1: "Marathon Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Marathon på Windows PC: ESP wallhack, radar, Aimbot med BattlEye-underhåll.",
					imageAlt: "Marathon ESP player tags hack",
					galleryTitle: "Marathon Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Ideal för att läsa fiendepacks i BR och loot run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"marathon-esp": {
					title: "Marathon ESP | Player Boxes & Wallhack",
					description: "Marathon ESP: spelarboxar, kadavermarkörer och wallhack-overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon ESP",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon ESP.",
					imageAlt: "Marathon ESP player boxes and distance readouts in a run",
					galleryTitle: "Marathon ESP",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon ESP",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. spelarboxar, kadavermarkörer och wallhack-overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"marathon-aimbot": {
					title: "Marathon Aimbot | Soft Aim Controls",
					description: "Marathon Aimbot: soft aim, FOV och Aimbot-profiler per art. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Aimbot",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Aimbot.",
					imageAlt: "Marathon Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Marathon Aimbot",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Aimbot",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. soft aim, FOV och Aimbot-profiler per art.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar-kontroller. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Funktioner.",
					imageAlt: "Marathon Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. ESP, soft aim, radar-kontroller.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 månatliga eller $150 lifetime-licenser. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Priser.",
					imageAlt: "Marathon Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. $35 månatliga eller $150 lifetime-licenser.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC-aktivering och första-start setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Installation.",
					imageAlt: "Marathon Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Windows PC-aktivering och första-start setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | BattlEye Maintenance Log",
					description: "Uppdateringar: BattlEye patchstatus och rebuild-anteckningar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Uppdateringar.",
					imageAlt: "Marathon Cheats live status after BattlEye and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. BattlEye patchstatus och rebuild-anteckningar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: frågor om ESP, soft aim, leverans och BattlEye. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. FAQ.",
					imageAlt: "Marathon Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. frågor om ESP, soft aim, leverans och BattlEye.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: orderhjälp och licens support-kontakt. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Support.",
					imageAlt: "Marathon Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. orderhjälp och licens support-kontakt.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected underhåll efter BattlEye patchar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Undetected cheats.",
					imageAlt: "Marathon Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. undetected underhåll efter BattlEye patchar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Marathon Wallhack | ESP Visibility",
					description: "Marathon Wallhack: wallhack ESP för spelare, kadaver och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Wallhack",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Wallhack.",
					imageAlt: "marathon wallhack visibility through walls in a run",
					galleryTitle: "Marathon Wallhack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon Wallhack",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. wallhack ESP för spelare, kadaver och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar-signaler för flanker och rotationer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Radar Hack.",
					imageAlt: "Marathon 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. 2D radar-signaler för flanker och rotationer.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: hur BattlEye-uppdateringar hanteras för Marathon cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. BattlEye Bypass.",
					imageAlt: "Marathon Cheats maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. hur BattlEye-uppdateringar hanteras för Marathon cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Marathon Cheats 2026 | Buyer Guide",
					description: "Marathon Cheats 2026: 2026 marathon cheats checklist före checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Cheats 2026",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Cheats 2026.",
					imageAlt: "Marathon Cheats product overview for Marathon",
					galleryTitle: "Marathon Cheats 2026",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-cheats/",
					sections: [
						{
							h2: "Marathon Cheats 2026",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. 2026 marathon cheats checklist före checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Marathon Cheats | ESP Aimbot Guide",
					description: "Marathon Cheats: Marathon Cheats pelare för ESP och Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Cheats",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Cheats.",
					imageAlt: "Marathon Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Cheats",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Cheats pelare för ESP och Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Marathon Cheat Download | Instant Access",
					description: "Marathon Cheat Download: digital licensnedladdning efter betalning. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Cheat Download",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Cheat Download.",
					imageAlt: "Marathon Cheats download and install delivery flow",
					galleryTitle: "Marathon Cheat Download",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Marathon Cheat Download",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. digital licensnedladdning efter betalning.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Marathon Mod-meny | In-Game Toggles",
					description: "Marathon Mod-meny: in-client ESP och soft aim-växlar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Mod-meny",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Mod-meny.",
					imageAlt: "Marathon Cheats in-game menu controls",
					galleryTitle: "Marathon Mod-meny",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Mod-meny",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. in-client ESP och soft aim-växlar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Marathon Soft Aim | Smooth Aim Settings",
					description: "Marathon Soft Aim: mjuka soft aim-inställningar för Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Soft Aim",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Soft Aim.",
					imageAlt: "Marathon soft aim FOV and smoothness settings",
					galleryTitle: "Marathon Soft Aim",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Soft Aim",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. mjuka soft aim-inställningar för Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Marathon Cheats | Buyer Checklist",
					description: "Bästa Marathon Cheats: vad du ska jämföra innan du köper marathon cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Marathon Cheats",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Bästa Marathon Cheats.",
					imageAlt: "Marathon Cheats overview for Marathon on PC",
					galleryTitle: "Bästa Marathon Cheats",
					heroImage: "/images/marathon-cheats-esp.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Marathon Cheats",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. vad du ska jämföra innan du köper marathon cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Marathon Aimbot Hack | Soft Aim Assist",
					description: "Marathon Aimbot Hack: undetected Aimbot hack assist för Marathon. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Aimbot Hack",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Aimbot Hack.",
					imageAlt: "Marathon Aimbot hack controls and bone priority",
					galleryTitle: "Marathon Aimbot Hack",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-aimbot/",
					sections: [
						{
							h2: "Marathon Aimbot Hack",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. undetected Aimbot hack assist för Marathon.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Marathon ESP Hack | Boxes & Loot",
					description: "Marathon ESP Hack: ESP hack-boxar, kadaver-pins och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon ESP Hack",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon ESP Hack.",
					imageAlt: "Marathon ESP hack boxes and loot markers",
					galleryTitle: "Marathon ESP Hack",
					heroImage: "/images/marathon-cheats-wallhack.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/marathon-esp/",
					sections: [
						{
							h2: "Marathon ESP Hack",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. ESP hack-boxar, kadaver-pins och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Marathon Unlock All | What It Means",
					description: "Marathon Unlock All: unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Marathon Unlock All",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Marathon Unlock All.",
					imageAlt: "Marathon Cheats license features overview",
					galleryTitle: "Marathon Unlock All",
					heroImage: "/images/marathon-cheats-radar.webp",
					ctaPrimary: "Köp Marathon Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Marathon Unlock All",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
								"support@marathoncheats.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Marathon Cheats",
					description: "Integritetspolicy för Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Integritetspolicy för marathoncheats.org och Marathon-licenser.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs villkor",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information vi samlar in",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Betalningsuppgifter behandlas via Zadeyo checkout — lagras inte på marathoncheats.org.",
							],
						},
						{
							h2: "Hur vi använder data",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Dina rättigheter",
							paragraphs: [
								"support@marathoncheats.org för support och juridik.",
								"E-post: support@marathoncheats.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Marathon Cheats",
					description: "Återbetalningspolicy för Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Återbetalningspolicy för marathoncheats.org och Marathon-licenser.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-run.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital leverans",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "Återbetalningsgodkännande",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Kontrollera Updates marathoner BattlEye-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Hur du begär",
							paragraphs: [
								"support@marathoncheats.org för support och juridik.",
								"E-post: support@marathoncheats.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Marathon Cheats",
					description: "Användarvillkor för Marathon Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Användarvillkor för marathoncheats.org och Marathon-licenser.",
					imageAlt: "Marathon Cheats",
					galleryTitle: "Marathon Cheats",
					heroImage: "/images/marathon-cheats-aimbot-view.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Godkännande av villkor",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye-underhåll.",
							],
						},
						{
							h2: "Riskvarning",
							paragraphs: [
								"Marathon Cheats kombinerar ESP wallhack, radar hack och Marathon Aimbot som undetected paket för Marathon på Windows PC. Supportssvar, orderlösning och juridisk efterlevnad vid behov.",
								"Att använda cheats kan bryta mot Bungie terms — du tar all ban-risk.",
							],
						},
						{
							h2: "Policyändringar",
							paragraphs: [
								"support@marathoncheats.org för support och juridik.",
								"E-post: support@marathoncheats.org",
							],
						},
					],
				},
			},
		},
	};
