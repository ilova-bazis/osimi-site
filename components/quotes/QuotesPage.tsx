'use client'

import { useMemo, useState } from 'react'
import ContinueExploring from '@/components/shared/ContinueExploring'
import type { QuoteTheme, QuotesPageContent } from '@/content/quotes'
import type { Locale } from '@/lib/i18n/locales'

type QuotesPageProps = {
  locale: Locale
  content: QuotesPageContent
}

const QUOTES_PER_PAGE = 6

export default function QuotesPage({ locale, content }: QuotesPageProps) {
  const [selectedTheme, setSelectedTheme] = useState<QuoteTheme | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredQuotes = useMemo(() => {
    if (!selectedTheme) {
      return content.collection.items
    }

    return content.collection.items.filter((item) => item.theme === selectedTheme)
  }, [content.collection.items, selectedTheme])

  const totalPages = Math.max(1, Math.ceil(filteredQuotes.length / QUOTES_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const startIndex = (safePage - 1) * QUOTES_PER_PAGE
  const endIndex = Math.min(startIndex + QUOTES_PER_PAGE, filteredQuotes.length)
  const paginatedQuotes = filteredQuotes.slice(startIndex, endIndex)

  return (
    <>
      <section className="quotes-hero section section--ivory" aria-labelledby="quotes-page-title">
        <div className="container quotes-hero__inner">
          <div className="quotes-hero__copy">
            <p className="label">{content.hero.label}</p>
            <h1 className="page-hero__title quotes-hero__title" id="quotes-page-title">
              {content.hero.title}
            </h1>
            <p className="page-hero__subtitle quotes-hero__subtitle">{content.hero.subtitle}</p>
            <div className="divider" />
            <p className="quotes-hero__intro">{content.hero.intro}</p>
          </div>

          <aside className="quotes-hero__featured">
            <span className="quotes-hero__mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="quotes-hero__featured-text">{content.featured.text}</blockquote>
            <p className="quotes-hero__featured-attr">{content.featured.attribution}</p>
          </aside>
        </div>
      </section>

      <section className="quotes-themes section section--white" aria-labelledby="quotes-themes-title">
        <div className="container">
          <div className="quotes-section__intro">
            <p className="label">{content.themes.label}</p>
            <h2 className="section-title" id="quotes-themes-title">
              {content.themes.title}
            </h2>
            <p className="section-body">{content.themes.intro}</p>
          </div>

          <div className="quotes-themes__grid">
            {content.themes.items.map((item) => (
              <button
                type="button"
                key={item.key}
                className={`quotes-theme-card${selectedTheme === item.key ? ' is-active' : ''}`}
                onClick={() => {
                  setCurrentPage(1)
                  setSelectedTheme((current) => (current === item.key ? null : item.key))
                }}
                aria-pressed={selectedTheme === item.key}
              >
                <p className="quotes-theme-card__title">{item.label}</p>
                <p className="quotes-theme-card__body">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="quotes-collection section section--ivory-d" aria-labelledby="quotes-collection-title">
        <div className="container">
          <div className="quotes-section__intro quotes-collection__intro">
            <div>
              <p className="label">{content.collection.label}</p>
              <h2 className="section-title" id="quotes-collection-title">
                {content.collection.title}
              </h2>
              <p className="section-body">{content.collection.intro}</p>
            </div>

            <div className="quotes-collection__filters">
              <button
                type="button"
                className={`quotes-filter${selectedTheme === null ? ' is-active' : ''}`}
                onClick={() => {
                  setCurrentPage(1)
                  setSelectedTheme(null)
                }}
                aria-pressed={selectedTheme === null}
              >
                {content.collection.allLabel}
              </button>
              {content.themes.items.map((item) => (
                <button
                    type="button"
                    key={item.key}
                    className={`quotes-filter${selectedTheme === item.key ? ' is-active' : ''}`}
                    onClick={() => {
                      setCurrentPage(1)
                      setSelectedTheme(item.key)
                    }}
                    aria-pressed={selectedTheme === item.key}
                  >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="quotes-collection__grid">
            {filteredQuotes.length ? (
              paginatedQuotes.map((quote) => (
                <article className="quote-entry" key={quote.id}>
                  <span className="quote-entry__mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="quote-entry__text">{quote.text}</blockquote>
                  {quote.originalText ? (
                    <p className="quote-entry__original">{quote.originalText}</p>
                  ) : null}
                  {quote.sourceNote ? <p className="quote-entry__source">{quote.sourceNote}</p> : null}
                </article>
              ))
            ) : (
              <p className="quotes-collection__empty">{content.collection.emptyLabel}</p>
            )}
          </div>

          {filteredQuotes.length ? (
            <div className="quotes-pagination">
              <p className="quotes-pagination__summary">
                {content.collection.showingLabel} {startIndex + 1}-{endIndex} {content.collection.ofLabel}{' '}
                {filteredQuotes.length}
              </p>

              {totalPages > 1 ? (
                <nav className="quotes-pagination__controls" aria-label={`${content.collection.pageLabel} navigation`}>
                  <button
                    type="button"
                    className="quotes-pagination__button"
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={safePage === 1}
                  >
                    {content.collection.previousLabel}
                  </button>

                  <div className="quotes-pagination__pages">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1

                      return (
                        <button
                          type="button"
                          key={page}
                          className={`quotes-pagination__page${safePage === page ? ' is-active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                          aria-current={safePage === page ? 'page' : undefined}
                          aria-label={`${content.collection.pageLabel} ${page}`}
                        >
                          {page}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    className="quotes-pagination__button"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={safePage === totalPages}
                  >
                    {content.collection.nextLabel}
                  </button>
                </nav>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="quotes-note section section--ivory" aria-labelledby="quotes-note-title">
        <div className="container quotes-note__inner">
          <p className="label">{content.note.label}</p>
          <h2 className="section-title" id="quotes-note-title">
            {content.note.title}
          </h2>
          <p className="section-body quotes-note__body">{content.note.body}</p>
        </div>
      </section>

      <ContinueExploring locale={locale} currentPage="quotes" />
    </>
  )
}
