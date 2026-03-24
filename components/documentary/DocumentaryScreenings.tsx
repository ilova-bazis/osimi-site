import type { DocumentaryPageContent } from '@/content/documentary'
import ScreeningCard from '@/components/documentary/ScreeningCard'

type DocumentaryScreeningsProps = {
  content: DocumentaryPageContent['screenings']
}

export default function DocumentaryScreenings({ content }: DocumentaryScreeningsProps) {
  return (
    <section
      id="screenings"
      className="documentary-screenings section section--ivory"
      aria-labelledby="documentary-screenings-title"
    >
      <div className="container">
        <div className="documentary-screenings__intro">
          <p className="label">{content.label}</p>
          <h2 className="section-title documentary-section__title" id="documentary-screenings-title">
            {content.title}
          </h2>
          <p className="section-body">{content.intro}</p>
        </div>

        <div className="documentary-screenings__grid">
          {content.items.map((screening) => (
            <ScreeningCard key={`${screening.city}-${screening.date}`} screening={screening} />
          ))}
        </div>
      </div>
    </section>
  )
}
