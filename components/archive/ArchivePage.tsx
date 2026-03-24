import ContinueExploring from '@/components/shared/ContinueExploring'
import type { ArchivePageContent } from '@/content/archive'
import type { Locale } from '@/lib/i18n/locales'

type ArchivePageProps = {
  locale: Locale
  content: ArchivePageContent
}

export default function ArchivePage({ locale, content }: ArchivePageProps) {
  return (
    <>
      <section className="archive-page-hero section section--ivory" aria-labelledby="archive-page-title">
        <div className="container archive-page-hero__inner">
          <div className="archive-page-hero__copy">
            <p className="label">{content.hero.label}</p>
            <h1 className="page-hero__title" id="archive-page-title">
              {content.hero.title}
            </h1>
            <p className="page-hero__subtitle archive-page-hero__subtitle">{content.hero.subtitle}</p>
            <div className="divider" />
            <p className="archive-page-hero__intro">{content.hero.intro}</p>
          </div>

          <aside className="archive-page-hero__panel">
            <p className="archive-page-hero__panel-label">{content.hero.panelLabel}</p>
            <p className="archive-page-hero__panel-text">{content.hero.panelText}</p>
          </aside>
        </div>
      </section>

      <section className="archive-section section section--white" aria-labelledby="archive-mission-title">
        <div className="container archive-section__narrow">
          <p className="label">{content.mission.label}</p>
          <h2 className="section-title" id="archive-mission-title">
            {content.mission.title}
          </h2>
          <div className="archive-prose">
            {content.mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-materials section section--ivory-d" aria-labelledby="archive-materials-title">
        <div className="container">
          <div className="archive-section__intro">
            <p className="label">{content.materials.label}</p>
            <h2 className="section-title" id="archive-materials-title">
              {content.materials.title}
            </h2>
            <p className="section-body">{content.materials.intro}</p>
          </div>

          <div className="archive-materials__grid">
            {content.materials.items.map((item) => (
              <article className="archive-material-card" key={item.title}>
                <h3 className="archive-material-card__title">{item.title}</h3>
                <p className="archive-material-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-collections section section--white" aria-labelledby="archive-collections-title">
        <div className="container">
          <div className="archive-section__intro">
            <p className="label">{content.collections.label}</p>
            <h2 className="section-title" id="archive-collections-title">
              {content.collections.title}
            </h2>
            <p className="section-body">{content.collections.intro}</p>
          </div>

          <div className="archive-collections__grid">
            {content.collections.items.map((item) => (
              <article className={`archive-collection-card archive-collection-card--${item.variant}`} key={item.title}>
                <div className="archive-collection-card__top">
                  <div>
                    <p className="archive-collection-card__kind">{item.kind}</p>
                    <h3 className="archive-collection-card__title">{item.title}</h3>
                  </div>
                  <span className="archive-collection-card__status">{item.status}</span>
                </div>

                <p className="archive-collection-card__count">{item.countLabel}</p>
                <p className="archive-collection-card__description">{item.description}</p>

                {item.variant === 'documents' ? (
                  <div className="archive-collection-card__mock" aria-hidden="true">
                    <div className="archive-collection-card__mock-bar" />
                    <div className="archive-collection-card__mock-grid">
                      {item.sampleItems.map((sample) => (
                        <div className="archive-collection-card__mock-item" key={sample}>
                          <div className="archive-collection-card__mock-thumb" />
                          <span>{sample}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="archive-gallery-mock" aria-hidden="true">
                    <div className="archive-gallery-mock__featured">
                      <div className="archive-gallery-mock__hero" />
                      <div className="archive-gallery-mock__featured-copy">
                        <span className="archive-gallery-mock__featured-tag">Featured image</span>
                        <span className="archive-gallery-mock__featured-title">{item.sampleItems[0]}</span>
                        <span className="archive-gallery-mock__featured-meta">Caption, date, and collection note</span>
                      </div>
                    </div>
                    <div className="archive-gallery-mock__grid">
                      {item.sampleItems.slice(1).map((sample) => (
                        <div className="archive-gallery-mock__tile" key={sample}>
                          <div className="archive-gallery-mock__image" />
                          <span className="archive-gallery-mock__tile-title">{sample}</span>
                          <span className="archive-gallery-mock__tile-meta">Caption preview</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-section section section--ivory" aria-labelledby="archive-importance-title">
        <div className="container archive-section__narrow">
          <p className="label">{content.importance.label}</p>
          <h2 className="section-title" id="archive-importance-title">
            {content.importance.title}
          </h2>
          <div className="archive-prose">
            {content.importance.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-future section section--white" aria-labelledby="archive-future-title">
        <div className="container archive-future__inner">
          <div>
            <p className="label">{content.future.label}</p>
            <h2 className="section-title" id="archive-future-title">
              {content.future.title}
            </h2>
            <p className="section-body archive-future__body">{content.future.body}</p>
          </div>

          <div className="archive-future__panel">
            <ul className="archive-future__list">
              {content.future.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContinueExploring locale={locale} currentPage="archive" />
    </>
  )
}
