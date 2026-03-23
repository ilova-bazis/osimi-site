import Link from 'next/link'
import type { ArchiveContent } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type ArchiveCTAProps = {
  locale: Locale
  content: ArchiveContent
}

export default function ArchiveCTA({ locale, content }: ArchiveCTAProps) {
  return (
    <section className="section archive" id="archive" aria-labelledby="archive-title">
      <div className="container">
        <div className="archive__inner">
          <p className="label">{content.label}</p>
          <h2 className="section-title" id="archive-title">
            {content.title}
          </h2>
          <div className="divider" style={{ marginInline: 'auto' }} />
          <p className="archive__body">{content.body}</p>
          <Link href={`/${locale}/archive`} className="btn btn--gold">
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
