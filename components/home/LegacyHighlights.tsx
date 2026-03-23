import type { LegacyContent } from '@/content/home'

type LegacyHighlightsProps = {
  content: LegacyContent
}

export default function LegacyHighlights({ content }: LegacyHighlightsProps) {
  return (
    <section className="section legacy" id="legacy" aria-labelledby="legacy-title">
      <div className="container legacy__inner">
        <p className="label">{content.label}</p>
        <h2 className="section-title" id="legacy-title">
          {content.title}
        </h2>
        <div className="legacy__divider" />

        <div className="legacy__timeline">
          {content.milestones.map((milestone) => (
            <div className="legacy__milestone" key={`${milestone.era}-${milestone.yearLines.join('-')}`}>
              <div className="legacy__above">
                <p className="legacy__era">{milestone.era}</p>
                <p className={`legacy__year${milestone.compactYear ? ' legacy__year--sm' : ''}`}>
                  {milestone.yearLines.map((line, index, arr) => (
                    <span key={`${milestone.era}-${line}`}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div className="legacy__node">
                <div className="legacy__dot" />
              </div>
              <div className="legacy__below">
                <p className="legacy__desc">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
