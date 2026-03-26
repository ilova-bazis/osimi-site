import type { Locale } from "@/lib/i18n/locales";

export type QuoteTheme =
    | "history"
    | "generosity"
    | "children"
    | "responsibility"
    | "unity"
    | "culture";

export type QuoteEntry = {
    id: string;
    theme: QuoteTheme;
    text: string;
    originalText?: string;
    sourceNote?: string;
};

export type QuotesPageContent = {
    metadata: {
        title: string;
        description: string;
    };
    hero: {
        label: string;
        title: string;
        subtitle: string;
        intro: string;
    };
    featured: {
        text: string;
        attribution: string;
    };
    themes: {
        label: string;
        title: string;
        intro: string;
        items: Array<{ key: QuoteTheme; label: string; description: string }>;
    };
    collection: {
        label: string;
        title: string;
        intro: string;
        emptyLabel: string;
        allLabel: string;
        previousLabel: string;
        nextLabel: string;
        pageLabel: string;
        showingLabel: string;
        ofLabel: string;
        items: QuoteEntry[];
    };
    note: {
        label: string;
        title: string;
        body: string;
    };
};

const quotesContent: Record<Locale, QuotesPageContent> = {
    en: {
        metadata: {
            title: "Quotes - Muhammad Osimi",
            description:
                "A curated selection of quotations from and about the moral and intellectual voice of Muhammad Osimi.",
        },
        hero: {
            label: "Quotes",
            title: "In His Own Words",
            subtitle:
                "A ceremonial gallery of thought, memory, responsibility, and public ethics",
            intro: "These quotations offer a first window into Muhammad Osimi’s moral language and intellectual temperament. Even in brief aphoristic form, they reveal the ideas that run through his life and work: historical memory, civic responsibility, culture, dignity, unity, and care for the next generation.",
        },
        featured: {
            text: "Men of culture are the Hosts of History, men of politics are the Guests.",
            attribution: "Muhammad Osimi",
        },
        themes: {
            label: "Themes",
            title: "Recurring Moral and Intellectual Themes",
            intro: "The quotes collected so far are not a full archive, but they already show several recurring clusters in Osimi’s public language.",
            items: [
                {
                    key: "history",
                    label: "History & Memory",
                    description:
                        "How a society remembers its past, and what is lost when it forgets.",
                },
                {
                    key: "generosity",
                    label: "Generosity of Thought",
                    description:
                        "The ethical measure of intellect, character, and scholarly openness.",
                },
                {
                    key: "children",
                    label: "Children & Dignity",
                    description:
                        "Respect for the child as a moral obligation of society.",
                },
                {
                    key: "responsibility",
                    label: "Freedom & Responsibility",
                    description:
                        "Independence not as rhetoric, but as burden, duty, and seriousness.",
                },
                {
                    key: "unity",
                    label: "Unity & Public Life",
                    description:
                        "National coherence, peace, and the civic work of holding society together.",
                },
                {
                    key: "culture",
                    label: "Culture & Civilization",
                    description:
                        "The place of culture, spirituality, and intellectual life in the fate of a nation.",
                },
            ],
        },
        collection: {
            label: "Selected Quotations",
            title: "Curated Starter Collection",
            intro: "This first edition draws from the homepage, the biography material, and the legacy quotes page. It is deliberately selective and only uses quotations we can already trace in the current project materials.",
            emptyLabel: "No quotes match this theme.",
            allLabel: "All",
            previousLabel: "Previous",
            nextLabel: "Next",
            pageLabel: "Page",
            showingLabel: "Showing",
            ofLabel: "of",
            items: [
                {
                    id: "generosity",
                    theme: "generosity",
                    text: "The worth of a person's thoughts is a measure of his or her own generosity.",
                    originalText:
                        "The worth of a person's thoughts is a measure of his or her own generosity.",
                    sourceNote: "Homepage quote set",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "Children must be respected and their self-worth should not be damaged.",
                    originalText:
                        "Children must be respected and their self-worth should not be damaged.",
                    sourceNote: "Homepage quote set",
                },
                {
                    id: "hosts-history",
                    theme: "history",
                    text: "Men of culture are the Hosts of History, men of politics are the Guests.",
                    originalText:
                        "Men of culture are the Hosts of History, men of politics are the Guests.",
                    sourceNote: "Homepage and biography materials",
                },
                {
                    id: "national-pride",
                    theme: "unity",
                    text: "National pride is a powerful instrument for ensuring national unity.",
                    sourceNote: "Legacy quotes page",
                },
                {
                    id: "spiritual-decline",
                    theme: "culture",
                    text: "The decline of spirituality is the decline of society; the corruption of society is the corruption of the state.",
                    sourceNote: "Legacy quotes page",
                },
                {
                    id: "forget-past",
                    theme: "history",
                    text: "He who forgets the past does not think about the future.",
                    sourceNote: "Legacy quotes page",
                },
                {
                    id: "independence",
                    theme: "responsibility",
                    text: "Independence means responsibility.",
                    sourceNote: "Legacy quotes page",
                },
                {
                    id: "paivand",
                    theme: "unity",
                    text: "Payvand is a sign of peace, closeness among people, cooperation, unity, and friendship.",
                    sourceNote:
                        "Legacy quotes page, shortened from longer statement",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Everyone who tries sincerely will achieve his innermost desires. Dreams, on the one hand, make life bright, and on the other hand, the path to a dream is a sacred path, a path of honor.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Cognition shows the picture of the world fuller, broader, more dialectical. And the comprehensive work of the mind does not happen without emotions — it is facilitated by surprise, admiration, the torments of creativity, and the happiness of acquired knowledge. And an aesthetic feeling. Yes, yes…",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "A philosopher cannot understand all the complexities and subtleties of physics, but he must know its key problems, its key moments — without this, there is simply no philosophy.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "The ever-increasing amount of information also affects the quality of its perception. Consciousness and psyche adapt, perception becomes more refined and dynamic, the reaction accelerates, and the selection of the necessary is done almost automatically.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Those who believe that the intrusion of science into life, into human consciousness, impoverishes the emotional sphere and dulls the acuteness of feeling are wrong. These fears are not new — they periodically arose at different epochs in the development of human thought.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "There is no true science without imagination, just as there can be no real art without it.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "The historical experience of the formation and flowering of humanistic culture teaches us that success is achieved where people cooperate with each other, share their achievements, thoughts and ideas, and work in the name of a single humane goal — to serve humanity.",
                    sourceNote: "assets/quotes.md",
                },
            ],
        },
        note: {
            label: "Editorial Note",
            title: "This Section Will Expand Carefully",
            body: "The full quotes page should eventually support original-language forms, reviewed translations, thematic grouping, and links to source context. For now, this page serves as a curated, reliable first selection rather than a complete quotation archive.",
        },
    },
    tg: {
        metadata: {
            title: "Иқтибосҳо - Муҳаммад Осимӣ",
            description:
                "Маҷмуаи интихобии иқтибосҳо барои ошноӣ бо садои ахлоқӣ ва зеҳнии Муҳаммад Осимӣ.",
        },
        hero: {
            label: "Иқтибосҳо",
            title: "Дар суханони худи ӯ",
            subtitle: "Галереяи фикр, ҳофиза, масъулият ва ахлоқи ҷамъиятӣ",
            intro: "Ин иқтибосҳо яке аз роҳҳои аввалини шиносоӣ бо забони ахлоқӣ ва табиати зеҳнии Муҳаммад Осимӣ мебошанд. Ҳатто дар шакли кӯтоҳ ҳам онҳо ғояҳоеро ошкор мекунанд, ки дар тамоми зиндагӣ ва кори ӯ ҷорӣ буданд: ҳофизаи таърихӣ, масъулияти ҷамъиятӣ, фарҳанг, каромат, ваҳдат ва ғамхорӣ ба насли оянда.",
        },
        featured: {
            text: "«Одамони фарҳанг соҳибони таъриханд, одамони сиёсат меҳмонони он».",
            attribution: "Муҳаммад Осимӣ",
        },
        themes: {
            label: "Мавзӯъҳо",
            title: "Мавзӯъҳои такрорёбандаи ахлоқӣ ва зеҳнӣ",
            intro: "Иқтибосҳое, ки то имрӯз ҷамъ омадаанд, ҳанӯз бойгонии пурра нестанд, аммо аллакай чанд меҳвари асосии забони ҷамъиятии Осимиро нишон медиҳанд.",
            items: [
                {
                    key: "history",
                    label: "Таърих ва ҳофиза",
                    description:
                        "Чӣ гуна ҷомеа гузаштаи худро ба ёд меорад ва аз фаромӯшӣ чӣ аз даст меравад.",
                },
                {
                    key: "generosity",
                    label: "Саховати андеша",
                    description:
                        "Андозаҳои ахлоқии зеҳн, хислат ва кушодагии илмӣ.",
                },
                {
                    key: "children",
                    label: "Кӯдак ва каромат",
                    description:
                        "Эҳтиром ба кӯдак ҳамчун уҳдадории ахлоқии ҷомеа.",
                },
                {
                    key: "responsibility",
                    label: "Озодӣ ва масъулият",
                    description:
                        "Истиқлол на ҳамчун шиор, балки ҳамчун бори уҳдадорӣ.",
                },
                {
                    key: "unity",
                    label: "Ваҳдат ва ҳаёти ҷамъиятӣ",
                    description:
                        "Ҳамгироии миллӣ, сулҳ ва кори ҷамъиятии нигоҳ доштани ҷомеа.",
                },
                {
                    key: "culture",
                    label: "Фарҳанг ва тамаддун",
                    description:
                        "Ҷойгоҳи фарҳанг, маънавият ва зиндагии зеҳнӣ дар сарнавишти миллат.",
                },
            ],
        },
        collection: {
            label: "Иқтибосҳои интихобӣ",
            title: "Маҷмуаи ибтидоии санҷидашуда",
            intro: "Ин нашри аввал аз саҳифаи асосӣ, матни зиндагинома ва саҳифаи меросии иқтибосҳо истифода мекунад. Он қасдан интихобӣ аст ва танҳо ба матнҳое такя мекунад, ки аллакай дар маводи феълии лоиҳа пайгирӣ мешаванд.",
            emptyLabel: "Барои ин мавзӯъ иқтибосе нест.",
            allLabel: "Ҳама",
            previousLabel: "Пешина",
            nextLabel: "Баъдӣ",
            pageLabel: "Саҳифа",
            showingLabel: "Намоиш",
            ofLabel: "аз",
            items: [
                {
                    id: "generosity",
                    theme: "generosity",
                    text: "Арзиши андешаҳои инсон меъёри саховатмандии худи ӯст.",
                    sourceNote: "Маҷмуаи иқтибосҳои саҳифаи асосӣ",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "Ба кӯдакон бояд эҳтиром гузошт ва ҳисси қадру қимати онҳоро набояд осеб дод.",
                    sourceNote: "Маҷмуаи иқтибосҳои саҳифаи асосӣ",
                },
                {
                    id: "hosts-history",
                    theme: "history",
                    text: "Одамони фарҳанг соҳибони таъриханд, одамони сиёсат меҳмонони он.",
                    sourceNote: "Саҳифаи асосӣ ва зиндагинома",
                },
                {
                    id: "national-pride",
                    theme: "unity",
                    text: "Ифтихори миллӣ воситаи тавонои таъмини ваҳдати миллӣ аст.",
                    sourceNote: "Саҳифаи меросии иқтибосҳо",
                },
                {
                    id: "spiritual-decline",
                    theme: "culture",
                    text: "Харобии маънавиёт харобии ҷамъият аст ва фосидии давлатро низ дар пай дорад.",
                    sourceNote: "Саҳифаи меросии иқтибосҳо",
                },
                {
                    id: "forget-past",
                    theme: "history",
                    text: "Касе, ки гузаштаро фаромӯш мекунад, дар бораи оянда фикр намекунад.",
                    sourceNote: "Саҳифаи меросии иқтибосҳо",
                },
                {
                    id: "independence",
                    theme: "responsibility",
                    text: "Маънои истиқлол ин маънои масъулиятро дорад.",
                    sourceNote: "Саҳифаи меросии иқтибосҳо",
                },
                {
                    id: "paivand",
                    theme: "unity",
                    text: "«Пайванд» нишонаи сулҳ, қаробати инсонҳо, ҳамкорӣ, ваҳдат ва дӯстист.",
                    sourceNote: "Саҳифаи меросии иқтибосҳо, шакли кӯтоҳшуда",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Ҳар шахс агар аз сидқи дил кӯшад, ба он нияте, ки дар дил дорад, мерасад. Орзу аз як тараф зиндагиро рангин кунад, аз тарафи дигар роҳ ба сӯи орзу, роҳи муқаддас, роҳи мушарраф аст.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Идрок тасвири оламро пурратар, васеътар ва бештар диалектикӣ месозад. Заҳмати донишомӯзии ақл бидуни эҳсосот сурат намегирад, он ба ҳайрат ва мафтунӣ ва азоби эҷодкорӣ ва ҳиссиёти хушбахтӣ аз донишҳои гирифташуда мусоидат мекунад. Ва эҳсоси эстетикӣ. Бале, бале…",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "Файласуф наметавонад ҳамаи мураккабиҳо ва нозукиҳои физикаро сарфаҳм равад, аммо нуқтаҳои асосии онро бояд бидонад, бидуни ин ҳеч гоҳ фалсафа нест.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "Миқдори торафт афзояндаи иттилоот ба сифати дарки он таъсир мерасонад. Шуур ва психика мутобиқат мекунад, дарки чизҳо то рафт латиф ва динамикӣ мешавад, реаксия зудтар мегардад, интихоби чизҳои зарурӣ ба таври автоматикӣ иҷро мешавад.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Хато мекунанд ононе, ки боварӣ доранд, ки вуруди илм ба ҳаёт, ба шуури инсон, ҷиҳати эҳсосиро заиф мекунад, латофати ҳассосиро кунд мекунад. Ин гуна тарсҳо нав нестанд ва дар давраҳои мухталифи рушди тафаккури инсонӣ такроран пайдо мешуданд.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "Илми ҳақиқӣ бидуни тасаввурот вуҷуд надорад, ҳамон тавре ки санъати ҳақиқӣ ҳам бидуни он вуҷуд надорад.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "Аз таҷрибаи таърихии ташаккул ва нашъунамои фарҳанги гуманистӣ меомӯзем, ки дастовардҳо дар он ҷое пайдо мешаванд, ки одамон бо ҳамдигар ҳамкорӣ мекунанд, мубодилаи дастовардҳо, андешаҳо ва ғояҳои худ мекунанд, ба хотири ҳадафи ягонаи инсонӣ — хидмат ба башарият.",
                    sourceNote: "assets/quotes.md",
                },
            ],
        },
        note: {
            label: "Ёддошти таҳрирӣ",
            title: "Ин бахш боэҳтиёт густариш меёбад",
            body: "Дар оянда ин саҳифа бояд шаклҳои аслии забонӣ, тарҷумаҳои бознигаришуда, гурӯҳбандии мавзӯӣ ва пайванд ба манбаъҳоро низ дар бар гирад. Ҳоло бошад, ин ҷо интихоби аввалияи санҷидашуда аст, на бойгонии комили иқтибосҳо.",
        },
    },
    ru: {
        metadata: {
            title: "Цитаты - Мухаммад Осими",
            description:
                "Отобранная коллекция цитат как первое знакомство с нравственным и интеллектуальным голосом Мухаммада Осими.",
        },
        hero: {
            label: "Цитаты",
            title: "В его собственных словах",
            subtitle:
                "Галерея мысли, памяти, ответственности и общественной этики",
            intro: "Эти цитаты дают первое представление о нравственном языке и интеллектуальном темпераменте Мухаммада Осими. Даже в краткой форме они раскрывают идеи, проходящие через всю его жизнь и работу: историческую память, общественную ответственность, культуру, достоинство, единство и заботу о будущем поколении.",
        },
        featured: {
            text: "Люди культуры - хозяева истории. Люди политики - гости истории.",
            attribution: "Мухаммад Осими",
        },
        themes: {
            label: "Темы",
            title: "Повторяющиеся нравственные и интеллектуальные темы",
            intro: "Собранные к настоящему моменту цитаты еще не образуют полного архива, но уже ясно показывают несколько устойчивых направлений в общественном языке Осими.",
            items: [
                {
                    key: "history",
                    label: "История и память",
                    description:
                        "Как общество помнит свое прошлое и что теряет, когда забывает его.",
                },
                {
                    key: "generosity",
                    label: "Щедрость мысли",
                    description:
                        "Нравственная мера интеллекта, характера и научной открытости.",
                },
                {
                    key: "children",
                    label: "Дети и достоинство",
                    description:
                        "Уважение к ребенку как нравственная обязанность общества.",
                },
                {
                    key: "responsibility",
                    label: "Свобода и ответственность",
                    description:
                        "Независимость не как риторика, а как долг и серьезность.",
                },
                {
                    key: "unity",
                    label: "Единство и общественная жизнь",
                    description:
                        "Национальная цельность, мир и гражданская работа по удержанию общества вместе.",
                },
                {
                    key: "culture",
                    label: "Культура и цивилизация",
                    description:
                        "Место культуры, духовности и интеллектуальной жизни в судьбе народа.",
                },
            ],
        },
        collection: {
            label: "Избранные цитаты",
            title: "Начальная проверенная подборка",
            intro: "Первая версия страницы опирается на материалы главной страницы, биографию и старую страницу цитат. Она намеренно избирательна и использует только те тексты, которые уже прослеживаются в текущих материалах проекта.",
            emptyLabel: "Для этой темы цитат нет.",
            allLabel: "Все",
            previousLabel: "Назад",
            nextLabel: "Вперед",
            pageLabel: "Страница",
            showingLabel: "Показаны",
            ofLabel: "из",
            items: [
                {
                    id: "generosity",
                    theme: "generosity",
                    text: "Ценность мыслей человека есть мера его собственной щедрости.",
                    sourceNote: "Подборка цитат на главной странице",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "Детей нужно уважать, и нельзя разрушать их чувство собственного достоинства.",
                    sourceNote: "Подборка цитат на главной странице",
                },
                {
                    id: "hosts-history",
                    theme: "history",
                    text: "Люди культуры - хозяева истории. Люди политики - гости истории.",
                    sourceNote: "Главная страница и биография",
                },
                {
                    id: "national-pride",
                    theme: "unity",
                    text: "Национальная гордость является мощным инструментом обеспечения национального единства.",
                    sourceNote: "Старая страница цитат",
                },
                {
                    id: "spiritual-decline",
                    theme: "culture",
                    text: "Упадок духовности - это упадок общества, а разложение общества ведет к разложению государства.",
                    sourceNote: "Старая страница цитат",
                },
                {
                    id: "forget-past",
                    theme: "history",
                    text: "Тот, кто забывает прошлое, тот не думает о будущем.",
                    sourceNote: "Старая страница цитат",
                },
                {
                    id: "independence",
                    theme: "responsibility",
                    text: "Независимость означает ответственность.",
                    sourceNote: "Старая страница цитат",
                },
                {
                    id: "paivand",
                    theme: "unity",
                    text: "«Пайванд» - знак мира, сближения людей, сотрудничества, единства и дружбы.",
                    sourceNote: "Старая страница цитат, сокращенная форма",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Каждый, кто искренне старается, достигнет своих сокровенных желаний. Мечты, с одной стороны, делают жизнь яркой, а с другой стороны, путь к мечте — это священный путь, путь чести.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Познание делает представление о мире полнее, шире, диалектичнее. И познающий труд разума не происходит без эмоций, ему способствуют и удивление, и восхищение, и муки творчества, и счастье обретённого знания. И эстетическое чувство. Да, да…",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "Философ не может разбираться во всех сложностях и тонкостях физики, но узловые её проблемы, узловые её моменты он обязан знать — без этого просто нет философии.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "Всё увеличивающееся количество информации сказывается и на качестве её восприятия. Сознание и психика приспосабливаются, восприятие становится более утончённым и динамичным, реакция убыстряется, отбор нужного совершается уже как бы автоматически.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Неправы те, кто считает, что вторжение науки в жизнь, в человеческое сознание обедняет эмоциональную сферу, притупляет остроту переживаний. Эти страхи не новы — они периодически возникали на разных этапах развития человеческой мысли.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "Без воображения нет подлинной науки, как без него не может быть и настоящего искусства.",
                    sourceNote: "assets/quotes.md",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "Исторический опыт становления и расцвета гуманистической культуры учит нас, что успех добывается там, где люди сотрудничают друг с другом, делятся своими достижениями, мыслями и идеями, работают во имя единой гуманной цели — служить человечеству.",
                    sourceNote: "assets/quotes.md",
                },
            ],
        },
        note: {
            label: "Редакторская заметка",
            title: "Этот раздел будет расширяться осторожно",
            body: "Со временем эта страница должна поддерживать оригинальные языковые формы, выверенные переводы, тематическую группировку и ссылки на контекст источника. Пока же она выступает как надежная начальная подборка, а не как полный архив цитат.",
        },
    },
};

export function getQuotesContent(locale: Locale) {
    return quotesContent[locale];
}
