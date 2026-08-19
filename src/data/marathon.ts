import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const marathonScreenshot = (n: number) =>
	`/images/marathon-screenshot-${String(n).padStart(2, '0')}.webp`;

/** Screenshots used across product pages. */
export const marathonImages = {
	hero: marathonScreenshot(1),
	espWallhack: marathonScreenshot(3),
	aimbotCombat: marathonScreenshot(4),
	aimbotSkeleton: marathonScreenshot(5),
	dinoEsp: marathonScreenshot(6),
	hacksCombat: marathonScreenshot(7),
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one screenshot URL */
	cover: marathonScreenshot(7),
	nestBuilder: marathonScreenshot(6),
	packFight: marathonScreenshot(5),
	hacksPackage: marathonScreenshot(6),
	headerArt: marathonScreenshot(5),
	survivalCombat: marathonScreenshot(7),
	extractFight: marathonScreenshot(4),
	ambushFight: marathonScreenshot(4),
	growthRunCombat: marathonScreenshot(3),
	growthRunMode: marathonScreenshot(2),
	survivalIsland: marathonScreenshot(2),
	sessionMap: marathonScreenshot(2),
	product: [
		{ src: marathonScreenshot(2), alt: 'Marathon gameplay screenshot 2' },
		{ src: marathonScreenshot(3), alt: 'Marathon gameplay screenshot 3' },
		{ src: marathonScreenshot(4), alt: 'Marathon gameplay screenshot 4' },
		{ src: marathonScreenshot(6), alt: 'Marathon gameplay screenshot 6' },
		{ src: marathonScreenshot(7), alt: 'Marathon gameplay screenshot 7' },
		{ src: marathonScreenshot(8), alt: 'Marathon gameplay screenshot 8' },
	],
	gallery: [
		{ src: marathonScreenshot(2), alt: 'Marathon gameplay screenshot 2', featured: true },
		{ src: marathonScreenshot(3), alt: 'Marathon gameplay screenshot 3' },
		{ src: marathonScreenshot(4), alt: 'Marathon gameplay screenshot 4' },
		{ src: marathonScreenshot(9), alt: 'Marathon gameplay screenshot 9' },
		{ src: marathonScreenshot(10), alt: 'Marathon gameplay screenshot 10' },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => ({
		src: marathonScreenshot(i + 1),
		title: `Marathon gameplay screenshot ${i + 1}`,
		caption: `Marathon extraction shooter screenshot ${i + 1}`,
	})),
} as const;
