import Link from 'next/link'
import type { WorksContent } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type WorksPreviewProps = {
  locale: Locale
  content: WorksContent
}

export default function WorksPreview({ locale, content }: WorksPreviewProps) {
  return (
    <section
      className="section section--ivory works"
      id="works"
      aria-labelledby="works-title"
    >
      <div className="container">
        <div className="works__inner">
          <div className="works__text">
            <p className="label">{content.label}</p>
            <h2 className="section-title" id="works-title">
              {content.titleLines[0]}
              <br />
              {content.titleLines[1]}
            </h2>
            <div className="divider" />
            <p className="section-body">{content.body}</p>
            <div className="works__tags">
              {content.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/${locale}/works`} className="btn btn--primary">
              {content.cta}
            </Link>
          </div>

          <div className="works__visual">
            <p className="works__pull-label">{content.pullLabel}</p>
            <p className="works__pull-quote">&ldquo;{content.pullQuote}&rdquo;</p>
            <div className="works__pull-line" />
            <p className="works__pull-attr">{content.attribution}</p>
            <div className="works__pull-note">{content.note}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
