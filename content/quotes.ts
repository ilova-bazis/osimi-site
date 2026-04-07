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
            intro: "This selection combines the site's earlier quote set with quotations traced to interviews, reminiscences, and published conversations. It remains selective, but it now includes a stronger group of verified additions.",
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
                    sourceNote: "Legacy site quote collection; direct source confirmation still pending",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "A child must be respected; one must not wound the child's sense of dignity.",
                    originalText:
                        "Фарзандро бояд эҳтиром кард, бояд ба иззати нафси ӯ нарасид.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 February 1986",
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
                    id: "happy-person-books",
                    theme: "culture",
                    text: "When asked what kind of person someone is who reads many books, Osimi answered: \"A happy person.\"",
                    originalText:
                        "«Одамеро, ки бисёр китоб мехонад, Шумо одами чӣ хел меҳисобед?» — «Одами хушбахт». ",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "teacher-sees-talent",
                    theme: "children",
                    text: "A teacher must be able to see talent and help its development.",
                    originalText:
                        "Муаллим бояд истеъдодро дида тавонад ва барои инкишофи он имдод кунад.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 February 1986",
                },
                {
                    id: "knowledge-and-logic",
                    theme: "responsibility",
                    text: "The chief weapon of a person - and especially of a scholar - is deep, comprehensive knowledge of the problem and impeccable logic.",
                    originalText:
                        "Главным оружием человека и особенно ученого является глубокое всестороннее знание проблемы и безукоризненная логика.",
                    sourceNote: "«Факел науки» — Мухаммадходжа Бобоходжаев and Музаффарходжа Бобоходжаев",
                },
                {
                    id: "life-capital",
                    theme: "responsibility",
                    text: "To serve one's people and homeland, to take part in the building of one\'s country, is the noble duty of every human being and the true capital of life.",
                    originalText:
                        "Хизмати халқу диёр кардан, дар ободии мулке саҳмгузор шуданро ман қарзи шарифи ҳар инсон ва сармояи зиндагонӣ мешуморам.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 May 1979",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Everyone who tries sincerely will achieve his innermost desires. Dreams, on the one hand, make life bright, and on the other hand, the path to a dream is a sacred path, a path of honor.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 May 1979",
                },
                {
                    id: "life-simple-true",
                    theme: "culture",
                    text: "I wish that my life,\nMy existence and my being,\nMay be pure and flawless,\nBoth simple and true.",
                    originalText:
                        "Хоҳам, ки ҳаёти ман, ҳасти ману буди ман, покиза бувад бекост, ҳам сода бувад ҳам рост.",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Cognition shows the picture of the world fuller, broader, more dialectical. And the comprehensive work of the mind does not happen without emotions — it is facilitated by surprise, admiration, the torments of creativity, and the happiness of acquired knowledge. And an aesthetic feeling. Yes, yes…",
                    sourceNote: "«Алгебра и гармония» — Druzhba Narodov, no. 4, 1974",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "A philosopher cannot understand all the complexities and subtleties of physics, but he must know its key problems, its key moments — without this, there is simply no philosophy.",
                    sourceNote: "«Алгебра и гармония» — Druzhba Narodov, no. 4, 1974",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "The ever-increasing amount of information also affects the quality of its perception. Consciousness and psyche adapt, perception becomes more refined and dynamic, the reaction accelerates, and the selection of the necessary is done almost automatically.",
                    sourceNote: "«Алгебра и гармония» — Druzhba Narodov, no. 4, 1974",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Those who believe that the intrusion of science into life, into human consciousness, impoverishes the emotional sphere and dulls the acuteness of feeling are wrong. These fears are not new — they periodically arose at different epochs in the development of human thought.",
                    sourceNote: "«Алгебра и гармония» — Druzhba Narodov, no. 4, 1974",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "There is no true science without imagination, just as there can be no real art without it.",
                    sourceNote: "«Алгебра и гармония» — Druzhba Narodov, no. 4, 1974",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "The historical experience of the formation and flowering of humanistic culture teaches us that success is achieved where people cooperate with each other, share their achievements, thoughts and ideas, and work in the name of a single humane goal — to serve humanity.",
                    sourceNote: "Legacy quote collection; source verification still pending",
                },
            ],
        },
        note: {
            label: "Editorial Note",
            title: "This Section Will Expand Carefully",
            body: "This collection will continue to grow over time, with additional quotations added as reliable original texts and strong translations are identified.",
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
            intro: "Ин интихоб аз иқтибосҳои пешини сомона ва ҷумлаҳое таркиб ёфтааст, ки ба мусоҳибаҳо, ёддоштҳо ва суҳбатҳои чопшуда пайгирӣ мешаванд. Он ҳанӯз пурра нест, аммо акнун чанд изҳороти муҳими ӯро бо такя ба манбаъҳои равшантар дар бар мегирад.",
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
                    sourceNote: "Маҷмуаи меросии иқтибосҳои сомона; манбаи мустақим ҳанӯз пурра мушаххас нашудааст",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "Фарзандро бояд эҳтиром кард, бояд ба иззати нафси ӯ нарасид.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 феврали соли 1986",
                },
                {
                    id: "hosts-history",
                    theme: "history",
                    text: "Одамони фарҳанг соҳибони таъриханд, одамони сиёсат меҳмонони он.",
                    sourceNote: "Саҳифаи асосӣ ва зиндагинома",
                },
                {
                    id: "happy-person-books",
                    theme: "culture",
                    text: "Ба саволи он ки шахси бисёр китобхонро чӣ гуна одам медонад, ӯ посух додааст: «Одами хушбахт».",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "teacher-sees-talent",
                    theme: "children",
                    text: "Муаллим бояд истеъдодро дида тавонад ва барои инкишофи он имдод кунад.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 феврали соли 1986",
                },
                {
                    id: "knowledge-and-logic",
                    theme: "responsibility",
                    text: "Аслиҳаи асосии инсон ва махсусан олим донишҳои амиқу фарогири масъала ва мантиқи беайб аст.",
                    sourceNote: "«Факели илм» — Муҳаммадхоҷа Бобоҳоҷаев ва Музаффархоҷа Бобоҳоҷаев",
                },
                {
                    id: "life-capital",
                    theme: "responsibility",
                    text: "Хизмати халқу диёр кардан, дар ободии мулке саҳмгузор шуданро ман қарзи шарифи ҳар инсон ва сармояи зиндагонӣ мешуморам.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 майи соли 1979",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Ҳар шахс агар аз сидқи дил кӯшад, ба он нияте, ки дар дил дорад, мерасад. Орзу аз як тараф зиндагиро рангин кунад, аз тарафи дигар роҳ ба сӯи орзу, роҳи муқаддас, роҳи мушарраф аст.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 майи соли 1979",
                },
                {
                    id: "life-simple-true",
                    theme: "culture",
                    text: "Хоҳам, ки ҳаёти ман, ҳасти ману буди ман, покиза бувад бекост, ҳам сода бувад ҳам рост.",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Идрок тасвири оламро пурратар, васеътар ва бештар диалектикӣ месозад. Заҳмати донишомӯзии ақл бидуни эҳсосот сурат намегирад, он ба ҳайрат ва мафтунӣ ва азоби эҷодкорӣ ва ҳиссиёти хушбахтӣ аз донишҳои гирифташуда мусоидат мекунад. Ва эҳсоси эстетикӣ. Бале, бале…",
                    sourceNote: "«Алгебра ва ҳамоҳангӣ» — «Дружба народов», № 4, соли 1974",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "Файласуф наметавонад ҳамаи мураккабиҳо ва нозукиҳои физикаро сарфаҳм равад, аммо нуқтаҳои асосии онро бояд бидонад, бидуни ин ҳеч гоҳ фалсафа нест.",
                    sourceNote: "«Алгебра ва ҳамоҳангӣ» — «Дружба народов», № 4, соли 1974",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "Миқдори торафт афзояндаи иттилоот ба сифати дарки он таъсир мерасонад. Шуур ва психика мутобиқат мекунад, дарки чизҳо то рафт латиф ва динамикӣ мешавад, реаксия зудтар мегардад, интихоби чизҳои зарурӣ ба таври автоматикӣ иҷро мешавад.",
                    sourceNote: "«Алгебра ва ҳамоҳангӣ» — «Дружба народов», № 4, соли 1974",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Хато мекунанд ононе, ки боварӣ доранд, ки вуруди илм ба ҳаёт, ба шуури инсон, ҷиҳати эҳсосиро заиф мекунад, латофати ҳассосиро кунд мекунад. Ин гуна тарсҳо нав нестанд ва дар давраҳои мухталифи рушди тафаккури инсонӣ такроран пайдо мешуданд.",
                    sourceNote: "«Алгебра ва ҳамоҳангӣ» — «Дружба народов», № 4, соли 1974",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "Илми ҳақиқӣ бидуни тасаввурот вуҷуд надорад, ҳамон тавре ки санъати ҳақиқӣ ҳам бидуни он вуҷуд надорад.",
                    sourceNote: "«Алгебра ва ҳамоҳангӣ» — «Дружба народов», № 4, соли 1974",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "Аз таҷрибаи таърихии ташаккул ва нашъунамои фарҳанги гуманистӣ меомӯзем, ки дастовардҳо дар он ҷое пайдо мешаванд, ки одамон бо ҳамдигар ҳамкорӣ мекунанд, мубодилаи дастовардҳо, андешаҳо ва ғояҳои худ мекунанд, ба хотири ҳадафи ягонаи инсонӣ — хидмат ба башарият.",
                    sourceNote: "Маҷмуаи меросии иқтибосҳо; санҷиши манбаъ ҳанӯз пурра анҷом нашудааст",
                },
            ],
        },
        note: {
            label: "Ёддошти таҳрирӣ",
            title: "Ин бахш боэҳтиёт густариш меёбад",
            body: "Ин маҷмуа тадриҷан густариш меёбад ва иқтибосҳои нави он замоне афзуда хоҳанд шуд, ки шаклҳои аслӣ ва тарҷумаҳои устувори онҳо дастрас гарданд.",
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
            intro: "Эта подборка сочетает прежний набор цитат сайта с высказываниями, которые удалось проследить до интервью, воспоминаний и опубликованных бесед. Она по-прежнему выборочна, но уже включает несколько новых, лучше подтверждённых цитат.",
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
                    sourceNote: "Наследуемая подборка цитат сайта; прямое подтверждение источником пока не найдено",
                },
                {
                    id: "children",
                    theme: "children",
                    text: "Ребёнка нужно уважать, нельзя задевать его чувство собственного достоинства.",
                    originalText:
                        "Фарзандро бояд эҳтиром кард, бояд ба иззати нафси ӯ нарасид.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 февраля 1986 года",
                },
                {
                    id: "hosts-history",
                    theme: "history",
                    text: "Люди культуры - хозяева истории. Люди политики - гости истории.",
                    sourceNote: "Главная страница и биография",
                },
                {
                    id: "happy-person-books",
                    theme: "culture",
                    text: "На вопрос о том, каким человеком он считает того, кто много читает, Осими ответил: «Счастливым человеком».",
                    originalText:
                        "«Одамеро, ки бисёр китоб мехонад, Шумо одами чӣ хел меҳисобед?» — «Одами хушбахт». ",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "teacher-sees-talent",
                    theme: "children",
                    text: "Учитель должен уметь увидеть талант и помочь его развитию.",
                    originalText:
                        "Муаллим бояд истеъдодро дида тавонад ва барои инкишофи он имдод кунад.",
                    sourceNote: "«Салом, рафиқ Президент!» — «Комсомоли Тоҷикистон», 23 февраля 1986 года",
                },
                {
                    id: "knowledge-and-logic",
                    theme: "responsibility",
                    text: "Главное оружие человека, и особенно учёного, - глубокое всестороннее знание проблемы и безукоризненная логика.",
                    originalText:
                        "Главным оружием человека и особенно ученого является глубокое всестороннее знание проблемы и безукоризненная логика.",
                    sourceNote: "«Факел науки» — Мухаммадходжа Бобоходжаев и Музаффарходжа Бобоходжаев",
                },
                {
                    id: "life-capital",
                    theme: "responsibility",
                    text: "Служить своему народу и родной земле, участвовать в созидании страны - это благородный долг каждого человека и подлинный капитал жизни.",
                    originalText:
                        "Хизмати халқу диёр кардан, дар ободии мулке саҳмгузор шуданро ман қарзи шарифи ҳар инсон ва сармояи зиндагонӣ мешуморам.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 мая 1979 года",
                },
                {
                    id: "sincere-effort",
                    theme: "responsibility",
                    text: "Каждый, кто искренне старается, достигнет своих сокровенных желаний. Мечты, с одной стороны, делают жизнь яркой, а с другой стороны, путь к мечте — это священный путь, путь чести.",
                    sourceNote: "«Дониш талабу бузургӣ омӯз...» — «Комсомоли Тоҷикистон», 1 мая 1979 года",
                },
                {
                    id: "life-simple-true",
                    theme: "culture",
                    text: "Хочу, чтобы жизнь моя, всё моё существо было чистым и цельным, простым и правдивым.",
                    originalText:
                        "Хоҳам, ки ҳаёти ман, ҳасти ману буди ман, покиза бувад бекост, ҳам сода бувад ҳам рост.",
                    sourceNote: "«Падари ман Муҳаммад Осимӣ»",
                },
                {
                    id: "cognition-emotions",
                    theme: "culture",
                    text: "Познание делает представление о мире полнее, шире, диалектичнее. И познающий труд разума не происходит без эмоций, ему способствуют и удивление, и восхищение, и муки творчества, и счастье обретённого знания. И эстетическое чувство. Да, да…",
                    sourceNote: "«Алгебра и гармония» — «Дружба народов», № 4, 1974",
                },
                {
                    id: "philosopher-physics",
                    theme: "culture",
                    text: "Философ не может разбираться во всех сложностях и тонкостях физики, но узловые её проблемы, узловые её моменты он обязан знать — без этого просто нет философии.",
                    sourceNote: "«Алгебра и гармония» — «Дружба народов», № 4, 1974",
                },
                {
                    id: "information-perception",
                    theme: "culture",
                    text: "Всё увеличивающееся количество информации сказывается и на качестве её восприятия. Сознание и психика приспосабливаются, восприятие становится более утончённым и динамичным, реакция убыстряется, отбор нужного совершается уже как бы автоматически.",
                    sourceNote: "«Алгебра и гармония» — «Дружба народов», № 4, 1974",
                },
                {
                    id: "science-emotions",
                    theme: "culture",
                    text: "Неправы те, кто считает, что вторжение науки в жизнь, в человеческое сознание обедняет эмоциональную сферу, притупляет остроту переживаний. Эти страхи не новы — они периодически возникали на разных этапах развития человеческой мысли.",
                    sourceNote: "«Алгебра и гармония» — «Дружба народов», № 4, 1974",
                },
                {
                    id: "imagination-science",
                    theme: "culture",
                    text: "Без воображения нет подлинной науки, как без него не может быть и настоящего искусства.",
                    sourceNote: "«Алгебра и гармония» — «Дружба народов», № 4, 1974",
                },
                {
                    id: "humanistic-culture",
                    theme: "unity",
                    text: "Исторический опыт становления и расцвета гуманистической культуры учит нас, что успех добывается там, где люди сотрудничают друг с другом, делятся своими достижениями, мыслями и идеями, работают во имя единой гуманной цели — служить человечеству.",
                    sourceNote: "Наследуемая подборка цитат; проверка источника пока не завершена",
                },
            ],
        },
        note: {
            label: "Редакторская заметка",
            title: "Этот раздел будет расширяться осторожно",
            body: "Эта подборка будет постепенно расширяться, по мере того как будут находиться надёжные оригиналы и убедительные переводы новых цитат.",
        },
    },
};

export function getQuotesContent(locale: Locale) {
    return quotesContent[locale];
}
