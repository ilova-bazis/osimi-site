import { notFound } from 'next/navigation'

export const locales = ['en', 'tg', 'ru'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getLocaleOrNotFound(value: string): Locale {
  if (isLocale(value)) {
    return value
  }

  notFound()
}
