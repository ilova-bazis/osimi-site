import { Playfair_Display } from 'next/font/google'
import { Geist } from 'next/font/google'
import '../globals.css'
import { getLocaleOrNotFound } from '@/lib/i18n/locales'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

export const dynamicParams = false

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params
  const locale = getLocaleOrNotFound(localeParam)

  return (
    <html lang={locale} className={`${playfair.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  )
}
