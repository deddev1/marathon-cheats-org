/** Mobile nav toggle + scroll state — no React on the critical path. */
(() => {
	const header = document.querySelector('[data-nav]');
	if (!header) return;

	const toggle = header.querySelector('[data-nav-toggle]');
	const panel = document.getElementById('site-nav-panel');
	if (!toggle || !panel) return;

	const openLabel = toggle.getAttribute('data-open-label') || 'Open menu';
	const closeLabel = toggle.getAttribute('data-close-label') || 'Close menu';

	const setOpen = (open) => {
		header.classList.toggle('is-open', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
		panel.hidden = !open;
		document.body.classList.toggle('nav-lock', open);
	};

	const onScroll = () => {
		header.classList.toggle('is-scrolled', window.scrollY > 8);
	};

	toggle.addEventListener('click', () => {
		setOpen(!header.classList.contains('is-open'));
	});

	panel.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setOpen(false));
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setOpen(false);
	});

	window.addEventListener(
		'resize',
		() => {
			if (window.matchMedia('(min-width: 1025px)').matches) setOpen(false);
		},
		{ passive: true },
	);

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
})();
