import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import BiographyHero from '@/components/biography/BiographyHero'
import BiographyTOC from '@/components/biography/BiographyTOC'
import BiographySectionBlock from '@/components/biography/BiographySection'
import BiographyClosing from '@/components/biography/BiographyClosing'
import BiographyRelatedLinks from '@/components/biography/BiographyRelatedLinks'
import { getBiographyContent } from '@/content/biography'
import { getHomePageContent } from '@/content/home'
import { getLocaleOrNotFound, locales } from '@/lib/i18n/locales'

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
  const content = getBiographyContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}/biography`,
      languages: {
        en: '/en/biography',
        tg: '/tg/biography',
        ru: '/ru/biography',
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}/biography`,
      siteName: 'Muhammad Osimi',
      locale,
      type: 'website',
    },
  }
}

export default async function BiographyPage({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)
  const content = getBiographyContent(locale)
  const chrome = getHomePageContent(locale).chrome

  return (
    <>
      <Nav locale={locale} content={chrome} />
      <main className="bio-page">
        <BiographyHero content={content.hero} overview={content.overview} />

        <div className="container bio-body">
          <BiographyTOC content={content.sectionNav} />

          {content.sections.map((section, i) => (
            <BiographySectionBlock key={section.id} section={section} index={i} />
          ))}
        </div>

        <BiographyClosing content={content.closing} />
        <BiographyRelatedLinks locale={locale} content={content.relatedLinks} />
      </main>
      <Footer locale={locale} content={chrome} />
    </>
  )
}
