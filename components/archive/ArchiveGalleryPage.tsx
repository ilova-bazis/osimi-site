import ArchiveGalleryMediaCollection from '@/components/archive/ArchiveGalleryMediaCollection'
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

      <ArchiveGalleryMediaCollection locale={locale} content={content} />

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
