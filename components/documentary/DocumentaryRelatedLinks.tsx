import Link from 'next/link'
import type { DocumentaryPageContent } from '@/content/documentary'
import type { Locale } from '@/lib/i18n/locales'

type DocumentaryRelatedLinksProps = {
  locale: Locale
  content: DocumentaryPageContent['relatedLinks']
}

export default function DocumentaryRelatedLinks({ locale, content }: DocumentaryRelatedLinksProps) {
  return (
    <section className="documentary-related section section--ivory-d" aria-labelledby="documentary-related-title">
      <div className="container">
        <h2 className="section-title documentary-related__title" id="documentary-related-title">
          {content.title}
        </h2>
        <div className="documentary-related__grid">
          {content.items.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="documentary-related__card">
              <p className="label documentary-related__label">{item.label}</p>
              <p className="documentary-related__desc">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
