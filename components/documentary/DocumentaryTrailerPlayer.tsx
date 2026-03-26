'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import MediaViewer, { type MediaViewerItem } from '@/components/shared/MediaViewer'

type DocumentaryTrailerPlayerProps = {
  title: string
  trailerHref: string
  trailerEmbedHref: string
  trailerLabel: string
  openLabel: string
  closeLabel: string
}

function getYoutubeThumbnail(url: string) {
  try {
    const parsed = new URL(url)
    const shortId = parsed.hostname.includes('youtu.be') ? parsed.pathname.slice(1) : null
    const watchId = parsed.searchParams.get('v')
    const embedId = parsed.pathname.startsWith('/embed/')
      ? parsed.pathname.replace('/embed/', '')
      : null
    const videoId = shortId || watchId || embedId

    if (!videoId) {
      return null
    }

    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  } catch {
    return null
  }
}

export default function DocumentaryTrailerPlayer({
  title,
  trailerHref,
  trailerEmbedHref,
  trailerLabel,
  openLabel,
  closeLabel,
}: DocumentaryTrailerPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const thumbnail = useMemo(() => getYoutubeThumbnail(trailerHref), [trailerHref])
  const trailerItem = useMemo<MediaViewerItem>(
    () => ({
      kind: 'video',
      embedSrc: trailerEmbedHref,
      title,
      caption: trailerLabel,
    }),
    [title, trailerEmbedHref, trailerLabel],
  )

  return (
    <>
      <div className="documentary-hero__trailer-card">
        <p className="documentary-hero__trailer-label">{trailerLabel}</p>
        <button
          type="button"
          className="documentary-hero__trailer-trigger"
          onClick={() => setIsOpen(true)}
          aria-label={openLabel}
        >
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              className="documentary-hero__trailer-thumb"
            />
          ) : (
            <div className="documentary-hero__trailer-fallback" aria-hidden="true" />
          )}
          <span className="documentary-hero__trailer-play" aria-hidden="true">
            ▶
          </span>
        </button>
      </div>
      <MediaViewer item={isOpen ? trailerItem : null} closeLabel={closeLabel} onClose={() => setIsOpen(false)} />
    </>
  )
}
