import Link from 'next/link'
import Image from 'next/image'
import type { DocumentaryContent } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type DocumentaryProps = {
  locale: Locale
  content: DocumentaryContent
  posterSrc?: string
}

export default function Documentary({ locale, content, posterSrc }: DocumentaryProps) {
  return (
    <section className="section doc" id="documentary" aria-labelledby="doc-title">
      <div className="container">
        <div className="doc__inner">
          <div className="doc__poster-wrap">
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt={content.posterAlt}
                className="doc__poster"
                width={380}
                height={570}
              />
            ) : (
              <div className="doc__poster-placeholder" aria-hidden="true" />
            )}
            <span className="doc__poster-badge">{content.posterBadge}</span>
          </div>

          <div className="doc__content">
            <p className="label">{content.label}</p>
            <h2 className="doc__title" id="doc-title">
              {content.title}
            </h2>
            <p className="doc__subtitle">{content.subtitle}</p>
            <div className="divider" />
            <p className="doc__body">{content.paragraphs[0]}</p>
            <p className="doc__body">{content.paragraphs[1]}</p>
            <p className="doc__meta">{content.meta}</p>
            <div className="doc__actions">
              <Link href={`/${locale}/documentary`} className="btn btn--primary">
                {content.trailerCta}
              </Link>
              <Link href={`/${locale}/documentary#screenings`} className="btn btn--outline">
                {content.screeningsCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
