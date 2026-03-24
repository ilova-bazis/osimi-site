import type { Locale } from '@/lib/i18n/locales'

export type ExplorePageKey = 'biography' | 'timeline' | 'works' | 'documentary' | 'archive' | 'quotes'

export type ExploreLink = {
  key: ExplorePageKey
  href: string
  label: string
  description: string
}

type ExploreLinksContent = {
  title: string
  items: ExploreLink[]
}

const exploreLinksContent: Record<Locale, ExploreLinksContent> = {
  en: {
    title: 'Continue Exploring',
    items: [
      {
        key: 'biography',
        href: '/biography',
        label: 'Biography',
        description: 'Read the fuller narrative of his life, public service, and intellectual formation.',
      },
      {
        key: 'timeline',
        href: '/timeline',
        label: 'Timeline',
        description: 'Follow the chronology of key events, appointments, publications, and milestones.',
      },
      {
        key: 'works',
        href: '/works',
        label: 'Works and Ideas',
        description: 'Explore his books, editorial projects, and major themes across science and culture.',
      },
      {
        key: 'documentary',
        href: '/documentary',
        label: 'Documentary',
        description: 'Watch the film and revisit screenings that carried his legacy to new audiences.',
      },
      {
        key: 'archive',
        href: '/archive',
        label: 'Archive',
        description: 'See the broader preservation effort around documents, photographs, and memory.',
      },
      {
        key: 'quotes',
        href: '/quotes',
        label: 'Quotes',
        description: 'Browse the moral and intellectual voice that runs through his public life and writings.',
      },
    ],
  },
  tg: {
    title: 'Идома диҳед',
    items: [
      {
        key: 'biography',
        href: '/biography',
        label: 'Зиндагинома',
        description: 'Шарҳи пурратари зиндагӣ, хизмати ҷамъиятӣ ва ташаккули фикрии ӯро бихонед.',
      },
      {
        key: 'timeline',
        href: '/timeline',
        label: 'Хронология',
        description: 'Рӯйдодҳо, вазифаҳо, нашрияҳо ва марҳилаҳои муҳими зиндагиро аз рӯи вақт пайгирӣ кунед.',
      },
      {
        key: 'works',
        href: '/works',
        label: 'Осор ва андешаҳо',
        description: 'Китобҳо, корҳои таҳрирӣ ва мавзӯъҳои асосии илмӣ ва фарҳангии ӯро бубинед.',
      },
      {
        key: 'documentary',
        href: '/documentary',
        label: 'Филм',
        description: 'Филм ва намоишҳоеро бинед, ки мероси ӯро ба аудиторияи нав расонданд.',
      },
      {
        key: 'archive',
        href: '/archive',
        label: 'Бойгонӣ',
        description: 'Бо талоши фарохтари ҳифзи санадҳо, аксҳо ва ҳофиза шинос шавед.',
      },
      {
        key: 'quotes',
        href: '/quotes',
        label: 'Иқтибосҳо',
        description: 'Садои ахлоқӣ ва зеҳниеро, ки дар осор ва ҳаёти ҷамъиятии ӯ ҷорӣ аст, мутолиа кунед.',
      },
    ],
  },
  ru: {
    title: 'Продолжить исследование',
    items: [
      {
        key: 'biography',
        href: '/biography',
        label: 'Биография',
        description: 'Прочитайте более полный рассказ о его жизни, общественном служении и интеллектуальном становлении.',
      },
      {
        key: 'timeline',
        href: '/timeline',
        label: 'Хронология',
        description: 'Проследите ключевые события, должности, публикации и важные общественные вехи.',
      },
      {
        key: 'works',
        href: '/works',
        label: 'Труды и идеи',
        description: 'Изучите книги, редакторские проекты и главные темы его работы в науке и культуре.',
      },
      {
        key: 'documentary',
        href: '/documentary',
        label: 'Фильм',
        description: 'Посмотрите фильм и показы, которые заново представили его наследие новой аудитории.',
      },
      {
        key: 'archive',
        href: '/archive',
        label: 'Архив',
        description: 'Познакомьтесь с более широкой работой по сохранению документов, фотографий и памяти.',
      },
      {
        key: 'quotes',
        href: '/quotes',
        label: 'Цитаты',
        description: 'Откройте нравственный и интеллектуальный голос, проходящий через его труды и общественную жизнь.',
      },
    ],
  },
}

export function getExploreLinks(locale: Locale) {
  return exploreLinksContent[locale]
}
