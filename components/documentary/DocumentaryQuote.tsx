import type { DocumentaryPageContent } from '@/content/documentary'

type DocumentaryQuoteProps = {
  content: DocumentaryPageContent['quote']
}

export default function DocumentaryQuote({ content }: DocumentaryQuoteProps) {
  return (
    <section className="documentary-quote" aria-label={content.attribution}>
      <div className="container documentary-quote__inner">
        <span className="documentary-quote__mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="documentary-quote__text">{content.text}</blockquote>
        <p className="documentary-quote__attr">{content.attribution}</p>
      </div>
    </section>
  )
}
