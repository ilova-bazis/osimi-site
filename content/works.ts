import type { Locale } from '@/lib/i18n/locales'

type WorksTheme = {
  title: string
  body: string
}

type WorksEntry = {
  title: string
  year: string
  note: string
}

type WorksExcerptEntry = {
  title: string
  source: string
  note: string
  href: string
  linkLabel: string
}

type RelatedBookEntry = {
  title: string
  type: string
  note: string
}

export type WorksPageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
    quote: string
    attribution: string
  }
  themes: {
    label: string
    title: string
    intro: string
    items: WorksTheme[]
  }
  selected: {
    label: string
    title: string
    intro: string
    items: WorksEntry[]
  }
  publicExcerpts: {
    label: string
    title: string
    intro: string
    items: WorksExcerptEntry[]
  }
  relatedBooks: {
    label: string
    title: string
    intro: string
    items: RelatedBookEntry[]
  }
  roadmap: {
    label: string
    title: string
    paragraphs: string[]
    bullets: string[]
  }
  relatedLinks: {
    title: string
    items: Array<{ href: string; label: string; description: string }>
  }
}

const worksContent: Record<Locale, WorksPageContent> = {
  en: {
    metadata: {
      title: 'Works & Ideas - Muhammad Osimi',
      description:
        'A curated introduction to Muhammad Osimi’s books, essays, editorial projects, UNESCO publications, and intellectual fields.',
    },
    hero: {
      label: 'Works & Ideas',
      title: 'Works and Intellectual Legacy',
      subtitle: 'Books, essays, editorial projects, and international scholarship',
      intro:
        'Muhammad Osimi’s intellectual legacy cannot be reduced to a short list of philosophy titles. He was at once an author, co-author, editor, encyclopedia organizer, translator, and international scholarly figure whose work moved between physics, philosophy, civilizational history, classical literature, language, and public knowledge. This page offers a first curated map of that legacy.',
      quote:
        'The chief weapon of a person - and especially of a scholar - is deep, comprehensive knowledge of the problem and impeccable logic.',
      attribution: 'Muhammad Osimi',
    },
    themes: {
      label: 'Fields',
      title: 'The Main Areas of His Work',
      intro:
        'Osimi wrote and edited across several recurring fields. Together they show a figure who treated science, philosophy, language, and civilizational memory as interconnected rather than separate pursuits.',
      items: [
        {
          title: 'Philosophy of Science',
          body: 'Works on matter, physical reality, scientific knowledge, and the conceptual foundations of modern science.',
        },
        {
          title: 'History of Thought',
          body: 'Studies of philosophical development, intellectual history, and the transmission of ideas across periods and traditions.',
        },
        {
          title: 'Central Asian Civilization',
          body: 'Research on the region’s scientific, historical, and civilizational legacy, including Kushan, Bactrian, and UNESCO-linked scholarship.',
        },
        {
          title: 'Classical Thinkers and Literary Heritage',
          body: 'Interpretive and editorial work on Ibn Sina, Biruni, Jami, Hafiz, Amir Khusraw, Ahmad Donish, Sadriddin Aini, and other major figures of the Persian-Tajik tradition.',
        },
        {
          title: 'Encyclopedias, Dictionaries, and Public Knowledge',
          body: 'Large-scale editorial work that organized knowledge for broad public use, from philosophical dictionaries to national encyclopedias.',
        },
        {
          title: 'Translation and Educational Publishing',
          body: 'Russian-to-Tajik translations, school and university texts, and terminology-building work that helped shape modern scientific language in Tajik.',
        },
      ],
    },
    selected: {
      label: 'Authored Works',
      title: 'A First Curated Selection',
      intro:
        'These titles present Osimi first as an author and co-author. They range from dissertations and philosophy monographs to compact cultural studies and literary-historical works.',
      items: [
        {
          title: 'Space and Time as the Basic Forms of Being of Matter',
          year: '1955',
          note: 'His candidate dissertation in philosophy, marking the decisive shift from physics toward philosophy.',
        },
        {
          title: 'Our First University: Moscow State University named after M.V. Lomonosov',
          year: '1961',
          note: 'A public-intellectual reflection on education and institutional formation rather than a narrowly philosophical work.',
        },
        {
          title: 'Matter and the Physical Picture of the World',
          year: '1966',
          note: 'A foundational philosophy-of-science monograph linking modern physical knowledge with larger ontological questions.',
        },
        {
          title: 'Russian-Tajik Terminological Dictionary of Philosophy',
          year: '1966',
          note: 'An important dictionary project showing Osimi’s role in building philosophical vocabulary in Tajik.',
        },
        {
          title: 'Science of Central Asia in the Kushan Era and the Ways of Its Study',
          year: '1968',
          note: 'A compact study tied to the major Kushan conference and to Osimi’s work on Central Asia as a civilizational field.',
        },
        {
          title: 'The Formation of Philosophical Thinking',
          year: '1970',
          note: 'One of his central works on the history of thought and philosophical development, later also issued in a Dari-language edition.',
        },
        {
          title: 'The Concept of Matter and the Problem of Physical Reality',
          year: '1970',
          note: 'His doctoral work in philosophy, bringing together scientific and philosophical trajectories.',
        },
        {
          title: 'Dialectical Materialism',
          year: '1974',
          note: 'A university-level teaching text, co-authored with M. Boltaev, reflecting Osimi’s role in philosophical instruction.',
        },
        {
          title: 'Amir Khusraw Dehlavi',
          year: '1976',
          note: 'A compact literary-historical book, co-authored with A. Mirzoev, that reflects his commitment to classical Persianate heritage.',
        },
        {
          title: 'Spiritual Culture of the New Human Being',
          year: '1977',
          note: 'An important bridge between philosophy, ethics, culture, and public life.',
        },
        {
          title: 'Research on the Ethnic History of Ancient Central Asia in Soviet Scholarship',
          year: '1977',
          note: 'A compact historiographical study of ancient Central Asia, with an English version also listed in the bibliography.',
        },
        {
          title: 'Sadriddin Aini: 100 Years Since Birth',
          year: '1978',
          note: 'A concise literary-historical study, co-authored with I. Braginsky, on one of the defining modern figures of Tajik culture.',
        },
      ],
    },
    publicExcerpts: {
      label: 'Public Excerpts',
      title: 'Read Selected Texts',
      intro:
        'These are the first public-facing reading excerpts currently available on the site: cleaned selections from readable source witnesses, presented as excerpts rather than full publication files.',
      items: [
        {
          title: 'Алгебра и гармония',
          source: '«Дружба народов», № 4, 1974',
          note:
            'A curated excerpt from Osimi on science, emotion, cognition, imagination, and art.',
          href: '/works/osimi/algebra-and-harmony-1974-excerpt.txt',
          linkLabel: 'Read excerpt',
        },
        {
          title: 'Материя ва ҳаракат',
          source: '«Ҳақиқати Ленинобод», 31 December 1955, № 258',
          note:
            'An early philosophical excerpt on matter, motion, objective reality, and time and space.',
          href: '/works/osimi/matter-and-motion-1955-excerpt.txt',
          linkLabel: 'Read excerpt',
        },
      ],
    },
    relatedBooks: {
      label: 'Editorial Projects',
      title: 'Encyclopedias, Editions, and Collective Works',
      intro:
        'Osimi’s legacy also rests on large editorial and reference projects. These works show him not only as an author, but as an organizer of intellectual inheritance and public knowledge on a republic-wide and international scale.',
      items: [
        {
          title: 'Tajik Soviet Encyclopedia',
          type: 'Chief scientific editor · 1978-1988',
          note: 'An eight-volume republic-scale encyclopedia and one of the central public knowledge projects associated with Osimi.',
        },
        {
          title: 'Tajik SSR',
          type: 'One-volume encyclopedia · 1974, 1984',
          note: 'A compact reference work presenting the history, culture, science, and public life of Tajikistan in encyclopedic form.',
        },
        {
          title: 'Encyclopedia of Tajik Literature and Art',
          type: 'Reference project · vols. 1-2 listed for 1988-1989',
          note: 'A major literary and artistic encyclopedia extending his editorial work into the field of cultural heritage.',
        },
        {
          title: 'Abu Ali Ibn Sina. Selected Works',
          type: 'Edited multi-volume project · 1980-1985',
          note: 'A large publication project making key Ibn Sina texts available to modern readers in edited form.',
        },
        {
          title: 'Ibn Sina. Canon of Medicine',
          type: 'Edited classical text · 1989',
          note: 'An important classical publication linking Osimi’s scholarship to civilizational and textual preservation work.',
        },
        {
          title: 'Aini. Collected Works',
          type: 'Edited collected works · listed volumes 1969, 1976, 1977, 1981',
          note: 'Part of Osimi’s long-term effort to curate and stabilize modern Tajik literary heritage in published form.',
        },
        {
          title: 'Gulshani Adab',
          type: 'Anthology / edited literary series · 1975-1980',
          note: 'A multi-volume literary project central to public literary culture in Tajikistan.',
        },
        {
          title: 'Amir Khusraw. Selected Works',
          type: 'Edited collected works · 1971-1975',
          note: 'A four-volume project showing Osimi’s commitment to classical Persianate literary publication.',
        },
      ],
    },
    roadmap: {
      label: 'Further Map',
      title: 'International Work, Translation, and the Next Layer of the Page',
      paragraphs: [
        'A complete account of Osimi’s intellectual legacy also has to include his UNESCO publication work, his role in international editorial bodies, and his early translation and educational publishing. These are not side notes: they show how he moved from writing books of his own to shaping the scholarly and linguistic infrastructure around him.',
        'In the next development stage, this page should grow into a fuller catalog with original-language titles, translated titles, publication places, roles such as author or editor, and a carefully chosen set of article clusters rather than an overwhelming flat bibliography.',
      ],
      bullets: [
        'UNESCO: History of Civilizations of Central Asia and History of Humanity',
        'Foreign-language publications and international editorial work',
        'Russian-to-Tajik translations, school texts, and scientific terminology',
        'Article clusters on Ibn Sina, Biruni, philosophy of science, and Tajik cultural life',
        'A later dedicated subsection for books written about Osimi',
      ],
    },
    relatedLinks: {
      title: 'Continue Exploring',
      items: [
        {
          href: '/biography',
          label: 'Biography',
          description: 'See how these works fit into the wider arc of his life.',
        },
        {
          href: '/timeline',
          label: 'Timeline',
          description: 'Track the dates, institutions, and public milestones around these publications.',
        },
        {
          href: '/archive',
          label: 'Archive',
          description: 'Follow the broader path toward documents, editions, and source materials.',
        },
      ],
    },
  },
  tg: {
    metadata: {
      title: 'Осор ва андешаҳо - Муҳаммад Осимӣ',
      description:
        'Муаррифии мураттаб аз китобҳо, мақолаҳо, корҳои таҳрирӣ ва саҳмҳои байналмилалии Муҳаммад Осимӣ.',
    },
    hero: {
      label: 'Осор ва андешаҳо',
      title: 'Осор ва мероси зеҳнӣ',
      subtitle: 'Китобҳо, мақолаҳо, лоиҳаҳои таҳрирӣ ва илмияти байналмилалӣ',
      intro:
        'Мероси фикрии Муҳаммад Осимӣ танҳо ба чанд асари фалсафӣ маҳдуд намешавад. Ӯ ҳамзамон муаллиф, ҳаммуаллиф, муҳаррир, ташкилкунандаи энсиклопедия, тарҷумон ва шахсияти илмии байналмилалӣ буд, ки кораш аз физика ва фалсафа то таърихи тамаддун, мероси адабӣ, забон ва дониши ҷамъиятӣ тӯл мекашид. Ин саҳифа нахустин харитаи мураттаби он мерос аст.',
      quote:
        'Аслиҳаи асосии инсон ва махсусан олим донишҳои амиқу фарогири масъала ва мантиқи беайб аст.',
      attribution: 'Муҳаммад Осимӣ',
    },
    themes: {
      label: 'Самтҳо',
      title: 'Соҳаҳои асосии кори ӯ',
      intro:
        'Осими дар чанд майдони такрорёбандаи фикрӣ менавишт ва таҳрир мекард. Ин самтҳо нишон медиҳанд, ки барои ӯ илм, фалсафа, забон ва хотираи тамаддунӣ аз ҳам ҷудо набуданд.',
      items: [
        {
          title: 'Фалсафаи илм',
          body: 'Осор дар бораи материя, воқеияти физикӣ, донишҳои илмӣ ва пояҳои мафҳумии илми муосир.',
        },
        {
          title: 'Таърихи тафаккур',
          body: 'Пажӯҳишҳо дар бораи рушди андешаи фалсафӣ, таърихи зеҳнӣ ва интиқоли ғояҳо миёни давраҳо ва анъанаҳо.',
        },
        {
          title: 'Тамаддуни Осиёи Марказӣ',
          body: 'Таҳқиқ дар бораи мероси илмӣ, таърихӣ ва тамаддунии минтақа, аз ҷумла пажӯҳишҳои кушонӣ, бохтарӣ ва корҳои вобаста ба ЮНЕСКО.',
        },
        {
          title: 'Мутафаккирон ва мероси адабӣ',
          body: 'Осор ва корҳои таҳрирӣ оид ба Ибни Сино, Берунӣ, Ҷомӣ, Ҳофиз, Амир Хусрав, Аҳмади Дониш, Садриддин Айнӣ ва дигар чеҳраҳои бузурги анъанаи форсӣ-тоҷикӣ.',
        },
        {
          title: 'Энсиклопедия, луғат ва дониши ҷамъиятӣ',
          body: 'Лоиҳаҳои калони таҳрирӣ, ки донишро барои истифодаи васеи ҷамъиятӣ танзим ва дастрас мекарданд.',
        },
        {
          title: 'Тарҷума ва нашриёти таълимӣ',
          body: 'Тарҷумаҳо аз русӣ ба тоҷикӣ, китобҳои дарсӣ ва кори истилоҳсозӣ, ки забони илмии муосири тоҷикро ғанӣ карданд.',
        },
      ],
    },
    selected: {
      label: 'Осори муаллифӣ',
      title: 'Нахустин интихоби мураттаб',
      intro:
        'Ин бахш Осимиро пеш аз ҳама ҳамчун муаллиф ва ҳаммуаллиф нишон медиҳад. Дар ин ҷо аз рисолаҳои илмӣ ва асарҳои фалсафӣ то китобчаҳои таърихӣ ва адабӣ гирд оварда шудаанд.',
      items: [
        {
          title: 'Пространство и время как основные формы бытия материи',
          year: '1955',
          note: 'Рисолаи номзадии ӯ дар фалсафа, ки гузариши қатъиро аз физика ба фалсафа нишон медиҳад.',
        },
        {
          title: 'Дорулфунуни нахустини мо',
          year: '1961',
          note: 'Матни фикрии ҷамъиятӣ дар бораи маориф ва сохтмони муассисаҳо, на танҳо асари маҳдуди фалсафӣ.',
        },
        {
          title: 'Материя ва тасвири физикии олам',
          year: '1966',
          note: 'Яке аз осори бунёдии ӯ дар фалсафаи илм, ки донишҳои физикиро бо масъалаҳои ҳастишиносӣ мепайвандад.',
        },
        {
          title: 'Луғати русӣ-тоҷикии терминологияи фалсафа',
          year: '1966',
          note: 'Лоиҳаи муҳими луғатнигорӣ, ки нақши Осимиро дар бунёди забони фалсафии тоҷикӣ нишон медиҳад.',
        },
        {
          title: 'Наука Средней Азии кушанской эпохи и пути её изучения',
          year: '1968',
          note: 'Тадқиқоти мухтасаре, ки бо конфронси бузурги кушонӣ ва рӯйкарди ӯ ба Осиёи Марказӣ ҳамчун фазои тамаддунӣ пайванд дорад.',
        },
        {
          title: 'Пайдоиш ва ташаккули тафаккури фалсафӣ',
          year: '1970',
          note: 'Яке аз осори марказии ӯ дар бораи таърихи андеша ва рушди тафаккури фалсафӣ.',
        },
        {
          title: 'Понятие материи и проблема физической реальности',
          year: '1970',
          note: 'Асари докторӣ дар фалсафа, ки роҳи илмӣ ва фалсафии ӯро ба ҳам меорад.',
        },
        {
          title: 'Материализми диалектикӣ',
          year: '1974',
          note: 'Китоби таълимии донишгоҳӣ, ки нақши Осимиро дар таълими фалсафа низ нишон медиҳад.',
        },
        {
          title: 'Амир Хусрави Деҳлавӣ',
          year: '1976',
          note: 'Китоби адабию таърихии мухтасар, ки ба мероси классикии форсизабон таваҷҷуҳи ӯро инъикос мекунад.',
        },
        {
          title: 'Духовная культура нового человека',
          year: '1977',
          note: 'Осоре, ки миёни фалсафа, ахлоқ, фарҳанг ва ҳаёти ҷамъиятӣ пул мезанад.',
        },
        {
          title: 'Исследование этнической истории древней Центральной Азии в Советской науке',
          year: '1977',
          note: 'Тадқиқоти мухтасар дар бораи таърихи омӯзиши Осиёи Марказии бостон, ки шакли англисӣ низ доштааст.',
        },
        {
          title: 'Садриддин Айни: 100 лет со дня рождения',
          year: '1978',
          note: 'Китоби мухтасари адабию таърихӣ, ки бо И. Брагинский ҳаммуаллифона навишта шудааст.',
        },
      ],
    },
    publicExcerpts: {
      label: 'Иқтибосҳои оммавӣ',
      title: 'Матнҳои интихобшударо бихонед',
      intro:
        'Инҳо аввалин иқтибосҳои оммавии хонданӣ дар сомонаанд: бахшҳои поккоришуда аз матнҳои қобили хондан, ки ҳамчун иқтибос пешниҳод мешаванд, на ҳамчун нашрҳои комили таҳриршуда.',
      items: [
        {
          title: 'Алгебра и гармония',
          source: '«Дружба народов», № 4, 1974',
          note:
            'Иқтибоси мураттаб аз мулоҳизаҳои Осимӣ дар бораи илм, эҳсос, маърифат, хаёл ва санъат.',
          href: '/works/osimi/algebra-and-harmony-1974-excerpt.txt',
          linkLabel: 'Хондани иқтибос',
        },
        {
          title: 'Материя ва ҳаракат',
          source: '«Ҳақиқати Ленинобод», 31 декабри 1955, № 258',
          note:
            'Иқтибоси фалсафии барвақтӣ дар бораи материя, ҳаракат, воқеияти объективӣ ва замону макон.',
          href: '/works/osimi/matter-and-motion-1955-excerpt.txt',
          linkLabel: 'Хондани иқтибос',
        },
      ],
    },
    relatedBooks: {
      label: 'Лоиҳаҳои таҳрирӣ',
      title: 'Энсиклопедияҳо, нашрҳо ва осори дастаҷамъӣ',
      intro:
        'Мероси Осимӣ танҳо дар осори муаллифии ӯ нест. Ин бахш кори ӯро ҳамчун муҳаррир, ташкилкунандаи дониши ҷамъиятӣ ва посбони мероси зеҳнӣ нишон медиҳад.',
      items: [
        {
          title: 'Энсиклопедияи Советии Тоҷик',
          type: 'Сармуҳаррири илмӣ · 1978-1988',
          note: 'Энсиклопедияи ҳаштҷилдаи ҷумҳуриявӣ ва яке аз муҳимтарин лоиҳаҳои дониши ҷамъиятӣ, ки бо номи Осимӣ пайвастааст.',
        },
        {
          title: 'Таджикская Советская Социалистическая Республика',
          type: 'Энсиклопедияи якҷилда · 1974, 1984',
          note: 'Маълумотномаи фишурдае, ки таърих, фарҳанг, илм ва ҳаёти ҷамъиятии Тоҷикистонро дар шакли энсиклопедӣ пешниҳод мекунад.',
        },
        {
          title: 'Энсиклопедияи адабиёт ва санъати тоҷик',
          type: 'Лоиҳаи маълумотномавӣ · ҷилдҳои 1-2 барои солҳои 1988-1989',
          note: 'Лоиҳаи муҳими энсиклопедӣ, ки кори таҳририи ӯро ба майдони адаб ва санъат низ густариш дод.',
        },
        {
          title: 'Абуали ибн Сино. Осори мунтахаб',
          type: 'Лоиҳаи таҳририи чандҷилда · 1980-1985',
          note: 'Нашри муҳими чандҷилдае, ки барои дастрас кардани мероси Ибни Сино ба хонандаи муосир саҳми калон гузошт.',
        },
        {
          title: 'Абуали ибни Сино. Қонуни тиб',
          type: 'Матни классикии таҳриршуда · 1989',
          note: 'Нашри муҳимме, ки кори илмии Осимиро бо ҳифзу интишори мероси классикӣ мепайвандад.',
        },
        {
          title: 'Айни С. Куллиёт',
          type: 'Осори мунтахаби таҳриршуда · ҷилдҳои зикршуда 1969, 1976, 1977, 1981',
          note: 'Қисме аз талоши дарозмуддати ӯ барои ба нашри устувор расондани мероси адабии муосири тоҷик.',
        },
        {
          title: 'Гулшани адаб',
          type: 'Антология / силсилаи адабӣ · 1975-1980',
          note: 'Лоиҳаи бисёрҷилдаи адабӣ, ки барои фарҳанги хондан ва мероси адабӣ аҳамияти калон дошт.',
        },
        {
          title: 'Дехлави Амир Хусрав. Осори мунтахаб',
          type: 'Нашри осори мунтахаб · 1971-1975',
          note: 'Лоиҳаи чорҷилдае, ки таваҷҷуҳи Осимиро ба адабиёти классикии форсизабон равшан месозад.',
        },
      ],
    },
    roadmap: {
      label: 'Қабати баъдӣ',
      title: 'Кори байналмилалӣ, тарҷума ва марҳилаи навбатии саҳифа',
      paragraphs: [
        'Тасвири пурраи мероси зеҳнии Осимӣ бояд фаъолияти ӯро дар нашрияҳои ЮНЕСКО, саҳмашро дар ҳайатҳои байналмилалии таҳрирӣ ва кори аввалини ӯро дар тарҷума ва нашриёти таълимӣ низ дар бар гирад. Инҳо ҷузъиёти канорӣ нестанд, балки нишон медиҳанд, ки ӯ аз навиштани китобҳои худӣ то бунёди зерсохтори илмӣ ва забонӣ роҳ паймудааст.',
        'Дар марҳилаи баъдӣ ин саҳифа метавонад ба феҳристи муфассалтаре табдил ёбад, ки унвонҳои аслӣ, тарҷумаҳо, ҷойҳои нашр, нақшҳои муаллифӣ ё таҳрирӣ ва гурӯҳҳои мақолавиро ба таври мураттаб пешкаш кунад.',
      ],
      bullets: [
        'ЮНЕСКО: History of Civilizations of Central Asia ва History of Humanity',
        'Нашрияҳои хориҷизабон ва корҳои байналмилалии таҳрирӣ',
        'Тарҷумаҳо аз русӣ ба тоҷикӣ, китобҳои дарсӣ ва истилоҳсозӣ',
        'Гурӯҳҳои мақолавӣ оид ба Ибни Сино, Берунӣ, фалсафаи илм ва фарҳанги тоҷик',
        'Бахши ҷудогона барои китобҳои навишташуда дар бораи худи Осимӣ',
      ],
    },
    relatedLinks: {
      title: 'Идома диҳед',
      items: [
        {
          href: '/biography',
          label: 'Зиндагинома',
          description: 'Бубинед, ки ин осор дар камони васеътари зиндагии ӯ чӣ ҷой доранд.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Санаҳо, муассисаҳо ва марҳилаҳои ҷамъиятии марбут ба ин нашрияҳоро пайгирӣ кунед.',
        },
        {
          href: '/archive',
          label: 'Бойгонӣ',
          description: 'Ба роҳи васеътари санадҳо, нашрҳо ва маводи манбаъ назар кунед.',
        },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Труды и идеи - Мухаммад Осими',
      description:
        'Упорядоченное введение в книги, статьи, редакторские проекты и международные публикации Мухаммада Осими.',
    },
    hero: {
      label: 'Труды и идеи',
      title: 'Труды и интеллектуальное наследие',
      subtitle: 'Книги, статьи, редакторские проекты и международная наука',
      intro:
        'Интеллектуальное наследие Мухаммада Осими нельзя свести к нескольким философским названиям. Он был одновременно автором, соавтором, редактором, организатором энциклопедий, переводчиком и международным учёным, чья работа двигалась от физики и философии к истории цивилизаций, классическому наследию, языку и публичному знанию. Эта страница предлагает первую упорядоченную карту этого наследия.',
      quote:
        'Главное оружие человека, и особенно учёного, - глубокое всестороннее знание проблемы и безукоризненная логика.',
      attribution: 'Мухаммад Осими',
    },
    themes: {
      label: 'Направления',
      title: 'Главные области его работы',
      intro:
        'Осими писал и редактировал в нескольких устойчивых интеллектуальных полях. Вместе они показывают фигуру, для которой наука, философия, язык и память о цивилизации были связаны между собой.',
      items: [
        {
          title: 'Философия науки',
          body: 'Работы о материи, физической реальности, научном знании и понятийных основаниях современной науки.',
        },
        {
          title: 'История мысли',
          body: 'Исследования философского развития, интеллектуальной истории и движения идей между эпохами и традициями.',
        },
        {
          title: 'Цивилизация Центральной Азии',
          body: 'Исследования научного, исторического и цивилизационного наследия региона, включая кушанскую, бактрийскую и более широкую ЮНЕСКОвскую тематику.',
        },
        {
          title: 'Классические мыслители и литературное наследие',
          body: 'Интерпретация и редакторская работа по Ибн Сино, Бируни, Джами, Хафизу, Амиру Хусраву, Ахмаду Донишу, Садриддину Айни и другим крупным фигурам персидско-таджикской традиции.',
        },
        {
          title: 'Энциклопедии, словари и общественное знание',
          body: 'Крупные редакторские проекты, организующие знание для широкого общественного пользования - от философских словарей до национальных энциклопедий.',
        },
        {
          title: 'Перевод и учебное издательство',
          body: 'Переводы с русского на таджикский, школьные и вузовские тексты, а также работа по формированию современного научного языка.',
        },
      ],
    },
    selected: {
      label: 'Авторские труды',
      title: 'Первый упорядоченный выбор',
      intro:
        'Этот раздел показывает Осими прежде всего как автора и соавтора. Здесь собраны диссертации, философские книги, историко-культурные исследования и литературно-интерпретационные работы.',
      items: [
        {
          title: 'Пространство и время как основные формы бытия материи',
          year: '1955',
          note: 'Его кандидатская диссертация по философии, обозначившая решающий переход от физики к философии.',
        },
        {
          title: 'Наш первый университет',
          year: '1961',
          note: 'Публицистически окрашенная работа об образовании и институциональном становлении, а не только узкофилософский текст.',
        },
        {
          title: 'Материя и физическая картина мира',
          year: '1966',
          note: 'Одна из его ключевых книг по философии науки, связывающая физическое знание с более широкими онтологическими вопросами.',
        },
        {
          title: 'Русско-таджикский терминологический словарь философии',
          year: '1966',
          note: 'Важный словарный проект, показывающий роль Осими в строительстве философского языка на таджикской почве.',
        },
        {
          title: 'Наука Средней Азии кушанской эпохи и пути её изучения',
          year: '1968',
          note: 'Небольшое, но значимое исследование, связанное с крупной кушанской конференцией и его взглядом на Центральную Азию как цивилизационное пространство.',
        },
        {
          title: 'Пайдоиш ва ташаккули тафаккури фалсафӣ',
          year: '1970',
          note: 'Одна из центральных работ Осими по истории мысли и развитию философского мышления.',
        },
        {
          title: 'Понятие материи и проблема физической реальности',
          year: '1970',
          note: 'Докторская работа, в которой соединяются его научная и философская траектории.',
        },
        {
          title: 'Материализми диалектикӣ',
          year: '1974',
          note: 'Университетский учебный текст, показывающий Осими как исследователя и преподавателя философии.',
        },
        {
          title: 'Амир Хусрави Деҳлавӣ',
          year: '1976',
          note: 'Литературно-историческая книга, отражающая его постоянный интерес к классическому персоязычному наследию.',
        },
        {
          title: 'Духовная культура нового человека',
          year: '1977',
          note: 'Работа на пересечении философии, этики, культуры и общественной жизни.',
        },
        {
          title: 'Исследование этнической истории древней Центральной Азии в советской науке',
          year: '1977',
          note: 'Компактная историографическая работа по древней Центральной Азии, имевшая также английскую версию.',
        },
        {
          title: 'Садриддин Айни: 100 лет со дня рождения',
          year: '1978',
          note: 'Краткое, но важное литературно-историческое исследование, написанное в соавторстве с И. Брагинским.',
        },
      ],
    },
    publicExcerpts: {
      label: 'Публичные отрывки',
      title: 'Читать избранные тексты',
      intro:
        'Это первые публичные тексты для чтения, уже доступные на сайте: очищенные подборки из читаемых текстовых источников, представленные именно как отрывки, а не как полные подготовленные издания.',
      items: [
        {
          title: 'Алгебра и гармония',
          source: '«Дружба народов», № 4, 1974',
          note:
            'Кураторский отрывок о науке, эмоции, познании, воображении и искусстве.',
          href: '/works/osimi/algebra-and-harmony-1974-excerpt.txt',
          linkLabel: 'Читать отрывок',
        },
        {
          title: 'Материя ва ҳаракат',
          source: '«Ҳақиқати Ленинобод», 31 декабря 1955, № 258',
          note:
            'Ранний философский отрывок о материи, движении, объективной реальности и времени и пространстве.',
          href: '/works/osimi/matter-and-motion-1955-excerpt.txt',
          linkLabel: 'Читать отрывок',
        },
      ],
    },
    relatedBooks: {
      label: 'Редакторские проекты',
      title: 'Энциклопедии, издания и коллективные труды',
      intro:
        'Наследие Осими живёт не только в авторских книгах. Этот раздел показывает его как редактора, организатора общественного знания и хранителя интеллектуального наследия.',
      items: [
        {
          title: 'Таджикская советская энциклопедия',
          type: 'Главный научный редактор · 1978-1988',
          note: 'Восьмитомная республиканская энциклопедия и один из важнейших проектов общественного знания, связанных с именем Осими.',
        },
        {
          title: 'Таджикская Советская Социалистическая Республика',
          type: 'Однотомная энциклопедия · 1974, 1984',
          note: 'Сжатое справочное издание, представляющее историю, культуру, науку и общественную жизнь Таджикистана в энциклопедической форме.',
        },
        {
          title: 'Энциклопедия таджикской литературы и искусства',
          type: 'Справочный проект · тома 1-2 за 1988-1989 годы',
          note: 'Крупная энциклопедическая работа, распространившая его редакторскую деятельность на сферу литературы и искусства.',
        },
        {
          title: 'Абуали ибн Сино. Осори мунтахаб',
          type: 'Многотомный редакторский проект · 1980-1985',
          note: 'Крупный проект публикации текстов Ибн Сино, сделавший их доступнее современному читателю.',
        },
        {
          title: 'Абуали ибни Сино. Қонуни тиб',
          type: 'Отредактированный классический текст · 1989',
          note: 'Важное издание, связывающее научную работу Осими с сохранением и публикацией классического наследия.',
        },
        {
          title: 'Айни С. Куллиёт',
          type: 'Избранные редактированные тома · 1969, 1976, 1977, 1981',
          note: 'Часть долгосрочной работы по стабилизации и публикации современного таджикского литературного наследия.',
        },
        {
          title: 'Гулшани адаб',
          type: 'Антология / литературная серия · 1975-1980',
          note: 'Многотомный литературный проект, важный для читательской культуры и обращения к наследию.',
        },
        {
          title: 'Дехлави Амир Хусрав. Осори мунтахаб',
          type: 'Избранные произведения · 1971-1975',
          note: 'Четырёхтомный проект, показывающий постоянный интерес Осими к классической персоязычной литературе.',
        },
      ],
    },
    roadmap: {
      label: 'Следующий слой',
      title: 'Международная работа, переводы и следующая стадия страницы',
      paragraphs: [
        'Полный облик интеллектуального наследия Осими требует включения его ЮНЕСКОвских публикаций, участия в международных редакционных структурах и его ранней переводческой и учебно-издательской работы. Это не побочные детали, а свидетельства того, как он перешёл от собственных книг к созданию научной и языковой инфраструктуры вокруг себя.',
        'На следующем этапе эта страница может вырасти в более детальный каталог с оригинальными названиями, переводами, местами издания, авторскими и редакторскими ролями и тематическими кластерами статей вместо перегруженной плоской библиографии.',
      ],
      bullets: [
        'ЮНЕСКО: History of Civilizations of Central Asia и History of Humanity',
        'Иностранные публикации и международная редакторская работа',
        'Переводы с русского на таджикский, учебные книги и терминология',
        'Тематические группы статей об Ибн Сино, Бируни, философии науки и таджикской культуре',
        'Отдельный подраздел для книг, написанных об Осими',
      ],
    },
    relatedLinks: {
      title: 'Продолжить исследование',
      items: [
        {
          href: '/biography',
          label: 'Биография',
          description: 'Посмотрите, как эти труды вписываются в более широкую историю его жизни.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Проследите даты, институции и общественные вехи, связанные с этими публикациями.',
        },
        {
          href: '/archive',
          label: 'Архив',
          description: 'Следите за более широким путём к документам, изданиям и исходным материалам.',
        },
      ],
    },
  },
}

export function getWorksContent(locale: Locale) {
  return worksContent[locale]
}
