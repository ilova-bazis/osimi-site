import Link from 'next/link'
import type { SiteChrome } from '@/content/home'
import type { Locale } from '@/lib/i18n/locales'

type FooterProps = {
  locale: Locale
  content: SiteChrome
}

export default function Footer({ locale, content }: FooterProps) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p className="footer__brand">{content.brand}</p>
            <p className="footer__tagline">
              {content.footerTaglineLines[0]}
              <br />
              {content.footerTaglineLines[1]}
            </p>
          </div>
          <nav className="footer__nav" aria-label={content.footerNavigationLabel}>
            {content.footerLinks.map(({ href, label }) => (
              <Link key={href} href={`/${locale}${href}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="footer__bottom">&copy; {content.footerBottom}</p>
      </div>
    </footer>
  )
}
