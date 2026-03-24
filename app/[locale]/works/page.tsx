import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import WorksPage from '@/components/works/WorksPage'
import { getHomePageContent } from '@/content/home'
import { getWorksContent } from '@/content/works'
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
  const content = getWorksContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/works`,
      languages: {
        en: '/en/works',
        tg: '/tg/works',
        ru: '/ru/works',
        'x-default': `/${defaultLocale}/works`,
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/works`,
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

function getWorksJsonLd(locale: Locale) {
  const content = getWorksContent(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.metadata.title,
    description: content.metadata.description,
    url: `/${locale}/works`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: content.selected.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.note,
      })),
    },
  }
}

export default async function WorksRoute({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getWorksContent(locale)
  const chrome = getHomePageContent(locale).chrome
  const jsonLd = getWorksJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <WorksPage locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
