import type { TimelineCategory, TimelineStreamItem } from '@/content/timeline'

export type TimelinePageProps = {
  label: string
  title: string
  intro: string
  referenceNote: string
  categoriesLabel: string
  categories: Array<{ key: TimelineCategory; label: string }>
  stream: TimelineStreamItem[]
}

function TimelineCard({
  entry,
  detail = false,
}: {
  entry: Extract<TimelineStreamItem, { type: 'entry' }>['entry'] | Extract<TimelineStreamItem, { type: 'fold' }>['fold']['entries'][number]
  detail?: boolean
}) {
  return (
    <article className={`timeline-entry${detail ? ' timeline-entry--detail' : ''}`}>
      <div className="timeline-entry__year-wrap">
        <p className="timeline-entry__year">{entry.displayYear}</p>
        <span className="timeline-entry__line" aria-hidden="true" />
      </div>
      <div className="timeline-entry__card">
        <span className="timeline-pill" data-category={entry.category}>
          {entry.categoryLabel}
        </span>
        <p className="timeline-entry__description">{entry.body}</p>
        {entry.notes.length > 0 ? (
          <ul className="timeline-entry__notes">
            {entry.notes.map((note) => (
              <li key={`${entry.id}-${note}`}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default function TimelinePage({
  label,
  title,
  intro,
  referenceNote,
  categoriesLabel,
  categories,
  stream,
}: TimelinePageProps) {
  return (
    <>
      <section className="timeline-hero section section--ivory" aria-labelledby="timeline-title">
        <div className="container timeline-hero__inner">
          <div className="timeline-hero__content">
            <p className="label">{label}</p>
            <h1 className="section-title timeline-hero__title" id="timeline-title">
              {title}
            </h1>
            <div className="divider" />
            <p className="section-body timeline-hero__intro">{intro}</p>
            <p className="timeline-hero__note">{referenceNote}</p>
          </div>

          <aside className="timeline-hero__legend" aria-label={categoriesLabel}>
            <p className="timeline-hero__legend-title">{categoriesLabel}</p>
            <div className="timeline-hero__legend-list">
              {categories.map((category) => (
                <span className="timeline-pill" key={category.key} data-category={category.key}>
                  {category.label}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="timeline section section--ivory-d" aria-label={label}>
        <div className="container">
          <div className="timeline__list">
            {stream.map((item) => {
              if (item.type === 'entry') {
                return <TimelineCard key={item.entry.id} entry={item.entry} />
              }

              return (
                <details className="timeline-fold" key={item.fold.id}>
                  <summary className="timeline-fold__summary">
                    <span className="timeline-fold__label">{item.fold.label}</span>
                  </summary>
                  <div className="timeline-fold__body">
                    {item.fold.entries.map((entry) => (
                      <TimelineCard key={entry.id} entry={entry} detail />
                    ))}
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
