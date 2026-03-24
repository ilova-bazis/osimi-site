'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

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

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const thumbnail = useMemo(() => getYoutubeThumbnail(trailerHref), [trailerHref])

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

      {isOpen ? (
        <div className="documentary-trailer-modal" role="dialog" aria-modal="true" aria-label={title}>
          <button
            type="button"
            className="documentary-trailer-modal__backdrop"
            onClick={() => setIsOpen(false)}
            aria-label={closeLabel}
          />
          <div className="documentary-trailer-modal__panel">
            <button
              type="button"
              className="documentary-trailer-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label={closeLabel}
            >
              {closeLabel}
            </button>
            <div className="documentary-trailer-modal__frame">
              <iframe
                src={trailerEmbedHref}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
