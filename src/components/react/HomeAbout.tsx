import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

const PREVIEW_VIDEO_SRC =
	'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/ef/0510%282%29.mp4';
const PREVIEW_POSTER = '/images/marathon-cheats-hero-1024w.webp';

type Props = {
	locale: string;
};

function HomeAboutVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [active, setActive] = useState(false);

	const play = useCallback(() => {
		setActive(true);
		requestAnimationFrame(() => {
			const video = videoRef.current;
			if (!video) return;
			video.src = PREVIEW_VIDEO_SRC;
			void video.play().catch(() => {
				// Autoplay blocked — controls remain available after click.
			});
		});
	}, []);

	return (
		<div className="home__about-media">
			<video
				ref={videoRef}
				className="home__about-video"
				controls={active}
				playsInline
				preload="none"
				poster={PREVIEW_POSTER}
				width={640}
				height={360}
			>
				<track kind="captions" />
			</video>
			{!active ? (
				<button
					type="button"
					className="home__about-video-play"
					onClick={play}
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
