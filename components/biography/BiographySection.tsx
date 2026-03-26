'use client'

import Image from 'next/image'
import { useState } from 'react'
import MediaViewer, { type MediaViewerItem } from '@/components/shared/MediaViewer'
import type { BiographySection } from '@/content/biography'
import type { Locale } from '@/lib/i18n/locales'

type BiographySectionProps = {
  section: BiographySection
  index: number
  locale: Locale
}

const closeLabels: Record<Locale, string> = {
  en: 'Close media',
  tg: 'Бастани медиа',
  ru: 'Закрыть медиа',
}

export default function BiographySectionBlock({ section, index, locale }: BiographySectionProps) {
  const calloutSide = index % 2 === 0 ? 'right' : 'left'
  const media = section.image
  const [openMedia, setOpenMedia] = useState<MediaViewerItem | null>(null)

  const imageViewerItem = media
    ? {
        kind: 'image' as const,
        src: media.src,
        alt: media.alt,
        caption: media.caption,
        credit: media.credit,
      }
    : null

  return (
    <>
      <section id={section.id} className="bio-section">
        <h2 className="bio-section__title">{section.title}</h2>

        {/* Full-width figure sits directly under the heading, before text */}
        {media && media.placement === 'full' && (
          <figure className="bio-figure bio-figure--full">
            <button
              type="button"
              className="bio-figure__trigger"
              onClick={() => setOpenMedia(imageViewerItem)}
              aria-label={`Enlarge: ${media.alt}`}
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={780}
                height={460}
                className="bio-figure__img"
              />
            </button>
            <figcaption className="bio-figure__caption">
              {media.caption}
              {media.credit && <span className="bio-figure__credit">{media.credit}</span>}
            </figcaption>
          </figure>
        )}

        {/* Inline floated figure — placed before callout/paragraphs so text wraps around it */}
        {media && (media.placement === 'inline-left' || media.placement === 'inline-right') && (
          <figure className={`bio-figure bio-figure--${media.placement}`}>
            <button
              type="button"
              className="bio-figure__trigger"
              onClick={() => setOpenMedia(imageViewerItem)}
              aria-label={`Enlarge: ${media.alt}`}
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={260}
                height={190}
                className="bio-figure__img"
              />
            </button>
            <figcaption className="bio-figure__caption">
              {media.caption}
              {media.credit && <span className="bio-figure__credit">{media.credit}</span>}
            </figcaption>
          </figure>
        )}

        {section.callout && (
          <aside className={`bio-callout bio-callout--${calloutSide}`}>
            <p className="bio-callout__text">{section.callout.text}</p>
            {section.callout.attribution && (
              <cite className="bio-callout__attr">— {section.callout.attribution}</cite>
            )}
          </aside>
        )}

        {section.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div className="bio-section__clearfix" />
      </section>

      <MediaViewer item={openMedia} closeLabel={closeLabels[locale]} onClose={() => setOpenMedia(null)} />
    </>
  )
}
