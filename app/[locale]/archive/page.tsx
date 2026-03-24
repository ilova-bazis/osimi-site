import type { Metadata } from 'next'
import ArchivePage from '@/components/archive/ArchivePage'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import { getArchiveContent } from '@/content/archive'
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
  const content = getArchiveContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/archive`,
      languages: {
        en: '/en/archive',
        tg: '/tg/archive',
        ru: '/ru/archive',
        'x-default': `/${defaultLocale}/archive`,
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/archive`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'article',
    },
  }
}

function getArchiveJsonLd(locale: Locale) {
  const content = getArchiveContent(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.metadata.title,
    description: content.metadata.description,
    url: `/${locale}/archive`,
  }
}

export default async function ArchiveRoute({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getArchiveContent(locale)
  const chrome = getHomePageContent(locale).chrome
  const jsonLd = getArchiveJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <ArchivePage locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
