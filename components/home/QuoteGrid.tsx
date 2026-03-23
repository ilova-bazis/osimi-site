import type { QuoteGridContent } from '@/content/home'

type QuoteGridProps = {
  content: QuoteGridContent
}

export default function QuoteGrid({ content }: QuoteGridProps) {
  return (
    <section
      className="section quote-grid section--white"
      id="quotes"
      aria-labelledby="quotes-title"
    >
      <div className="container">
        <div className="quote-grid__intro">
          <p className="label">{content.label}</p>
          <h2 className="section-title" id="quotes-title">
            {content.title}
          </h2>
          <div className="divider" style={{ marginInline: 'auto' }} />
        </div>

        <div className="quote-grid__cards">
          {content.quotes.map((quote) => (
            <article className="quote-card" key={`${quote.theme}-${quote.text}`}>
              <span className="quote-card__mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="quote-card__text">{quote.text}</p>
              <p className="quote-card__theme">{quote.theme}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
