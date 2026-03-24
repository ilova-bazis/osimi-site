import type { DocumentaryPageContent } from '@/content/documentary'

type DocumentarySynopsisProps = {
  content: DocumentaryPageContent['synopsis']
}

export default function DocumentarySynopsis({ content }: DocumentarySynopsisProps) {
  return (
    <section className="documentary-section section section--white" aria-labelledby="documentary-synopsis-title">
      <div className="container documentary-section__narrow">
        <p className="label">{content.label}</p>
        <h2 className="section-title documentary-section__title" id="documentary-synopsis-title">
          {content.title}
        </h2>
        <div className="documentary-prose">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
