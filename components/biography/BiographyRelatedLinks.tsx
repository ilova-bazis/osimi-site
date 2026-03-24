import Link from 'next/link'
import type { BiographyPageContent } from '@/content/biography'
import type { Locale } from '@/lib/i18n/locales'

type BiographyRelatedLinksProps = {
  locale: Locale
  content: BiographyPageContent['relatedLinks']
}

export default function BiographyRelatedLinks({ locale, content }: BiographyRelatedLinksProps) {
  return (
    <section className="bio-related">
      <div className="container">
        <h2 className="bio-related__title section-title">{content.title}</h2>
        <div className="bio-related__grid">
          {content.items.map(({ href, label, description }) => (
            <Link key={href} href={`/${locale}${href}`} className="bio-related__card">
              <p className="label bio-related__card-label">{label}</p>
              <p className="bio-related__card-desc">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
