import Link from 'next/link'
import Image from 'next/image'
import type { HeroContent } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type HeroProps = {
  locale: Locale
  content: HeroContent
  portraitSrc?: string
}

export default function Hero({ locale, content, portraitSrc }: HeroProps) {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">{content.eyebrow}</p>
            <h1 className="hero__name">
              {content.nameLines[0]}
              <br />
              {content.nameLines[1]}
            </h1>
            <p className="hero__tagline">
              {content.taglineLines[0]}
              <br />
              {content.taglineLines[1]}
            </p>
            <p className="hero__intro">{content.intro}</p>
            <div className="hero__actions">
              <Link href={`/${locale}/biography`} className="btn btn--primary">
                {content.biographyCta}
              </Link>
              <Link href={`/${locale}/documentary`} className="btn btn--outline">
                {content.documentaryCta}
              </Link>
            </div>
            <Link href={`/${locale}/timeline`} className="hero__secondary">
              {content.timelineCta}
            </Link>
          </div>

          <div className="hero__portrait-wrap">
            {portraitSrc ? (
              <Image
                src={portraitSrc}
                alt={content.portraitAlt}
                className="hero__portrait"
                width={480}
                height={640}
                priority
              />
            ) : (
              <div className="hero__portrait-placeholder" aria-hidden="true" />
            )}
            <div className="hero__portrait-accent" aria-hidden="true" />
            <p className="hero__portrait-caption">{content.portraitCaption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
