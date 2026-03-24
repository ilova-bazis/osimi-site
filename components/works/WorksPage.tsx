import ContinueExploring from '@/components/shared/ContinueExploring'
import type { WorksPageContent } from '@/content/works'
import type { Locale } from '@/lib/i18n/locales'

type WorksPageProps = {
  locale: Locale
  content: WorksPageContent
}

export default function WorksPage({ locale, content }: WorksPageProps) {
  return (
    <>
      <section className="works-page-hero section section--ivory" aria-labelledby="works-page-title">
        <div className="container works-page-hero__inner">
          <div className="works-page-hero__copy">
            <p className="label">{content.hero.label}</p>
            <h1 className="page-hero__title works-page-hero__title" id="works-page-title">
              {content.hero.title}
            </h1>
            <p className="page-hero__subtitle works-page-hero__subtitle">{content.hero.subtitle}</p>
            <div className="divider" />
            <p className="works-page-hero__intro">{content.hero.intro}</p>
          </div>

          <aside className="works-page-hero__quote">
            <p className="works-page-hero__quote-text">&ldquo;{content.hero.quote}&rdquo;</p>
            <div className="works-page-hero__quote-line" />
            <p className="works-page-hero__quote-attr">{content.hero.attribution}</p>
          </aside>
        </div>
      </section>

      <section className="works-catalog section section--white" aria-labelledby="works-themes-title">
        <div className="container">
          <div className="works-catalog__intro">
            <p className="label">{content.themes.label}</p>
            <h2 className="section-title" id="works-themes-title">
              {content.themes.title}
            </h2>
            <p className="section-body">{content.themes.intro}</p>
          </div>

          <div className="works-catalog__grid">
            {content.themes.items.map((item) => (
              <article className="works-theme-card" key={item.title}>
                <h3 className="works-theme-card__title">{item.title}</h3>
                <p className="works-theme-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-selected section section--ivory-d" aria-labelledby="works-selected-title">
        <div className="container">
          <div className="works-selected__intro">
            <p className="label">{content.selected.label}</p>
            <h2 className="section-title" id="works-selected-title">
              {content.selected.title}
            </h2>
            <p className="section-body">{content.selected.intro}</p>
          </div>

          <div className="works-selected__list">
            {content.selected.items.map((item) => (
              <article className="works-entry" key={`${item.title}-${item.year}`}>
                <div className="works-entry__year">{item.year}</div>
                <div className="works-entry__body">
                  <h3 className="works-entry__title">{item.title}</h3>
                  <p className="works-entry__note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-roadmap section section--ivory" aria-labelledby="works-roadmap-title">
        <div className="container works-roadmap__inner">
          <div className="works-roadmap__copy">
            <p className="label">{content.roadmap.label}</p>
            <h2 className="section-title" id="works-roadmap-title">
              {content.roadmap.title}
            </h2>
            {content.roadmap.paragraphs.map((paragraph) => (
              <p className="works-roadmap__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="works-roadmap__panel">
            <ul className="works-roadmap__list">
              {content.roadmap.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContinueExploring locale={locale} currentPage="works" />
    </>
  )
}
