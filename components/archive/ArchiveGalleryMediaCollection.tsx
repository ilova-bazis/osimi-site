'use client'

import Image from 'next/image'
import { useState } from 'react'
import MediaViewer, { type MediaViewerItem } from '@/components/shared/MediaViewer'
import type { ArchiveGalleryPageContent } from '@/content/archive-gallery'
import type { Locale } from '@/lib/i18n/locales'

type ArchiveGalleryMediaCollectionProps = {
  locale: Locale
  content: ArchiveGalleryPageContent
}

const closeLabels: Record<Locale, string> = {
  en: 'Close media',
  tg: 'Бастани медиа',
  ru: 'Закрыть медиа',
}

const openLabels: Record<Locale, string> = {
  en: 'Open image',
  tg: 'Кушодани тасвир',
  ru: 'Открыть изображение',
}

function toImageItem(item: ArchiveGalleryPageContent['featured']['image']): MediaViewerItem {
  return {
    kind: 'image',
    src: item.src,
    alt: item.alt,
    title: item.title,
    caption: item.note,
  }
}

export default function ArchiveGalleryMediaCollection({ locale, content }: ArchiveGalleryMediaCollectionProps) {
  const [openItem, setOpenItem] = useState<MediaViewerItem | null>(null)

  return (
    <>
      <section className="archive-gallery-featured section section--white" aria-labelledby="archive-gallery-featured-title">
        <div className="container archive-gallery-featured__inner">
          <div className="archive-gallery-featured__image-wrap">
            <button
              type="button"
              className="archive-gallery-media-trigger"
              onClick={() => setOpenItem(toImageItem(content.featured.image))}
              aria-label={`${openLabels[locale]}: ${content.featured.image.title}`}
            >
              <Image
                src={content.featured.image.src}
                alt={content.featured.image.alt}
                className="archive-gallery-featured__image"
                width={820}
                height={620}
                priority
              />
            </button>
          </div>
          <div className="archive-gallery-featured__copy">
            <p className="label">{content.featured.label}</p>
            <h2 className="section-title" id="archive-gallery-featured-title">
              {content.featured.image.title}
            </h2>
            <p className="archive-gallery-featured__note">{content.featured.image.note}</p>
          </div>
        </div>
      </section>

      <section className="archive-gallery-grid-section section section--ivory-d" aria-labelledby="archive-gallery-grid-title">
        <div className="container">
          <div className="archive-section__intro">
            <p className="label">{content.holdings.label}</p>
            <h2 className="section-title" id="archive-gallery-grid-title">
              {content.holdings.title}
            </h2>
            <p className="section-body">{content.holdings.intro}</p>
          </div>

          <div className="archive-gallery-toolbar" aria-hidden="true">
            <span className="archive-gallery-toolbar__chip is-active">All</span>
            <span className="archive-gallery-toolbar__chip">Portraits</span>
            <span className="archive-gallery-toolbar__chip">Public Life</span>
            <span className="archive-gallery-toolbar__chip">Institutions</span>
          </div>

          <div className="archive-gallery-grid">
            {content.holdings.items.map((item) => (
              <article className="archive-gallery-card" key={item.id}>
                <div className="archive-gallery-card__image-wrap">
                  <button
                    type="button"
                    className="archive-gallery-media-trigger"
                    onClick={() => setOpenItem(toImageItem(item))}
                    aria-label={`${openLabels[locale]}: ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="archive-gallery-card__image"
                      width={520}
                      height={390}
                    />
                  </button>
                </div>
                <div className="archive-gallery-card__copy">
                  <h3 className="archive-gallery-card__title">{item.title}</h3>
                  <p className="archive-gallery-card__note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MediaViewer item={openItem} closeLabel={closeLabels[locale]} onClose={() => setOpenItem(null)} />
    </>
  )
}
