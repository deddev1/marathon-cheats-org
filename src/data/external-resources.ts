import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://store.steampowered.com/app/3065800/news/',
	officialSite: 'https://www.bungie.net/7/en/Marathon',
	wiki: 'https://marathondb.gg/',
	steamCommunity: 'https://steamcommunity.com/app/3065800',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		label: 'Marathon on Steam',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		label: 'Steam patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		label: 'Official Marathon website',
		href: externalUrls.officialSite,
		note: 'Game overview from Bungie.',
	},
	{
		label: 'Marathon Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Maps, runners, loot, and extraction mechanics.',
	},
	{
		label: 'Steam Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Marathon on Steam', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Marathon Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Steam patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Marathon Wiki', href: externalUrls.wiki },
	'marathon-esp': { label: 'Marathon Wiki', href: externalUrls.wiki },
	'marathon-aimbot': { label: 'Marathon Wiki', href: externalUrls.wiki },
	radar: { label: 'Marathon Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Steam Community', href: externalUrls.steamCommunity },
	faq: { label: 'Marathon Wiki', href: externalUrls.wiki },
	undetected: { label: 'Steam patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Marathon Wiki', href: externalUrls.wiki },
	battleye: { label: 'Steam patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Marathon on Steam', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Marathon Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Marathon Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Steam Community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Marathon Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Marathon Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Marathon on Steam', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
