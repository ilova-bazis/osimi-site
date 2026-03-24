import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import DocumentaryDetails from '@/components/documentary/DocumentaryDetails'
import DocumentaryHero from '@/components/documentary/DocumentaryHero'
import DocumentaryQuote from '@/components/documentary/DocumentaryQuote'
import DocumentaryScreenings from '@/components/documentary/DocumentaryScreenings'
import DocumentarySynopsis from '@/components/documentary/DocumentarySynopsis'
import ContinueExploring from '@/components/shared/ContinueExploring'
import { getDocumentaryContent } from '@/content/documentary'
import { getHomePageContent } from '@/content/home'
import { defaultLocale, getLocaleOrNotFound, locales, type Locale } from '@/lib/i18n/locales'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getDocumentaryContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/documentary`,
      languages: {
        en: '/en/documentary',
        tg: '/tg/documentary',
        ru: '/ru/documentary',
        'x-default': `/${defaultLocale}/documentary`,
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/documentary`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
    },
  }
}

function getDocumentaryJsonLd(locale: Locale) {
  const content = getDocumentaryContent(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: content.hero.title,
    description: content.metadata.description,
    inLanguage: locale,
    datePublished: '2020',
    image: '/images/home/documentary-poster.jpg',
    trailer: content.hero.trailerHref,
    actor: [],
    subjectOf: content.screenings.items.map((screening) => ({
      '@type': 'Event',
      name: screening.title,
      location: screening.venue,
      startDate: screening.date,
      url: screening.sourceHref,
    })),
  }
}

export default async function DocumentaryPage({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getDocumentaryContent(locale)
  const chrome = getHomePageContent(locale).chrome
  const jsonLd = getDocumentaryJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <DocumentaryHero content={content.hero} posterSrc="/images/home/documentary-poster.jpg" />
        <DocumentarySynopsis content={content.synopsis} />
        <DocumentaryDetails content={content.details} />
        <DocumentaryQuote content={content.quote} />
        <DocumentaryScreenings content={content.screenings} />
        <ContinueExploring locale={locale} currentPage="documentary" />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
