import type { Metadata } from 'next'
import ArchiveGalleryPage from '@/components/archive/ArchiveGalleryPage'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import { getArchiveGalleryContent } from '@/content/archive-gallery'
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
  const content = getArchiveGalleryContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/archive/gallery`,
      languages: {
        en: '/en/archive/gallery',
        tg: '/tg/archive/gallery',
        ru: '/ru/archive/gallery',
        'x-default': `/${defaultLocale}/archive/gallery`,
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/archive/gallery`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'article',
    },
  }
}

function getArchiveGalleryJsonLd(locale: Locale) {
  const content = getArchiveGalleryContent(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: content.metadata.title,
    description: content.metadata.description,
    url: `/${locale}/archive/gallery`,
  }
}

export default async function ArchiveGalleryRoute({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getArchiveGalleryContent(locale)
  const chrome = getHomePageContent(locale).chrome
  const jsonLd = getArchiveGalleryJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={locale} content={chrome} />
      <main>
        <ArchiveGalleryPage locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
