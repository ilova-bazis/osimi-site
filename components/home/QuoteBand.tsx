import type { QuoteBandContent } from '@/content/home'

type QuoteBandProps = {
  content: QuoteBandContent
}

export default function QuoteBand({ content }: QuoteBandProps) {
  return (
    <section className="quote-band" aria-label="Featured quote">
      <div className="container quote-band__inner">
        <span className="quote-band__mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="quote-band__text">
          {content.textLines[0]}
          <br />
          {content.textLines[1]}
        </blockquote>
        <p className="quote-band__attr">- {content.attribution}</p>
      </div>
    </section>
  )
}
