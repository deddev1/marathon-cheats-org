/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'home',
	'cheats-2026': 'home',
	undetected: 'home',
	'mod-menu': 'home',
	'unlock-all': 'home',
	'aimbot-hack': 'marathon-aimbot',
	'soft-aim': 'marathon-aimbot',
	'esp-hack': 'marathon-esp',
	wallhack: 'marathon-esp',
	'cheat-download': 'setup',
	battleye: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
