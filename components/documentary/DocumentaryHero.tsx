import Image from 'next/image'
import DocumentaryTrailerPlayer from '@/components/documentary/DocumentaryTrailerPlayer'
import type { DocumentaryPageContent } from '@/content/documentary'

type DocumentaryHeroProps = {
  content: DocumentaryPageContent['hero']
  posterSrc?: string
}

export default function DocumentaryHero({ content, posterSrc }: DocumentaryHeroProps) {
  return (
    <section className="documentary-hero section section--ivory" aria-labelledby="documentary-title">
      <div className="container documentary-hero__inner">
        <div className="documentary-hero__copy">
          <p className="label">{content.label}</p>
          <h1 className="page-hero__title documentary-hero__title" id="documentary-title">
            {content.title}
          </h1>
          <p className="page-hero__subtitle documentary-hero__subtitle">{content.subtitle}</p>
          <div className="divider" />
          <p className="documentary-hero__intro">{content.intro}</p>
          <div className="documentary-hero__actions">
            <a
              href={content.trailerHref}
              className="btn btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              {content.trailerCta}
            </a>
            <a href="#screenings" className="btn btn--outline">
              {content.screeningsCta}
            </a>
          </div>
        </div>

        <div className="documentary-hero__media">
          <div className="documentary-hero__poster-card">
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt={content.posterAlt}
                className="documentary-hero__poster"
                width={420}
                height={630}
                priority
              />
            ) : (
              <div className="documentary-hero__poster-placeholder" aria-hidden="true" />
            )}
            <span className="documentary-hero__badge">{content.posterBadge}</span>
          </div>

          <DocumentaryTrailerPlayer
            title={content.title}
            trailerHref={content.trailerHref}
            trailerEmbedHref={content.trailerEmbedHref}
            trailerLabel={content.trailerLabel}
            openLabel={content.trailerOpenLabel}
            closeLabel={content.trailerCloseLabel}
          />
        </div>
      </div>
    </section>
  )
}
