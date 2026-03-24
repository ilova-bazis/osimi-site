import Image from 'next/image'
import type { DocumentaryScreening } from '@/content/documentary'

type ScreeningCardProps = {
  screening: DocumentaryScreening
}

export default function ScreeningCard({ screening }: ScreeningCardProps) {
  return (
    <article className="screening-card">
      <div className="screening-card__header">
        <p className="screening-card__meta">
          <span>{screening.city}</span>
          <span>{screening.date}</span>
        </p>
        <h3 className="screening-card__title">{screening.title}</h3>
        <p className="screening-card__venue">
          {screening.venue} - {screening.country}
        </p>
      </div>

      <p className="screening-card__summary">{screening.summary}</p>

      <div className="screening-card__media">
        {screening.media.map((item) => (
          <figure className="screening-card__thumb" key={`${screening.city}-${item.src}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 100vw, 30vw" />
            <span className="screening-card__tag">{item.kind}</span>
          </figure>
        ))}
      </div>

      <div className="screening-card__footer">
        <a href={screening.sourceHref} target="_blank" rel="noreferrer" className="screening-card__link">
          {screening.sourceLabel}
        </a>
      </div>
    </article>
  )
}
