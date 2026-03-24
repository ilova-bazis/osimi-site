import Image from 'next/image'
import ContinueExploring from '@/components/shared/ContinueExploring'
import type { ArchiveGalleryPageContent } from '@/content/archive-gallery'
import type { Locale } from '@/lib/i18n/locales'

type ArchiveGalleryPageProps = {
  locale: Locale
  content: ArchiveGalleryPageContent
}

export default function ArchiveGalleryPage({ locale, content }: ArchiveGalleryPageProps) {
  return (
    <>
      <section className="archive-gallery-page-hero section section--ivory" aria-labelledby="archive-gallery-title">
        <div className="container archive-gallery-page-hero__inner">
          <div className="archive-gallery-page-hero__copy">
            <p className="label">{content.hero.label}</p>
            <h1 className="page-hero__title" id="archive-gallery-title">
              {content.hero.title}
            </h1>
            <p className="page-hero__subtitle archive-gallery-page-hero__subtitle">{content.hero.subtitle}</p>
            <div className="divider" />
            <p className="archive-gallery-page-hero__intro">{content.hero.intro}</p>
          </div>
        </div>
      </section>

      <section className="archive-gallery-featured section section--white" aria-labelledby="archive-gallery-featured-title">
        <div className="container archive-gallery-featured__inner">
          <div className="archive-gallery-featured__image-wrap">
            <Image
              src={content.featured.image.src}
              alt={content.featured.image.alt}
              className="archive-gallery-featured__image"
              width={820}
              height={620}
              priority
            />
          </div>
          <div className="archive-gallery-featured__copy">
            <p className="label">{content.featured.label}</p>
            <h2 className="section-title" id="archive-gallery-featured-title">
              {content.featured.image.title}
            </h2>
            <p className="archive-gallery-featured__note">{content.featured.image.note}</p>
          </div>
        </div>
      </section>

      <section className="archive-gallery-grid-section section section--ivory-d" aria-labelledby="archive-gallery-grid-title">
        <div className="container">
          <div className="archive-section__intro">
            <p className="label">{content.holdings.label}</p>
            <h2 className="section-title" id="archive-gallery-grid-title">
              {content.holdings.title}
            </h2>
            <p className="section-body">{content.holdings.intro}</p>
          </div>

          <div className="archive-gallery-toolbar" aria-hidden="true">
            <span className="archive-gallery-toolbar__chip is-active">All</span>
            <span className="archive-gallery-toolbar__chip">Portraits</span>
            <span className="archive-gallery-toolbar__chip">Public Life</span>
            <span className="archive-gallery-toolbar__chip">Institutions</span>
          </div>

          <div className="archive-gallery-grid">
            {content.holdings.items.map((item) => (
              <article className="archive-gallery-card" key={item.id}>
                <div className="archive-gallery-card__image-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="archive-gallery-card__image"
                    width={520}
                    height={390}
                  />
                </div>
                <div className="archive-gallery-card__copy">
                  <h3 className="archive-gallery-card__title">{item.title}</h3>
                  <p className="archive-gallery-card__note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-gallery-groups section section--white" aria-labelledby="archive-gallery-groups-title">
        <div className="container">
          <div className="archive-section__intro">
            <p className="label">{content.groups.label}</p>
            <h2 className="section-title" id="archive-gallery-groups-title">
              {content.groups.title}
            </h2>
          </div>

          <div className="archive-gallery-groups__grid">
            {content.groups.items.map((item) => (
              <article className="archive-gallery-group-card" key={item.title}>
                <h3 className="archive-gallery-group-card__title">{item.title}</h3>
                <p className="archive-gallery-group-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContinueExploring locale={locale} currentPage="archive" />
    </>
  )
}
