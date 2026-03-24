import Link from 'next/link'
import { getExploreLinks, type ExplorePageKey } from '@/content/explore-links'
import type { Locale } from '@/lib/i18n/locales'

type ContinueExploringProps = {
  locale: Locale
  currentPage: ExplorePageKey
}

export default function ContinueExploring({ locale, currentPage }: ContinueExploringProps) {
  const content = getExploreLinks(locale)
  const items = content.items.filter((item) => item.key !== currentPage)

  return (
    <section className="continue-exploring section section--ivory-d" aria-labelledby="continue-exploring-title">
      <div className="container">
        <h2 className="section-title continue-exploring__title" id="continue-exploring-title">
          {content.title}
        </h2>
        <div className="continue-exploring__grid">
          {items.map((item) => (
            <Link key={item.key} href={`/${locale}${item.href}`} className="continue-exploring__card">
              <p className="label continue-exploring__label">{item.label}</p>
              <p className="continue-exploring__description">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
