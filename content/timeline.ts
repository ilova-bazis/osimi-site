import type { Locale } from "@/lib/i18n/locales";

export type TimelineCategory =
    | "life"
    | "education"
    | "war"
    | "academia"
    | "government"
    | "unesco"
    | "publications";

type LocalizedText = Record<Locale, string>;

export type CuratedTimelineEntry = {
    id: string;
    displayYear: string;
    startYear: number;
    endYear?: number;
    category: TimelineCategory;
    major: boolean;
    foldGroup?: string;
    body: LocalizedText;
    notes?: Partial<Record<Locale, string[]>>;
};

export type TimelinePageCopy = {
    metadata: {
        title: string;
        description: string;
    };
    label: string;
    title: string;
    subtitle: string;
    intro: string;
    categoriesLabel: string;
    foldLabel: string;
    allLabel: string;
    emptyLabel: string;
    countSuffix: string;
    categories: Record<TimelineCategory, string>;
};

export type TimelineEntryView = {
    id: string;
    displayYear: string;
    startYear: number;
    endYear?: number;
    category: TimelineCategory;
    categoryLabel: string;
    body: string;
    notes: string[];
    major: boolean;
    foldGroup?: string;
};

export type TimelineFold = {
    id: string;
    label: string;
    entries: TimelineEntryView[];
};

export type TimelineStreamItem =
    | { type: "entry"; entry: TimelineEntryView }
    | { type: "fold"; fold: TimelineFold };

const timelinePageCopy: Record<Locale, TimelinePageCopy> = {
    en: {
        metadata: {
            title: "Timeline of Muhammad Osimi - Life, Scholarship, and Public Service",
            description:
                "A chronological timeline of Muhammad Osimi, tracing his life, education, war service, academic leadership, public life, UNESCO activity, and intellectual legacy.",
        },
        label: "Chronology",
        title: "A Life in Knowledge and Service",
        subtitle:
            "A chronological view of Muhammad Osimi’s life, scholarship, public service, and intellectual legacy.",
        intro: "This timeline follows the major dates of his life and work, while denser periods can be expanded directly within the chronology so the page remains readable without losing detail.",
        categoriesLabel: "Categories",
        foldLabel: "Show more from",
        allLabel: "All",
        emptyLabel: "No entries match this category.",
        countSuffix: "entries",
        categories: {
            life: "Life",
            education: "Education",
            war: "War",
            academia: "Academia",
            government: "Civic & Public Life",
            unesco: "UNESCO",
            publications: "Publications",
        },
    },
    ru: {
        metadata: {
            title: "Хронология Мухаммада Осими - жизнь, наука и общественное служение",
            description:
                "Хронология жизни Мухаммада Осими: личные вехи, образование, война, научное руководство, общественная жизнь, деятельность с ЮНЕСКО и интеллектуальное наследие.",
        },
        label: "Хронология",
        title: "Жизнь, посвященная знанию и служению",
        subtitle:
            "Хронологический обзор жизни, научной деятельности, общественного служения и интеллектуального наследия Мухаммада Осими.",
        intro: "Эта хронология прослеживает основные даты его жизни и труда, а более насыщенные периоды можно раскрывать прямо внутри линии времени, не перегружая страницу.",
        categoriesLabel: "Категории",
        foldLabel: "Показать больше за",
        allLabel: "Все",
        emptyLabel: "Для этой категории записей нет.",
        countSuffix: "записей",
        categories: {
            life: "Жизнь",
            education: "Образование",
            war: "Война",
            academia: "Наука",
            government: "Общественная жизнь",
            unesco: "ЮНЕСКО",
            publications: "Публикации",
        },
    },
    tg: {
        metadata: {
            title: "Хронологияи Муҳаммад Осимӣ - зиндагӣ, илм ва хизмати ҷамъиятӣ",
            description:
                "Хронологияи ҳаёти Муҳаммад Осимӣ: марҳилаҳои шахсӣ, таҳсил, ҷанг, роҳбарии илмӣ, ҳаёти ҷамъиятӣ, фаъолият бо ЮНЕСКО ва мероси зеҳнӣ.",
        },
        label: "Хронология",
        title: "Зиндагие, ки ба дониш ва хизмат бахшида шуд",
        subtitle:
            "Нигоҳи хронологӣ ба зиндагӣ, фаъолияти илмӣ, хизмати ҷамъиятӣ ва мероси зеҳнии Муҳаммад Осимӣ.",
        intro: "Ин хронология санаҳои асосии зиндагӣ ва фаъолияти ӯро пайгирӣ мекунад ва давраҳои пурмаълумотро метавон мустақиман дар дохили хатти замон боз кард, то саҳифа хонданбоб бимонад.",
        categoriesLabel: "Мавзӯъ",
        foldLabel: "Намоиши бештар аз",
        allLabel: "Ҳама",
        emptyLabel: "Барои ин категория сабте нест.",
        countSuffix: "сабт",
        categories: {
            life: "Зиндагӣ",
            education: "Таҳсил",
            war: "Ҷанг",
            academia: "Илм",
            government: "Ҳаёти ҷамъиятӣ",
            unesco: "ЮНЕСКО",
            publications: "Нашрияҳо",
        },
    },
};

const timelineEntries: CuratedTimelineEntry[] = [
    {
        id: "birth-1920",
        displayYear: "1920",
        startYear: 1920,
        category: "life",
        major: true,
        body: {
            en: "Born on August 25, 1920 in Khujand, in the family of a peasant.",
            ru: "Родился 25 августа 1920 года в Худжанде, в семье крестьянина.",
            tg: "25 августи соли 1920 дар шаҳри Хуҷанд, дар оилаи деҳқон таваллуд шуд.",
        },
    },
    {
        id: "workers-faculty-1934-1937",
        displayYear: "1934-1937",
        startYear: 1934,
        endYear: 1937,
        category: "education",
        major: true,
        body: {
            en: "Studies at the workers’ faculty of the Agricultural Institute in Khujand.",
            ru: "Учится на рабфаке сельскохозяйственного института в Худжанде.",
            tg: "Дар рабфаки донишкадаи кишоварзии Хуҷанд таҳсил мекунад.",
        },
        notes: {
            en: [
                "Receives an honorary diploma from the workers’ faculty for academic progress and social work.",
            ],
            ru: [
                "Награжден почетной грамотой рабфака за успехи в учебе и общественной работе.",
            ],
            tg: [
                "Барои пешрафти таълимӣ ва кори ҷамъиятӣ бо ифтихорнома қадрдонӣ мешавад.",
            ],
        },
    },
    {
        id: "university-1937-1941",
        displayYear: "1937-1941",
        startYear: 1937,
        endYear: 1941,
        category: "education",
        major: true,
        body: {
            en: "Studies at the Physics and Mathematics Faculty of the Uzbek State University named after A. Navoi in Samarkand and qualifies as a physicist in 1941.",
            ru: "Учится на физико-математическом факультете Узбекского государственного университета имени А. Навои в Самарканде и в 1941 году получает квалификацию физика.",
            tg: "Дар факултаи физика ва математикаи Донишгоҳи давлатии Ӯзбекистон ба номи А. Навоӣ дар Самарқанд таҳсил карда, соли 1941 ихтисоси физик мегирад.",
        },
    },
    {
        id: "school-teaching-1939-1941",
        displayYear: "1939-1941",
        startYear: 1939,
        endYear: 1941,
        category: "education",
        major: false,
        foldGroup: "prewar-years",
        body: {
            en: "Teaches physics and mathematics at secondary school No. 5 in Samarkand while still a student.",
            ru: "Во время учебы преподает физику и математику в средней школе № 5 Самарканда.",
            tg: "Ҳангоми донишҷӯ будан аз физика ва математика дар мактаби миёнаи № 5-и Самарқанд дарс медиҳад.",
        },
    },
    {
        id: "war-service-1941-1946",
        displayYear: "1941-1946",
        startYear: 1941,
        endYear: 1946,
        category: "war",
        major: true,
        body: {
            en: "Serves in the Soviet Army during the Great Patriotic War.",
            ru: "Служит в рядах Советской Армии в годы Великой Отечественной войны.",
            tg: "Дар сафи Артиши Советӣ дар солҳои Ҷанги Бузурги Ватанӣ хизмат мекунад.",
        },
        notes: {
            en: [
                "Awarded the medal “For the Defense of Leningrad” and decorated with the Order of the Patriotic War, 1st degree.",
                "Joins the Communist Party in 1945 and receives the medal “For Victory over Germany in the Great Patriotic War 1941-1945.”",
            ],
            ru: [
                "Награжден медалью «За оборону Ленинграда» и орденом Отечественной войны I степени.",
                "Вступает в КПСС в 1945 году и получает медаль «За победу над Германией в Великой Отечественной войне 1941-1945 гг.».",
            ],
            tg: [
                "Бо медали «Барои мудофиаи Ленинград» ва ордени Ҷанги Ватании дараҷаи якум сарфароз мегардад.",
                "Соли 1945 ба сафи КПСС дохил шуда, бо медали «Барои Ғалаба бар Германия дар Ҷанги Бузурги Ватании солҳои 1941-1945» мукофотонида мешавад.",
            ],
        },
    },
    {
        id: "leninabad-pedagogical-1946-1952",
        displayYear: "1946-1952",
        startYear: 1946,
        endYear: 1952,
        category: "academia",
        major: true,
        body: {
            en: "Returns to Tajikistan and serves as head of physics and deputy director of the Leninabad State Pedagogical Institute.",
            ru: "Возвращается в Таджикистан и работает заведующим кафедрой физики и заместителем директора Ленинабадского педагогического института.",
            tg: "Ба Тоҷикистон баргашта, мудири кафедраи физика ва муовини директори Донишкадаи давлатии омӯзгории Ленинобод мешавад.",
        },
    },
    {
        id: "knowledge-society-1947",
        displayYear: "1949",
        startYear: 1949,
        category: "government",
        major: false,
        foldGroup: "formation-years",
        body: {
            en: "Receives the Order of the Badge of Honor.",
            ru: "Награждается орденом «Знак Почета».",
            tg: "Бо ордени «Нишони Фахрӣ» сарфароз мегардад.",
        },
    },
    {
        id: "postgraduate-1952-1955",
        displayYear: "1952-1955",
        startYear: 1952,
        endYear: 1955,
        category: "education",
        major: true,
        body: {
            en: "Studies at the Academy of Social Sciences under the CPSU Central Committee in Moscow and defends his candidate thesis in 1955.",
            ru: "Учится в Академии общественных наук при ЦК КПСС в Москве и в 1955 году защищает кандидатскую диссертацию.",
            tg: "Дар Академияи илмҳои иҷтимоии назди КМ КПСС дар Москва таҳсил карда, соли 1955 рисолаи номзадиро ҳимоя мекунад.",
        },
        notes: {
            en: [
                "The thesis is titled “Space and Time as the Basic Forms of Being of Matter.”",
            ],
            ru: [
                "Тема диссертации: «Пространство и время как основные формы бытия материи».",
            ],
            tg: [
                "Мавзӯи рисола: «Фазо ва вақт ҳамчун шаклҳои асосии мавҷудияти материя».",
            ],
        },
    },
    {
        id: "delegate-rsfsr-1954",
        displayYear: "1954",
        startYear: 1954,
        category: "government",
        major: false,
        foldGroup: "formation-years",
        body: {
            en: "Attends the fifth session of the Supreme Soviet of the RSFSR, 3rd convocation, as a delegate.",
            ru: "Участвует как делегат в V сессии Верховного Совета РСФСР 3-го созыва.",
            tg: "Ҳамчун вакил дар иҷлосияи V Шӯрои Олии РСФСР, даъвати 3-юм, иштирок мекунад.",
        },
    },
    {
        id: "associate-professor-1957",
        displayYear: "1957",
        startYear: 1957,
        category: "academia",
        major: false,
        foldGroup: "formation-years",
        body: {
            en: "Approved in the academic rank of associate professor in physics.",
            ru: "Утвержден в ученом звании доцента по кафедре физики.",
            tg: "Дар унвони илмии дотсент аз рӯйи кафедраи физика тасдиқ мешавад.",
        },
    },
    {
        id: "polytechnic-rector-1956-1962",
        displayYear: "1956-1962",
        startYear: 1956,
        endYear: 1962,
        category: "academia",
        major: true,
        body: {
            en: "Serves as the first rector of the Tajik State Polytechnic Institute in Dushanbe and leads its formative years.",
            ru: "Становится первым ректором Таджикского государственного политехнического института в Душанбе и руководит его становлением.",
            tg: "Нахустин ректори Донишкадаи давлатии политехникии Тоҷикистон дар Душанбе шуда, солҳои ташаккули онро роҳбарӣ мекунад.",
        },
    },
    {
        id: "honors-1961",
        displayYear: "1961",
        startYear: 1961,
        category: "government",
        major: false,
        foldGroup: "formation-years",
        body: {
            en: "Receives the Order of Lenin and the Honorary Diploma of the Presidium of the Supreme Soviet of the Tajik SSR.",
            ru: "Награждается орденом Ленина и Почетной грамотой Президиума Верховного Совета Таджикской ССР.",
            tg: "Бо ордени Ленин ва Ифтихорномаи Президиуми Шӯрои Олии ҶШС Тоҷикистон сарфароз мегардад.",
        },
        notes: {
            en: [
                "The same year he is also honored by the Central Committee of the Communist Party of Tajikistan for his work with the journal “Kommunisti Tojikiston.”",
            ],
            ru: [
                "В том же году он также отмечается ЦК Компартии Таджикистана за работу с журналом «Коммунисти Таджикистон».",
            ],
            tg: [
                "Ҳамон сол ӯ инчунин аз ҷониби КМ Ҳизби коммунистии Тоҷикистон барои фаъолият бо маҷаллаи «Коммунисти Тоҷикистон» қадрдонӣ мешавад.",
            ],
        },
    },
    {
        id: "minister-unesco-1962",
        displayYear: "1962",
        startYear: 1962,
        category: "government",
        major: true,
        body: {
            en: "Appointed Minister of Public Education of the Tajik SSR and participates in the UNESCO international conference on public education in Geneva.",
            ru: "Назначается министром народного просвещения Таджикской ССР и участвует в международной конференции ЮНЕСКО по народному образованию в Женеве.",
            tg: "Вазири маорифи халқи ҶШС Тоҷикистон таъин шуда, дар конфронси байналмилалии ЮНЕСКО оид ба маориф дар Женева иштирок мекунад.",
        },
    },
    {
        id: "party-state-control-1962-1965",
        displayYear: "1962-1965",
        startYear: 1962,
        endYear: 1965,
        category: "government",
        major: true,
        body: {
            en: "Simultaneously serves as Secretary of the Central Committee of the Communist Party of Tajikistan, Deputy Chairman of the Council of Ministers, and Chairman of the Party-State Control Committee.",
            ru: "Одновременно занимает должности секретаря ЦК Компартии Таджикистана, заместителя председателя Совета Министров и председателя Комитета партийно-государственного контроля.",
            tg: "Ҳамзамон котиби КМ Ҳизби коммунистии Тоҷикистон, муовини раиси Шӯрои Вазирон ва раиси Кумитаи назорати ҳизбӣ-давлатӣ мешавад.",
        },
    },
    {
        id: "deputy-supreme-soviet-1963-1967",
        displayYear: "1963-1967",
        startYear: 1963,
        endYear: 1967,
        category: "government",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Deputy of the Supreme Soviet of the Tajik SSR of the 6th convocation.",
            ru: "Депутат Верховного Совета Таджикской ССР 6-го созыва.",
            tg: "Вакили Шӯрои Олии ҶШС Тоҷикистон даъвати 6.",
        },
    },
    {
        id: "academy-president-1965-1988",
        displayYear: "1965-1988",
        startYear: 1965,
        endYear: 1988,
        category: "academia",
        major: true,
        body: {
            en: "Elected a full member of the Academy of Sciences of the Tajik SSR and serves as its President until 1988.",
            ru: "Избирается действительным членом Академии наук Таджикской ССР и становится ее президентом до 1988 года.",
            tg: "Узви пурраи Академияи илмҳои ҶШС Тоҷикистон интихоб шуда, то соли 1988 президенти он мегардад.",
        },
    },
    {
        id: "ussr-deputy-and-friendship-1966-1969",
        displayYear: "1966-1969",
        startYear: 1966,
        endYear: 1969,
        category: "government",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Serves as deputy of the Soviet of Nationalities of the Supreme Soviet of the USSR from the Vose constituency and chairs the Tajik Society of Friendship and Cultural Relations with Foreign Countries.",
            ru: "Является депутатом Совета Национальностей Верховного Совета СССР от Восейского округа и возглавляет Таджикское общество дружбы и культурной связи с зарубежными странами.",
            tg: "Вакили Шӯрои Миллатҳои Шӯрои Олии ИҶШС аз ҳавзаи Восеъ буда, ҳамзамон ба Ҷамъияти дӯстӣ ва равобити фарҳангӣ бо кишварҳои хориҷӣ роҳбарӣ мекунад.",
        },
    },
    {
        id: "inter-parliamentary-1966",
        displayYear: "1966",
        startYear: 1966,
        category: "government",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Participates in the 55th Conference of the Inter-Parliamentary Union in Tehran, representing the Soviet parliamentary delegation.",
            ru: "Участвует в 55-й конференции Межпарламентского союза в Тегеране в составе советской парламентской делегации.",
            tg: "Дар конфронси 55-уми Иттиҳоди байнипарлумонӣ дар Теҳрон дар ҳайати ҳайати парлумонии шӯравӣ иштирок мекунад.",
        },
    },
    {
        id: "amsterdam-congress-1967",
        displayYear: "1967",
        startYear: 1967,
        category: "academia",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Presents a paper in English at the III International Congress on Logic, Methodology, and Philosophy of Science in Amsterdam.",
            ru: "Выступает с докладом на английском языке на III Международном конгрессе по логике, методологии и философии науки в Амстердаме.",
            tg: "Дар III Конгресси байналмилалӣ оид ба мантиқ, методология ва фалсафаи илм дар Амстердам ба забони англисӣ маърӯза мекунад.",
        },
        notes: {
            en: ["The paper concerns scientific concepts related to the formula E = mc2."],
            ru: ["Доклад посвящен научным понятиям, связанным с соотношением E = mc2."],
            tg: ["Мавзӯи маърӯза ба мафҳумҳои илмии вобаста ба нисбати E = mc2 бахшида мешавад."],
        },
    },
    {
        id: "encyclopedia-and-prize-1967",
        displayYear: "1967",
        startYear: 1967,
        category: "publications",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Begins long service as chairman of the republican committee for the Abu Ali ibn Sino State Prize and is confirmed as chief scientific editor of the Tajik Soviet Encyclopedia.",
            ru: "Начинает многолетнюю работу председателем республиканского комитета Государственной премии имени Абуали ибн Сино и утверждается главным научным редактором Таджикской советской энциклопедии.",
            tg: "Раиси Кумитаи ҷумҳуриявии Мукофоти давлатии ба номи Абуалӣ ибни Сино интихоб шуда, ҳамчун сармуҳаррири илмии Энсиклопедияи Советии Тоҷик тасдиқ мегардад.",
        },
    },
    {
        id: "aini-committee-1968",
        displayYear: "1968-1996",
        startYear: 1968,
        endYear: 1996,
        category: "publications",
        major: false,
        foldGroup: "state-rise",
        body: {
            en: "Chairs the permanent Aini Committee under the Presidium of the Academy of Sciences.",
            ru: "Возглавляет постоянный Комитет Айни при Президиуме Академии наук.",
            tg: "Ба Кумитаи доимии Айнӣ дар назди Президиуми Академияи илмҳо роҳбарӣ мекунад.",
        },
    },
    {
        id: "kushan-symposium-1968",
        displayYear: "1968",
        startYear: 1968,
        category: "unesco",
        major: true,
        body: {
            en: "Co-leads the major international conference in Dushanbe on the history, archaeology, and art of Central Asia in the Kushan period, helping establish the city as a serious UNESCO-linked scholarly venue.",
            ru: "Совместно возглавляет крупную международную конференцию в Душанбе по истории, археологии и искусству Центральной Азии кушанского периода, способствуя утверждению города как важной площадки науки, связанной с ЮНЕСКО.",
            tg: "Ҳамроҳ бо дигарон ба конфронси бузурги байналмилалӣ дар Душанбе оид ба таърих, бостоншиносӣ ва санъати Осиёи Марказӣ дар давраи Кӯшониён роҳбарӣ карда, барои ҳамчун маркази ҷиддии илми вобаста ба ЮНЕСКО шинохта шудани шаҳр мусоидат менамояд.",
        },
        notes: {
            en: [
                "Contemporary accounts say he mobilized the full scholarly capacity of the Tajik Academy for the forum and prepared it with his study “Science of Central Asia in the Kushan Era and the Ways of Its Study.”",
            ],
            ru: [
                "Современники отмечали, что он привел в движение весь научный потенциал Таджикской академии и подготовил форум своей работой «Наука Средней Азии кушанской эпохи и пути её изучения».",
            ],
            tg: [
                "Шоҳидони ҳамон давра менавиштанд, ки ӯ тамоми нерӯи илмии Академияи Тоҷикистонро барои ин форум сафарбар карда, онро бо асари худ «Илми Осиёи Миёна дар давраи Кӯшониён ва роҳҳои омӯзиши он» омода сохт.",
            ],
        },
    },
    {
        id: "doctoral-thesis-1970",
        displayYear: "1970",
        startYear: 1970,
        category: "academia",
        major: true,
        body: {
            en: "Defends his doctoral dissertation, “The Concept of Matter and the Problem of Physical Reality,” at the Institute of Philosophy of the USSR Academy of Sciences.",
            ru: "Защищает докторскую диссертацию «Понятие материи и проблема физической реальности» в Институте философии Академии наук СССР.",
            tg: "Рисолаи доктории «Мафҳуми материя ва масъалаи воқеияти физикӣ»-ро дар Институти фалсафаи Академияи илмҳои ИҶШС ҳимоя мекунад.",
        },
    },
    {
        id: "kabul-unesco-1970",
        displayYear: "1970",
        startYear: 1970,
        category: "unesco",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "In Kabul, takes part in the UNESCO seminar on the study of Central Asian civilizations and in the parallel international coordination meeting on archaeological research, where he is elected deputy chairman of the organizing committee.",
            ru: "В Кабуле участвует в семинаре ЮНЕСКО по изучению цивилизаций Центральной Азии и в международном координационном совещании по археологическим исследованиям, где избирается заместителем председателя оргкомитета.",
            tg: "Дар Кобул дар семинари ЮНЕСКО оид ба омӯзиши тамаддунҳои Осиёи Марказӣ ва ҳамчунин дар ҷаласаи байналмилалии ҳамоҳангсозӣ оид ба таҳқиқоти бостоншиносӣ иштирок карда, муовини раиси кумитаи тадорукот интихоб мешавад.",
        },
    },
    {
        id: "professor-1971",
        displayYear: "1971",
        startYear: 1971,
        category: "academia",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "Approved in the academic title of professor in philosophy.",
            ru: "Утвержден в ученом звании профессора по философии.",
            tg: "Дар унвони илмии профессор аз рӯйи фалсафа тасдиқ мешавад.",
        },
    },
    {
        id: "india-symposia-1971",
        displayYear: "1971",
        startYear: 1971,
        category: "unesco",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "Participates in the UNESCO symposium “Al-Biruni and Indian Science” in India and continues presenting on the scientific heritage of Central Asia.",
            ru: "Участвует в симпозиуме ЮНЕСКО «Ал-Беруни и индийская наука» в Индии и продолжает выступать по научному наследию Центральной Азии.",
            tg: "Дар симпозиуми ЮНЕСКО «Ал-Берунӣ ва илми ҳиндӣ» дар Ҳиндустон иштирок карда, суханрониҳои худро оид ба мероси илмии Осиёи Марказӣ идома медиҳад.",
        },
        notes: {
            en: [
                "The same year he also takes part in the XIII International Congress of the History of Science in Moscow and in scholarly sessions devoted to Hafez and Al-Biruni.",
            ],
            ru: [
                "В том же году участвует в XIII Международном конгрессе по истории науки в Москве и в научных заседаниях, посвященных Хафизу и Ал-Беруни.",
            ],
            tg: [
                "Ҳамон сол дар XIII Конгресси байналмилалии таърихи илм дар Москва ва ҳамоишҳои илмии бахшида ба Ҳофиз ва Ал-Берунӣ низ иштирок мекунад.",
            ],
        },
    },
    {
        id: "india-philosophy-1973",
        displayYear: "1973",
        startYear: 1973,
        category: "academia",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "Participates in the XV World Congress of Philosophers and later lectures in India through the Academy of Sciences and the Knowledge Society.",
            ru: "Участвует в XV Всемирном конгрессе философов и затем читает лекции в Индии по линии Академии наук и общества «Знание».",
            tg: "Дар XV Конгресси ҷаҳонии файласуфон иштирок карда, баъдан тавассути Академияи илмҳо ва ҷамъияти «Дониш» дар Ҳиндустон лексияҳо мехонад.",
        },
        notes: {
            en: ["In the same year he is awarded the S.I. Vavilov medal."],
            ru: ["В том же году награждается медалью имени С.И. Вавилова."],
            tg: [
                "Дар ҳамон сол бо медали ба номи С.И. Вавилов қадрдонӣ мешавад.",
            ],
        },
    },
    {
        id: "ussr-corresponding-member-1974",
        displayYear: "1974",
        startYear: 1974,
        category: "academia",
        major: true,
        body: {
            en: "Elected corresponding member of the USSR Academy of Sciences in the Department of Philosophy and Law.",
            ru: "Избирается членом-корреспондентом Академии наук СССР по Отделению философии и права.",
            tg: "Узви вобастаи Академияи илмҳои ИҶШС аз рӯйи шуъбаи фалсафа ва ҳуқуқ интихоб мешавад.",
        },
    },
    {
        id: "october-revolution-order-1975",
        displayYear: "1975",
        startYear: 1975,
        category: "government",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "Receives the Order of the October Revolution and other honors, including the medal marking 30 years of victory in the Great Patriotic War.",
            ru: "Награждается орденом Октябрьской Революции и другими наградами, включая медаль к 30-летию победы в Великой Отечественной войне.",
            tg: "Бо ордени Инқилоби Октябр ва дигар мукофотҳо, аз ҷумла медали 30-солагии Ғалаба дар Ҷанги Бузурги Ватанӣ сарфароз мешавад.",
        },
    },
    {
        id: "academy-anniversary-1975",
        displayYear: "1975",
        startYear: 1975,
        category: "academia",
        major: false,
        foldGroup: "international-rise",
        body: {
            en: "Participates in the extended Presidium meeting and scientific sessions marking the 250th anniversary of the USSR Academy of Sciences.",
            ru: "Участвует в расширенном заседании Президиума и научных сессиях к 250-летию Академии наук СССР.",
            tg: "Дар ҷаласаи васеи Президиум ва сессияҳои илмӣ ба ифтихори 250-солагии Академияи илмҳои ИҶШС иштирок мекунад.",
        },
    },
    {
        id: "honored-scientist-1977",
        displayYear: "1977",
        startYear: 1977,
        category: "academia",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Conferred the honorary title “Honored Worker of Science of the Tajik SSR.”",
            ru: "Удостаивается почетного звания «Заслуженный деятель науки Таджикской ССР».",
            tg: "Ба унвони фахрии «Ходими шоистаи илми ҶШС Тоҷикистон» сарфароз мегардад.",
        },
    },
    {
        id: "knowledge-chair-1977-1987",
        displayYear: "1977-1987",
        startYear: 1977,
        endYear: 1987,
        category: "government",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Chairs the Republican Society “Knowledge” of the Tajik SSR, linking scholarship, public lectures, and civic education.",
            ru: "Возглавляет Республиканское общество «Знание» Таджикской ССР, соединяя науку, публичные лекции и просветительскую работу.",
            tg: "Ба Ҷамъияти ҷумҳуриявии «Дониш»-и ҶШС Тоҷикистон роҳбарӣ карда, илм, лексияҳои оммавӣ ва маърифатпарвариро ба ҳам мепайвандад.",
        },
    },
    {
        id: "iascca-1977-1996",
        displayYear: "1977-1996",
        startYear: 1977,
        endYear: 1996,
        category: "unesco",
        major: true,
        body: {
            en: "Becomes President of the International Association for the Study of Cultures of Central Asia and, in the same period, serves as Deputy Chairman of the Soviet Committee of Solidarity of Asian and African Countries.",
            ru: "Становится президентом Международной ассоциации по изучению культур Центральной Азии и в тот же период является заместителем председателя Советского комитета солидарности стран Азии и Африки.",
            tg: "Президенти Ассотсиатсияи байналмилалӣ оид ба омӯзиши фарҳангҳои Осиёи Марказӣ гардида, ҳамзамон дар ин давра муовини раиси Кумитаи советии ҳамбастагии кишварҳои Осиё ва Африқо мешавад.",
        },
        notes: {
            en: [
                "In 1977 he is also confirmed as chairman of the Soviet committee for the study of Central Asian civilizations.",
            ],
            ru: [
                "В 1977 году он также утверждается председателем советского комитета по изучению цивилизаций Центральной Азии.",
            ],
            tg: [
                "Соли 1977 ҳамзамон раиси кумитаи шӯравӣ оид ба омӯзиши тамаддунҳои Осиёи Марказӣ тасдиқ мешавад.",
            ],
        },
    },
    {
        id: "afghanistan-academy-1978-1987",
        displayYear: "1978-1987",
        startYear: 1978,
        endYear: 1987,
        category: "unesco",
        major: true,
        body: {
            en: "Leads repeated delegations and advisory work that help establish and support the Academy of Sciences of Afghanistan.",
            ru: "Возглавляет повторные делегации и консультативную работу, способствующие созданию и развитию Академии наук Афганистана.",
            tg: "Ба ҳайатҳои такрорӣ ва кори машваратӣ роҳбарӣ карда, дар таъсис ва рушди Академияи илмҳои Афғонистон саҳм мегузорад.",
        },
    },
    {
        id: "nehru-prize-1979",
        displayYear: "1979",
        startYear: 1979,
        category: "government",
        major: true,
        body: {
            en: "Is named laureate of the International Jawaharlal Nehru Prize for 1979; the award ceremony takes place in Moscow in 1983.",
            ru: "Становится лауреатом Международной премии имени Джавахарлала Неру за 1979 год; церемония вручения проходит в Москве в 1983 году.",
            tg: "Лауреати Мукофоти байналмилалии ба номи Ҷавоҳирлал Неру барои соли 1979 дониста мешавад; маросими супурдан дар Москва соли 1983 баргузор мегардад.",
        },
    },
    {
        id: "caracas-interparliamentary-1979",
        displayYear: "1979",
        startYear: 1979,
        category: "government",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Joins the parliamentary delegation of the Supreme Soviet of the USSR at the 66th Inter-Parliamentary Conference in Caracas.",
            ru: "Входит в парламентскую делегацию Верховного Совета СССР на 66-й Межпарламентской конференции в Каракасе.",
            tg: "Дар ҳайати парлумонии Шӯрои Олии ИҶШС дар конфронси 66-уми байнипарлумонӣ дар Каракас ширкат мекунад.",
        },
    },
    {
        id: "history-civilizations-1980",
        displayYear: "1980-1996",
        startYear: 1980,
        endYear: 1996,
        category: "publications",
        major: true,
        body: {
            en: "Plays a major editorial and organizational role in UNESCO’s multivolume “History of Civilizations of Central Asia.”",
            ru: "Играет ключевую редакторскую и организационную роль в многотомной ЮНЕСКОвской «Истории цивилизаций Центральной Азии».",
            tg: "Дар кори таҳрирӣ ва ташкилии бисёрҷилдаи ЮНЕСКО «Таърихи тамаддунҳои Осиёи Марказӣ» нақши калидӣ мебозад.",
        },
        notes: {
            en: [
                "In 1980 he joins the editorial committee; by 1995, at the fifth session in Beijing, he is again elected president of the International Scientific Committee and of the association behind the project.",
            ],
            ru: [
                "В 1980 году входит в редакционный комитет; к пятой сессии 1995 года в Пекине вновь избирается президентом Международного научного комитета и ассоциации, стоящей за проектом.",
            ],
            tg: [
                "Соли 1980 ба ҳайати кумитаи таҳририя ворид мешавад; дар иҷлосияи панҷуми соли 1995 дар Пекин дубора президенти Кумитаи байналмилалии илмӣ ва ассотсиатсияи пуштибони лоиҳа интихоб мегардад.",
            ],
        },
    },
    {
        id: "order-lenin-1980",
        displayYear: "1980",
        startYear: 1980,
        category: "government",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Awarded the Order of Lenin.",
            ru: "Награждается орденом Ленина.",
            tg: "Бо ордени Ленин сарфароз мегардад.",
        },
    },
    {
        id: "india-ibn-sina-1981",
        displayYear: "1981",
        startYear: 1981,
        category: "unesco",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Takes part in major Indo-Soviet scholarly meetings in Delhi and Bombay, including the millennium seminar on Ibn Sina and discussions on science and technology in India and Central Asia.",
            ru: "Участвует в крупных индо-советских научных встречах в Дели и Бомбее, включая семинар к тысячелетию Ибн Сино и обсуждения науки и техники Индии и Центральной Азии.",
            tg: "Дар ҳамоишҳои бузурги илмии ҳинду-шӯравӣ дар Деҳлӣ ва Бомбей, аз ҷумла семинари ҳазорасолаи Ибни Сино ва баҳсҳо оид ба илм ва техникаи Ҳиндустон ва Осиёи Марказӣ иштирок мекунад.",
        },
    },
    {
        id: "veteran-of-labor-1984",
        displayYear: "1984",
        startYear: 1984,
        category: "government",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Awarded the medal “Veteran of Labor” and confirmed as deputy of the Supreme Soviet of the USSR from the Garm constituency.",
            ru: "Награждается медалью «Ветеран труда» и утверждается депутатом Верховного Совета СССР от Гарминского округа.",
            tg: "Бо медали «Ветерани меҳнат» сарфароз шуда, вакили Шӯрои Олии ИҶШС аз ҳавзаи Ғарм тасдиқ мегардад.",
        },
    },
    {
        id: "international-committee-1985",
        displayYear: "1985",
        startYear: 1985,
        category: "unesco",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Works in Paris with the international editorial committee for the UNESCO history project and combines the year with lectures and scientific diplomacy in Italy, Canada, and India.",
            ru: "Работает в Париже с международным редакционным комитетом проекта истории ЮНЕСКО, совмещая этот год с лекциями и научной дипломатией в Италии, Канаде и Индии.",
            tg: "Дар Париж бо кумитаи байналмилалии таҳририяи лоиҳаи таърихии ЮНЕСКО кор карда, ҳамзамон солро бо лексияҳо ва дипломатияи илмӣ дар Италия, Канада ва Ҳиндустон идома медиҳад.",
        },
    },
    {
        id: "honorary-academician-afghanistan-1987",
        displayYear: "1987",
        startYear: 1987,
        category: "academia",
        major: false,
        foldGroup: "late-soviet",
        body: {
            en: "Elected Honorary Academician of the Academy of Sciences of the Democratic Republic of Afghanistan.",
            ru: "Избирается почетным академиком Академии наук Демократической Республики Афганистан.",
            tg: "Академики фахрии Академияи илмҳои Ҷумҳурии Демократии Афғонистон интихоб мешавад.",
        },
    },
    {
        id: "nehru-centenary-1989",
        displayYear: "1989",
        startYear: 1989,
        category: "unesco",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Travels to India for the centenary of Jawaharlal Nehru and presents a paper on cultural interconnections through the lens of Nehru’s thought.",
            ru: "Едет в Индию к столетию Джавахарлала Неру и выступает с докладом о взаимосвязях культур через призму взглядов Неру.",
            tg: "Ба муносибати садсолагии Ҷавоҳирлал Неру ба Ҳиндустон сафар карда, дар бораи робита ва таъсири мутақобили фарҳангҳо аз дидгоҳи Неру маърӯза мекунад.",
        },
        notes: {
            en: [
                "The same year he also takes part in the fourth session of the International Scientific Committee for the “History of Civilizations of Central Asia” in Paris.",
            ],
            ru: [
                "В том же году участвует в четвертой сессии Международного научного комитета по «Истории цивилизаций Центральной Азии» в Париже.",
            ],
            tg: [
                "Ҳамон сол дар иҷлосияи чоруми Кумитаи байналмилалии илмӣ оид ба «Таърихи тамаддунҳои Осиёи Марказӣ» дар Париж низ иштирок мекунад.",
            ],
        },
    },
    {
        id: "paivand-1989-1996",
        displayYear: "1989-1996",
        startYear: 1989,
        endYear: 1996,
        category: "government",
        major: true,
        body: {
            en: "Chairs “Paivand,” the society for scientific and cultural relations with compatriots abroad.",
            ru: "Возглавляет общество «Пайванд» по научным и культурным связям с соотечественниками за рубежом.",
            tg: "Ба ҷамъияти «Пайванд» оид ба робитаҳои илмӣ ва фарҳангӣ бо ҳамватанони бурунмарзӣ роҳбарӣ мекунад.",
        },
        notes: {
            en: [
                "The society took shape in 1989, and by a 1990 published interview Asimov already appears publicly as its chairman.",
            ],
            ru: [
                "Общество оформилось в 1989 году, а в опубликованном интервью 1990 года Асимов уже публично фигурирует как его председатель.",
            ],
            tg: [
                "Ҷамъият соли 1989 шакл гирифт ва дар мусоҳибаи чопшудаи соли 1990 Асимов аллакай ба таври ошкор ҳамчун раиси он зикр мешавад.",
            ],
        },
    },
    {
        id: "history-interview-1990",
        displayYear: "1990",
        startYear: 1990,
        category: "life",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Gives the widely noted interview “History Is Our Nurtured Heritage,” reflecting on freedom, memory, and Tajik national renewal.",
            ru: "Дает широко известное интервью «История - наш взращенный урожай», размышляя о свободе, памяти и таджикском национальном возрождении.",
            tg: "Мусоҳибаи маъруфи «Таърих - кишту ҳосили мост»-ро дода, дар бораи озодӣ, хотира ва эҳёи миллии тоҷикон андеша меронад.",
        },
    },
    {
        id: "avila-1990",
        displayYear: "1990",
        startYear: 1990,
        category: "unesco",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Joins the editorial board session for the “History of Civilizations of Central Asia” in Avila and in the same year speaks publicly in Dushanbe on Borbad, Aini, and national cultural memory.",
            ru: "Участвует в сессии редакционной коллегии «Истории цивилизаций Центральной Азии» в Авиле и в том же году выступает в Душанбе по темам Борбада, Айни и национальной культурной памяти.",
            tg: "Дар иҷлосияи ҳайати таҳририяи «Таърихи тамаддунҳои Осиёи Марказӣ» дар Авила иштирок карда, ҳамон сол дар Душанбе оид ба Борбад, Айнӣ ва хотираи миллии фарҳангӣ низ суханронӣ мекунад.",
        },
    },
    {
        id: "silk-road-1992",
        displayYear: "1992",
        startYear: 1992,
        category: "unesco",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Participates in the international consultative committee meeting for the Silk Roads project in Delhi.",
            ru: "Участвует в заседании международного консультативного комитета проекта «Шелковый путь» в Дели.",
            tg: "Дар ҷаласаи кумитаи машваратии байналмилалии лоиҳаи «Роҳи Абрешим» дар Деҳлӣ иштирок мекунад.",
        },
    },
    {
        id: "dushanbe-forums-1995",
        displayYear: "1995",
        startYear: 1995,
        category: "government",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Takes part in major conferences in Dushanbe on Tajikistan’s geopolitics and on Russia in the historical destinies of Central Asian peoples.",
            ru: "Участвует в крупных конференциях в Душанбе по геополитике Таджикистана и по роли России в исторических судьбах народов Центральной Азии.",
            tg: "Дар конфронсҳои муҳими Душанбе оид ба геополитикаи Тоҷикистон ва нақши Русия дар сарнавишти таърихии халқҳои Осиёи Марказӣ иштирок мекунад.",
        },
    },
    {
        id: "global-forums-1995",
        displayYear: "1995",
        startYear: 1995,
        category: "unesco",
        major: false,
        foldGroup: "final-years",
        body: {
            en: "Appears at international meetings in Islamabad, Tbilisi, and Copenhagen, keeping Central Asian scholarship present in late-career global forums.",
            ru: "Участвует в международных встречах в Исламабаде, Тбилиси и Копенгагене, сохраняя присутствие центральноазиатской науки на мировых форумах позднего периода.",
            tg: "Дар мулоқотҳои байналмилалӣ дар Исломобод, Тбилисӣ ва Копенгаген иштирок карда, ҳузури илми Осиёи Марказиро дар форумҳои ҷаҳонии солҳои охир нигоҳ медорад.",
        },
    },
    {
        id: "beijing-1995",
        displayYear: "1995",
        startYear: 1995,
        category: "unesco",
        major: true,
        body: {
            en: "At the fifth session of the International Scientific Committee in Beijing, he is again elected President of the Committee and President of the International Association for the Study of Cultures of Central Asia.",
            ru: "На пятой сессии Международного научного комитета в Пекине вновь избирается президентом Комитета и президентом Международной ассоциации по изучению культур Центральной Азии.",
            tg: "Дар ҷаласаи панҷуми Кумитаи байналмилалии илмӣ дар Пекин бори дигар президенти Кумита ва президенти Ассотсиатсияи байналмилалӣ оид ба омӯзиши фарҳангҳои Осиёи Марказӣ интихоб мешавад.",
        },
    },
    {
        id: "unesco-paris-1996",
        displayYear: "1996",
        startYear: 1996,
        category: "unesco",
        major: true,
        body: {
            en: "In Paris, joins UNESCO-related work on the “History of Civilizations of Central Asia” and speaks at the Sorbonne on the unity of the Persian-Tajik literary language.",
            ru: "В Париже участвует в работе, связанной с ЮНЕСКОвской «Историей цивилизаций Центральной Азии», и выступает в Сорбонне о единстве персидско-таджикского литературного языка.",
            tg: "Дар Париж дар кори вобаста ба «Таърихи тамаддунҳои Осиёи Марказӣ»-и ЮНЕСКО иштирок карда, дар Сорбонна дар бораи ягонагии забони адабии форсӣ-тоҷикӣ суханронӣ мекунад.",
        },
    },
    {
        id: "final-death-1996",
        displayYear: "1996",
        startYear: 1996,
        category: "life",
        major: true,
        body: {
            en: "Dies tragically in 1996, leaving behind a public, scholarly, and institutional legacy that shaped modern Tajik intellectual life.",
            ru: "Трагически уходит из жизни в 1996 году, оставив после себя общественное, научное и институциональное наследие, сформировавшее современную таджикскую интеллектуальную жизнь.",
            tg: "Соли 1996 ба таври фоҷиавӣ даргузашта, мероси ҷамъиятӣ, илмӣ ва муассисавие бар ҷой мегузорад, ки ҳаёти зеҳнии муосири тоҷикро шакл додааст.",
        },
    },
];

function formatCount(locale: Locale, count: number) {
    return `${count} ${timelinePageCopy[locale].countSuffix}`;
}

function formatFoldRange(entries: TimelineEntryView[]) {
    const first = entries[0];
    const last = entries[entries.length - 1];
    if (!first || !last) return "";
    if (first.displayYear === last.displayYear) return first.displayYear;
    return `${first.displayYear} - ${last.displayYear}`;
}

export function getTimelinePageCopy(locale: Locale) {
    return timelinePageCopy[locale];
}

export function getTimelineEntries(locale: Locale): TimelineEntryView[] {
    const copy = timelinePageCopy[locale];

    return timelineEntries.map((entry) => ({
        id: entry.id,
        displayYear: entry.displayYear,
        startYear: entry.startYear,
        endYear: entry.endYear,
        category: entry.category,
        categoryLabel: copy.categories[entry.category],
        body: entry.body[locale],
        notes: entry.notes?.[locale] ?? [],
        major: entry.major,
        foldGroup: entry.foldGroup,
    }));
}

export function getTimelineStream(locale: Locale): TimelineStreamItem[] {
    const copy = timelinePageCopy[locale];
    const entries = getTimelineEntries(locale);
    const stream: TimelineStreamItem[] = [];
    let foldBuffer: TimelineEntryView[] = [];
    let currentFoldGroup: string | undefined;

    const flushFold = () => {
        if (foldBuffer.length === 0) return;
        const first = foldBuffer[0];
        const last = foldBuffer[foldBuffer.length - 1];
        stream.push({
            type: "fold",
            fold: {
                id: `${currentFoldGroup ?? "fold"}-${first.id}-${last.id}`,
                label: `${copy.foldLabel} ${formatFoldRange(foldBuffer)} · ${formatCount(locale, foldBuffer.length)}`,
                entries: foldBuffer,
            },
        });
        foldBuffer = [];
        currentFoldGroup = undefined;
    };

    for (const entry of entries) {
        if (entry.major || !entry.foldGroup) {
            flushFold();
            stream.push({ type: "entry", entry });
            continue;
        }

        if (currentFoldGroup && currentFoldGroup !== entry.foldGroup) {
            flushFold();
        }

        currentFoldGroup = entry.foldGroup;
        foldBuffer.push(entry);
    }

    flushFold();
    return stream;
}
