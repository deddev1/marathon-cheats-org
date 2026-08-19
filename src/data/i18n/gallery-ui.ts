import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'marathon cheats',
		title: 'marathon cheats gallery',
		subtitle: 'Simple marathon cheats visuals — ESP, wallhack, aimbot, and radar for Marathon on PC.',
		lead: 'Marathon Cheats helps you spot players, enemy forces, carcasses, and exfils with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'marathon cheats esp', copy: 'See players through walls with marathon cheats esp and wallhack overlays.' },
			{ title: 'marathon cheats radar', copy: 'Track nearby threats with marathon cheats radar before you push or extract.' },
			{ title: 'marathon cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Marathon runs on Windows PC.' },
		],
		updatesLabel: 'marathon cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Marathon Cheats',
		title: 'Galería Marathon',
		subtitle: 'Visuales de Marathon con loadouts, peleas de escuadrón y combate run — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Marathon Cheats está pensado para el loop BR de Marathon: leer el mapa, rastrear escuadrones enemigos, carcassesear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Tau Ceti IV y loot run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de carcasses y cofres', copy: 'Resalta loadouts, cofres y carcasses de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Marathon', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Marathon Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Marathon Cheats',
		title: 'Galerie Marathon',
		subtitle: 'Visuels Marathon — loadouts, combats d\'escouade et run — avec ESP, radar et Aimbot.',
		lead: 'Marathon Cheats suit la boucle BR de Marathon : lire la carte, suivre les escouades, carcasses et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Tau Ceti IV et loot run pour choisir vos engagements.' },
			{ title: 'Marqueurs carcasses & coffres', copy: 'Mettez en évidence loadouts, coffres et carcasses haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Marathon', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Marathon Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon Galerie',
		subtitle: 'Marathon-Bilder zu Loadouts, Squad-Kämpfen und run — mit ESP, Radar und Aimbot.',
		lead: 'Marathon Cheats passt zur Raid-Schleife von Marathon: Karte lesen, Gegner-Trupps tracken, jagen und Nester überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Tau Ceti IV und loot run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'The Marathon Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Marathon Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Marathon Cheats',
		title: 'Galeria Marathon',
		subtitle: 'Visuais de Marathon com loadouts, combates de epackrão e run — com ESP, radar e Aimbot.',
		lead: 'Marathon Cheats segue o loop BR do Marathon: ler o mapa, rastrear epackrões, carcassesar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e epackrões', copy: 'Detecte players inimigos em Tau Ceti IV e loot run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de carcasses e cofres', copy: 'Destaque loadouts, cofres e carcasses de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Marathon', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Marathon Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Marathon Cheats',
		title: 'Galleria Marathon',
		subtitle: 'Immagini Marathon — loadout, scontri di packra e run — con ESP, radar e Aimbot.',
		lead: 'Marathon Cheats è pensato per il loop BR di Marathon: leggere la mappa, tracciare packre nemiche, carcasses e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e packre', copy: 'Individua playeri nemici su Tau Ceti IV e loot run per scegliere i fight con più intel.' },
			{ title: 'Marker carcasses e coffreti', copy: 'Evidenzia loadout, coffreti e carcasses di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Marathon', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Marathon Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon galerij',
		subtitle: 'Marathon-beelden van loadouts, packgevechten en run — met ESP, radar en Aimbot.',
		lead: 'Marathon Cheats volgt de run-loop va Marathon: kaart lezen, vijandelijke packs volgen, jagen en exfil zones overleven.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spot vijandelijke players op Tau Ceti IV en loot run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier carcasses zonder schermoverlast.' },
			{ title: 'The Marathon Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Marathon Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Marathon Cheats',
		title: 'Galeria Marathon',
		subtitle: 'Grafiki Marathon — loadouty, walki drużynowe i run — z ESP, radar i Aimbot.',
		lead: 'Marathon Cheats pasuje do pętli BR Marathon: czytaj mapę, śledź wrogie drużyny, carcassesuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Tau Ceti IV i loot run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery carcassesu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy carcasses bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Marathon', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Marathon Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Marathon Cheats',
		title: 'Галерея Marathon',
		subtitle: 'Визуалы Marathon — лоадауты, бои отрядов и run — с ESP, радаром и Aimbot.',
		lead: 'Marathon Cheats создан для рейд-циклу Marathon: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Tau Ceti IV и loot run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Marathon', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Marathon Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon galerisi',
		subtitle: 'Loadout, takım savaşları ve run görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Marathon Cheats, Marathon BR döngüsü için: haritayı oku, düşman takımları izle, carcasses al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Tau Ceti IV ve loot run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye carcasses\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'The Marathon Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Marathon Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Marathon Cheats',
		title: 'معرض Marathon',
		subtitle: 'صور Marathon — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Marathon Cheats مبني لحلقة BR في Marathon: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Tau Ceti IV وloot run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Marathon', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Marathon Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのMarathonビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Marathon CheatsはMarathonのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Tau Ceti IVとloot runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Marathonエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Marathon Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Marathon 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Marathon Cheats는 Marathon survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Tau Ceti IV와 loot run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Marathon 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Marathon Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon 图库',
		subtitle: 'Marathon 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Marathon Cheats 为 Marathon survival loop设计：读图、追踪敌方小队、搜刮并在 nest survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Tau Ceti IV 和 loot run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Marathon 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Marathon Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon गैलरी',
		subtitle: 'Loadout, pack fights और run visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Marathon Cheats Marathon survival loop के लिए: map पढ़ें, enemy packs track करें, carcasses करें और nest survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Tau Ceti IV और loot run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier carcasses highlight करें screen clutter के बिना।' },
			{ title: 'The Marathon Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Marathon Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Marathon Cheats',
		title: 'Galeri Marathon',
		subtitle: 'Visual Marathon — loadout, pertempuran pack, dan run — dengan ESP, radar, dan Aimbot.',
		lead: 'Marathon Cheats untuk loop BR Marathon: baca peta, lacak pack musuh, carcasses, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Deteksi player musuh di Tau Ceti IV dan loot run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker carcasses & peti', copy: 'Sorot loadout, peti, dan carcasses tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Marathon', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Marathon Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Marathon Cheats',
		title: 'แกลเลอรี Marathon',
		subtitle: 'ภาพ Marathon — loadout การต่อสู้ทีม และ run — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Marathon Cheats สำหรับลูป BR ของ Marathon: อ่านแผนที่ ติดตามทีมศัตรู เก็บ carcasses และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Tau Ceti IV และ loot run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ carcasses และหีบ', copy: 'เน้น loadout หีบและ carcasses ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Marathon', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Marathon Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Marathon Cheats',
		title: 'Thư viện Marathon',
		subtitle: 'Hình ảnh Marathon — loadout, chiến đấu pack và run — với ESP, radar và Aimbot.',
		lead: 'Marathon Cheats cho vòng BR Marathon: đọc bản đồ, theo dõi pack địch, carcasses và sống sót extract.',
		highlights: [
			{ title: 'ESP player & pack', copy: 'Phát hiện player địch trên Tau Ceti IV và loot run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu carcasses & rương', copy: 'Làm nổi bật loadout, rương và carcasses cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Marathon', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Marathon Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Marathon Cheats',
		title: 'Галерея Marathon',
		subtitle: 'Візуали Marathon — loadout, бої загонів і run — з ESP, радаром і Aimbot.',
		lead: 'Marathon Cheats для рейд-циклу Marathon: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Tau Ceti IV і loot run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Marathon', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Marathon Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Marathon Cheats',
		title: 'Galerie Marathon',
		subtitle: 'Marathon vizuály — loadouty, pack souboje a run — s ESP, radarem a Aimbot.',
		lead: 'Marathon Cheats pro BR smyčku Marathon: číst mapu, sledovat nepřátelské packy, carcasses a přežít extract.',
		highlights: [
			{ title: 'ESP players a packů', copy: 'Spozorujte nepřátelské operátory na Tau Ceti IV a loot run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery carcassesu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier carcasses bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Marathon', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Marathon Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Marathon Cheats',
		title: 'Galerie Marathon',
		subtitle: 'Vizualuri Marathon — loadout, lupte de pack și run — cu ESP, radar și Aimbot.',
		lead: 'Marathon Cheats pentru bucla BR Marathon: citește harta, urmărește pack-uri inamice, carcasses și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și pack-uri', copy: 'Detectează playeri inamici pe Tau Ceti IV și loot run pentru decizii de rotație mai bune.' },
			{ title: 'Markere carcasses și cheste', copy: 'Evidențiază loadout-uri, cheste și carcasses de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Marathon', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Marathon Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Marathon Cheats',
		title: 'Marathon galleri',
		subtitle: 'Marathon-bilder — loadouts, packstrider och run — med ESP, radar och Aimbot.',
		lead: 'Marathon Cheats för Marathon:s run-loop: läs kartan, spåra fiendepacks, carcassesa och överlev extract.',
		highlights: [
			{ title: 'Player- & pack-ESP', copy: 'Spotta fiendeplayerer på Tau Ceti IV och loot run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier carcasses utan skärmklutter.' },
			{ title: 'The Marathon Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Marathon Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
