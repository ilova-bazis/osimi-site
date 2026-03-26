"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteChrome } from "@/content/home";
import { locales, type Locale } from "@/lib/i18n/locales";

type NavProps = {
    locale: Locale;
    content: SiteChrome;
};

function buildLocaleHref(
    targetLocale: Locale,
    pathname: string,
    currentLocale: Locale,
): string {
    if (pathname === `/${currentLocale}`) return `/${targetLocale}`;
    return pathname.replace(`/${currentLocale}/`, `/${targetLocale}/`);
}

export default function Nav({ locale, content }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        function handleClick() {
            setIsOpen(false);
            setLangOpen(false);
        }

        if (isOpen || langOpen) {
            document.addEventListener("click", handleClick);
        }

        return () => document.removeEventListener("click", handleClick);
    }, [isOpen, langOpen]);

    function toggleMenu(e: React.MouseEvent) {
        e.stopPropagation();
        setIsOpen((v) => !v);
    }

    function toggleLang(e: React.MouseEvent) {
        e.stopPropagation();
        setLangOpen((v) => !v);
    }

    function closeMenu() {
        setIsOpen(false);
        setLangOpen(false);
    }

    return (
        <nav
            className="nav"
            role="navigation"
            aria-label={content.navigationLabel}
        >
            <div className="container nav__inner">
                <Link href={`/${locale}`} className="nav__brand">
                    <Image
                        src="/images/osimi_logo.png"
                        alt={content.brand}
                        width={200}
                        height={80}
                        className="nav__logo"
                        priority
                    />
                </Link>

                <button
                    className={`nav__hamburger${isOpen ? " is-active" : ""}`}
                    aria-label={
                        isOpen
                            ? content.closeNavigationLabel
                            : content.openNavigationLabel
                    }
                    aria-expanded={isOpen}
                    aria-controls="nav-links"
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul
                    id="nav-links"
                    className={`nav__links${isOpen ? " is-open" : ""}`}
                >
                    {content.navLinks.map(({ href, label }) => {
                        const fullHref = `/${locale}${href === "/" ? "" : href}`;
                        const isActive =
                            href === "/"
                                ? pathname === `/${locale}`
                                : pathname === fullHref ||
                                  pathname.startsWith(`${fullHref}/`);
                        return (
                            <li key={href}>
                                <Link
                                    href={fullHref}
                                    className={
                                        isActive ? "is-active" : undefined
                                    }
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={closeMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div
                    className="lang-sw"
                    aria-label={content.languageSwitcherLabel}
                >
                    <button
                        className={`lang-sw__trigger${langOpen ? " is-open" : ""}`}
                        aria-expanded={langOpen}
                        aria-haspopup="true"
                        onClick={toggleLang}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lang-sw__icon"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span lang={locale}>
                            {content.localeLabels[locale]}
                        </span>
                        <svg
                            className="lang-sw__chevron"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M2.5 4L5 6.5L7.5 4" />
                        </svg>
                    </button>
                    {langOpen && (
                        <ul className="lang-sw__dropdown" role="menu">
                            {locales
                                .filter((l) => l !== locale)
                                .map((l) => (
                                    <li key={l} role="none">
                                        <Link
                                            href={buildLocaleHref(
                                                l,
                                                pathname,
                                                locale,
                                            )}
                                            className="lang-sw__option"
                                            hrefLang={l}
                                            lang={l}
                                            role="menuitem"
                                            onClick={closeMenu}
                                        >
                                            {content.localeLabels[l]}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
