'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SiteChrome } from '@/content/home'
import { locales, type Locale } from '@/lib/i18n/locales'

type NavProps = {
  locale: Locale
  content: SiteChrome
}

function buildLocaleHref(targetLocale: Locale, pathname: string, currentLocale: Locale): string {
  if (pathname === `/${currentLocale}`) return `/${targetLocale}`
  return pathname.replace(`/${currentLocale}/`, `/${targetLocale}/`)
}

export default function Nav({ locale, content }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleClick() {
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('click', handleClick)
    }

    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  function toggleMenu(e: React.MouseEvent) {
    e.stopPropagation()
    setIsOpen((v) => !v)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="nav" role="navigation" aria-label={content.navigationLabel}>
      <div className="container nav__inner">
        <Link href={`/${locale}`} className="nav__brand">
          {content.brand}
        </Link>

        <button
          className={`nav__hamburger${isOpen ? ' is-active' : ''}`}
          aria-label={isOpen ? content.closeNavigationLabel : content.openNavigationLabel}
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {content.navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={`/${locale}${href === '/' ? '' : href}`} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <nav aria-label={content.languageSwitcherLabel} className="lang-sw">
          {locales.map((l, i) => (
            <Fragment key={l}>
              {i > 0 && (
                <span className="lang-sw__sep" aria-hidden="true">
                  ·
                </span>
              )}
              <Link
                href={buildLocaleHref(l, pathname, locale)}
                className={`lang-sw__item${l === locale ? ' is-current' : ''}`}
                aria-current={l === locale ? 'true' : undefined}
                hrefLang={l}
              >
                {content.localeLabels[l]}
              </Link>
            </Fragment>
          ))}
        </nav>
      </div>
    </nav>
  )
}
