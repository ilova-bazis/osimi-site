export type BiographySectionCallout = {
  text: string
  attribution?: string
}

export type BiographySectionMedia = {
  src: string
  alt: string
  caption: string
  credit?: string
  placement: 'inline-left' | 'inline-right' | 'full'
}

export type BiographySection = {
  id: string
  title: string
  paragraphs: string[]
  callout?: BiographySectionCallout
  image?: BiographySectionMedia
  images?: BiographySectionMedia[]
}

export type BiographyRelatedLink = {
  href: string
  label: string
  description: string
}

export type BiographyPageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
    portraitAlt: string
    portraitCaption: string
  }
  overview: {
    paragraphs: string[]
  }
  sectionNav: {
    label: string
    title: string
    sections: Array<{ id: string; label: string }>
  }
  sections: BiographySection[]
  closing: {
    title: string
    paragraphs: string[]
  }
  relatedLinks: {
    title: string
    items: BiographyRelatedLink[]
  }
}
