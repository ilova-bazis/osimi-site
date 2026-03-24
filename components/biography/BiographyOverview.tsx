import type { BiographyPageContent } from '@/content/biography'

type BiographyOverviewProps = {
  content: BiographyPageContent['overview']
}

export default function BiographyOverview({ content }: BiographyOverviewProps) {
  return (
    <div className="bio-overview">
      {content.paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  )
}
