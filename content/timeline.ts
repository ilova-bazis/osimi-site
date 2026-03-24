import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Locale } from '@/lib/i18n/locales'

export type TimelineCategory =
  | 'life'
  | 'education'
  | 'war'
  | 'academia'
  | 'government'
  | 'unesco'
  | 'publications'

type RawTimelineEntry = {
  id: string
  displayYear: string
  startYear: number
  endYear?: number
  body: string
  notes: string[]
  category: TimelineCategory
}

export type TimelineGroup = {
  id: string
  title: string
  span: string
  countLabel: string
  entries: Array<RawTimelineEntry & { categoryLabel: string }>
}

export type TimelineFold = {
  id: string
  label: string
  entries: Array<RawTimelineEntry & { categoryLabel: string }>
}

export type TimelineStreamItem =
  | { type: 'entry'; entry: RawTimelineEntry & { categoryLabel: string; major: boolean } }
  | { type: 'fold'; fold: TimelineFold }

export type TimelinePageCopy = {
  metadata: {
    title: string
    description: string
  }
  label: string
  title: string
  intro: string
  referenceNote: string
  categoriesLabel: string
  foldLabel: string
  countSuffix: string
  categories: Record<TimelineCategory, string>
  periods: Array<{
    id: string
    title: string
    start: number
    end: number
  }>
}

const timelinePageCopy: Record<Locale, TimelinePageCopy> = {
  en: {
    metadata: {
      title: 'Timeline of Muhammad Osimi - Life, Scholarship, and Public Service',
      description:
        'A detailed chronological reference to the life of Muhammad Osimi, tracing his education, war service, academic leadership, government roles, UNESCO work, and late public legacy.',
    },
    label: 'Chronology',
    title: 'A Chronological Reference to a Life of Learning and Service',
    intro:
      'This expanded timeline gathers the dated chronology preserved in the biography reference files, allowing visitors to move through the major periods of Muhammad Osimi’s life in a more complete and documentary form.',
    referenceNote:
      'Compiled from the chronology sections of the biography reference files in English, Russian, and Tajik. The grouped view preserves the chronology while reducing visual overload.',
    categoriesLabel: 'Categories',
    foldLabel: 'Show more from',
    countSuffix: 'entries',
    categories: {
      life: 'Life',
      education: 'Education',
      war: 'War',
      academia: 'Academia',
      government: 'Government',
      unesco: 'UNESCO',
      publications: 'Publications',
    },
    periods: [
      { id: 'early-years', title: 'Early Life, Study, and War', start: 1920, end: 1949 },
      { id: 'formation', title: 'Academic Formation and Institute Leadership', start: 1950, end: 1959 },
      { id: 'state-science', title: 'State Leadership and Scientific Authority', start: 1960, end: 1969 },
      { id: 'international-rise', title: 'International Scholarship and UNESCO Expansion', start: 1970, end: 1979 },
      { id: 'late-soviet', title: 'Editorial, Parliamentary, and Cultural Leadership', start: 1980, end: 1989 },
      { id: 'final-years', title: 'Late Forums, UNESCO Work, and Final Years', start: 1990, end: 1996 },
    ],
  },
  ru: {
    metadata: {
      title: 'Хронология Мухаммада Осими - жизнь, наука и общественное служение',
      description:
        'Подробный хронологический обзор жизни Мухаммада Осими: образование, военная служба, научное руководство, государственные должности, работа с ЮНЕСКО и позднее общественное наследие.',
    },
    label: 'Хронология',
    title: 'Подробная хронология жизни, посвященной знанию и служению',
    intro:
      'Эта расширенная хронология собирает датированные записи из биографических справочных материалов и показывает основные периоды жизни Мухаммада Осими в более полном и документальном виде.',
    referenceNote:
      'Составлено по хронологическим разделам биографических материалов на английском, русском и таджикском языках. Группировка по периодам помогает сохранить полноту без перегрузки страницы.',
    categoriesLabel: 'Категории',
    foldLabel: 'Показать больше за',
    countSuffix: 'записей',
    categories: {
      life: 'Жизнь',
      education: 'Образование',
      war: 'Война',
      academia: 'Наука',
      government: 'Государство',
      unesco: 'ЮНЕСКО',
      publications: 'Публикации',
    },
    periods: [
      { id: 'early-years', title: 'Ранние годы, учеба и война', start: 1920, end: 1949 },
      { id: 'formation', title: 'Научное становление и руководство институтом', start: 1950, end: 1959 },
      { id: 'state-science', title: 'Государственное руководство и научный авторитет', start: 1960, end: 1969 },
      { id: 'international-rise', title: 'Международная наука и расширение работы с ЮНЕСКО', start: 1970, end: 1979 },
      { id: 'late-soviet', title: 'Редакторская, парламентская и культурная деятельность', start: 1980, end: 1989 },
      { id: 'final-years', title: 'Поздние форумы, работа с ЮНЕСКО и последние годы', start: 1990, end: 1996 },
    ],
  },
  tg: {
    metadata: {
      title: 'Хронологияи Муҳаммад Осимӣ - зиндагӣ, илм ва хизмати ҷамъиятӣ',
      description:
        'Шарҳи муфассали хронологии ҳаёти Муҳаммад Осимӣ: таҳсил, хизмати ҷангӣ, роҳбарии илмӣ, вазифаҳои давлатӣ, фаъолият бо ЮНЕСКО ва мероси дерини ҷамъиятӣ.',
    },
    label: 'Хронология',
    title: 'Хронологияи муфассали зиндагие, ки ба дониш ва хизмат бахшида шуд',
    intro:
      'Ин хронологияи васеъ сабтҳои таърихии дорои сана аз матнҳои тарҷумаиҳолиро гирд оварда, давраҳои асосии ҳаёт ва фаъолияти Муҳаммад Осимиро ба шакли муфассалтару ҳуҷҷатӣ нишон медиҳад.',
    referenceNote:
      'Бар асоси бахшҳои хронологии матнҳои тарҷумаиҳолӣ ба забонҳои англисӣ, русӣ ва тоҷикӣ тартиб дода шудааст. Гурӯҳбандии давраҳо имкон медиҳад, ки матолиб пурратар бошанд, аммо саҳифа ороста монад.',
    categoriesLabel: 'Категорияҳо',
    foldLabel: 'Намоиши бештар аз',
    countSuffix: 'сабт',
    categories: {
      life: 'Зиндагӣ',
      education: 'Таҳсил',
      war: 'Ҷанг',
      academia: 'Илм',
      government: 'Давлат',
      unesco: 'ЮНЕСКО',
      publications: 'Нашрияҳо',
    },
    periods: [
      { id: 'early-years', title: 'Солҳои аввал, таҳсил ва ҷанг', start: 1920, end: 1949 },
      { id: 'formation', title: 'Ташаккули илмӣ ва роҳбарии донишкада', start: 1950, end: 1959 },
      { id: 'state-science', title: 'Роҳбарии давлатӣ ва нуфузи илмӣ', start: 1960, end: 1969 },
      { id: 'international-rise', title: 'Илми байналмилалӣ ва густариши кори ЮНЕСКО', start: 1970, end: 1979 },
      { id: 'late-soviet', title: 'Фаъолияти таҳрирӣ, парлумонӣ ва фарҳангӣ', start: 1980, end: 1989 },
      { id: 'final-years', title: 'Форумҳои дерин, кори ЮНЕСКО ва солҳои охир', start: 1990, end: 1996 },
    ],
  },
}

const assetPathByLocale: Record<Locale, string> = {
  en: join(/* turbopackIgnore: true */ process.cwd(), 'assets', 'biography-en.txt'),
  ru: join(/* turbopackIgnore: true */ process.cwd(), 'assets', 'biography-ru.txt'),
  tg: join(/* turbopackIgnore: true */ process.cwd(), 'assets', 'biography-tj.txt'),
}

const birthRegexByLocale: Partial<Record<Locale, RegExp>> = {
  en: /^Asimov Muhammad Saifitdinovich \(Muhammad Osimi\) was born on (.+)$/,
}

const categoryMatchers: Record<Locale, Array<{ category: TimelineCategory; patterns: RegExp[] }>> = {
  en: [
    { category: 'war', patterns: [/war/i, /army/i, /leningrad/i, /armed forces/i, /victory/i, /patriotic/i] },
    { category: 'education', patterns: [/student/i, /faculty/i, /school/i, /post-graduate/i, /education/i, /teacher/i] },
    { category: 'government', patterns: [/minister/i, /secretary/i, /council of ministers/i, /supreme soviet/i, /deputy/i, /congress of the communist party/i, /inter-parliamentary/i, /committee for party state control/i] },
    { category: 'unesco', patterns: [/unesco/i, /iascca/i, /silk road/i, /central asia/i] },
    { category: 'publications', patterns: [/encyclopedia/i, /history of civilizations/i, /editorial committee/i, /drafting committee/i, /publication/i] },
    { category: 'academia', patterns: [/academy/i, /institute/i, /science/i, /scientific/i, /professor/i, /philosophy/i, /thesis/i, /report/i] },
  ],
  ru: [
    { category: 'war', patterns: [/войн/i, /армии/i, /ленинград/i, /вооруженных сил/i, /побед/i, /отечественн/i] },
    { category: 'education', patterns: [/студент/i, /факультет/i, /школ/i, /аспирант/i, /образован/i, /учитель/i] },
    { category: 'government', patterns: [/министр/i, /секретар/i, /совет министров/i, /верховн(ого|ый) совет/i, /депутат/i, /межпарламент/i, /коммунистической партии/i, /партийно-государственного контроля/i] },
    { category: 'unesco', patterns: [/юнеско/i, /шелков/i, /центральной азии/i] },
    { category: 'publications', patterns: [/энциклопед/i, /истории цивилизаций/i, /редакцион/i, /издани/i, /публикац/i] },
    { category: 'academia', patterns: [/академ/i, /институт/i, /наук/i, /научн/i, /профессор/i, /философ/i, /диссертац/i, /доклад/i] },
  ],
  tg: [
    { category: 'war', patterns: [/ҷанг/i, /армия/i, /ленинград/i, /қувваҳои мусаллаҳ/i, /ғалаба/i, /ватанӣ/i] },
    { category: 'education', patterns: [/донишҷӯ/i, /факулта/i, /мактаб/i, /аспирант/i, /маориф/i, /дотсент/i, /таҳсил/i] },
    { category: 'government', patterns: [/вазир/i, /котиб/i, /шӯрои олӣ/i, /шӯрои вазирон/i, /вакил/i, /байнипарлумон/i, /ҳизби коммунист/i, /назорати партиявию давлатӣ/i] },
    { category: 'unesco', patterns: [/юнеско/i, /роҳи абрешим/i, /осиёи марказӣ/i] },
    { category: 'publications', patterns: [/энсиклопед/i, /таърихи тамаддун/i, /таҳририя/i, /нашр/i, /муҳаррир/i] },
    { category: 'academia', patterns: [/академия/i, /донишкада/i, /илм/i, /пажӯҳиш/i, /профессор/i, /фалсафа/i, /рисола/i, /маърӯза/i] },
  ],
}

const parsedCache = new Map<Locale, RawTimelineEntry[]>()

type ParsedEntryDraft = Omit<RawTimelineEntry, 'category'>

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').replace(/named afterA\./g, 'named after A.').trim()
}

function inferCategory(locale: Locale, body: string, notes: string[]) {
  const haystack = `${body} ${notes.join(' ')}`

  for (const matcher of categoryMatchers[locale]) {
    if (matcher.patterns.some((pattern) => pattern.test(haystack))) {
      return matcher.category
    }
  }

  if (body.includes('born') || body.includes('таваллуд') || body.includes('родил')) {
    return 'life'
  }

  return 'academia'
}

function parseTimelineEntries(locale: Locale) {
  const cached = parsedCache.get(locale)
  if (cached) {
    return cached
  }

  const text = readFileSync(assetPathByLocale[locale], 'utf8')
  const lines = text.split(/\r?\n/)
  const birthRegex = birthRegexByLocale[locale]
  const dateRegex = /^(\d{4}(?:\s*-\s*\d{4})?)\.?\s*(.*)$/
  const entries: RawTimelineEntry[] = []
  let current: ParsedEntryDraft | null = null
  let started = false

  const pushCurrent = () => {
    if (!current) {
      return
    }

    const cleaned: RawTimelineEntry = {
      ...current,
      body: normalizeText(current.body || '[No summary text in source line]'),
      notes: current.notes.map(normalizeText).filter(Boolean),
      category: inferCategory(locale, current.body, current.notes),
    }

    entries.push(cleaned)
    current = null
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      continue
    }

    if (!started && birthRegex) {
      const birthMatch = birthRegex.exec(line)
      if (birthMatch) {
        started = true
        pushCurrent()
        current = {
          id: `${locale}-1920-birth`,
          displayYear: '1920',
          startYear: 1920,
          body: birthMatch[1],
          notes: [],
        }
        continue
      }
    }

    const dateMatch = dateRegex.exec(line)
    if (dateMatch && /^\d{4}/.test(dateMatch[1])) {
      started = true
      pushCurrent()
      const displayYear = dateMatch[1].replace(/\s+/g, '')
      const [startYearText, endYearText] = displayYear.split('-')
      const startYear = Number.parseInt(startYearText, 10)
      const endYear = endYearText ? Number.parseInt(endYearText, 10) : undefined
      const ordinal = entries.filter((entry) => entry.startYear === startYear).length + 1

      current = {
        id: `${locale}-${displayYear}-${ordinal}`,
        displayYear,
        startYear,
        endYear,
        body: dateMatch[2],
        notes: [],
      }
      continue
    }

    if (!started || !current) {
      continue
    }

    current.notes.push(line)
  }

  pushCurrent()
  parsedCache.set(locale, entries)
  return entries
}

function formatCount(locale: Locale, count: number) {
  const copy = timelinePageCopy[locale]
  return `${count} ${copy.countSuffix}`
}

function isMajorEntry(locale: Locale, entry: RawTimelineEntry) {
  const body = entry.body.toLowerCase()

  if (entry.startYear === 1920) return true
  if (entry.displayYear === '1934-1937') return true
  if (entry.displayYear === '1937-1941') return true
  if (entry.displayYear === '1941-1946') return true
  if (entry.displayYear === '1946-1952') return true
  if (entry.displayYear === '1952-1955') return true
  if (entry.displayYear === '1956-1962') return true
  if (entry.displayYear === '1962-1965') return true
  if (entry.displayYear === '1965-1988') return true
  if (entry.displayYear === '1977-1996') return true
  if (entry.displayYear === '1978-1987') return true
  if (entry.displayYear === '1989-1996') return true

  const majorPatterns: Record<Locale, RegExp[]> = {
    en: [
      /minister of public education/i,
      /elected as a full member/i,
      /president of the academy of sciences/i,
      /defended a thesis on "the concept of matter/i,
      /elected corresponding member/i,
      /order of lenin/i,
      /international jawaharlal nehru prize/i,
      /history of civilizations of central asia/i,
      /unesco headquarters in paris/i,
      /third world tajiks forum/i,
    ],
    ru: [
      /министр народного просвещения/i,
      /избран действительным членом/i,
      /президент академии наук/i,
      /защитил диссертацию .*понятие материи/i,
      /избран членом-корреспондентом/i,
      /орденом ленина/i,
      /международной премии имени джавахарлала неру/i,
      /истории цивилизаций центральной азии/i,
      /штаб-квартиру юнеско в париже/i,
      /третьего всемирного форума таджиков/i,
    ],
    tg: [
      /вазири маорифи халқи/i,
      /узви пайвастаи .*академияи илм/i,
      /президенти академияи илм/i,
      /дифои рисолаи доктор/i,
      /узви вобастаи академияи илмҳои иҷшс/i,
      /ордени ленин/i,
      /мукофоти байналмилалии ба номи ҷавоҳирлал неру/i,
      /таърихи тамаддунҳои осиёи марказӣ/i,
      /қароргоҳи юнеско дар париж/i,
      /форуми сеюми умумиҷаҳонии тоҷикон/i,
    ],
  }

  return majorPatterns[locale].some((pattern) => pattern.test(body))
}

function formatFoldRange(entries: Array<RawTimelineEntry & { categoryLabel: string }>) {
  const first = entries[0]
  const last = entries[entries.length - 1]
  if (!first || !last) return ''
  if (first.displayYear === last.displayYear) return first.displayYear
  return `${first.displayYear} - ${last.displayYear}`
}

export function getTimelinePageCopy(locale: Locale) {
  return timelinePageCopy[locale]
}

export function getTimelineEntries(locale: Locale) {
  const copy = timelinePageCopy[locale]

  return parseTimelineEntries(locale).map((entry) => ({
    ...entry,
    categoryLabel: copy.categories[entry.category],
  }))
}

export function getTimelineGroups(locale: Locale): TimelineGroup[] {
  const copy = timelinePageCopy[locale]
  const entries = getTimelineEntries(locale)

  return copy.periods
    .map((period) => {
      const periodEntries = entries.filter(
        (entry) => entry.startYear >= period.start && entry.startYear <= period.end
      )

      return {
        id: period.id,
        title: period.title,
        span: `${period.start}-${period.end}`,
        countLabel: formatCount(locale, periodEntries.length),
        entries: periodEntries,
      }
    })
    .filter((group) => group.entries.length > 0)
}

export function getTimelineStream(locale: Locale): TimelineStreamItem[] {
  const copy = timelinePageCopy[locale]
  const entries = getTimelineEntries(locale).map((entry) => ({
    ...entry,
    major: isMajorEntry(locale, entry),
  }))

  const stream: TimelineStreamItem[] = []
  let foldBuffer: Array<(typeof entries)[number]> = []

  const flushFold = () => {
    if (foldBuffer.length === 0) return
    stream.push({
      type: 'fold',
      fold: {
        id: `fold-${foldBuffer[0].id}-${foldBuffer[foldBuffer.length - 1].id}`,
        label: `${copy.foldLabel} ${formatFoldRange(foldBuffer)} · ${formatCount(locale, foldBuffer.length)}`,
        entries: foldBuffer,
      },
    })
    foldBuffer = []
  }

  entries.forEach((entry, index) => {
    if (index === 0 || entry.major) {
      flushFold()
      stream.push({ type: 'entry', entry })
      return
    }

    foldBuffer.push(entry)
  })

  flushFold()

  return stream
}
