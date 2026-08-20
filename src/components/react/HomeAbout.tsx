import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

const PREVIEW_VIDEO_SRC =
	'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/ef/0510%282%29.mp4';
const PREVIEW_POSTER = '/images/marathon-preview-video-poster.webp';

type Props = {
	locale: string;
};

function HomeAboutVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [started, setStarted] = useState(false);
	const [error, setError] = useState(false);

	const play = useCallback(async () => {
		const video = videoRef.current;
		if (!video) return;

		setStarted(true);
		setError(false);

		try {
			if (!video.src || !video.src.includes('0510')) {
				video.src = PREVIEW_VIDEO_SRC;
			}
			video.load();
			await video.play();
		} catch {
			// Autoplay policies — controls stay visible so the user can press play.
			setError(false);
		}
	}, []);

	return (
		<div className="home__about-media">
			<video
				ref={videoRef}
				className="home__about-video"
				controls={started}
				playsInline
				preload="none"
				poster={PREVIEW_POSTER}
				width={640}
				height={360}
				onError={() => setError(true)}
			>
				Your browser does not support embedded video playback.
			</video>
			{!started ? (
				<button
					type="button"
					className="home__about-video-play"
					onClick={() => void play()}
					aria-label="Play Marathon Cheats preview video"
				>
					<span className="home__about-video-play-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none">
							<path
								d="M8 5.8v12.4L19 12 8 5.8z"
								fill="currentColor"
								stroke="currentColor"
								strokeWidth="1.2"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<span className="home__about-video-play-label">Watch preview</span>
				</button>
			) : null}
			{error ? (
				<p className="home__about-video-error" role="status">
					Video could not load.{' '}
					<a href={PREVIEW_VIDEO_SRC} target="_blank" rel="noopener noreferrer">
						Open in new tab
					</a>
				</p>
			) : null}
		</div>
	);
}

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__about-grid">
				<div className="home__prose-callout">
					<h2 id="home-about-title" className="home__prose-kicker">
						{t('home.aboutTitle')}
					</h2>
					<p>{t('home.aboutP1')}</p>
					<p>
						{t('home.aboutP2Before')}{' '}
						<a href="/marathon-cheats/">{t('home.aboutPillar')}</a>
						{t('home.aboutP2Mid')}
						<a href="/marathon-esp/">{t('home.aboutEsp')}</a>
						{t('home.aboutP2Mid')}
						<a href="/marathon-aimbot/">{t('home.aboutAimbot')}</a>
						{t('home.aboutP2Or')}
						<a href="/updates/">{t('home.aboutUndetected')}</a>
						{t('home.aboutP2After')}
					</p>
				</div>
				<HomeAboutVideo />
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
