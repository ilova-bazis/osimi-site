'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export type MediaViewerImageItem = {
  kind: 'image'
  src: string
  alt: string
  title?: string
  caption?: string
  credit?: string
  width?: number
  height?: number
}

export type MediaViewerVideoItem = {
  kind: 'video'
  embedSrc: string
  title: string
  caption?: string
  credit?: string
}

export type MediaViewerAudioItem = {
  kind: 'audio'
  src: string
  title: string
  caption?: string
  credit?: string
}

export type MediaViewerItem = MediaViewerImageItem | MediaViewerVideoItem | MediaViewerAudioItem

type MediaViewerProps = {
  item: MediaViewerItem | null
  closeLabel: string
  onClose: () => void
}

function getAriaLabel(item: MediaViewerItem) {
  if (item.kind === 'image') {
    return item.title || item.alt
  }

  return item.title
}

export default function MediaViewer({ item, closeLabel, onClose }: MediaViewerProps) {
  useEffect(() => {
    if (!item) {
      return undefined
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [item, onClose])

  if (!item) {
    return null
  }

  return (
    <div className="media-viewer" role="dialog" aria-modal="true" aria-label={getAriaLabel(item)}>
      <button type="button" className="media-viewer__backdrop" onClick={onClose} aria-label={closeLabel} />
      <div className={`media-viewer__panel media-viewer__panel--${item.kind}`}>
        <button type="button" className="media-viewer__close" onClick={onClose} aria-label={closeLabel}>
          {closeLabel}
        </button>

        <div className="media-viewer__content">
          {item.kind === 'image' ? (
            <div className="media-viewer__frame media-viewer__frame--image">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width ?? 1400}
                height={item.height ?? 1000}
                className="media-viewer__image"
              />
            </div>
          ) : null}

          {item.kind === 'video' ? (
            <div className="media-viewer__frame media-viewer__frame--video">
              <iframe
                src={item.embedSrc}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : null}

          {item.kind === 'audio' ? (
            <div className="media-viewer__frame media-viewer__frame--audio">
              <div className="media-viewer__audio-card">
                <p className="media-viewer__audio-title">{item.title}</p>
                <audio controls className="media-viewer__audio-player" src={item.src}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ) : null}
        </div>

        {(item.title || item.caption || item.credit) && (
          <div className="media-viewer__meta">
            {item.title ? <p className="media-viewer__title">{item.title}</p> : null}
            {item.caption ? <p className="media-viewer__caption">{item.caption}</p> : null}
            {item.credit ? <p className="media-viewer__credit">{item.credit}</p> : null}
          </div>
        )}
      </div>
    </div>
  )
}
