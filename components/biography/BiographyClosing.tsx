import type { BiographyPageContent } from '@/content/biography'

type BiographyClosingProps = {
  content: BiographyPageContent['closing']
}

export default function BiographyClosing({ content }: BiographyClosingProps) {
  return (
    <section className="bio-closing">
      <div className="container bio-body">
        <h2 className="bio-closing__title">{content.title}</h2>
        {content.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}
