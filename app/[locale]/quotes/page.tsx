import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import QuotesPage from '@/components/quotes/QuotesPage'
import { getHomePageContent } from '@/content/home'
import { getQuotesContent } from '@/content/quotes'
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
  const content = getQuotesContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/quotes`,
      languages: {
        en: '/en/quotes',
        tg: '/tg/quotes',
        ru: '/ru/quotes',
        'x-default': `/${defaultLocale}/quotes`,
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/quotes`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'article',
    },
  }
}

function getQuotesJsonLd(locale: Locale) {
  const content = getQuotesContent(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.metadata.title,
    description: content.metadata.description,
    url: `/${locale}/quotes`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: content.collection.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.text,
      })),
    },
  }
}

export default async function QuotesRoute({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getQuotesContent(locale)
  const chrome = getHomePageContent(locale).chrome
  const jsonLd = getQuotesJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <QuotesPage locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
