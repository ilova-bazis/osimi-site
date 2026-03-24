import type { Locale } from '@/lib/i18n/locales'

export type ArchiveGalleryGroup = 'portraits' | 'preserved' | 'reference'

export type ArchiveGalleryItem = {
  id: string
  group: ArchiveGalleryGroup
  src: string
  alt: string
  title: string
  note: string
}

export type ArchiveGalleryPageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
  }
  featured: {
    image: ArchiveGalleryItem
    label: string
  }
  holdings: {
    label: string
    title: string
    intro: string
    items: ArchiveGalleryItem[]
  }
  groups: {
    label: string
    title: string
    items: Array<{ title: string; body: string }>
  }
}

const sharedImages = {
  portraitMain: '/images/biography/main_portrait.jpg',
  portraitA: '/images/biography/CP_IMG_20170903_0001.jpg',
  portraitB: '/images/biography/CP_IMG_20170903_0002.jpg',
  portraitC: '/images/biography/CP_IMG_20170904_0015.jpg',
  portraitD: '/images/biography/CP_IMG_20170922_0064.jpg',
}

const archiveGalleryContent: Record<Locale, ArchiveGalleryPageContent> = {
  en: {
    metadata: {
      title: 'Archive Photo Gallery - Muhammad Osimi',
      description:
        'A first public preview of the visual archive around Muhammad Osimi, including portraits and preserved reference images.',
    },
    hero: {
      label: 'Archive Gallery',
      title: 'Photo Gallery',
      subtitle: 'A visual record in progress, shaped as a future public gallery within the archive',
      intro:
        'This page offers a first gallery-style view into the visual holdings associated with Muhammad Osimi. It is not yet a full archival gallery, but it begins to show how portraits and preserved reference images can be presented with captions, grouping, and editorial order rather than as a flat image dump.',
    },
    featured: {
      label: 'Featured Image',
      image: {
        id: 'main-portrait',
        group: 'portraits',
        src: sharedImages.portraitMain,
        alt: 'Archival portrait of Muhammad Osimi',
        title: 'Archival portrait of Muhammad Osimi',
        note: 'Featured as a lead image while dates and fuller metadata are still under review.',
      },
    },
    holdings: {
      label: 'Current Visual Holdings',
      title: 'Early Gallery Preview',
      intro:
        'The current preview uses a small local set of preserved images already present in the project. Captions are intentionally restrained until fuller archival description is prepared.',
      items: [
        {
          id: 'portrait-a',
          group: 'portraits',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/CP_IMG_20171014_0621.jpg',
          alt: 'On the meeting of Academy of Science',
          title: 'On the meeting of Academy of Science',
          note: 'Selected from the legacy gallery as an example of institutional and scholarly life.',
        },
        {
          id: 'portrait-b',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170924_0216.jpg',
          alt: 'Tajik scientists',
          title: 'Tajik scientists',
          note: 'Included as a representative group image from the archival gallery.',
        },
        {
          id: 'portrait-c',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0127.jpg',
          alt: 'Celebration of Amir Khusrow Dehlavi anniversary',
          title: 'Celebration of Amir Khusrow Dehlavi anniversary',
          note: 'A cultural event image that helps show how the gallery can move beyond portraiture alone.',
        },
        {
          id: 'portrait-d',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0107.jpg',
          alt: 'Institute of gastroentelogoy',
          title: 'Institute of gastroentelogoy',
          note: 'A placeholder institutional image showing how place-based archival captions may appear.',
        },
        {
          id: 'portrait-e',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170922_0070.jpg',
          alt: 'At home with son',
          title: 'At home with son',
          note: 'Useful for testing how more intimate photographs may sit beside public and institutional ones.',
        },
        {
          id: 'portrait-f',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170903_0010.jpg',
          alt: 'Khujand at election point',
          title: 'Khujand at election point',
          note: 'A historical image that hints at how civic and political contexts can be represented visually.',
        },
        {
          id: 'portrait-g',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20171011_0509.jpg',
          alt: 'Kremlin, VIII Congress of the Society KNOWLEDGE',
          title: 'Kremlin, VIII Congress of the Society KNOWLEDGE',
          note: 'A larger public-institutional scene that broadens the gallery beyond formal portraits.',
        },
        {
          id: 'portrait-h',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170922_0064.jpg',
          alt: 'In the evacuation military hospital, near the river Neron',
          title: 'In the evacuation military hospital, near the river Neron',
          note: 'Included to test how wartime or early-life materials may appear within a future chronological gallery.',
        },
      ],
    },
    groups: {
      label: 'Future Grouping',
      title: 'How a Full Gallery Could Be Organized',
      items: [
        {
          title: 'Portraits',
          body: 'Formal portraits, studio images, and later reference copies of major images.',
        },
        {
          title: 'Public Life',
          body: 'Ceremonies, meetings, lectures, delegations, and institutional appearances.',
        },
        {
          title: 'Commemoration',
          body: 'Memorial gatherings, screenings, exhibitions, and later visual records of remembrance.',
        },
      ],
    },
  },
  tg: {
    metadata: {
      title: 'Галереяи аксҳои бойгонӣ - Муҳаммад Осимӣ',
      description:
        'Пешнамоиши аввалияи галереяи визуалии бойгонӣ бо чанд портрет ва тасвирҳои ҳифзшудаи Муҳаммад Осимӣ.',
    },
    hero: {
      label: 'Галереяи бойгонӣ',
      title: 'Галереяи аксҳо',
      subtitle: 'Сабти визуалӣ дар ҳоли ташаккул, ҳамчун бахши ояндаи ҷамъиятии бойгонӣ',
      intro:
        'Ин саҳифа пешнамоиши аввалини услуби галереявиро аз маводи визуалии вобаста ба Муҳаммад Осимӣ пешкаш мекунад. Он ҳанӯз галереяи комили бойгонӣ нест, вале нишон медиҳад, ки чӣ гуна портретҳо ва тасвирҳои ҳифзшуда метавонанд бо тавзеҳ, гурӯҳбандӣ ва тартиби таҳрирӣ муаррифӣ шаванд.',
    },
    featured: {
      label: 'Тасвири асосӣ',
      image: {
        id: 'main-portrait',
        group: 'portraits',
        src: sharedImages.portraitMain,
        alt: 'Портрети бойгонии Муҳаммад Осимӣ',
        title: 'Портрети бойгонии Муҳаммад Осимӣ',
        note: 'Ҳамчун тасвири асосӣ истифода шудааст, дар ҳоле ки сана ва метамаълумоти пурра ҳанӯз бозбинӣ мешаванд.',
      },
    },
    holdings: {
      label: 'Маводи визуалии ҳозира',
      title: 'Пешнамоиши ибтидоии галерея',
      intro:
        'Пешнамоиши ҳозира ба маҷмуаи хурди тасвирҳои маҳаллӣ такя мекунад, ки аллакай дар лоиҳа ҳузур доранд. Тавзеҳот қасдан кӯтоҳ нигоҳ дошта шудаанд, то замони омода шудани шарҳи пурраи бойгонӣ.',
      items: [
        {
          id: 'portrait-a',
          group: 'portraits',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/CP_IMG_20171014_0621.jpg',
          alt: 'Дар маҷлиси Академияи илмҳо',
          title: 'Дар маҷлиси Академияи илмҳо',
          note: 'Аз галереяи меросӣ ҳамчун намунаи ҳаёти илмӣ ва муассисавӣ гирифта шудааст.',
        },
        {
          id: 'portrait-b',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170924_0216.jpg',
          alt: 'Олимони тоҷик',
          title: 'Олимони тоҷик',
          note: 'Ҳамчун намунаи акси гурӯҳӣ аз галереяи бойгонӣ ворид шудааст.',
        },
        {
          id: 'portrait-c',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0127.jpg',
          alt: 'Ҷашни Амир Хусрави Деҳлавӣ',
          title: 'Ҷашни Амир Хусрави Деҳлавӣ',
          note: 'Акси фарҳангие, ки нишон медиҳад галерея танҳо ба портретҳо маҳдуд намемонад.',
        },
        {
          id: 'portrait-d',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0107.jpg',
          alt: 'Институти гастроэнтерология',
          title: 'Институти гастроэнтерология',
          note: 'Тасвири муассисавӣ барои нишон додани ҷойгоҳи аксҳои марбут ба маконҳо ва муассисаҳо.',
        },
        {
          id: 'portrait-e',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170922_0070.jpg',
          alt: 'Дар хона бо писар',
          title: 'Дар хона бо писар',
          note: 'Барои санҷидани ҳузури аксҳои шахсӣ дар канори маводи ҷамъиятӣ ва муассисавӣ.',
        },
        {
          id: 'portrait-f',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170903_0010.jpg',
          alt: 'Дар Хуҷанд, дар нуқтаи интихобот',
          title: 'Дар Хуҷанд, дар нуқтаи интихобот',
          note: 'Акси таърихие, ки нишон медиҳад чӣ гуна заминаҳои ҷамъиятӣ ва шаҳрвандӣ метавонанд дар галерея ҷой гиранд.',
        },
        {
          id: 'portrait-g',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20171011_0509.jpg',
          alt: 'Кремл, анҷумани VIII Ҷамъияти Дониш',
          title: 'Кремл, анҷумани VIII Ҷамъияти Дониш',
          note: 'Манзараи васеътари ҷамъиятӣ ва муассисавӣ барои тавсеаи ҳисси галерея.',
        },
        {
          id: 'portrait-h',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170922_0064.jpg',
          alt: 'Дар госпитали ҳарбии эвакуатсионӣ, назди дарёи Нерон',
          title: 'Дар госпитали ҳарбии эвакуатсионӣ, назди дарёи Нерон',
          note: 'Барои нишон додани он, ки маводи давраҳои ҷангӣ ва аввали зиндагӣ низ метавонанд ба шакли хронологӣ ворид шаванд.',
        },
      ],
    },
    groups: {
      label: 'Гурӯҳбандии оянда',
      title: 'Галереяи комил чӣ гуна тартиб меёбад',
      items: [
        { title: 'Портретҳо', body: 'Портретҳои расмӣ, тасвирҳои студиявӣ ва нусхаҳои деринаи онҳо.' },
        { title: 'Ҳаёти ҷамъиятӣ', body: 'Маросимҳо, мулоқотҳо, лексияҳо, ҳайатҳо ва ҳузурҳои муассисавӣ.' },
        { title: 'Ёдбуд', body: 'Гирдиҳамоиҳои ёдбуд, намоишҳо, намоишгоҳҳо ва сабтҳои деринаи хотира.' },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Фотогалерея архива - Мухаммад Осими',
      description:
        'Первое публичное превью визуального архива с портретами и сохраненными изображениями, связанными с Мухаммадом Осими.',
    },
    hero: {
      label: 'Галерея архива',
      title: 'Фотогалерея',
      subtitle: 'Визуальный раздел в развитии как будущая публичная галерея внутри архива',
      intro:
        'Эта страница показывает первое галерейное приближение к визуальным материалам, связанным с Мухаммадом Осими. Это еще не полный архив изображений, но уже демонстрация того, как портреты и сохраненные визуальные копии могут быть представлены с подписями, группировкой и редакторским порядком.',
    },
    featured: {
      label: 'Главное изображение',
      image: {
        id: 'main-portrait',
        group: 'portraits',
        src: sharedImages.portraitMain,
        alt: 'Архивный портрет Мухаммада Осими',
        title: 'Архивный портрет Мухаммада Осими',
        note: 'Используется как ведущее изображение, пока даты и полные метаданные еще уточняются.',
      },
    },
    holdings: {
      label: 'Текущие визуальные материалы',
      title: 'Начальное превью галереи',
      intro:
        'Текущее превью опирается на небольшой локальный набор сохраненных изображений, уже присутствующих в проекте. Подписи намеренно сдержаны до подготовки более полного архивного описания.',
      items: [
        {
          id: 'portrait-a',
          group: 'portraits',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1956-1964/CP_IMG_20171014_0621.jpg',
          alt: 'На заседании Академии наук',
          title: 'На заседании Академии наук',
          note: 'Выбрано из старой галереи как пример научной и институциональной жизни.',
        },
        {
          id: 'portrait-b',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170924_0216.jpg',
          alt: 'Таджикские ученые',
          title: 'Таджикские ученые',
          note: 'Включено как характерное групповое изображение из архивной фотогалереи.',
        },
        {
          id: 'portrait-c',
          group: 'preserved',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0127.jpg',
          alt: 'Празднование юбилея Амира Хусрава Дехлави',
          title: 'Празднование юбилея Амира Хусрава Дехлави',
          note: 'Культурное событие, показывающее, что галерея может выходить за пределы портретов.',
        },
        {
          id: 'portrait-d',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170923_0107.jpg',
          alt: 'Институт гастроэнтерологии',
          title: 'Институт гастроэнтерологии',
          note: 'Институциональное изображение, показывающее место фотографий, связанных с локациями и учреждениями.',
        },
        {
          id: 'portrait-e',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20170922_0070.jpg',
          alt: 'Дома с сыном',
          title: 'Дома с сыном',
          note: 'Полезно для понимания того, как личные фотографии могут соседствовать с публичными и институциональными материалами.',
        },
        {
          id: 'portrait-f',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170903_0010.jpg',
          alt: 'Худжанд, на избирательном участке',
          title: 'Худжанд, на избирательном участке',
          note: 'Историческое изображение, подсказывающее, как в галерее могут выглядеть общественные и гражданские сюжеты.',
        },
        {
          id: 'portrait-g',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1965-1988/CP_IMG_20171011_0509.jpg',
          alt: 'Кремль, VIII съезд общества ЗНАНИЕ',
          title: 'Кремль, VIII съезд общества ЗНАНИЕ',
          note: 'Более широкая общественно-институциональная сцена, расширяющая ощущение галереи.',
        },
        {
          id: 'portrait-h',
          group: 'reference',
          src: 'https://osimi.org/wp-content/uploads/photo-gallery/1941-1955/CP_IMG_20170922_0064.jpg',
          alt: 'В эвакуационном военном госпитале, у реки Нерон',
          title: 'В эвакуационном военном госпитале, у реки Нерон',
          note: 'Нужно, чтобы почувствовать, как материалы военного и раннего жизненного периода могут войти в будущую хронологическую галерею.',
        },
      ],
    },
    groups: {
      label: 'Будущая группировка',
      title: 'Как может быть организована полная галерея',
      items: [
        { title: 'Портреты', body: 'Официальные портреты, студийные изображения и более поздние референсные копии.' },
        { title: 'Общественная жизнь', body: 'Церемонии, встречи, лекции, делегации и институциональные появления.' },
        { title: 'Память и коммеморация', body: 'Памятные встречи, показы, выставки и более поздние визуальные записи памяти.' },
      ],
    },
  },
}

export function getArchiveGalleryContent(locale: Locale) {
  return archiveGalleryContent[locale]
}
