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
        'A scholarly catalog-style introduction to Muhammad Osimi’s intellectual work, major themes, and selected publications.',
    },
    hero: {
      label: 'Works & Ideas',
      title: 'A Scholarly Catalog in Progress',
      subtitle: 'Writing, editing, interpretation, and institution-building across disciplines',
      intro:
        'This page is being organized as a reading-room style guide to Muhammad Osimi’s intellectual legacy. Rather than presenting a full bibliography all at once, it begins with the major fields that shaped his work and a small set of selected titles already referenced across the site.',
      quote: "The worth of a person's thoughts is a measure of his or her own generosity.",
      attribution: 'Muhammad Osimi',
    },
    themes: {
      label: 'Themes',
      title: 'How the Works Will Be Organized',
      intro:
        'Osimi’s scholarship moved across philosophy, science, cultural history, language, and editorial leadership. The future full works section will be structured around these recurring clusters rather than as a flat list alone.',
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
          body: 'Research and leadership tied to the historical memory of the region, especially through UNESCO and large collective publications.',
        },
        {
          title: 'Language & Cultural Heritage',
          body: 'Writing on Persian-Tajik literary continuity, cultural memory, and the role of language in public identity.',
        },
        {
          title: 'Editorial & Encyclopedia Work',
          body: 'Major editorial labor, institution-scale publication projects, and knowledge organization for broad public use.',
        },
        {
          title: 'Classical Thinkers Revisited',
          body: 'Engagement with figures such as Ibn Sino, Biruni, Jami, Hafiz, Ahmad Donish, and Sadriddin Aini.',
        },
      ],
    },
    selected: {
      label: 'Selected Works',
      title: 'Known Titles Already Referenced',
      intro:
        'These entries are not yet a complete bibliography. They serve as anchor points for the fuller works page that will later include original titles, translated titles, publication details, and archive references.',
      items: [
        {
          title: 'Matter and the Physical Picture of the World',
          year: '1966',
          note: 'A major philosophical study linking scientific inquiry to broader ontological questions.',
        },
        {
          title: 'The Concept of Matter and the Problem of Physical Reality',
          year: '1970',
          note: 'A key text in Osimi’s engagement with the conceptual and philosophical problems of physics.',
        },
        {
          title: 'The Origin and Development of Philosophical Thinking',
          year: '1970',
          note: 'A work that reflects his wider interest in intellectual history and philosophical formation.',
        },
        {
          title: 'Tajik Soviet Encyclopedia',
          year: '1978',
          note: 'An important large-scale editorial project demonstrating his role in public knowledge building.',
        },
        {
          title: 'History of Civilizations of Central Asia',
          year: 'UNESCO era',
          note: 'A major international scholarly undertaking with which his name remains closely associated.',
        },
      ],
    },
    roadmap: {
      label: 'Roadmap',
      title: 'What This Page Will Grow Into',
      paragraphs: [
        'The aim is to build this section as a clear and trustworthy scholarly catalog rather than an overwhelming bibliography dump. Each work should eventually be situated by theme, date, language, and editorial context.',
        'As source materials are gathered and reviewed, this page can expand into a more detailed bibliography with original-language titles, translated titles, publication locations, editorial roles, and connections to archival documents or scans.',
      ],
      bullets: [
        'Original and translated titles',
        'Publication year and place',
        'Book, article, editorial, or translation type',
        'Theme-based browsing',
        'Connections to biography, timeline, and archive materials',
      ],
    },
    relatedLinks: {
      title: 'Continue Exploring',
      items: [
        {
          href: '/biography',
          label: 'Biography',
          description: 'See how his intellectual work fits within the larger arc of his life.',
        },
        {
          href: '/timeline',
          label: 'Timeline',
          description: 'Track the dates, institutions, and public milestones around these works.',
        },
        {
          href: '/archive',
          label: 'Archive',
          description: 'Follow the future path toward documents, publications, and source materials.',
        },
      ],
    },
  },
  tg: {
    metadata: {
      title: 'Осор ва андешаҳо - Муҳаммад Осимӣ',
      description:
        'Муаррифии каталоги илмӣ-аввалия аз осори фикрии Муҳаммад Осимӣ, мавзӯъҳои асосӣ ва чанде аз асарҳои маъруфи ӯ.',
    },
    hero: {
      label: 'Осор ва андешаҳо',
      title: 'Каталоги илмӣ дар ҳоли шаклгирӣ',
      subtitle: 'Навиштан, таҳрир, тафсир ва бунёди донишу муассисаҳо дар чанд соҳа',
      intro:
        'Ин саҳифа ҳамчун роҳнамои услуби толори мутолиа барои мероси фикрии Муҳаммад Осимӣ тарҳрезӣ мешавад. Ба ҷойи он ки аз оғоз тамоми библиографияро якбора пешниҳод кунад, он аввал соҳаҳои асосии фаъолияти зеҳнии ӯ ва чанде аз унвонҳои маъруферо, ки аллакай дар сомона зикр шудаанд, нишон медиҳад.',
      quote: 'Арзиши андешаҳои инсон меъёри саховатмандии худи ӯст.',
      attribution: 'Муҳаммад Осимӣ',
    },
    themes: {
      label: 'Мавзӯъҳо',
      title: 'Осор чӣ гуна ташкил хоҳад шуд',
      intro:
        'Осими дар марзи фалсафа, илм, таърихи фарҳанг, забон ва роҳбарии таҳрирӣ кор мекард. Бахши мукаммали осор дар оянда на танҳо ҳамчун рӯйхат, балки бар пояи ҳамин гурӯҳҳои асосӣ сохта мешавад.',
      items: [
        {
          title: 'Фалсафаи илм',
          body: 'Осор дар бораи материя, воқеияти физикӣ, донишҳои илмӣ ва пояҳои мафҳумии илми муосир.',
        },
        {
          title: 'Таърихи тафаккур',
          body: 'Пажӯҳишҳо дар бораи рушди андешаи фалсафӣ ва интиқоли ғояҳо миёни давраҳо ва анъанаҳо.',
        },
        {
          title: 'Тамаддуни Осиёи Марказӣ',
          body: 'Таҳқиқ ва роҳбарии илмӣ вобаста ба ҳофизаи таърихии минтақа, махсусан дар чорчӯби ЮНЕСКО ва нашрияҳои бузурги дастаҷамъӣ.',
        },
        {
          title: 'Забон ва мероси фарҳангӣ',
          body: 'Навиштаҳо дар бораи пайванди адабии форсӣ-тоҷикӣ, ҳофизаи фарҳангӣ ва нақши забон дар ҳувияти ҷамъиятӣ.',
        },
        {
          title: 'Кори таҳрирӣ ва энсиклопедӣ',
          body: 'Лоиҳаҳои калони таҳрирӣ ва созмони дониши ҷамъиятӣ барои истифодаи васеъ.',
        },
        {
          title: 'Бозхонии мутафаккирони классикӣ',
          body: 'Муносибат бо чеҳраҳое чун Ибни Сино, Берунӣ, Ҷомӣ, Ҳофиз, Аҳмад Дониш ва Садриддин Айнӣ.',
        },
      ],
    },
    selected: {
      label: 'Осори интихобӣ',
      title: 'Унвонҳои маъруфе, ки аллакай зикр шудаанд',
      intro:
        'Инҳо ҳанӯз библиографияи пурра нестанд. Онҳо ҳамчун нуқтаҳои оғоз барои бахши васеътари осор хизмат мекунанд, ки баъдтар унвонҳои аслӣ, тарҷумашуда, маълумоти нашр ва пайвандҳои бойгонӣ низ дар бар мегирад.',
      items: [
        {
          title: 'Материя ва манзараи физикии олам',
          year: '1966',
          note: 'Як таҳқиқи муҳими фалсафӣ, ки масъалаҳои илмиро бо саволҳои васеътари ҳастишиносӣ мепайвандад.',
        },
        {
          title: 'Мафҳуми материя ва масъалаи воқеияти физикӣ',
          year: '1970',
          note: 'Матни асосӣ дар рӯйкарди Осими ба масъалаҳои мафҳумӣ ва фалсафии физика.',
        },
        {
          title: 'Пайдоиш ва инкишофи тафаккури фалсафӣ',
          year: '1970',
          note: 'Асаре, ки таваҷҷуҳи густардаи ӯро ба таърихи андеша ва ташаккули фалсафа нишон медиҳад.',
        },
        {
          title: 'Энсиклопедияи Советии Тоҷик',
          year: '1978',
          note: 'Лоиҳаи муҳими таҳрирӣ, ки нақши ӯро дар бунёди дониши ҷамъиятӣ нишон медиҳад.',
        },
        {
          title: 'Таърихи тамаддунҳои Осиёи Марказӣ',
          year: 'Давраи ЮНЕСКО',
          note: 'Лоиҳаи бузурги байналмилалии илмӣ, ки номи ӯ бо он сахт пайваста мемонад.',
        },
      ],
    },
    roadmap: {
      label: 'Самти рушд',
      title: 'Ин саҳифа ба чӣ табдил хоҳад ёфт',
      paragraphs: [
        'Ҳадаф ин аст, ки бахш ҳамчун каталоги равшан ва мӯътамади илмӣ сохта шавад, на ҳамчун рӯйхати вазнини библиографӣ. Ҳар асар бояд дар оянда аз рӯи мавзӯъ, сана, забон ва заминаи таҳрирӣ ҷойгир карда шавад.',
        'Ҳар қадар ки маводи манбаъ ҷамъоварӣ ва баррасӣ шавад, ин саҳифа метавонад ба библиографияи муфассалтар бо унвонҳои аслӣ, тарҷумашуда, ҷойи нашр, нақши таҳрирӣ ва пайванд ба санадҳои бойгонӣ густариш ёбад.',
      ],
      bullets: [
        'Унвонҳои аслӣ ва тарҷумашуда',
        'Сол ва ҷойи нашр',
        'Навъи асар: китоб, мақола, таҳрир ё тарҷума',
        'Паймоиш аз рӯи мавзӯъ',
        'Пайванд ба зиндагинома, хронология ва маводи бойгонӣ',
      ],
    },
    relatedLinks: {
      title: 'Идома диҳед',
      items: [
        {
          href: '/biography',
          label: 'Зиндагинома',
          description: 'Бубинед, ки кори фикрии ӯ дар камони васеътари зиндагияш чӣ ҷой дорад.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Санаҳо, муассисаҳо ва марҳилаҳои ҷамъиятии марбут ба ин осорро пайгирӣ кунед.',
        },
        {
          href: '/archive',
          label: 'Бойгонӣ',
          description: 'Ба роҳи ояндаи санадҳо, нашрияҳо ва маводи манбаъ назар кунед.',
        },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Труды и идеи - Мухаммад Осими',
      description:
        'Каталогическое введение в интеллектуальное наследие Мухаммада Осими, его основные темы и ряд известных публикаций.',
    },
    hero: {
      label: 'Труды и идеи',
      title: 'Научный каталог в развитии',
      subtitle: 'Письмо, редактура, интерпретация и строительство знания через разные дисциплины',
      intro:
        'Эта страница строится как путеводитель в стиле читального зала по интеллектуальному наследию Мухаммада Осими. Вместо того чтобы сразу показывать полную библиографию, она начинает с основных направлений его мысли и нескольких известных названий, уже упомянутых на сайте.',
      quote: 'Ценность мыслей человека есть мера его собственной щедрости.',
      attribution: 'Мухаммад Осими',
    },
    themes: {
      label: 'Темы',
      title: 'Как будут организованы труды',
      intro:
        'Осими работал на пересечении философии, науки, культурной истории, языка и редакторского руководства. В дальнейшем полный раздел трудов будет построен вокруг этих повторяющихся кластеров, а не только как плоский список публикаций.',
      items: [
        {
          title: 'Философия науки',
          body: 'Работы о материи, физической реальности, научном знании и понятийных основаниях современной науки.',
        },
        {
          title: 'История мысли',
          body: 'Исследования развития философской мысли, интеллектуальной истории и передачи идей между эпохами и традициями.',
        },
        {
          title: 'Цивилизация Центральной Азии',
          body: 'Исследования и научное руководство, связанные с исторической памятью региона, особенно в рамках ЮНЕСКО и крупных коллективных изданий.',
        },
        {
          title: 'Язык и культурное наследие',
          body: 'Тексты о персидско-таджикской литературной преемственности, культурной памяти и роли языка в общественной идентичности.',
        },
        {
          title: 'Редакторская и энциклопедическая работа',
          body: 'Крупные редакторские проекты и организация общественного знания для широкого круга читателей.',
        },
        {
          title: 'Переосмысление классических мыслителей',
          body: 'Обращение к таким фигурам, как Ибн Сино, Бируни, Джами, Хафиз, Ахмад Дониш и Садриддин Айни.',
        },
      ],
    },
    selected: {
      label: 'Избранные труды',
      title: 'Известные названия, уже упомянутые на сайте',
      intro:
        'Это еще не полная библиография. Эти записи служат опорными точками для более полного раздела, который позже сможет включать оригинальные названия, переведенные названия, данные об издании и архивные ссылки.',
      items: [
        {
          title: 'Материя и физическая картина мира',
          year: '1966',
          note: 'Крупное философское исследование, связывающее научный анализ с более широкими онтологическими вопросами.',
        },
        {
          title: 'Понятие материи и проблема физической реальности',
          year: '1970',
          note: 'Один из ключевых текстов в осмыслении Осими понятийных и философских проблем физики.',
        },
        {
          title: 'Происхождение и развитие философского мышления',
          year: '1970',
          note: 'Работа, отражающая его широкий интерес к истории мысли и становлению философии.',
        },
        {
          title: 'Таджикская советская энциклопедия',
          year: '1978',
          note: 'Важный редакторский проект, показывающий его роль в строительстве общественного знания.',
        },
        {
          title: 'История цивилизаций Центральной Азии',
          year: 'Период ЮНЕСКО',
          note: 'Крупное международное научное предприятие, с которым его имя остается тесно связано.',
        },
      ],
    },
    roadmap: {
      label: 'Развитие раздела',
      title: 'Во что эта страница должна вырасти',
      paragraphs: [
        'Цель состоит в том, чтобы сделать этот раздел ясным и надежным научным каталогом, а не перегруженной библиографической сводкой. Каждое произведение со временем должно быть помещено в тематический, временной, языковой и редакторский контекст.',
        'По мере сбора и проверки источников эта страница сможет вырасти в более подробную библиографию с оригинальными названиями, переводами, местами издания, редакторскими ролями и связями с архивными документами или сканами.',
      ],
      bullets: [
        'Оригинальные и переведенные названия',
        'Год и место издания',
        'Тип публикации: книга, статья, редакторская работа или перевод',
        'Навигация по темам',
        'Связи с биографией, хронологией и архивными материалами',
      ],
    },
    relatedLinks: {
      title: 'Продолжить исследование',
      items: [
        {
          href: '/biography',
          label: 'Биография',
          description: 'Посмотрите, как интеллектуальная работа вписывается в общую историю его жизни.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Проследите даты, институции и общественные вехи, связанные с этими трудами.',
        },
        {
          href: '/archive',
          label: 'Архив',
          description: 'Следите за будущим направлением к документам, изданиям и исходным материалам.',
        },
      ],
    },
  },
}

export function getWorksContent(locale: Locale) {
  return worksContent[locale]
}
