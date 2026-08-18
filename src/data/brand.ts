/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'The Isle Hacks',
	/** Short product label if needed */
	shortName: 'Isle Hacks',
	/** Canonical origin — no trailing slash */
	url: 'https://theislehacks.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@theislehacks.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fthe-isle-novaxware',

	/** Game this template instance targets */
	game: 'The Isle',
	/** Official game store page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/376210/The_Isle/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/isle-hacks-logo.webp',
	logoRaster: '/images/isle-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'The Isle Hacks logo',
	defaultOgImage: '/images/isle-hacks-hero-1024w.webp',
	heroImage: '/images/isle-hacks-hero-1024w.webp',

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
		accent: '#6fae3d',
		bg: '#080b08',
		soft: '#a8c96b',
		deep: '#315c2b',
		hover: '#82c94a',
		panel: '#101610',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'the isle hacks',
		list: [
			'the isle hacks',
			'the isle cheats',
			'isle cheats',
			'isle evrima',
			'Isle ESP',
			'Isle Aimbot',
			'isle wallhack',
			'the isle hack',
			'undetected isle hacks',
			'best isle hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'The Isle Hacks | Undetected Aimbot, ESP & Wallhack 2026',
		homeDescription:
			'The Isle hacks for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, soft aim, radar, growth tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you spawn in on Windows PC today.',
		previewTitle: 'The Isle Hacks | Undetected ESP & Aimbot',
		previewDescription: 'Buy undetected the isle hacks for The Isle on Windows PC. ESP, soft aim, radar, and Easy Anti-Cheat patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can spawn in faster. Follow each step in order before your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for The Isle — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for The Isle on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — survival tips, ESP, aimbot, hunting routes, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for The Isle on Windows PC.',
		blogLabel: 'Isle Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you spawn in.',
		previewIntro: '{brand} for The Isle — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
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
				src: '/images/isle-screenshot-01.webp',
				title: 'The Isle gameplay screenshot 1',
				caption: 'The Isle dinosaur survival gameplay on Windows PC',
			},
			{
				src: '/images/isle-screenshot-02.webp',
				title: 'The Isle gameplay screenshot 2',
				caption: 'Open-world survival session in The Isle',
			},
			{
				src: '/images/isle-screenshot-03.webp',
				title: 'The Isle gameplay screenshot 3',
				caption: 'Carnivore and herbivore encounters in The Isle',
			},
			{
				src: '/images/isle-screenshot-04.webp',
				title: 'The Isle gameplay screenshot 4',
				caption: 'Forest and plains exploration in The Isle',
			},
			{
				src: '/images/isle-screenshot-05.webp',
				title: 'The Isle gameplay screenshot 5',
				caption: 'Pack hunting and survival in The Isle',
			},
			{
				src: '/images/isle-screenshot-06.webp',
				title: 'The Isle gameplay screenshot 6',
				caption: 'Nest and water zone gameplay in The Isle',
			},
			{
				src: '/images/isle-screenshot-07.webp',
				title: 'The Isle gameplay screenshot 7',
				caption: 'Multiplayer dinosaur survival in The Isle',
			},
			{
				src: '/images/isle-screenshot-08.webp',
				title: 'The Isle gameplay screenshot 8',
				caption: 'Combat and growth progression in The Isle',
			},
			{
				src: '/images/isle-screenshot-09.webp',
				title: 'The Isle gameplay screenshot 9',
				caption: 'Late-game survival tactics in The Isle',
			},
			{
				src: '/images/isle-screenshot-10.webp',
				title: 'The Isle gameplay screenshot 10',
				caption: 'Predator stalking prey in The Isle',
			},
			{
				src: '/images/isle-screenshot-11.webp',
				title: 'The Isle gameplay screenshot 11',
				caption: 'Swamp and wetland biome in The Isle',
			},
			{
				src: '/images/isle-screenshot-12.webp',
				title: 'The Isle gameplay screenshot 12',
				caption: 'Herbivore herd survival in The Isle',
			},
			{
				src: '/images/isle-screenshot-13.webp',
				title: 'The Isle gameplay screenshot 13',
				caption: 'Night and low-light sessions in The Isle',
			},
			{
				src: '/images/isle-screenshot-14.webp',
				title: 'The Isle gameplay screenshot 14',
				caption: 'Map traversal and positioning in The Isle',
			},
			{
				src: '/images/isle-screenshot-15.webp',
				title: 'The Isle gameplay screenshot 15',
				caption: 'Endgame carnivore gameplay in The Isle',
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
