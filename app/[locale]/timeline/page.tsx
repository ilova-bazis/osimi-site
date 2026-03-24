import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import TimelinePage from '@/components/timeline/TimelinePage'
import { getHomePageContent } from '@/content/home'
import { getTimelineEntries, getTimelinePageCopy, getTimelineStream } from '@/content/timeline'
import { defaultLocale, getLocaleOrNotFound, locales, type Locale } from '@/lib/i18n/locales'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

function getTimelineMetadata(locale: Locale): Metadata {
  const copy = getTimelinePageCopy(locale)

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: `/${locale}/timeline`,
      languages: {
        en: '/en/timeline',
        tg: '/tg/timeline',
        ru: '/ru/timeline',
        'x-default': `/${defaultLocale}/timeline`,
      },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `/${locale}/timeline`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)

  return getTimelineMetadata(locale)
}

function getTimelineJsonLd(locale: Locale) {
  const copy = getTimelinePageCopy(locale)
  const entries = getTimelineEntries(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: copy.metadata.title,
    description: copy.metadata.description,
    url: `/${locale}/timeline`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: entries.map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${entry.displayYear} - ${entry.categoryLabel}`,
        description: [entry.body, ...entry.notes].join(' '),
      })),
    },
  }
}

export default async function TimelineRoute({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const chrome = getHomePageContent(locale).chrome
  const copy = getTimelinePageCopy(locale)
  const stream = getTimelineStream(locale)
  const jsonLd = getTimelineJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <TimelinePage
          label={copy.label}
          title={copy.title}
          intro={copy.intro}
          referenceNote={copy.referenceNote}
          categoriesLabel={copy.categoriesLabel}
          categories={Object.entries(copy.categories).map(([key, label]) => ({
            key: key as keyof typeof copy.categories,
            label,
          }))}
          stream={stream}
        />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
