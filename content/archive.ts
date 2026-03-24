import type { Locale } from '@/lib/i18n/locales'

export type ArchivePageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
    panelLabel: string
    panelText: string
  }
  mission: {
    label: string
    title: string
    paragraphs: string[]
  }
  materials: {
    label: string
    title: string
    intro: string
    items: Array<{ title: string; body: string }>
  }
  collections: {
    label: string
    title: string
    intro: string
    items: Array<{
      variant: 'documents' | 'gallery'
      title: string
      kind: string
      status: string
      countLabel: string
      description: string
      sampleItems: string[]
      previewDocument?: { src: string; alt: string; caption: string }
      previewImages?: Array<{ src: string; alt: string; caption: string }>
      documentRecords?: Array<{ title: string; meta: string; status: string }>
      href?: string
      ctaLabel?: string
    }>
  }
  importance: {
    label: string
    title: string
    paragraphs: string[]
  }
  future: {
    label: string
    title: string
    body: string
    items: string[]
  }
}

const archiveContent: Record<Locale, ArchivePageContent> = {
  en: {
    metadata: {
      title: 'Archive - Muhammad Osimi',
      description:
        'A public-facing archive landing page introducing the preservation of Muhammad Osimi’s life, writings, photographs, publications, and cultural memory.',
    },
    hero: {
      label: 'Archive',
      title: 'The Living Archive',
      subtitle: 'A public record of memory, scholarship, documents, and enduring cultural significance',
      intro:
        'This archive is being shaped as a quiet public home for the preservation of Muhammad Osimi’s life and legacy. Its purpose is not only to gather materials, but to make them legible, trustworthy, and meaningful for future readers, researchers, students, and the wider public.',
      panelLabel: 'Public Preservation',
      panelText:
        'Documents, photographs, publications, film materials, institutional memory, and contextual notes will be gathered here over time.',
    },
    mission: {
      label: 'Mission',
      title: 'Preservation With Context',
      paragraphs: [
        'The archive is conceived as a long-term preservation effort around a life that belongs to intellectual history, public memory, and the cultural record of Tajikistan and Central Asia. It seeks to hold together not only documents, but the relationships between biography, scholarship, institutions, and remembrance.',
        'Rather than presenting technical archive workflows on the public site, this page introduces the archive as a careful editorial and preservation project: one that values provenance, language, chronology, and contextual understanding.',
      ],
    },
    materials: {
      label: 'Materials',
      title: 'What the Archive Will Preserve',
      intro:
        'The archive will gradually assemble different kinds of materials, each carrying a different part of Osimi’s public and intellectual legacy.',
      items: [
        {
          title: 'Photographs',
          body: 'Portraits, institutional images, family photographs, public appearances, and visual records of commemorative events.',
        },
        {
          title: 'Documents & Papers',
          body: 'Letters, speeches, working papers, biographical records, and documentary evidence connected to his public and scholarly life.',
        },
        {
          title: 'Publications',
          body: 'Books, essays, editorial projects, encyclopedia work, translated editions, and bibliography-related material.',
        },
        {
          title: 'Film & Media',
          body: 'Documentary materials, screenings, interviews, gallery documentation, and later media records of his legacy.',
        },
        {
          title: 'Institutional Memory',
          body: 'Records connected to universities, the Academy of Sciences, UNESCO work, and public initiatives associated with his name.',
        },
        {
          title: 'Contextual Notes',
          body: 'Editorial context, chronology, cross-references, and explanatory notes that help situate materials within a broader historical record.',
        },
      ],
    },
    collections: {
      label: 'Collection Mockup',
      title: 'How the Archive Will Be Used',
      intro:
        'To make the archive feel closer to its future public form, the landing page can already preview the kinds of collection spaces visitors will eventually browse.',
      items: [
        {
          variant: 'documents',
          title: 'Documents',
          kind: 'Primary source collection',
          status: 'In preparation',
          countLabel: 'Draft structure for letters, speeches, and papers',
          description:
            'A future document area would group scanned papers and records into navigable sets, each accompanied by dates, short context, and relationships to biography or timeline entries.',
          sampleItems: [
            'Public speeches and addresses',
            'Working papers and scholarly notes',
            'Letters and institutional correspondence',
          ],
          previewDocument: {
            src: 'https://osimi.org/wp-content/uploads/2020/08/attestat_professora.jpg',
            alt: 'Professor diploma scan',
            caption: 'Professor diploma scan',
          },
          documentRecords: [
            {
              title: 'Professor diploma scan',
              meta: 'Academic record · source image preserved on legacy site',
              status: 'Preview',
            },
            {
              title: 'Public speeches and addresses',
              meta: 'Series structure · dates to be verified',
              status: 'Cataloging',
            },
            {
              title: 'Working papers and scholarly notes',
              meta: 'Research material · contextual notes pending',
              status: 'Processing',
            },
            {
              title: 'Letters and institutional correspondence',
              meta: 'Institutional record group · access preview later',
              status: 'Planned',
            },
          ],
        },
        {
          variant: 'gallery',
          title: 'Photo Gallery',
          kind: 'Visual record collection',
          status: 'In preparation',
          countLabel: 'Draft structure for portraits, events, and commemorations',
          description:
            'A future gallery area would present visual material as curated clusters rather than a flat stream, helping visitors move between portraits, public appearances, institutions, and memorial events.',
          sampleItems: [
            'Portraits across decades',
            'Institutional and public events',
            'Commemorative gatherings and screenings',
          ],
          previewImages: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/thumb/CP_IMG_20171014_0621.jpg',
              alt: 'On the meeting of Academy of Science',
              caption: 'On the meeting of Academy of Science',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170924_0216.jpg',
              alt: 'Tajik scientists',
              caption: 'Tajik scientists',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170923_0127.jpg',
              alt: 'Celebration of Amir Khusrow Dehlavi anniversary',
              caption: 'Celebration of Amir Khusrow Dehlavi anniversary',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170922_0070.jpg',
              alt: 'At home with son',
              caption: 'At home with son',
            },
          ],
          href: '/archive/gallery',
          ctaLabel: 'Open Gallery Preview',
        },
      ],
    },
    importance: {
      label: 'Why It Matters',
      title: 'Beyond Storage',
      paragraphs: [
        'An archive is not only a repository of objects. In this case, it is also a way of preserving the continuity between intellectual work, public service, and cultural memory. Without context, important materials become isolated. Without preservation, memory becomes fragile.',
        'The archive matters because Osimi’s legacy touches multiple histories at once: the history of science in Tajikistan, the study of Central Asian civilization, the institutional life of the Academy, and the moral language of public responsibility. Bringing these materials together helps make that legacy accessible rather than abstract.',
      ],
    },
    future: {
      label: 'Future Access',
      title: 'How This Section Will Grow',
      body: 'As materials are reviewed and organized, this section can expand into a more navigable public archive without collapsing into an overwhelming technical system on the main site.',
      items: [
        'Curated collection pages for photographs, publications, and documentary materials',
        'Selected document previews with contextual descriptions',
        'Bibliographic and archival cross-links to the works and biography sections',
        'Public-facing routes into deeper published archive areas when ready',
      ],
    },
  },
  tg: {
    metadata: {
      title: 'Бойгонӣ - Муҳаммад Осимӣ',
      description:
        'Саҳифаи умумии бойгонӣ барои муаррифии ҳифзи ҳаёт, осор, аксҳо, нашрияҳо ва ҳофизаи фарҳангии Муҳаммад Осимӣ.',
    },
    hero: {
      label: 'Бойгонӣ',
      title: 'Бойгонии зинда',
      subtitle: 'Сабти ҷамъиятии ҳофиза, дониш, санадҳо ва аҳамияти пойдори фарҳангӣ',
      intro:
        'Ин бойгонӣ ҳамчун макони ороми ҷамъиятӣ барои ҳифзи ҳаёт ва мероси Муҳаммад Осимӣ шакл мегирад. Ҳадафи он танҳо гирд овардани мавод нест, балки қобили хондан, боэътимод ва пурмаъно сохтани онҳо барои хонандагони оянда, муҳаққиқон, донишҷӯён ва ҷомеаи васеъ мебошад.',
      panelLabel: 'Ҳифзи ҷамъиятӣ',
      panelText:
        'Санадҳо, аксҳо, нашрияҳо, маводи филмӣ, ҳофизаи муассисавӣ ва ёддоштҳои заминавӣ тадриҷан дар ин ҷо гирд меоянд.',
    },
    mission: {
      label: 'Ҳадаф',
      title: 'Ҳифз бо замина',
      paragraphs: [
        'Бойгонӣ ҳамчун як талоши дарозмуддати ҳифз барои зиндагие пешбинӣ шудааст, ки ба таърихи зеҳнӣ, ҳофизаи ҷамъиятӣ ва сабти фарҳангии Тоҷикистон ва Осиёи Марказӣ тааллуқ дорад. Он мекӯшад на танҳо санадҳоро, балки робитаи миёни зиндагинома, дониш, муассисаҳо ва хотираро низ нигоҳ дорад.',
        'Ба ҷойи он ки равандҳои техникии бойгонӣ дар сомонаи ҷамъиятӣ пешниҳод шаванд, ин саҳифа бойгониро ҳамчун лоиҳаи дақиқи таҳрирӣ ва ҳифзӣ муаррифӣ мекунад; лоиҳае, ки асл, забон, хронология ва фаҳмиши заминавиро муҳим мешуморад.',
      ],
    },
    materials: {
      label: 'Мавод',
      title: 'Бойгонӣ чӣ чизҳоро ҳифз хоҳад кард',
      intro:
        'Бойгонӣ тадриҷан намудҳои гуногуни маводро гирд меорад, ки ҳар кадоми онҳо бахши дигаре аз мероси ҷамъиятӣ ва зеҳнии Осимиро дар худ доранд.',
      items: [
        { title: 'Аксҳо', body: 'Портретҳо, аксҳои муассисавӣ, аксҳои хонаводагӣ, ҳузурҳои ҷамъиятӣ ва сабтҳои визуалии ёдбудҳо.' },
        { title: 'Санадҳо ва қоғазҳо', body: 'Номаҳо, суханрониҳо, дастнависҳо, сабтҳои зиндагинома ва далелҳои ҳуҷҷатии вобаста ба фаъолияти ҷамъиятӣ ва илмии ӯ.' },
        { title: 'Нашрияҳо', body: 'Китобҳо, мақолаҳо, корҳои таҳрирӣ, лоиҳаҳои энсиклопедӣ, нашрҳои тарҷумашуда ва маводи библиографӣ.' },
        { title: 'Филм ва медиа', body: 'Маводи марбут ба филми мустанад, намоишҳо, мусоҳибаҳо, галереяҳо ва сабтҳои деринаи расонаӣ дар бораи мероси ӯ.' },
        { title: 'Ҳофизаи муассисавӣ', body: 'Санадҳои вобаста ба донишгоҳҳо, Академияи илмҳо, корҳои ЮНЕСКО ва ташаббусҳои ҷамъиятии марбут ба номи ӯ.' },
        { title: 'Ёддоштҳои заминавӣ', body: 'Тавзеҳоти таҳрирӣ, хронология, пайвандҳои байнибахшӣ ва ёддоштҳое, ки маводро дар доираи васеътари таърихӣ ҷой медиҳанд.' },
      ],
    },
    collections: {
      label: 'Намунаи маҷмӯа',
      title: 'Бойгонӣ чӣ гуна истифода хоҳад шуд',
      intro:
        'Барои он ки бойгонӣ ба шакли ояндаи худ наздиктар намояд, ин саҳифа метавонад аллакай навъи муҳитҳои маҷмӯавиеро нишон диҳад, ки баъдтар бинандагон аз онҳо истифода хоҳанд кард.',
      items: [
        {
          variant: 'documents',
          title: 'Санадҳо',
          kind: 'Маҷмӯаи манбаъҳои аслӣ',
          status: 'Дар ҳоли омодасозӣ',
          countLabel: 'Сохтори ибтидоӣ барои номаҳо, суханронӣ ва қоғазҳо',
          description:
            'Дар оянда бахши санадҳо қоғазҳо ва ҳуҷҷатҳоро ба маҷмӯаҳои қобили паймоиш ҷудо мекунад, ки ҳар яке бо сана, тавзеҳи кӯтоҳ ва пайванди заминавӣ ба зиндагинома ё хронология ҳамроҳ мешавад.',
          sampleItems: [
            'Суханрониҳо ва муроҷиатҳои ҷамъиятӣ',
            'Қоғазҳои корӣ ва ёддоштҳои илмӣ',
            'Номаҳо ва мукотибаи муассисавӣ',
          ],
          previewDocument: {
            src: 'https://osimi.org/wp-content/uploads/2020/08/attestat_professora.jpg',
            alt: 'Скани дипломи профессор',
            caption: 'Скани дипломи профессор',
          },
          documentRecords: [
            {
              title: 'Скани дипломи профессор',
              meta: 'Сабти академӣ · тасвири манбаъ аз сомонаи меросӣ',
              status: 'Пешнамоиш',
            },
            {
              title: 'Суханрониҳо ва муроҷиатҳои ҷамъиятӣ',
              meta: 'Силсилаи мавод · санаҳо дар ҳоли санҷиш',
              status: 'Феҳристсозӣ',
            },
            {
              title: 'Қоғазҳои корӣ ва ёддоштҳои илмӣ',
              meta: 'Маводи пажӯҳишӣ · тавзеҳоти заминавӣ баъдтар',
              status: 'Коркард',
            },
            {
              title: 'Номаҳо ва мукотибаи муассисавӣ',
              meta: 'Гурӯҳи сабтҳои муассисавӣ · пешнамоиш баъдтар',
              status: 'Дар нақша',
            },
          ],
        },
        {
          variant: 'gallery',
          title: 'Галереяи аксҳо',
          kind: 'Маҷмӯаи сабтҳои визуалӣ',
          status: 'Дар ҳоли омодасозӣ',
          countLabel: 'Сохтори ибтидоӣ барои портретҳо, рӯйдодҳо ва ёдбудҳо',
          description:
            'Дар оянда бахши галерея маводи визуалиро на ҳамчун ҷараёни пароканда, балки ҳамчун гурӯҳҳои кураторшуда пешкаш мекунад, то бинанда миёни портретҳо, ҳузурҳои ҷамъиятӣ, муассисаҳо ва ёдбудҳо ҳаракат карда тавонад.',
          sampleItems: [
            'Портретҳо дар давраҳои гуногун',
            'Рӯйдодҳои ҷамъиятӣ ва муассисавӣ',
            'Ёдбудҳо ва намоишҳои дерина',
          ],
          previewImages: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/thumb/CP_IMG_20171014_0621.jpg',
              alt: 'Маҷлиси Академияи илмҳо',
              caption: 'Дар маҷлиси Академияи илмҳо',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170924_0216.jpg',
              alt: 'Олимони тоҷик',
              caption: 'Олимони тоҷик',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170923_0127.jpg',
              alt: 'Ҷашни Амир Хусрави Деҳлавӣ',
              caption: 'Ҷашни Амир Хусрави Деҳлавӣ',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170922_0070.jpg',
              alt: 'Дар хона бо писар',
              caption: 'Дар хона бо писар',
            },
          ],
          href: '/archive/gallery',
          ctaLabel: 'Кушодани пешнамоиши галерея',
        },
      ],
    },
    importance: {
      label: 'Аҳамият',
      title: 'Фаротар аз нигаҳдорӣ',
      paragraphs: [
        'Бойгонӣ танҳо анбори ашё нест. Дар ин маврид он роҳи ҳифзи пайвастагӣ миёни кори зеҳнӣ, хизмати ҷамъиятӣ ва ҳофизаи фарҳангӣ низ мебошад. Бе замина маводи муҳим пароканда мешавад; бе ҳифз бошад, хотира осебпазир мегардад.',
        'Ин бойгонӣ муҳим аст, зеро мероси Осимӣ ба якчанд таърих ҳамзамон тааллуқ дорад: таърихи илм дар Тоҷикистон, омӯзиши тамаддуни Осиёи Марказӣ, ҳаёти муассисавии Академия ва забони ахлоқии масъулияти ҷамъиятӣ. Ба ҳам овардани ин мавод меросро аз ҳолати абстрактӣ ба шакли дастрас табдил медиҳад.',
      ],
    },
    future: {
      label: 'Дастрасии оянда',
      title: 'Ин бахш чӣ гуна рушд хоҳад кард',
      body: 'Бо баррасӣ ва тартиб ёфтани мавод, ин бахш метавонад ба бойгонии умумии қобили паймоиш табдил ёбад, бе он ки дар сомонаи асосӣ ба низоми аз ҳад техникӣ мубаддал шавад.',
      items: [
        'Саҳифаҳои интихобии маҷмӯаҳо барои аксҳо, нашрияҳо ва маводи филмӣ',
        'Пешнамоиши санадҳо бо тавсифҳои кӯтоҳи заминавӣ',
        'Пайвандҳои библиографӣ ва бойгонӣ ба бахшҳои осор ва зиндагинома',
        'Роҳҳои ҷамъиятӣ ба бахшҳои амиқтари бойгонӣ ҳангоми омода шудан',
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Архив - Мухаммад Осими',
      description:
        'Публичная вводная страница архива, посвященного сохранению жизни, трудов, фотографий, публикаций и культурной памяти Мухаммада Осими.',
    },
    hero: {
      label: 'Архив',
      title: 'Живой архив',
      subtitle: 'Публичный свод памяти, знания, документов и устойчивой культурной значимости',
      intro:
        'Этот архив формируется как спокойное публичное пространство для сохранения жизни и наследия Мухаммада Осими. Его задача не только в собирании материалов, но и в том, чтобы делать их читаемыми, надежными и содержательными для будущих читателей, исследователей, студентов и широкой публики.',
      panelLabel: 'Публичное сохранение',
      panelText:
        'Документы, фотографии, публикации, материалы о фильме, институциональная память и контекстуальные заметки со временем будут собраны здесь.',
    },
    mission: {
      label: 'Миссия',
      title: 'Сохранение с контекстом',
      paragraphs: [
        'Архив задуман как долгосрочное усилие по сохранению жизни, принадлежащей одновременно интеллектуальной истории, общественной памяти и культурному документу Таджикистана и Центральной Азии. Он стремится удерживать не только документы, но и связи между биографией, научной работой, институциями и памятью.',
        'Вместо того чтобы выносить технические архивные процессы на публичный сайт, эта страница представляет архив как внимательный редакторский и сохранительный проект - проект, где важны происхождение материала, язык, хронология и контекстуальное понимание.',
      ],
    },
    materials: {
      label: 'Материалы',
      title: 'Что будет сохранять архив',
      intro:
        'Архив будет постепенно собирать разные типы материалов, каждый из которых хранит свою часть общественного и интеллектуального наследия Осими.',
      items: [
        { title: 'Фотографии', body: 'Портреты, институциональные изображения, семейные фотографии, публичные появления и визуальные свидетельства памятных событий.' },
        { title: 'Документы и бумаги', body: 'Письма, выступления, рабочие материалы, биографические записи и документальные свидетельства, связанные с его общественной и научной жизнью.' },
        { title: 'Публикации', body: 'Книги, статьи, редакторские проекты, энциклопедическая работа, переводы и библиографические материалы.' },
        { title: 'Фильм и медиа', body: 'Материалы о документальном фильме, показах, интервью, галереях и более поздних медийных формах сохранения его наследия.' },
        { title: 'Институциональная память', body: 'Материалы, связанные с университетами, Академией наук, работой с ЮНЕСКО и общественными инициативами, связанными с его именем.' },
        { title: 'Контекстуальные заметки', body: 'Редакторские пояснения, хронология, перекрестные ссылки и комментарии, помогающие поместить материалы в более широкий исторический контекст.' },
      ],
    },
    collections: {
      label: 'Макет коллекций',
      title: 'Как архив будет использоваться',
      intro:
        'Чтобы архив уже сейчас напоминал свою будущую публичную форму, эта страница может показывать типы коллекционных пространств, которыми посетители позже будут пользоваться напрямую.',
      items: [
        {
          variant: 'documents',
          title: 'Документы',
          kind: 'Коллекция первоисточников',
          status: 'В подготовке',
          countLabel: 'Черновая структура для писем, выступлений и бумаг',
          description:
            'Будущий раздел документов будет объединять сканы и записи в навигационные подборки, где каждый материал сопровождается датой, кратким контекстом и связями с биографией или хронологией.',
          sampleItems: [
            'Публичные выступления и обращения',
            'Рабочие материалы и научные заметки',
            'Письма и институциональная переписка',
          ],
          previewDocument: {
            src: 'https://osimi.org/wp-content/uploads/2020/08/attestat_professora.jpg',
            alt: 'Скан диплома профессора',
            caption: 'Скан диплома профессора',
          },
          documentRecords: [
            {
              title: 'Скан диплома профессора',
              meta: 'Академическая запись · исходное изображение сохранено на старом сайте',
              status: 'Превью',
            },
            {
              title: 'Публичные выступления и обращения',
              meta: 'Серия материалов · даты уточняются',
              status: 'Каталогизация',
            },
            {
              title: 'Рабочие материалы и научные заметки',
              meta: 'Исследовательский блок · контекст будет добавлен',
              status: 'Обработка',
            },
            {
              title: 'Письма и институциональная переписка',
              meta: 'Институциональная группа записей · превью позже',
              status: 'Запланировано',
            },
          ],
        },
        {
          variant: 'gallery',
          title: 'Фотогалерея',
          kind: 'Коллекция визуальных свидетельств',
          status: 'В подготовке',
          countLabel: 'Черновая структура для портретов, событий и памятных материалов',
          description:
            'Будущий раздел галереи будет показывать визуальные материалы не как случайный поток, а как кураторские группы, по которым можно переходить между портретами, публичными событиями, институциональной жизнью и памятными встречами.',
          sampleItems: [
            'Портреты разных десятилетий',
            'Институциональные и публичные события',
            'Памятные встречи и показы',
          ],
          previewImages: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/thumb/CP_IMG_20171014_0621.jpg',
              alt: 'На заседании Академии наук',
              caption: 'На заседании Академии наук',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170924_0216.jpg',
              alt: 'Таджикские ученые',
              caption: 'Таджикские ученые',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170923_0127.jpg',
              alt: 'Празднование юбилея Амира Хусрава Дехлави',
              caption: 'Празднование юбилея Амира Хусрава Дехлави',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/thumb/CP_IMG_20170922_0070.jpg',
              alt: 'Дома с сыном',
              caption: 'Дома с сыном',
            },
          ],
          href: '/archive/gallery',
          ctaLabel: 'Открыть превью галереи',
        },
      ],
    },
    importance: {
      label: 'Зачем это нужно',
      title: 'Больше, чем хранение',
      paragraphs: [
        'Архив - это не только хранилище объектов. В данном случае это также способ сохранить непрерывность между интеллектуальным трудом, общественным служением и культурной памятью. Без контекста важные материалы становятся изолированными. Без сохранения сама память становится хрупкой.',
        'Этот архив важен потому, что наследие Осими затрагивает сразу несколько историй: историю науки в Таджикистане, изучение цивилизации Центральной Азии, институциональную жизнь Академии и нравственный язык общественной ответственности. Соединение этих материалов делает наследие доступным, а не абстрактным.',
      ],
    },
    future: {
      label: 'Будущий доступ',
      title: 'Как этот раздел будет расти',
      body: 'По мере отбора и упорядочивания материалов этот раздел сможет вырасти в более навигационный публичный архив, не превращаясь при этом в перегруженную техническую систему на основном сайте.',
      items: [
        'Кураторские страницы коллекций для фотографий, публикаций и материалов о фильме',
        'Выборочные превью документов с краткими контекстуальными описаниями',
        'Библиографические и архивные связи с разделами биографии и трудов',
        'Публичные маршруты к более глубоким архивным областям по мере готовности',
      ],
    },
  },
}

export function getArchiveContent(locale: Locale) {
  return archiveContent[locale]
}
