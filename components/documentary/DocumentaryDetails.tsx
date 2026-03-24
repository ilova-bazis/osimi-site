import type { DocumentaryPageContent } from '@/content/documentary'

type DocumentaryDetailsProps = {
  content: DocumentaryPageContent['details']
}

export default function DocumentaryDetails({ content }: DocumentaryDetailsProps) {
  return (
    <section className="documentary-details section section--ivory-d" aria-labelledby="documentary-details-title">
      <div className="container documentary-details__inner">
        <div className="documentary-details__copy">
          <p className="label">{content.label}</p>
          <h2 className="section-title documentary-section__title" id="documentary-details-title">
            {content.title}
          </h2>
          <dl className="documentary-facts">
            {content.items.map(({ term, value }) => (
              <div className="documentary-facts__row" key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="documentary-details__highlights">
          {content.highlights.map(({ title, body }) => (
            <article className="documentary-highlight" key={title}>
              <h3 className="documentary-highlight__title">{title}</h3>
              <p className="documentary-highlight__body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
