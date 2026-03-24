import type { Locale } from '@/lib/i18n/locales'
import type { BiographyPageContent } from './types'
import biographyEn from './en'
import biographyTg from './tg'
import biographyRu from './ru'

export type { BiographyPageContent, BiographySection, BiographyRelatedLink } from './types'

const content: Record<Locale, BiographyPageContent> = {
  en: biographyEn,
  tg: biographyTg,
  ru: biographyRu,
}

export function getBiographyContent(locale: Locale): BiographyPageContent {
  return content[locale]
}
