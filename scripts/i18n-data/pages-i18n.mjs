import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Marathon Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Marathon indetectables para Marathon en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye. Entrega digital instantánea.', h1: 'Marathon Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Marathon en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye tras cada parche.', imageAlt: 'Marathon ESP — etiquetas de jugador hack', gallery: 'Galería Marathon Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Marathon Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y loot run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Marathon Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Marathon indétectables pour Marathon sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye. Livraison numérique instantanée.', h1: 'Marathon Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Marathon sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye après chaque patch.', imageAlt: 'Marathon ESP — tags joueur hack', gallery: 'Galerie Marathon Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Marathon Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et loot run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Marathon Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Marathon Cheats für Marathon auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye-Wartung. Sofortige digitale Lieferung.', h1: 'Marathon Cheats — Undetected ESP, Wallhack und Aimbot', intro: 'Undetected Windows PC Paket für Marathon: ESP Wallhack, Radar und Aimbot mit BattlEye-Wartung nach jedem Patch.', imageAlt: 'Marathon ESP — Spieler-Tags Hack', gallery: 'Marathon Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Marathon Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und loot run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Marathon Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Marathon indetectáveis para Marathon no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye. Entrega digital instantánea.', h1: 'Marathon Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Marathon no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye após cada patch.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galeria Marathon Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Marathon Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler epackrões inimigos em BR e loot run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Marathon Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Marathon indetectable per Marathon su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye. Consegna digitale istantanea.', h1: 'Marathon Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Marathon su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye dopo ogni patch.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galleria Marathon Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Marathon Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere packre nemiche in BR e loot run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Marathon Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected marathon cheats voor Marathon op PC. ESP wallhack, radar hack en Aimbot met BattlEye-onderhoud. Directe digitale levering.', h1: 'Marathon Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Marathon: ESP wallhack, radar en Aimbot met BattlEye-onderhoud na elke patch.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Marathon Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Marathon Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke packs te lezen in BR en loot run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Marathon Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Marathon dla Marathon na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye. Natychmiastowa dostawa cyfrowa.', h1: 'Marathon Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Marathon na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye po każdym patchu.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galeria Marathon Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Marathon Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich packów w BR i loot run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Marathon Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Marathon для Marathon на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye. Мгновенная цифровая доставка.', h1: 'Marathon Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Marathon на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye после патчей.', imageAlt: 'Marathon ESP — теги игроков hack', gallery: 'Галерея Marathon Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Marathon Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и loot run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Marathon Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Marathon için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye bakımı. Anında dijital teslimat.', h1: 'Marathon Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Marathon Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye bakımı dahil.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Marathon Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Marathon Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve loot run\'da düşman pack okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Marathon Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Marathon undetected لـ Marathon على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye. تسليم رقمي فوري.', h1: 'Marathon Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Marathon على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'معرض Marathon Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Marathon Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وloot run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Marathon Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Marathon向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEyeメンテナンス。即時デジタル配信。', h1: 'Marathon Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Marathon Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEyeメンテナンス付き。', imageAlt: 'marathon cheats hero ESP aimbot wallhack', gallery: 'Marathon Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にMarathon Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとloot runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Marathon Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Marathon undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye 유지보수. 즉시 디지털 배송.', h1: 'Marathon Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Marathon Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye 유지보수 포함.', imageAlt: 'marathon cheats hero ESP aimbot wallhack', gallery: 'Marathon Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Marathon Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 loot run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Marathon Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Marathon undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye维护。即时数字交付。', h1: 'Marathon Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Marathon Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye维护。', imageAlt: 'marathon cheats hero ESP aimbot wallhack', gallery: 'Marathon Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Marathon Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和loot run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Marathon Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Marathon undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.', h1: 'Marathon Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Marathon Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.', imageAlt: 'marathon cheats hero ESP aimbot wallhack', gallery: 'Marathon Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Marathon Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और loot run में दुश्मन pack पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Marathon Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Marathon undetected untuk Marathon di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye. Pengiriman digital instan.', h1: 'Marathon Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Marathon di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galeri Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Marathon Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca pack musuh di BR dan loot run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Marathon Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Marathon undetected สำหรับ Marathon บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.', h1: 'Marathon Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Marathon บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance', imageAlt: 'Marathon ESP player tags hack', gallery: 'แกลเลอรี Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Marathon Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน pack ศัตรูใน BR และ loot run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Marathon Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Marathon undetected cho Marathon trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye. Giao hàng kỹ thuật số tức thì.', h1: 'Marathon Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Marathon trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Thư viện Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Marathon Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc pack địch trong BR và loot run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Marathon Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Marathon для Marathon на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye. Мгновенная цифровая доставка.', h1: 'Marathon Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Marathon на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Галерея Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Marathon Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і loot run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Marathon Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected marathon cheaty pro Marathon na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye. Okamžité digitální doručení.', h1: 'Marathon Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Marathon na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galerie Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Marathon Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských packů v BR a loot run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Marathon Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Marathon undetected pentru Marathon pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye. Livrare digitală instantă.', h1: 'Marathon Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Marathon pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Galerie Marathon Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Marathon Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea pack-urilor inamice în BR și loot run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Marathon Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected marathon cheats för Marathon på PC. ESP wallhack, radar hack, Aimbot, BattlEye-underhåll. Omedelbar digital leverans.', h1: 'Marathon Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Marathon på Windows PC: ESP wallhack, radar, Aimbot med BattlEye-underhåll.', imageAlt: 'Marathon ESP player tags hack', gallery: 'Marathon Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Marathon Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendepacks i BR och loot run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'marathon-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'marathon-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-species Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'BattlEye Maintenance Log', focus: 'BattlEye patch status and rebuild notes', altKeyword: 'updates BattlEye maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and BattlEye questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'BattlEye Safe Status', focus: 'undetected maintenance after BattlEye patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, carcasses, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	battleye: { suffix: 'Patch Maintenance', focus: 'how BattlEye updates are handled for Marathon cheats', altKeyword: 'BattlEye bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 marathon cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Marathon Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying marathon cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Marathon', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, carcass pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all species ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'marathon-esp': 'Cajas de jugador y wallhack',
		'marathon-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro BattlEye',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		battleye: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y carcasses',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'marathon-esp': 'Boîtes joueur et wallhack',
		'marathon-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal BattlEye',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		battleye: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et carcasses',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'marathon-esp': 'Spielerboxen & Wallhack',
		'marathon-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'BattlEye Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		battleye: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'marathon-esp': 'Caixas de jogador e wallhack',
		'marathon-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro BattlEye',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		battleye: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e carcasses',
		'unlock-all': 'O que significa',
	},
	it: {
		'marathon-esp': 'Box giocatore e wallhack',
		'marathon-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione BattlEye',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		battleye: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e carcasses',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'marathon-esp': 'Боксы игроков и wallhack',
		'marathon-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал BattlEye',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		battleye: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Marathon Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Marathon Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'marathon-esp': { en: 'Marathon ESP', es: 'ESP Marathon', fr: 'ESP Marathon', de: 'Marathon ESP', pt: 'ESP Marathon', it: 'ESP Marathon', nl: 'Marathon ESP', pl: 'ESP Marathon', ru: 'ESP Marathon', tr: 'Marathon ESP', ar: 'ESP Marathon', ja: 'Marathon ESP', ko: 'Marathon ESP', zh: 'Marathon ESP', hi: 'Marathon ESP', id: 'ESP Marathon', th: 'Marathon ESP', vi: 'ESP Marathon', uk: 'ESP Marathon', cs: 'Marathon ESP', ro: 'ESP Marathon', sv: 'Marathon ESP' },
	'marathon-aimbot': { en: 'Marathon Aimbot', es: 'Aimbot Marathon', fr: 'Aimbot Marathon', de: 'Marathon Aimbot', pt: 'Aimbot Marathon', it: 'Aimbot Marathon', nl: 'Marathon Aimbot', pl: 'Aimbot Marathon', ru: 'Aimbot Marathon', tr: 'Marathon Aimbot', ar: 'Aimbot Marathon', ja: 'Marathon Aimbot', ko: 'Marathon Aimbot', zh: 'Marathon Aimbot', hi: 'Marathon Aimbot', id: 'Aimbot Marathon', th: 'Marathon Aimbot', vi: 'Aimbot Marathon', uk: 'Aimbot Marathon', cs: 'Marathon Aimbot', ro: 'Aimbot Marathon', sv: 'Marathon Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Marathon Wallhack', es: 'Marathon Wallhack', fr: 'Marathon Wallhack', de: 'Marathon Wallhack', pt: 'Marathon Wallhack', it: 'Marathon Wallhack', nl: 'Marathon Wallhack', pl: 'Marathon Wallhack', ru: 'Marathon Wallhack', tr: 'Marathon Wallhack', ar: 'Marathon Wallhack', ja: 'Marathon Wallhack', ko: 'Marathon Wallhack', zh: 'Marathon Wallhack', hi: 'Marathon Wallhack', id: 'Marathon Wallhack', th: 'Marathon Wallhack', vi: 'Marathon Wallhack', uk: 'Marathon Wallhack', cs: 'Marathon Wallhack', ro: 'Marathon Wallhack', sv: 'Marathon Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	battleye: { en: 'BattlEye Bypass', es: 'Bypass BattlEye', fr: 'Bypass BattlEye', de: 'BattlEye Bypass', pt: 'Bypass BattlEye', it: 'Bypass BattlEye', nl: 'BattlEye Bypass', pl: 'Bypass BattlEye', ru: 'Bypass BattlEye', tr: 'BattlEye bypass', ar: 'Bypass BattlEye', ja: 'BattlEye Bypass', ko: 'BattlEye Bypass', zh: 'BattlEye Bypass', hi: 'BattlEye Bypass', id: 'Bypass BattlEye', th: 'BattlEye Bypass', vi: 'Bypass BattlEye', uk: 'Bypass BattlEye', cs: 'BattlEye Bypass', ro: 'Bypass BattlEye', sv: 'BattlEye Bypass' },
	'cheats-2026': { en: 'Marathon Cheats 2026', es: 'Trucos Marathon 2026', fr: 'Triches Marathon 2026', de: 'Marathon Cheats 2026', pt: 'Cheats Marathon 2026', it: 'Cheat Marathon 2026', nl: 'Marathon Cheats 2026', pl: 'Cheaty Marathon 2026', ru: 'Читы Marathon 2026', tr: 'Marathon Hileleri 2026', ar: 'غش Marathon 2026', ja: 'Marathon Cheats 2026', ko: 'Marathon Cheats 2026', zh: 'Marathon作弊 2026', hi: 'Marathon Cheats 2026', id: 'Cheat Marathon 2026', th: 'Marathon Cheats 2026', vi: 'Cheat Marathon 2026', uk: 'Чіти Marathon 2026', cs: 'marathon cheaty 2026', ro: 'Cheats Marathon 2026', sv: 'Marathon Cheats 2026' },
	hacks: { en: 'Marathon Cheats', es: 'Trucos Marathon', fr: 'Triches Marathon', de: 'Marathon Cheats', pt: 'Cheats Marathon', it: 'Cheat Marathon', nl: 'Marathon Cheats', pl: 'Cheaty Marathon', ru: 'Читы Marathon', tr: 'Marathon Hileleri', ar: 'غش Marathon', ja: 'Marathon Cheats', ko: 'Marathon Cheats', zh: 'Marathon作弊', hi: 'Marathon Cheats', id: 'Cheat Marathon', th: 'Marathon Cheats', vi: 'Cheat Marathon', uk: 'Чіти Marathon', cs: 'marathon cheaty', ro: 'Cheats Marathon', sv: 'Marathon Cheats' },
	'cheat-download': { en: 'Marathon Cheat Download', es: 'Descarga Marathon Cheats', fr: 'Téléchargement Marathon Cheats', de: 'Marathon Cheat Download', pt: 'Download Marathon Cheats', it: 'Download Marathon Cheats', nl: 'Marathon Cheat Download', pl: 'Pobieranie Marathon Cheats', ru: 'Скачать Marathon Cheats', tr: 'Marathon Hile İndir', ar: 'تحميل Marathon Cheats', ja: 'Marathon Cheat Download', ko: 'Marathon Cheat Download', zh: 'Marathon作弊下载', hi: 'Marathon Cheat Download', id: 'Download Cheat Marathon', th: 'ดาวน์โหลด Marathon Cheats', vi: 'Tải Cheat Marathon', uk: 'Завантаження Marathon Cheats', cs: 'Stáhnout Marathon Cheats', ro: 'Descărcare Marathon Cheats', sv: 'Marathon Cheat Download' },
	'mod-menu': { en: 'Marathon Mod Menu', es: 'Menú mod Marathon', fr: 'Menu mod Marathon', de: 'Marathon Mod-Menü', pt: 'Menu mod Marathon', it: 'Mod menu Marathon', nl: 'Marathon Mod Menu', pl: 'Mod menu Marathon', ru: 'Мод-меню Marathon', tr: 'Marathon Mod Menü', ar: 'قائمة مود Marathon', ja: 'Marathon Mod Menu', ko: 'Marathon 모드 메뉴', zh: 'Marathon修改菜单', hi: 'Marathon Mod Menu', id: 'Menu mod Marathon', th: 'เมนูมอด Marathon', vi: 'Mod menu Marathon', uk: 'Мод-меню Marathon', cs: 'Marathon mod menu', ro: 'Meniu mod Marathon', sv: 'Marathon Mod-meny' },
	'soft-aim': { en: 'Marathon Soft Aim', es: 'Soft aim Marathon', fr: 'Soft aim Marathon', de: 'Marathon Soft Aim', pt: 'Soft aim Marathon', it: 'Soft aim Marathon', nl: 'Marathon Soft Aim', pl: 'Soft aim Marathon', ru: 'Soft aim Marathon', tr: 'Marathon Soft Aim', ar: 'Soft aim Marathon', ja: 'Marathon Soft Aim', ko: 'Marathon Soft Aim', zh: 'Marathon Soft Aim', hi: 'Marathon Soft Aim', id: 'Soft aim Marathon', th: 'Marathon Soft Aim', vi: 'Soft aim Marathon', uk: 'Soft aim Marathon', cs: 'Marathon Soft Aim', ro: 'Soft aim Marathon', sv: 'Marathon Soft Aim' },
	'best-cheats': { en: 'Best Marathon Cheats', es: 'Mejores trucos Marathon', fr: 'Meilleures triches Marathon', de: 'Beste Marathon Cheats', pt: 'Melhores cheats Marathon', it: 'Migliori cheat Marathon', nl: 'Beste Marathon Cheats', pl: 'Najlepsze cheaty Marathon', ru: 'Лучшие читы Marathon', tr: 'En İyi Marathon Hileleri', ar: 'أفضل غش Marathon', ja: '最強Marathonチート', ko: '최고의 Marathon 치트', zh: '最佳Marathon作弊', hi: 'सर्वश्रेष्ठ Marathon Cheats', id: 'Cheat Marathon terbaik', th: 'Cheat Marathon ที่ดีที่สุด', vi: 'Cheat Marathon tốt nhất', uk: 'Найкращі чіти Marathon', cs: 'Nejlepší marathon cheaty', ro: 'Cele mai bune cheats Marathon', sv: 'Bästa Marathon Cheats' },
	'aimbot-hack': { en: 'Marathon Aimbot Hack', es: 'Hack aimbot Marathon', fr: 'Hack aimbot Marathon', de: 'Marathon Aimbot Hack', pt: 'Hack aimbot Marathon', it: 'Hack aimbot Marathon', nl: 'Marathon Aimbot Hack', pl: 'Hack aimbot Marathon', ru: 'Хак aimbot Marathon', tr: 'Marathon Aimbot Hilesi', ar: 'هاك Aimbot Marathon', ja: 'Marathon Aimbot Hack', ko: 'Marathon 에임봇 핵', zh: 'Marathon自瞄外挂', hi: 'Marathon Aimbot Hack', id: 'Hack aimbot Marathon', th: 'Hack Aimbot Marathon', vi: 'Hack aimbot Marathon', uk: 'Хак aimbot Marathon', cs: 'Marathon Aimbot hack', ro: 'Hack aimbot Marathon', sv: 'Marathon Aimbot Hack' },
	'esp-hack': { en: 'Marathon ESP Hack', es: 'Hack ESP Marathon', fr: 'Hack ESP Marathon', de: 'Marathon ESP Hack', pt: 'Hack ESP Marathon', it: 'Hack ESP Marathon', nl: 'Marathon ESP Hack', pl: 'Hack ESP Marathon', ru: 'Хак ESP Marathon', tr: 'Marathon ESP Hilesi', ar: 'هاك ESP Marathon', ja: 'Marathon ESP Hack', ko: 'Marathon ESP 핵', zh: 'Marathon ESP外挂', hi: 'Marathon ESP Hack', id: 'Hack ESP Marathon', th: 'Hack ESP Marathon', vi: 'Hack ESP Marathon', uk: 'Хак ESP Marathon', cs: 'Marathon ESP hack', ro: 'Hack ESP Marathon', sv: 'Marathon ESP Hack' },
	'unlock-all': { en: 'Marathon Unlock All', es: 'Unlock all Marathon', fr: 'Unlock all Marathon', de: 'Marathon Unlock All', pt: 'Unlock all Marathon', it: 'Unlock all Marathon', nl: 'Marathon Unlock All', pl: 'Unlock all Marathon', ru: 'Unlock all Marathon', tr: 'Marathon Unlock All', ar: 'Unlock all Marathon', ja: 'Marathon Unlock All', ko: 'Marathon Unlock All', zh: 'Marathon Unlock All', hi: 'Marathon Unlock All', id: 'Unlock all Marathon', th: 'Marathon Unlock All', vi: 'Unlock all Marathon', uk: 'Unlock all Marathon', cs: 'Marathon Unlock All', ro: 'Unlock all Marathon', sv: 'Marathon Unlock All' },
};

const CTA2_HREF = {
	'marathon-esp': '/marathon-cheats/',
	'marathon-aimbot': '/marathon-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/marathon-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/marathon-cheats/',
	wallhack: '/marathon-esp/',
	radar: '/marathon-esp/',
	battleye: '/updates/',
	'cheats-2026': '/marathon-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/marathon-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/marathon-aimbot/',
	'esp-hack': '/marathon-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Marathon Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for Marathon Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for marathoncheats.org and Marathon licenses.'}`),
		imageAlt: 'Marathon Cheats',
		galleryTitle: 'Marathon Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on marathoncheats.org.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Bungie terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@marathoncheats.org`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
