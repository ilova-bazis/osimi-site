'use client'

import { useState } from 'react'
import type { BiographyPageContent } from '@/content/biography'

type BiographyTOCProps = {
  content: BiographyPageContent['sectionNav']
}

export default function BiographyTOC({ content }: BiographyTOCProps) {
  const [open, setOpen] = useState(true)

  return (
    <nav className="bio-toc" aria-label={content.label}>
      <div className="bio-toc__header">
        <span className="bio-toc__title">{content.title}</span>
        <button
          className="bio-toc__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'hide' : 'show'}
        </button>
      </div>
      {open && (
        <ol className="bio-toc__list">
          {content.sections.map(({ id, label }, i) => (
            <li key={id} className="bio-toc__item">
              <a href={`#${id}`}>
                <span className="bio-toc__num">{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
