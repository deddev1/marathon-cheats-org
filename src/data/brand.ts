/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Marathon Cheats',
	/** Short product label if needed */
	shortName: 'Marathon Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://marathoncheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@marathoncheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fmarathon-novaxware',

	/** Game this template instance targets */
	game: 'Marathon',
	/** Official game store page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/3065800/Marathon/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/marathon-cheats-logo.webp',
	logoRaster: '/images/marathon-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Marathon Cheats logo',
	defaultOgImage: '/images/marathon-cheats-hero-1024w.webp',
	heroImage: '/images/marathon-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#39E6FF',
		bg: '#070B10',
		soft: '#B8F4FA',
		deep: '#087F96',
		hover: '#67F0FF',
		panel: '#111820',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'marathon cheats',
		list: [
			'marathon cheats',
			'marathon hacks',
			'marathon aimbot',
			'marathon esp',
			'Marathon ESP',
			'Marathon Aimbot',
			'marathon wallhack',
			'marathon cheat',
			'undetected marathon cheats',
			'best marathon cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Marathon Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		homeDescription:
			'Marathon cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you drop in on Windows PC today.',
		previewTitle: 'Marathon Cheats | Undetected ESP & Aimbot',
		previewDescription: 'Buy undetected marathon cheats for Marathon on Windows PC. ESP, soft aim, radar, and BattlEye patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can drop in faster. Follow each step in order before your first run.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Marathon — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Marathon on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — extraction tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Marathon on Windows PC.',
		blogLabel: 'Marathon Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you drop in.',
		previewIntro: '{brand} for Marathon — ESP wallhack, soft aim, 2D radar, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-15',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/marathon-screenshot-01.webp',
				title: 'Marathon gameplay screenshot 1',
				caption: 'Marathon extraction shooter gameplay on Windows PC',
			},
			{
				src: '/images/marathon-screenshot-02.webp',
				title: 'Marathon gameplay screenshot 2',
				caption: 'Tau Ceti IV extraction run on Windows PC',
			},
			{
				src: '/images/marathon-screenshot-03.webp',
				title: 'Marathon gameplay screenshot 3',
				caption: 'PvP and PvE combat encounters in Marathon',
			},
			{
				src: '/images/marathon-screenshot-04.webp',
				title: 'Marathon gameplay screenshot 4',
				caption: 'Outpost and open-zone exploration in Marathon',
			},
			{
				src: '/images/marathon-screenshot-05.webp',
				title: 'Marathon gameplay screenshot 5',
				caption: 'Squad pushes and looting in Marathon',
			},
			{
				src: '/images/marathon-screenshot-06.webp',
				title: 'Marathon gameplay screenshot 6',
				caption: 'Exfil zone and contested loot gameplay in Marathon',
			},
			{
				src: '/images/marathon-screenshot-07.webp',
				title: 'Marathon gameplay screenshot 7',
				caption: 'Multiplayer extraction shooter in Marathon',
			},
			{
				src: '/images/marathon-screenshot-08.webp',
				title: 'Marathon gameplay screenshot 8',
				caption: 'Combat and loadout progression in Marathon',
			},
			{
				src: '/images/marathon-screenshot-09.webp',
				title: 'Marathon gameplay screenshot 9',
				caption: 'Late-game extraction tactics in Marathon',
			},
			{
				src: '/images/marathon-screenshot-10.webp',
				title: 'Marathon gameplay screenshot 10',
				caption: 'Flanking and ambush gameplay in Marathon',
			},
			{
				src: '/images/marathon-screenshot-11.webp',
				title: 'Marathon gameplay screenshot 11',
				caption: 'Industrial and wetland zones in Marathon',
			},
			{
				src: '/images/marathon-screenshot-12.webp',
				title: 'Marathon gameplay screenshot 12',
				caption: 'Squad survival under fire in Marathon',
			},
			{
				src: '/images/marathon-screenshot-13.webp',
				title: 'Marathon gameplay screenshot 13',
				caption: 'Night and low-light runs in Marathon',
			},
			{
				src: '/images/marathon-screenshot-14.webp',
				title: 'Marathon gameplay screenshot 14',
				caption: 'Map traversal and positioning in Marathon',
			},
			{
				src: '/images/marathon-screenshot-15.webp',
				title: 'Marathon gameplay screenshot 15',
				caption: 'Endgame extraction gameplay in Marathon',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
