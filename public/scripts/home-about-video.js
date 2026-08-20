/**
 * Homepage preview video — lazy-load MP4 from data-src on play click.
 * External file required: inline scripts are blocked by CSP (script-src 'self').
 */
function initHomeAboutVideo(root) {
	const video = root.querySelector('video');
	const playBtn = root.querySelector('[data-home-video-play]');
	const loadingEl = root.querySelector('[data-home-video-loading]');
	const errorEl = root.querySelector('[data-home-video-error]');
	if (!video || !playBtn || !loadingEl || !errorEl) return;

	const videoSrc = video.dataset.src;
	if (!videoSrc) return;

	let loading = false;

	const showLoading = () => {
		playBtn.hidden = true;
		loadingEl.hidden = false;
		errorEl.hidden = true;
	};

	const showError = () => {
		loading = false;
		loadingEl.hidden = true;
		playBtn.hidden = false;
		errorEl.hidden = false;
		video.controls = true;
	};

	const hideOverlay = () => {
		loading = false;
		playBtn.hidden = true;
		loadingEl.hidden = true;
		errorEl.hidden = true;
		video.controls = true;
	};

	const ensureVideoSrc = () => {
		if (video.getAttribute('src')) return;
		video.src = videoSrc;
	};

	playBtn.addEventListener('click', async () => {
		if (loading) return;
		loading = true;
		showLoading();
		video.controls = true;
		ensureVideoSrc();

		try {
			video.load();
			await video.play();
		} catch {
			if (video.error) {
				showError();
				return;
			}
			loadingEl.hidden = true;
			playBtn.hidden = true;
			loading = false;
		}
	});

	video.addEventListener('playing', hideOverlay);
	video.addEventListener('error', showError);
}

function bootHomeAboutVideos() {
	for (const root of document.querySelectorAll('[data-home-video]')) {
		initHomeAboutVideo(root);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', bootHomeAboutVideos);
} else {
	bootHomeAboutVideos();
}
