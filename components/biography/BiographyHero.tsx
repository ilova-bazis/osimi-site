import Image from 'next/image'
import type { BiographyPageContent } from '@/content/biography'

type BiographyHeroProps = {
  content: BiographyPageContent['hero']
  overview: BiographyPageContent['overview']
  portraitSrc?: string
}

export default function BiographyHero({ content, overview, portraitSrc }: BiographyHeroProps) {
  return (
    <section className="bio-hero" aria-label={content.label}>
      <div className="container">
        <div className="bio-hero__inner">
          <div className="bio-hero__content">
            <p className="label bio-hero__label">{content.label}</p>
            <h1 className="bio-hero__title">{content.title}</h1>
            <p className="bio-hero__subtitle">{content.subtitle}</p>
            <p className="bio-hero__intro">{content.intro}</p>
          </div>

          <div className="bio-hero__portrait-wrap">
            {portraitSrc ? (
              <Image
                src={portraitSrc}
                alt={content.portraitAlt}
                className="bio-hero__portrait"
                width={340}
                height={453}
                priority
              />
            ) : (
              <div className="bio-hero__portrait-placeholder" aria-hidden="true" />
            )}
            <div className="bio-hero__portrait-accent" aria-hidden="true" />
            <p className="bio-hero__portrait-caption">{content.portraitCaption}</p>
          </div>
        </div>

        <div className="bio-hero__overview">
          {overview.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
