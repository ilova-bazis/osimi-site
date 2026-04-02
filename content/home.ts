import type { Locale } from "@/lib/i18n/locales";

export type SiteChrome = {
    brand: string;
    navigationLabel: string;
    footerNavigationLabel: string;
    openNavigationLabel: string;
    closeNavigationLabel: string;
    navLinks: Array<{ href: string; label: string }>;
    footerLinks: Array<{ href: string; label: string }>;
    footerTaglineLines: [string, string];
    footerBottom: string;
    languageSwitcherLabel: string;
    localeLabels: Record<Locale, string>;
};

export type HeroContent = {
    eyebrow: string;
    nameLines: [string, string];
    taglineLines: [string, string];
    intro: string;
    biographyCta: string;
    documentaryCta: string;
    timelineCta: string;
    portraitAlt: string;
    portraitCaption: string;
};

export type QuoteBandContent = {
    textLines: [string, string];
    attribution: string;
};

export type BioPreviewContent = {
    label: string;
    titleLines: [string, string];
    paragraphs: [string, string];
    cta: string;
    details: [string, string, string, string];
};

export type LegacyMilestone = {
    era: string;
    yearLines: string[];
    compactYear?: boolean;
    description: string;
};

export type LegacyContent = {
    label: string;
    title: string;
    milestones: LegacyMilestone[];
};

export type WorksContent = {
    label: string;
    titleLines: [string, string];
    body: string;
    tags: string[];
    cta: string;
    pullLabel: string;
    pullQuote: string;
    attribution: string;
    note: string;
};

export type DocumentaryContent = {
    label: string;
    title: string;
    subtitle: string;
    paragraphs: [string, string];
    meta: string;
    trailerCta: string;
    screeningsCta: string;
    posterBadge: string;
    posterAlt: string;
};

export type QuoteCard = {
    text: string;
    theme: string;
    originalText: string;
};

export type QuoteGridContent = {
    label: string;
    title: string;
    quotes: QuoteCard[];
};

export type ArchiveContent = {
    label: string;
    title: string;
    body: string;
    cta: string;
};

export type HomeMetadata = {
    title: string;
    description: string;
};

export type HomePageContent = {
    metadata: HomeMetadata;
    chrome: SiteChrome;
    hero: HeroContent;
    quoteBand: QuoteBandContent;
    bioPreview: BioPreviewContent;
    legacy: LegacyContent;
    works: WorksContent;
    documentary: DocumentaryContent;
    quoteGrid: QuoteGridContent;
    archive: ArchiveContent;
};

const homeContent: Record<Locale, HomePageContent> = {
    en: {
        metadata: {
            title: "Muhammad Osimi - Scholar, Humanist, Science Organizer, and Public Figure",
            description:
                "The official multilingual website dedicated to the life, work, documentary, and legacy of Muhammad Osimi - physicist, philosopher, science organizer, and President of the Academy of Sciences of Tajikistan.",
        },
        chrome: {
            brand: "Muhammad Osimi",
            navigationLabel: "Main navigation",
            footerNavigationLabel: "Footer navigation",
            openNavigationLabel: "Open navigation menu",
            closeNavigationLabel: "Close navigation menu",
            navLinks: [
                { href: "/", label: "Home" },
                { href: "/biography", label: "Biography" },
                { href: "/timeline", label: "Timeline" },
                { href: "/works", label: "Works" },
                { href: "/documentary", label: "Documentary" },
                { href: "/archive", label: "Archive" },
                { href: "/quotes", label: "Quotes" },
            ],
            footerLinks: [
                { href: "/biography", label: "Biography" },
                { href: "/timeline", label: "Timeline" },
                { href: "/works", label: "Works" },
                { href: "/documentary", label: "Documentary" },
                { href: "/archive", label: "Archive" },
                { href: "/quotes", label: "Quotes" },
            ],
            footerTaglineLines: [
                "Preserving the life and legacy of Muhammad Osimi",
                "for future generations.",
            ],
            footerBottom: "Muhammad Osimi Legacy Project · All rights reserved",
            languageSwitcherLabel: "Switch language",
            localeLabels: { en: "English", tg: "Тоҷикӣ", ru: "Русский" },
        },
        hero: {
            eyebrow: "1920 - 1996 • Khujand, Tajikistan",
            nameLines: ["Muhammad", "Osimi"],
            taglineLines: [
                "Scholar, Humanist, Science Organizer,",
                "and Public Figure",
            ],
            intro: "Muhammad Osimi devoted his life to knowledge, education, culture, and the intellectual future of Tajikistan. A physicist by training and a philosopher by depth, he became one of the most important organizers of scientific and cultural life in Central Asia - building institutions, leading scholarship, and advancing dialogue across nations.",
            biographyCta: "Explore Biography",
            documentaryCta: "Watch Documentary",
            timelineCta: "View Timeline ->",
            portraitAlt: "Portrait of Muhammad Osimi",
            portraitCaption: "Muhammad Saifiddinovich Asimov · Osimi",
        },
        quoteBand: {
            textLines: [
                "Men of culture are the Hosts of History,",
                "men of politics are the Guests.",
            ],
            attribution: "Muhammad Osimi",
        },
        bioPreview: {
            label: "About",
            titleLines: ["A Life Devoted to", "Knowledge and Service"],
            paragraphs: [
                "Born in Khujand in 1920, Muhammad Osimi lived through war, reconstruction, nation-building, and intellectual transformation. He served in World War II, became the first rector of the Tajik State Polytechnic Institute, held senior public leadership roles, and led the Academy of Sciences of Tajikistan for more than two decades.",
                "His work crossed disciplines and borders - linking philosophy, science, education, history, and culture into one enduring legacy that belongs not only to Tajikistan, but to the wider history of science and civilization.",
            ],
            cta: "Read Full Biography",
            details: [
                'Muhammad Saifiddinovich Asimov received his qualification as a physicist from the Physics and Mathematics Faculty of Uzbek State University (1937-1941). He served with distinction in the Second World War, receiving the medal "For the Defense of Leningrad," the Order of the Patriotic War (1st degree), and other military honors.',
                'Returning home, he taught physics and led academic departments before pursuing graduate study in Moscow, where he defended his candidate thesis on "Space and Time as Basic Forms of Matter Existence" (1952-1955), laying the philosophical ground for a lifetime of interdisciplinary inquiry.',
                "In 1956 he was appointed the first rector of the Tajik State Polytechnic Institute, building it from the ground up. By 1965 he was elected President of the Academy of Sciences of Tajikistan, a role he would hold for twenty-three transformative years.",
                "Through UNESCO, he led the publication of the six-volume History of Civilizations of Central Asia and participated in scholarly forums across more than thirty countries - from India and Japan to France, Cuba, and the United States.",
            ],
        },
        legacy: {
            label: "Legacy at a Glance",
            title: "A Life Measured in Milestones",
            milestones: [
                {
                    era: "Origin",
                    yearLines: ["1920"],
                    description:
                        "Born on August 25, 1920 in Khujand, Tajikistan",
                },
                {
                    era: "Institution Building",
                    yearLines: ["1956"],
                    description:
                        "Appointed first rector of the Tajik State Polytechnic Institute",
                },
                {
                    era: "Scientific Leadership",
                    yearLines: ["1965-1988"],
                    compactYear: true,
                    description:
                        "President of the Academy of Sciences of Tajikistan for 23 years",
                },
                {
                    era: "International Legacy",
                    yearLines: ["UNESCO", "Leadership"],
                    compactYear: true,
                    description:
                        "Led major international scholarly cooperation and the six-volume History of Civilizations of Central Asia",
                },
            ],
        },
        works: {
            label: "Thought & Scholarship",
            titleLines: ["A Thinker Across", "Disciplines and Borders"],
            body: "Muhammad Osimi's intellectual work ranged across philosophy of science, history of science, cultural heritage, and the study of Central Asian civilization. He wrote, edited, translated, and led major scholarly efforts that helped preserve and interpret the intellectual heritage of the region.",
            tags: [
                "Philosophy of Science",
                "History of Civilization",
                "Cultural Heritage",
                "Education",
                "UNESCO Projects",
                "Persian-Tajik Literature",
            ],
            cta: "Explore Works and Ideas",
            pullLabel: "From his writings",
            pullQuote:
                "The worth of a person's thoughts is a measure of his or her own generosity.",
            attribution: "Muhammad Osimi",
            note: "His books were published in Russian, English, German, Farsi, and Arabic. His major works include Matter and the Physical Picture of the World (1966), The Concept of Matter and the Problem of Physical Reality (1970), and the eight-volume Tajik Soviet Encyclopedia (1978).",
        },
        documentary: {
            label: "The Film",
            title: "Osimi",
            subtitle: "A documentary about a life that changed a nation",
            paragraphs: [
                "Osimi presents Muhammad Osimi as a moral and intellectual figure whose life continues to speak across borders. The film reflects on the power of art, education, and science to heal a society in times of conflict and change.",
                "Through memory, testimony, and archive, the documentary brings his life to new generations and shows how scholarship, public service, and moral conviction can continue to shape the present.",
            ],
            meta: "Narrated by Oscar-nominated Ali MacGraw · Filmed in Tajikistan, India, France, Spain, Russia, and the United States",
            trailerCta: "Watch the Trailer",
            screeningsCta: "View Screenings",
            posterBadge: "2020 Documentary",
            posterAlt: "Osimi documentary poster",
        },
        quoteGrid: {
            label: "In His Own Words",
            title: "Wisdom That Endures",
            quotes: [
                {
                    text: "The worth of a person's thoughts is a measure of his or her own generosity.",
                    theme: "On Generosity",
                    originalText:
                        "The worth of a person's thoughts is a measure of his or her own generosity.",
                },
                {
                    text: "Children must be respected and their self-worth should not be damaged.",
                    theme: "On Children",
                    originalText:
                        "Children must be respected and their self-worth should not be damaged.",
                },
                {
                    text: "Men of culture are the Hosts of History, men of politics are the Guests.",
                    theme: "On History",
                    originalText:
                        "Men of culture are the Hosts of History, men of politics are the Guests.",
                },
            ],
        },
        archive: {
            label: "Memory & Preservation",
            title: "The Living Archive",
            body: "This website is part of an ongoing effort to preserve the life, thought, writings, and public memory of Muhammad Osimi for future generations. Through photographs, documents, publications, film, and historical materials, the archive seeks to keep his legacy accessible, studied, and alive.",
            cta: "Visit the Archive",
        },
    },
    tg: {
        metadata: {
            title: "Муҳаммад Осимӣ - олим, инсондӯст, ташкилотчии илм ва ходими ҷамъиятӣ",
            description:
                "Сомонаи расмии чандзабона бахшида ба ҳаёт, осор, филми мустанад ва мероси Муҳаммад Осимӣ - физик, файласуф, ташкилотчии илм ва президенти Академияи илмҳои Тоҷикистон.",
        },
        chrome: {
            brand: "Муҳаммад Осимӣ",
            navigationLabel: "Паймоиши асосӣ",
            footerNavigationLabel: "Паймоиши поёнӣ",
            openNavigationLabel: "Кушодани менюи паймоиш",
            closeNavigationLabel: "Бастани менюи паймоиш",
            navLinks: [
                { href: "/", label: "Асосӣ" },
                { href: "/biography", label: "Зиндагинома" },
                { href: "/timeline", label: "Хронология" },
                { href: "/works", label: "Осор" },
                { href: "/documentary", label: "Филм" },
                { href: "/archive", label: "Бойгонӣ" },
                { href: "/quotes", label: "Иқтибосҳо" },
            ],
            footerLinks: [
                { href: "/biography", label: "Зиндагинома" },
                { href: "/timeline", label: "Хронология" },
                { href: "/works", label: "Осор" },
                { href: "/documentary", label: "Филм" },
                { href: "/archive", label: "Бойгонӣ" },
                { href: "/quotes", label: "Иқтибосҳо" },
            ],
            footerTaglineLines: [
                "Пос доштани ҳаёт ва мероси Муҳаммад Осимӣ",
                "барои наслҳои оянда.",
            ],
            footerBottom:
                "Лоиҳаи мероси Муҳаммад Осимӣ · Ҳамаи ҳуқуқҳо ҳифз шудаанд",
            languageSwitcherLabel: "Забонро иваз кунед",
            localeLabels: { en: "English", tg: "Тоҷикӣ", ru: "Русский" },
        },
        hero: {
            eyebrow: "1920 - 1996 • Хуҷанд, Тоҷикистон",
            nameLines: ["Муҳаммад", "Осимӣ"],
            taglineLines: [
                "Олим, инсондӯст, ташкилотчии илм,",
                "ва ходими ҷамъиятӣ",
            ],
            intro: "Муҳаммад Осимӣ ҳаёти худро ба дониш, маориф, фарҳанг ва ояндаи зеҳнии Тоҷикистон бахшидааст. Ӯ, ки аз рӯйи ихтисос физик ва аз лиҳози андеша файласуф буд, ба яке аз муҳимтарин ташкилотчиёни ҳаёти илмӣ ва фарҳангии Осиёи Марказӣ табдил ёфт - муассисаҳо бунёд кард, ба таҳқиқ роҳбарӣ намуд ва гуфтугӯи миёни миллатҳоро пеш бурд.",
            biographyCta: "Зиндагиномаро бинед",
            documentaryCta: "Филмро тамошо кунед",
            timelineCta: "Хронологияро бинед ->",
            portraitAlt: "Портрети Муҳаммад Осимӣ",
            portraitCaption: "Муҳаммад Сайфиддинович Осимӣ",
        },
        quoteBand: {
            textLines: [
                "Мардуми фарҳанг мизбонони таъриханд,",
                "мардуми сиёсат меҳмонони он.",
            ],
            attribution: "Муҳаммад Осимӣ",
        },
        bioPreview: {
            label: "Дар бораи ӯ",
            titleLines: ["Зиндагие, ки ба дониш", "ва хизмат бахшида шуд"],
            paragraphs: [
                "Муҳаммад Осимӣ, ки соли 1920 дар Хуҷанд таваллуд шудааст, рӯзгори ҷанг, бозсозӣ, давлатдорӣ ва дигаргуниҳои зеҳниро аз сар гузаронд. Ӯ дар Ҷанги Дуюми Ҷаҳонӣ иштирок кард, аввалин ректори Донишкадаи давлатии политехникии Тоҷикистон шуд, вазифаҳои баланди давлатӣ ва ҷамъиятиро иҷро намуд ва беш аз ду даҳсола ба Академияи илмҳои Тоҷикистон роҳбарӣ кард.",
                "Кори ӯ аз марзҳои фаннӣ ва ҷуғрофӣ фаротар рафт - фалсафа, илм, маориф, таърих ва фарҳангро ба як мероси пойдор пайваст, ки на танҳо ба Тоҷикистон, балки ба таърихи васеътари илм ва тамаддун тааллуқ дорад.",
            ],
            cta: "Зиндагиномаи пурра",
            details: [
                "Муҳаммад Сайфиддинович Осимӣ таҳсили олии худро дар факултаи физика ва математикаи Донишгоҳи давлатии Ӯзбекистон ба номи А. Навоӣ (1937-1941) анҷом дода, ихтисоси физикаро гирифт. Ӯ дар Ҷанги Бузурги Ватанӣ бо шараф хидмат карда, бо медали «Барои мудофиаи Ленинград», ордени Ҷанги Ватании дараҷаи якум ва дигар мукофотҳои ҷангӣ сарфароз гардид.",
                "Пас аз бозгашт ба ватан, ӯ аз физика дарс дод ва ба кафедраҳои илмӣ роҳбарӣ кард, сипас дар Москва таҳсили баъдидипломиро идома дода, рисолаи номзадии худро дар мавзуи «Фазо ва вақт ҳамчун шаклҳои асосии мавҷудияти материя» ҳимоя намуд ва барои фаъолияти байнисоҳавии минбаъдаи худ заминаи фалсафӣ гузошт.",
                "Соли 1956 ӯ аввалин ректори Донишкадаи давлатии политехникии Тоҷикистон таъин шуд ва барои бунёди он аз оғоз тамоми нерӯ ва таҷрибаи худро сарф кард. Соли 1965 бошад, президенти Академияи илмҳои Тоҷикистон интихоб гардид ва ин мақомро бисту се соли сарнавиштсоз ба зимма дошт.",
                "Тавассути ЮНЕСКО ӯ ба нашри шашҷилдаи «Таърихи тамаддунҳои Осиёи Марказӣ» роҳбарӣ намуд ва дар форумҳои илмии зиёда аз сӣ кишвар - аз Ҳиндустон ва Ҷопон то Фаронса, Куба ва Иёлоти Муттаҳида - ширкат варзид.",
            ],
        },
        legacy: {
            label: "Мерос дар як нигоҳ",
            title: "Зиндагие, ки бо марҳилаҳо чен мешавад",
            milestones: [
                {
                    era: "Оғоз",
                    yearLines: ["1920"],
                    description:
                        "25 августи соли 1920 дар шаҳри Хуҷанд, Тоҷикистон ба дунё омад",
                },
                {
                    era: "Бунёди муассисаҳо",
                    yearLines: ["1956"],
                    description:
                        "Аввалин ректори Донишкадаи давлатии политехникии Тоҷикистон таъин шуд",
                },
                {
                    era: "Роҳбарии илм",
                    yearLines: ["1965-1988"],
                    compactYear: true,
                    description:
                        "23 сол президенти Академияи илмҳои Тоҷикистон буд",
                },
                {
                    era: "Мероси байналмилалӣ",
                    yearLines: ["ЮНЕСКО", "ва ҳамкорӣ"],
                    compactYear: true,
                    description:
                        "Дар ҳамкориҳои бузурги байналмилалии илмӣ ва нашри «Таърихи тамаддунҳои Осиёи Марказӣ» нақши калидӣ дошт",
                },
            ],
        },
        works: {
            label: "Андеша ва пажӯҳиш",
            titleLines: ["Мутафаккире фаротар аз", "фанҳо ва марзҳо"],
            body: "Кори зеҳнии Муҳаммад Осимӣ масъалаҳои фалсафаи илм, таърихи илм, мероси фарҳангӣ ва омӯзиши тамаддуни Осиёи Марказиро фаро мегирифт. Ӯ менавишт, таҳрир мекард, тарҷума менамуд ва ба иқдомҳои бузурги илмӣ роҳбарӣ мекард, ки барои ҳифз ва тафсири мероси зеҳнии минтақа мусоидат намуданд.",
            tags: [
                "Фалсафаи илм",
                "Таърихи тамаддун",
                "Мероси фарҳангӣ",
                "Маориф",
                "Лоиҳаҳои ЮНЕСКО",
                "Адабиёти форсӣ-тоҷикӣ",
            ],
            cta: "Осор ва андешаҳоро бинед",
            pullLabel: "Аз навиштаҳои ӯ",
            pullQuote: "Арзиши андешаҳои инсон меъёри саховатмандии худи ӯст.",
            attribution: "Муҳаммад Осимӣ",
            note: "Осори ӯ ба забонҳои русӣ, англисӣ, олмонӣ, форсӣ ва арабӣ нашр шудаанд. Аз ҷумлаи корҳои муҳимаш «Материя ва манзараи физикии олам» (1966), «Мафҳуми материя ва масъалаи воқеияти физикӣ» (1970) ва «Энсиклопедияи Советии Тоҷик» дар ҳашт ҷилд (1978) мебошанд.",
        },
        documentary: {
            label: "Филм",
            title: "Осимӣ",
            subtitle:
                "Филми мустанад дар бораи зиндагие, ки миллатро тағйир дод",
            paragraphs: [
                "Филми «Осимӣ» Муҳаммад Осимиро ҳамчун шахсияти ахлоқӣ ва зеҳнӣ муаррифӣ мекунад, ки зиндагияш то имрӯз аз марзҳо фаротар садо медиҳад. Филм аз қудрати санъат, маориф ва илм барои шифои ҷомеа дар замони низоъ ва дигаргунӣ сухан мегӯяд.",
                "Тавассути хотира, шаҳодат ва бойгонӣ, ин филм зиндагии ӯро ба наслҳои нав мерасонад ва нишон медиҳад, ки чӣ гуна дониш, хизмати ҷамъиятӣ ва устувории ахлоқӣ метавонанд имрӯзро низ шакл диҳанд.",
            ],
            meta: "Бо овози Али Макгроу · Наворбардорӣ дар Тоҷикистон, Ҳиндустон, Фаронса, Испания, Русия ва Иёлоти Муттаҳида",
            trailerCta: "Трейлерро тамошо кунед",
            screeningsCta: "Намоишҳоро бинед",
            posterBadge: "Филми мустанади 2020",
            posterAlt: "Постери филми мустанади «Осимӣ»",
        },
        quoteGrid: {
            label: "Аз суханони ӯ",
            title: "Ҳикмате, ки мемонад",
            quotes: [
                {
                    text: "Арзиши андешаҳои инсон меъёри саховатмандии худи ӯст.",
                    theme: "Дар бораи саховат",
                    originalText:
                        "Арзиши андешаҳои инсон меъёри саховатмандии худи ӯст.",
                },
                {
                    text: "Кӯдаконро бояд эҳтиром кард ва шаъну эътибори онҳоро набояд кост.",
                    theme: "Дар бораи кӯдакон",
                    originalText:
                        "Кӯдаконро бояд эҳтиром кард ва шаъну эътибори онҳоро набояд кост.",
                },
                {
                    text: "Мардуми фарҳанг мизбонони таъриханд, мардуми сиёсат меҳмонони он.",
                    theme: "Дар бораи таърих",
                    originalText:
                        "Мардуми фарҳанг мизбонони таъриханд, мардуми сиёсат меҳмонони он.",
                },
            ],
        },
        archive: {
            label: "Ҳофиза ва ҳифз",
            title: "Бойгонии зинда",
            body: "Ин сомона бахше аз талоши пайваста барои ҳифзи ҳаёт, андеша, навиштаҳо ва хотираи ҷамъиятии Муҳаммад Осимӣ барои наслҳои оянда мебошад. Тавассути аксҳо, санадҳо, нашрияҳо, филм ва дигар маводи таърихӣ, бойгонӣ мекӯшад мероси ӯро дастрас, омӯхташаванда ва зинда нигоҳ дорад.",
            cta: "Ба бойгонӣ гузаред",
        },
    },
    ru: {
        metadata: {
            title: "Мухаммад Осими - ученый, организатор науки, гуманист и общественный деятель",
            description:
                "Официальный многоязычный сайт, посвященный жизни, трудам, документальному фильму и наследию Мухаммада Осими - физика, философа, организатора науки и президента Академии наук Таджикистана.",
        },
        chrome: {
            brand: "Мухаммад Осими",
            navigationLabel: "Основная навигация",
            footerNavigationLabel: "Навигация в подвале",
            openNavigationLabel: "Открыть меню навигации",
            closeNavigationLabel: "Закрыть меню навигации",
            navLinks: [
                { href: "/", label: "Главная" },
                { href: "/biography", label: "Биография" },
                { href: "/timeline", label: "Хронология" },
                { href: "/works", label: "Труды" },
                { href: "/documentary", label: "Фильм" },
                { href: "/archive", label: "Архив" },
                { href: "/quotes", label: "Цитаты" },
            ],
            footerLinks: [
                { href: "/biography", label: "Биография" },
                { href: "/timeline", label: "Хронология" },
                { href: "/works", label: "Труды" },
                { href: "/documentary", label: "Фильм" },
                { href: "/archive", label: "Архив" },
                { href: "/quotes", label: "Цитаты" },
            ],
            footerTaglineLines: [
                "Сохраняя жизнь и наследие Мухаммада Осими",
                "для будущих поколений.",
            ],
            footerBottom:
                "Проект наследия Мухаммада Осими · Все права защищены",
            languageSwitcherLabel: "Сменить язык",
            localeLabels: { en: "English", tg: "Тоҷикӣ", ru: "Русский" },
        },
        hero: {
            eyebrow: "1920 - 1996 • Худжанд, Таджикистан",
            nameLines: ["Мухаммад", "Осими"],
            taglineLines: [
                "Ученый, организатор науки, гуманист",
                "и общественный деятель",
            ],
            intro: "Мухаммад Осими посвятил свою жизнь знанию, образованию, культуре и интеллектуальному будущему Таджикистана. Физик по образованию и философ по глубине мысли, он стал одним из важнейших организаторов научной и культурной жизни Центральной Азии - создавал институты, направлял исследования и развивал диалог между странами.",
            biographyCta: "Открыть биографию",
            documentaryCta: "Смотреть фильм",
            timelineCta: "Посмотреть хронологию ->",
            portraitAlt: "Портрет Мухаммада Осими",
            portraitCaption: "Мухаммад Сайфиддинович Асимов · Осими",
        },
        quoteBand: {
            textLines: [
                "Люди культуры - хозяева истории,",
                "люди политики - ее гости.",
            ],
            attribution: "Мухаммад Осими",
        },
        bioPreview: {
            label: "О нем",
            titleLines: ["Жизнь, посвященная", "знанию и служению"],
            paragraphs: [
                "Родившийся в Худжанде в 1920 году, Мухаммад Осими прошел через войну, восстановление страны, государственное строительство и глубокие интеллектуальные преобразования. Он участвовал во Второй мировой войне, стал первым ректором Таджикского политехнического института, занимал высокие государственные и общественные посты и более двух десятилетий возглавлял Академию наук Таджикистана.",
                "Его деятельность выходила за пределы дисциплин и границ - связывая философию, науку, образование, историю и культуру в одно долговечное наследие, принадлежащее не только Таджикистану, но и более широкой истории науки и цивилизации.",
            ],
            cta: "Читать полную биографию",
            details: [
                "Мухаммад Сайфиддинович Асимов получил квалификацию физика на физико-математическом факультете Узбекского государственного университета имени А. Навои (1937-1941). Во время Второй мировой войны он служил с отличием и был награжден медалью «За оборону Ленинграда», орденом Отечественной войны I степени и рядом других боевых наград.",
                "Вернувшись на родину, он преподавал физику, возглавлял кафедры и продолжил научную подготовку в Москве, где защитил кандидатскую диссертацию на тему «Пространство и время как основные формы бытия материи», заложив философскую основу для дальнейшей междисциплинарной работы.",
                "В 1956 году он был назначен первым ректором Таджикского государственного политехнического института и фактически создавал его с нуля. В 1965 году его избрали президентом Академии наук Таджикистана, и этот пост он занимал двадцать три преобразующих года.",
                "Через ЮНЕСКО он возглавил публикацию шеститомной «Истории цивилизаций Центральной Азии» и участвовал в научных форумах более чем в тридцати странах - от Индии и Японии до Франции, Кубы и Соединенных Штатов.",
            ],
        },
        legacy: {
            label: "Наследие в одном взгляде",
            title: "Жизнь, измеренная в вехах",
            milestones: [
                {
                    era: "Начало",
                    yearLines: ["1920"],
                    description:
                        "Родился 25 августа 1920 года в городе Худжанде, Таджикистан",
                },
                {
                    era: "Создание институтов",
                    yearLines: ["1956"],
                    description:
                        "Назначен первым ректором Таджикского политехнического института",
                },
                {
                    era: "Научное руководство",
                    yearLines: ["1965-1988"],
                    compactYear: true,
                    description:
                        "23 года возглавлял Академию наук Таджикистана",
                },
                {
                    era: "Международное наследие",
                    yearLines: ["ЮНЕСКО", "и сотрудничество"],
                    compactYear: true,
                    description:
                        "Играл ключевую роль в международном научном сотрудничестве и подготовке «Истории цивилизаций Центральной Азии»",
                },
            ],
        },
        works: {
            label: "Мысль и наука",
            titleLines: ["Мыслитель вне", "границ и дисциплин"],
            body: "Интеллектуальная работа Мухаммада Осими охватывала философию науки, историю науки, культурное наследие и изучение цивилизации Центральной Азии. Он писал, редактировал, переводил и возглавлял крупные научные инициативы, помогавшие сохранять и осмыслять интеллектуальное наследие региона.",
            tags: [
                "Философия науки",
                "История цивилизации",
                "Культурное наследие",
                "Образование",
                "Проекты ЮНЕСКО",
                "Персидско-таджикская литература",
            ],
            cta: "Смотреть труды и идеи",
            pullLabel: "Из его работ",
            pullQuote:
                "Ценность мыслей человека есть мера его собственной щедрости.",
            attribution: "Мухаммад Осими",
            note: "Его книги выходили на русском, английском, немецком, фарси и арабском языках. Среди важнейших работ - «Материя и физическая картина мира» (1966), «Понятие материи и проблема физической реальности» (1970) и восьмитомная «Таджикская советская энциклопедия» (1978).",
        },
        documentary: {
            label: "Фильм",
            title: "Осими",
            subtitle: "Документальный фильм о жизни, изменившей страну",
            paragraphs: [
                "Фильм «Осими» показывает Мухаммада Осими как нравственную и интеллектуальную фигуру, чья жизнь продолжает звучать через границы. Картина размышляет о силе искусства, образования и науки, способных исцелять общество во времена конфликта и перемен.",
                "Через память, свидетельства и архив фильм открывает его жизнь новым поколениям и показывает, как знание, общественное служение и нравственная убежденность продолжают влиять на настоящее.",
            ],
            meta: "Закадровый текст Али Макгроу · Съемки в Таджикистане, Индии, Франции, Испании, России и Соединенных Штатах",
            trailerCta: "Смотреть трейлер",
            screeningsCta: "Смотреть показы",
            posterBadge: "Документальный фильм 2020",
            posterAlt: "Постер документального фильма «Осими»",
        },
        quoteGrid: {
            label: "Его словами",
            title: "Мудрость, которая остается",
            quotes: [
                {
                    text: "Ценность мыслей человека есть мера его собственной щедрости.",
                    theme: "О щедрости",
                    originalText:
                        "Ценность мыслей человека есть мера его собственной щедрости.",
                },
                {
                    text: "Детей нужно уважать, и их чувство собственного достоинства нельзя разрушать.",
                    theme: "О детях",
                    originalText:
                        "Детей нужно уважать, и их чувство собственного достоинства нельзя разрушать.",
                },
                {
                    text: "Люди культуры - хозяева истории, люди политики - ее гости.",
                    theme: "Об истории",
                    originalText:
                        "Люди культуры - хозяева истории, люди политики - ее гости.",
                },
            ],
        },
        archive: {
            label: "Память и сохранение",
            title: "Живой архив",
            body: "Этот сайт является частью продолжающейся работы по сохранению жизни, мысли, текстов и общественной памяти о Мухаммаде Осими для будущих поколений. Через фотографии, документы, публикации, фильм и исторические материалы архив стремится сохранять его наследие доступным, изучаемым и живым.",
            cta: "Перейти в архив",
        },
    },
};

export function getHomePageContent(locale: Locale) {
    return homeContent[locale];
}
