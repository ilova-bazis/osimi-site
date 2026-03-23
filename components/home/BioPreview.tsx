import Link from 'next/link'
import type { BioPreviewContent } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type BioPreviewProps = {
  locale: Locale
  content: BioPreviewContent
}

export default function BioPreview({ locale, content }: BioPreviewProps) {
  return (
    <section
      className="section section--ivory bio-preview"
      id="biography"
      aria-labelledby="bio-title"
    >
      <div className="container">
        <div className="bio-preview__inner">
          <div className="bio-preview__left">
            <p className="label">{content.label}</p>
            <h2 className="section-title" id="bio-title">
              {content.titleLines[0]}
              <br />
              {content.titleLines[1]}
            </h2>
            <div className="divider" />
            <p className="section-body">{content.paragraphs[0]}</p>
            <p className="section-body" style={{ marginTop: '18px' }}>
              {content.paragraphs[1]}
            </p>
            <div className="bio-preview__cta">
              <Link href={`/${locale}/biography`} className="btn btn--primary">
                {content.cta}
              </Link>
            </div>
          </div>

          <div className="bio-preview__right">
            {content.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
