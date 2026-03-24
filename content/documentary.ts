import type { Locale } from '@/lib/i18n/locales'

export type DocumentaryMediaPreview = {
  src: string
  alt: string
  kind: 'photo' | 'video'
}

export type DocumentaryScreening = {
  city: string
  country: string
  date: string
  venue: string
  title: string
  summary: string
  sourceHref: string
  sourceLabel: string
  media: DocumentaryMediaPreview[]
}

export type DocumentaryPageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
    trailerHref: string
    trailerEmbedHref: string
    trailerCta: string
    screeningsCta: string
    posterBadge: string
    posterAlt: string
    trailerLabel: string
    trailerOpenLabel: string
    trailerCloseLabel: string
  }
  synopsis: {
    label: string
    title: string
    paragraphs: string[]
  }
  details: {
    label: string
    title: string
    items: Array<{ term: string; value: string }>
    highlights: Array<{ title: string; body: string }>
  }
  quote: {
    text: string
    attribution: string
  }
  screenings: {
    label: string
    title: string
    intro: string
    items: DocumentaryScreening[]
  }
  relatedLinks: {
    title: string
    items: Array<{ href: string; label: string; description: string }>
  }
}

const documentaryContent: Record<Locale, DocumentaryPageContent> = {
  en: {
    metadata: {
      title: 'Documentary - Osimi',
      description:
        'Explore the documentary Osimi, its trailer, production context, and international screenings in Paris, London, Cambridge, and New Delhi.',
    },
    hero: {
      label: 'Documentary',
      title: 'Osimi',
      subtitle: 'A documentary bridge between memory, scholarship, and public life',
      intro:
        'The film Osimi brings Muhammad Osimi into the present tense. Through testimony, archive, and international reflection, it presents him not only as a historical figure, but as a moral and intellectual presence whose life still speaks to questions of culture, education, peace, and responsibility.',
      trailerHref: 'https://youtu.be/iyS6nLA2XLM?si=NLln_J6a6Z74XjKC',
      trailerEmbedHref: 'https://www.youtube.com/embed/iyS6nLA2XLM?autoplay=1&rel=0',
      trailerCta: 'Watch the Trailer',
      screeningsCta: 'Jump to Screenings',
      posterBadge: '2020 Documentary',
      posterAlt: 'Poster for the documentary Osimi',
      trailerLabel: 'Trailer preview',
      trailerOpenLabel: 'Play trailer in large view',
      trailerCloseLabel: 'Close trailer',
    },
    synopsis: {
      label: 'Film Overview',
      title: 'A life framed through witness and aftermath',
      paragraphs: [
        'The legacy site describes Osimi as the story of a man once called the "Nelson Mandela" of Central Asia. The documentary follows how one scholar and public intellectual became a figure of ethical steadiness during upheaval, and how his commitments to education, science, and culture continued to shape the society around him.',
        'Narrated by Ali MacGraw and filmed across Tajikistan, India, France, Spain, Russia, and the United States, the project uses memory, archival material, and contemporary voices to connect Osimi\'s life to a wider international audience.',
        'What makes the film compelling is not only biography, but transmission: the way students, family members, scholars, and cultural institutions continue to carry the ideas he lived for. On this page, the film is presented together with later screenings that turned the documentary into a living public conversation.',
      ],
    },
    details: {
      label: 'Production Details',
      title: 'Film context and public afterlife',
      items: [
        { term: 'Release', value: '2020 documentary feature' },
        { term: 'Narration', value: 'Ali MacGraw' },
        { term: 'Director / Producer', value: 'Chris Schueler' },
        {
          term: 'Filming locations',
          value: 'Tajikistan, India, France, Spain, Russia, and the United States',
        },
        {
          term: 'Public screenings featured here',
          value: 'Paris, London, Cambridge, and New Delhi in 2025',
        },
      ],
      highlights: [
        {
          title: 'A contemporary entry point',
          body: 'The documentary serves as one of the clearest ways for new audiences to encounter Osimi through voice, place, and testimony rather than chronology alone.',
        },
        {
          title: 'International reception',
          body: 'The 2025 screenings show the film functioning as a convening space across universities, cultural centers, and UNESCO-linked public venues.',
        },
        {
          title: 'Beyond text-only records',
          body: 'The screening pages preserve not just dates and venues, but visual traces of gatherings, discussions, foyer displays, interviews, and audience response.',
        },
      ],
    },
    quote: {
      text: 'You have brought Central Asia to the whole world in its form as land from where another Gandhi and another Martin Luther King, another Nelson Mandela was born. Like them, Muhammad Osimi is immortal, he lives in the memory of the entire humanity.',
      attribution: 'Prof. Kashi Nath Pandita',
    },
    screenings: {
      label: 'Screenings',
      title: 'International Screenings 2025',
      intro:
        'The screenings transformed the film from a single documentary release into a shared public event. Each stop gathered its own speakers, atmosphere, and visual record. Instead of listing them only as text, this page brings forward a few gallery moments from each event.',
      items: [
        {
          city: 'Paris',
          country: 'France',
          date: 'February 21, 2025',
          venue: 'UNESCO Headquarters, Cinema Hall',
          title: 'UNESCO Screening in Paris',
          summary:
            'The Paris screening at UNESCO framed the film within an explicitly international setting. The surviving gallery emphasizes opening remarks, foyer conversations, guest arrivals, and displays of books and photographs that turned the event into both screening and exhibition.',
          sourceHref: 'https://osimi.org/?page_id=710',
          sourceLabel: 'Open full Paris gallery',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jcQhepOKD1o/hq2.jpg',
              alt: 'Opening remarks before the UNESCO screening in Paris',
              kind: 'video',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/IMG_2380.jpg?bwg=1749779672',
              alt: 'Guests gathered during the UNESCO screening in Paris',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/img_2288.jpg?bwg=1749779672',
              alt: 'Books and displays at the UNESCO screening in Paris',
              kind: 'photo',
            },
          ],
        },
        {
          city: 'London',
          country: 'United Kingdom',
          date: 'February 17, 2025',
          venue: 'Aga Khan Centre',
          title: 'Aga Khan Centre, London',
          summary:
            'The London event explicitly connected Osimi\'s intellectual legacy to cultural exchange and education. Its gallery centers on remarks, panel discussion, post-screening reflection, and audience presence, preserving the discussion-led character of the evening.',
          sourceHref: 'https://osimi.org/?page_id=718',
          sourceLabel: 'Open full London gallery',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jhZ0IK3PTfQ/hqdefault.jpg',
              alt: 'Panel discussion following the London screening',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/-jC8mCt4qY4/hqdefault.jpg',
              alt: 'Group photo after the London screening',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/NlED5adtZC8/hqdefault.jpg',
              alt: 'Audience watching the screening in London',
              kind: 'video',
            },
          ],
        },
        {
          city: 'Cambridge',
          country: 'United Kingdom',
          date: 'February 19, 2025',
          venue: 'University of Cambridge',
          title: 'Cambridge University Screening',
          summary:
            'At Cambridge, the film was presented in a setting centered on education and intergenerational knowledge. The documentation highlights opening introductions, reflections after the film, and a wide set of interviews that extend the screening into a longer conversation.',
          sourceHref: 'https://osimi.org/?page_id=740',
          sourceLabel: 'Open full Cambridge gallery',
          media: [
            {
              src: 'https://i.ytimg.com/vi/4SDtpuQ-8Q4/hqdefault.jpg',
              alt: 'Display at the Cambridge screening',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/M5irFvVqdYI/hqdefault.jpg',
              alt: 'Reflections and Q and A after the Cambridge screening',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/ftd4ecchQUI/hqdefault.jpg',
              alt: 'Interview with Chris Schueler in Cambridge',
              kind: 'video',
            },
          ],
        },
        {
          city: 'New Delhi',
          country: 'India',
          date: 'February 15, 2025',
          venue: 'India International Centre',
          title: 'Screening in New Delhi',
          summary:
            'The New Delhi record is especially visual, with a large photographic gallery spread across several pages. Even without extensive text, the event reads clearly as a major gathering, with formal portraits, audience scenes, and extensive documentation of the venue and attendees.',
          sourceHref: 'https://osimi.org/?page_id=748',
          sourceLabel: 'Open full India gallery',
          media: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/ER0A2104.jpg?bwg=1767808229',
              alt: 'Guests at the New Delhi screening',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0002.jpg?bwg=1767808228',
              alt: 'Audience scene from the New Delhi screening',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0088.jpg?bwg=1767808228',
              alt: 'Closing moments from the New Delhi screening gallery',
              kind: 'photo',
            },
          ],
        },
      ],
    },
    relatedLinks: {
      title: 'Continue Exploring',
      items: [
        {
          href: '/biography',
          label: 'Biography',
          description: 'Read the fuller life story behind the film.',
        },
        {
          href: '/timeline',
          label: 'Timeline',
          description: 'Follow key dates, institutions, and public milestones.',
        },
        {
          href: '/archive',
          label: 'Archive',
          description: 'See how memory, documents, and media continue to be preserved.',
        },
      ],
    },
  },
  tg: {
    metadata: {
      title: 'Филм - Осимӣ',
      description:
        'Бо филми мустанади «Осимӣ», трейлер, заминаи офариниш ва намоишҳои байналмилалии он дар Париж, Лондон, Кембриҷ ва Деҳлии Нав шинос шавед.',
    },
    hero: {
      label: 'Филм',
      title: 'Осимӣ',
      subtitle: 'Пули мустанад миёни ҳофиза, дониш ва ҳаёти ҷамъиятӣ',
      intro:
        'Филми «Осимӣ» Муҳаммад Осимиро ба замони имрӯз меорад. Тавассути хотира, бойгонӣ ва мулоҳизаҳои байналмилалӣ, ӯ на танҳо ҳамчун шахсияти таърихӣ, балки ҳамчун ҳузури ахлоқӣ ва зеҳнӣ нишон дода мешавад, ки зиндагияш ҳанӯз ҳам ба масъалаҳои фарҳанг, маориф, сулҳ ва масъулият сухан мегӯяд.',
      trailerHref: 'https://youtu.be/iyS6nLA2XLM?si=NLln_J6a6Z74XjKC',
      trailerEmbedHref: 'https://www.youtube.com/embed/iyS6nLA2XLM?autoplay=1&rel=0',
      trailerCta: 'Трейлерро тамошо кунед',
      screeningsCta: 'Ба намоишҳо гузаред',
      posterBadge: 'Филми мустанади 2020',
      posterAlt: 'Постери филми мустанади «Осимӣ»',
      trailerLabel: 'Пешнамоиши трейлер',
      trailerOpenLabel: 'Трейлерро дар шакли калон боз кунед',
      trailerCloseLabel: 'Бастани трейлер',
    },
    synopsis: {
      label: 'Шарҳи филм',
      title: 'Зиндагие, ки аз тариқи гувоҳӣ ва пасманзар бозгӯ мешавад',
      paragraphs: [
        'Дар сомонаи меросӣ «Осимӣ» саргузашти шахсе тавсиф мешавад, ки гоҳе ӯро «Нелсон Манделаи Осиёи Марказӣ» меномиданд. Филм нишон медиҳад, ки чӣ гуна як донишманд ва зиёии ҷамъиятӣ дар рӯзгори нооромӣ ба рамзи устувории ахлоқӣ табдил ёфт ва чӣ гуна садоқати ӯ ба маориф, илм ва фарҳанг ҷомеаи атрофашро шакл медод.',
        'Бо овози Али Макгроу ва бо наворбардорӣ дар Тоҷикистон, Ҳиндустон, Фаронса, Испания, Русия ва Иёлоти Муттаҳида, ин лоиҳа аз хотира, маводи бойгонӣ ва садоҳои имрӯзӣ истифода мебарад, то зиндагии Осимиро ба аудиторияи васеи байналмилалӣ пайванд диҳад.',
        'Ҷозибаи филм танҳо дар биография нест, балки дар идомаи он аст: дар он ки чӣ гуна шогирдон, аъзои хонавода, донишмандон ва муассисаҳои фарҳангӣ андешаҳоеро, ки ӯ барои онҳо зиндагӣ кард, то имрӯз ба пеш мебаранд. Дар ин саҳифа филм ҳамроҳ бо намоишҳои баъдии он ҳамчун гуфтугӯи зиндаи ҷамъиятӣ пешниҳод мешавад.',
      ],
    },
    details: {
      label: 'Маълумоти филм',
      title: 'Заминаи филм ва ҳаёти ҷамъиятии баъдии он',
      items: [
        { term: 'Сол', value: 'Филми мустанади соли 2020' },
        { term: 'Ровӣ', value: 'Али Макгроу' },
        { term: 'Коргардон / продюсер', value: 'Крис Шуелер' },
        {
          term: 'Ҷойҳои наворбардорӣ',
          value: 'Тоҷикистон, Ҳиндустон, Фаронса, Испания, Русия ва Иёлоти Муттаҳида',
        },
        {
          term: 'Намоишҳои ин саҳифа',
          value: 'Париж, Лондон, Кембриҷ ва Деҳлии Нав дар соли 2025',
        },
      ],
      highlights: [
        {
          title: 'Даромадгоҳи муосир ба мерос',
          body: 'Филм яке аз равшантарин роҳҳоест, ки тамошобини имрӯз метавонад Осимиро на танҳо аз тариқи хронология, балки аз тариқи садо, ҷой ва шаҳодат бишиносад.',
        },
        {
          title: 'Пазириши байналмилалӣ',
          body: 'Намоишҳои соли 2025 нишон медиҳанд, ки филм дар донишгоҳҳо, марказҳои фарҳангӣ ва муҳитҳои вобаста ба ЮНЕСКО ба фазои гирдиҳамоӣ табдил ёфтааст.',
        },
        {
          title: 'Фаротар аз қайди матнӣ',
          body: 'Саҳифаҳои намоишҳо на танҳо сана ва макон, балки тасвирҳои мулоқотҳо, баҳсҳо, намоишгоҳҳои хурд, мусоҳибаҳо ва ҳузури аудиторияро низ ҳифз мекунанд.',
        },
      ],
    },
    quote: {
      text: 'Шумо Осиёи Марказиро ба тамоми ҷаҳон ҳамчун сарзамине муаррифӣ кардед, ки аз он як Гандии дигар, як Мартин Лютер Кинги дигар ва як Нелсон Манделаи дигар бархостааст. Муҳаммад Осимӣ низ мисли онҳо ҷовидон аст ва дар хотираи тамоми башарият зиндагӣ мекунад.',
      attribution: 'Проф. Каши Натҳ Пандита',
    },
    screenings: {
      label: 'Намоишҳо',
      title: 'Намоишҳои байналмилалии соли 2025',
      intro:
        'Ин намоишҳо филмро аз як асари мустанад ба рӯйдоди муштараки ҷамъиятӣ табдил доданд. Ҳар истгоҳ муҳити худ, суханварони худ ва сабти визуалии худро дошт. Аз ин рӯ, дар ин саҳифа намоишҳо на танҳо бо матн, балки бо чанд лаҳзаи галереявӣ низ муаррифӣ мешаванд.',
      items: [
        {
          city: 'Париж',
          country: 'Фаронса',
          date: '21 феврали 2025',
          venue: 'Қароргоҳи ЮНЕСКО, толори кино',
          title: 'Намоиш дар ЮНЕСКО, Париж',
          summary:
            'Намоиши Париж дар ЮНЕСКО филмро дар як муҳити ошкори байналмилалӣ ҷойгир кард. Галереяи боқимонда асосан суханҳои ифтитоҳӣ, суҳбатҳои толори пешазнамоиш, омадани меҳмонон ва намоиши китобу аксҳоро нишон медиҳад, ки ин рӯйдодро ҳам намоиш ва ҳам як намоишгоҳи хурд гардонд.',
          sourceHref: 'https://osimi.org/?page_id=710',
          sourceLabel: 'Кушодани галереяи пурраи Париж',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jcQhepOKD1o/hq2.jpg',
              alt: 'Суханҳои ифтитоҳӣ пеш аз намоиши ЮНЕСКО дар Париж',
              kind: 'video',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/IMG_2380.jpg?bwg=1749779672',
              alt: 'Меҳмонон дар намоиши ЮНЕСКО дар Париж',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/img_2288.jpg?bwg=1749779672',
              alt: 'Китобҳо ва намоишгоҳ дар ЮНЕСКОи Париж',
              kind: 'photo',
            },
          ],
        },
        {
          city: 'Лондон',
          country: 'Шоҳигарии Муттаҳида',
          date: '17 феврали 2025',
          venue: 'Маркази Оғохон',
          title: 'Маркази Оғохон, Лондон',
          summary:
            'Рӯйдоди Лондон мероси зеҳнии Осимиро мустақиман бо мубодилаи фарҳангӣ ва маориф пайванд дод. Галерея бештар ба суханрониҳо, муҳокимаи ҳайатӣ, мулоҳизаҳои баъди намоиш ва ҳузури аудитория тамаркуз мекунад, ки хусусияти баҳсмӯҳвари шомро ҳифз менамояд.',
          sourceHref: 'https://osimi.org/?page_id=718',
          sourceLabel: 'Кушодани галереяи пурраи Лондон',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jhZ0IK3PTfQ/hqdefault.jpg',
              alt: 'Муҳокимаи ҳайатӣ баъд аз намоиш дар Лондон',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/-jC8mCt4qY4/hqdefault.jpg',
              alt: 'Акси дастаҷамъӣ баъд аз намоиш дар Лондон',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/NlED5adtZC8/hqdefault.jpg',
              alt: 'Аудитория ҳангоми намоиш дар Лондон',
              kind: 'video',
            },
          ],
        },
        {
          city: 'Кембриҷ',
          country: 'Шоҳигарии Муттаҳида',
          date: '19 феврали 2025',
          venue: 'Донишгоҳи Кембриҷ',
          title: 'Намоиш дар Донишгоҳи Кембриҷ',
          summary:
            'Дар Кембриҷ филм дар муҳите пешкаш шуд, ки ба таълим ва интиқоли дониш миёни наслҳо такя дорад. Ҳуҷҷатгузории рӯйдод суханони ифтитоҳӣ, мулоҳизаҳои пас аз филм ва силсилаи мусоҳибаҳоро нишон медиҳад, ки намоишро ба гуфтугӯи давомдор табдил медиҳанд.',
          sourceHref: 'https://osimi.org/?page_id=740',
          sourceLabel: 'Кушодани галереяи пурраи Кембриҷ',
          media: [
            {
              src: 'https://i.ytimg.com/vi/4SDtpuQ-8Q4/hqdefault.jpg',
              alt: 'Намоишгоҳи хурд дар барномаи Кембриҷ',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/M5irFvVqdYI/hqdefault.jpg',
              alt: 'Мулоҳиза ва саволу ҷавоб пас аз намоиш дар Кембриҷ',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/ftd4ecchQUI/hqdefault.jpg',
              alt: 'Мусоҳиба бо Крис Шуелер дар Кембриҷ',
              kind: 'video',
            },
          ],
        },
        {
          city: 'Деҳлии Нав',
          country: 'Ҳиндустон',
          date: '15 феврали 2025',
          venue: 'Маркази байналмилалии Ҳиндустон',
          title: 'Намоиш дар Деҳлии Нав',
          summary:
            'Сабти Деҳлии Нав махсусан визуалӣ аст: галереяи бузурги аксҳо, ки дар чанд саҳифа паҳн мешавад. Ҳатто бе матни зиёд ҳам рӯшан аст, ки ин рӯйдод як гирдиҳамоии муҳим буд, бо аксҳои расмӣ, саҳнаҳои аудитория ва ҳуҷҷатгузории фаровони макон ва иштирокдорон.',
          sourceHref: 'https://osimi.org/?page_id=748',
          sourceLabel: 'Кушодани галереяи пурраи Ҳиндустон',
          media: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/ER0A2104.jpg?bwg=1767808229',
              alt: 'Меҳмонон дар намоиши Деҳлии Нав',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0002.jpg?bwg=1767808228',
              alt: 'Саҳна аз аудитория дар намоиши Деҳлии Нав',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0088.jpg?bwg=1767808228',
              alt: 'Лаҳзаи анҷомини галереяи намоиши Деҳлии Нав',
              kind: 'photo',
            },
          ],
        },
      ],
    },
    relatedLinks: {
      title: 'Идома диҳед',
      items: [
        {
          href: '/biography',
          label: 'Зиндагинома',
          description: 'Саргузашти пурраи зиндагиро, ки пушти филм истодааст, бихонед.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Санаҳо, муассисаҳо ва марҳилаҳои муҳими ҷамъиятиро пайгирӣ кунед.',
        },
        {
          href: '/archive',
          label: 'Бойгонӣ',
          description: 'Бубинед, ки чӣ гуна хотира, санадҳо ва медиа то имрӯз ҳифз мешаванд.',
        },
      ],
    },
  },
  ru: {
    metadata: {
      title: 'Фильм - Осими',
      description:
        'Познакомьтесь с документальным фильмом «Осими», его трейлером, контекстом создания и международными показами в Париже, Лондоне, Кембридже и Нью-Дели.',
    },
    hero: {
      label: 'Фильм',
      title: 'Осими',
      subtitle: 'Документальный мост между памятью, знанием и общественной жизнью',
      intro:
        'Фильм «Осими» переводит фигуру Мухаммада Осими в настоящее время. Через память, архив и международное осмысление он предстает не только как историческая личность, но и как нравственное и интеллектуальное присутствие, чья жизнь до сих пор говорит о культуре, образовании, мире и ответственности.',
      trailerHref: 'https://youtu.be/iyS6nLA2XLM?si=NLln_J6a6Z74XjKC',
      trailerEmbedHref: 'https://www.youtube.com/embed/iyS6nLA2XLM?autoplay=1&rel=0',
      trailerCta: 'Смотреть трейлер',
      screeningsCta: 'Перейти к показам',
      posterBadge: 'Документальный фильм 2020',
      posterAlt: 'Постер документального фильма «Осими»',
      trailerLabel: 'Предпросмотр трейлера',
      trailerOpenLabel: 'Открыть трейлер в большом окне',
      trailerCloseLabel: 'Закрыть трейлер',
    },
    synopsis: {
      label: 'О фильме',
      title: 'Жизнь, показанная через свидетельство и продолжение',
      paragraphs: [
        'На сайте наследия фильм «Осими» описан как история человека, которого называли «Нельсоном Манделой Центральной Азии». Картина показывает, как ученый и общественный интеллектуал стал фигурой нравственной устойчивости в эпоху потрясений и как его приверженность образованию, науке и культуре продолжала формировать общество вокруг него.',
        'С закадровым текстом Али Макгроу и съемками в Таджикистане, Индии, Франции, Испании, России и Соединенных Штатах фильм соединяет память, архивные материалы и современные голоса, чтобы сделать жизнь Осими доступной более широкой международной аудитории.',
        'Сила фильма не только в биографическом рассказе, но и в передаче наследия: в том, как ученики, члены семьи, исследователи и культурные институции продолжают нести идеи, ради которых он жил. Здесь фильм представлен вместе с последующими показами, превратившими его в живой общественный разговор.',
      ],
    },
    details: {
      label: 'Контекст фильма',
      title: 'Производство и общественная жизнь фильма',
      items: [
        { term: 'Год', value: 'Документальный фильм 2020 года' },
        { term: 'Закадровый текст', value: 'Али Макгроу' },
        { term: 'Режиссер / продюсер', value: 'Крис Шуелер' },
        {
          term: 'Места съемок',
          value: 'Таджикистан, Индия, Франция, Испания, Россия и Соединенные Штаты',
        },
        {
          term: 'Показы на этой странице',
          value: 'Париж, Лондон, Кембридж и Нью-Дели в 2025 году',
        },
      ],
      highlights: [
        {
          title: 'Современная точка входа в наследие',
          body: 'Фильм остается одним из самых ясных способов познакомить новую аудиторию с Осими не только через хронологию, но и через голос, пространство и свидетельство.',
        },
        {
          title: 'Международное восприятие',
          body: 'Показы 2025 года показывают, как фильм стал пространством встречи в университетах, культурных центрах и публичных площадках, связанных с ЮНЕСКО.',
        },
        {
          title: 'Не только текстовая фиксация',
          body: 'Страницы показов сохраняют не только даты и площадки, но и визуальные следы дискуссий, выставочных витрин, интервью, встреч и реакции аудитории.',
        },
      ],
    },
    quote: {
      text: 'Вы представили Центральную Азию всему миру как землю, откуда вышли еще один Ганди, еще один Мартин Лютер Кинг, еще один Нельсон Мандела. Как и они, Мухаммад Осими бессмертен - он живет в памяти всего человечества.',
      attribution: 'Проф. Каши Натх Пандита',
    },
    screenings: {
      label: 'Показы',
      title: 'Международные показы 2025 года',
      intro:
        'Эти показы превратили фильм из отдельного документального релиза в совместное общественное событие. У каждой остановки была своя атмосфера, свои выступающие и свой визуальный след. Поэтому здесь показы представлены не только как список, но и как подборка визуальных фрагментов.',
      items: [
        {
          city: 'Париж',
          country: 'Франция',
          date: '21 февраля 2025',
          venue: 'Штаб-квартира ЮНЕСКО, кинозал',
          title: 'Показ в ЮНЕСКО, Париж',
          summary:
            'Парижский показ в ЮНЕСКО поместил фильм в отчетливо международный контекст. Сохранившаяся галерея подчеркивает вступительные речи, разговоры в фойе, прибытие гостей и экспозиции книг и фотографий, превращавшие вечер одновременно в показ и выставочное событие.',
          sourceHref: 'https://osimi.org/?page_id=710',
          sourceLabel: 'Открыть полную галерею Парижа',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jcQhepOKD1o/hq2.jpg',
              alt: 'Вступительное слово перед показом в ЮНЕСКО, Париж',
              kind: 'video',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/IMG_2380.jpg?bwg=1749779672',
              alt: 'Гости на показе в ЮНЕСКО, Париж',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/unesco/thumb/img_2288.jpg?bwg=1749779672',
              alt: 'Книги и витрина на показе в ЮНЕСКО, Париж',
              kind: 'photo',
            },
          ],
        },
        {
          city: 'Лондон',
          country: 'Великобритания',
          date: '17 февраля 2025',
          venue: 'Центр Ага Хана',
          title: 'Центр Ага Хана, Лондон',
          summary:
            'Лондонский вечер напрямую связал интеллектуальное наследие Осими с культурным обменом и образованием. Галерея сосредоточена на выступлениях, панельной дискуссии, послепоказных размышлениях и присутствии аудитории, сохраняя дискуссионный характер события.',
          sourceHref: 'https://osimi.org/?page_id=718',
          sourceLabel: 'Открыть полную галерею Лондона',
          media: [
            {
              src: 'https://i.ytimg.com/vi/jhZ0IK3PTfQ/hqdefault.jpg',
              alt: 'Панельная дискуссия после показа в Лондоне',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/-jC8mCt4qY4/hqdefault.jpg',
              alt: 'Общая фотография после показа в Лондоне',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/NlED5adtZC8/hqdefault.jpg',
              alt: 'Зрители во время показа в Лондоне',
              kind: 'video',
            },
          ],
        },
        {
          city: 'Кембридж',
          country: 'Великобритания',
          date: '19 февраля 2025',
          venue: 'Кембриджский университет',
          title: 'Показ в Кембридже',
          summary:
            'В Кембридже фильм был показан в среде, ориентированной на образование и межпоколенческую передачу знания. Документация подчеркивает вступительные представления, размышления после фильма и серию интервью, которые делают показ частью более долгого разговора.',
          sourceHref: 'https://osimi.org/?page_id=740',
          sourceLabel: 'Открыть полную галерею Кембриджа',
          media: [
            {
              src: 'https://i.ytimg.com/vi/4SDtpuQ-8Q4/hqdefault.jpg',
              alt: 'Экспозиция на показе в Кембридже',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/M5irFvVqdYI/hqdefault.jpg',
              alt: 'Обсуждение и вопросы после показа в Кембридже',
              kind: 'video',
            },
            {
              src: 'https://i.ytimg.com/vi/ftd4ecchQUI/hqdefault.jpg',
              alt: 'Интервью с Крисом Шуелером в Кембридже',
              kind: 'video',
            },
          ],
        },
        {
          city: 'Нью-Дели',
          country: 'Индия',
          date: '15 февраля 2025',
          venue: 'India International Centre',
          title: 'Показ в Нью-Дели',
          summary:
            'Документация нью-делийского показа особенно визуальна: большая фотогалерея, развернутая на нескольких страницах. Даже без большого объема текста ясно, что речь идет о значительном событии - с официальными портретами, сценами аудитории и подробной фиксацией пространства и участников.',
          sourceHref: 'https://osimi.org/?page_id=748',
          sourceLabel: 'Открыть полную галерею Индии',
          media: [
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/ER0A2104.jpg?bwg=1767808229',
              alt: 'Гости на показе в Нью-Дели',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0002.jpg?bwg=1767808228',
              alt: 'Сцена из аудитории на показе в Нью-Дели',
              kind: 'photo',
            },
            {
              src: 'https://osimi.org/wp-content/uploads/photo-gallery/india/thumb/IMG_0088.jpg?bwg=1767808228',
              alt: 'Финальные кадры галереи показа в Нью-Дели',
              kind: 'photo',
            },
          ],
        },
      ],
    },
    relatedLinks: {
      title: 'Продолжить исследование',
      items: [
        {
          href: '/biography',
          label: 'Биография',
          description: 'Прочитайте полную историю жизни, стоящую за фильмом.',
        },
        {
          href: '/timeline',
          label: 'Хронология',
          description: 'Проследите ключевые даты, институции и общественные вехи.',
        },
        {
          href: '/archive',
          label: 'Архив',
          description: 'Посмотрите, как продолжают сохраняться память, документы и медиа.',
        },
      ],
    },
  },
}

export function getDocumentaryContent(locale: Locale) {
  return documentaryContent[locale]
}
