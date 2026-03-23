import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import QuoteBand from "@/components/home/QuoteBand";
import BioPreview from "@/components/home/BioPreview";
import LegacyHighlights from "@/components/home/LegacyHighlights";
import WorksPreview from "@/components/home/WorksPreview";
import Documentary from "@/components/home/Documentary";
import QuoteGrid from "@/components/home/QuoteGrid";
import ArchiveCTA from "@/components/home/ArchiveCTA";
import { getHomePageContent } from "@/content/home";
import {
    defaultLocale,
    getLocaleOrNotFound,
    locales,
    type Locale,
} from "@/lib/i18n/locales";

export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

type Props = {
    params: Promise<{ locale: string }>;
};

function getLocaleMetadata(locale: Locale): Metadata {
    const content = getHomePageContent(locale);

    return {
        title: content.metadata.title,
        description: content.metadata.description,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: "/en",
                tg: "/tg",
                ru: "/ru",
                "x-default": `/${defaultLocale}`,
            },
        },
        openGraph: {
            title: content.metadata.title,
            description: content.metadata.description,
            url: `/${locale}`,
            siteName: "Muhammad Osimi",
            locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: content.metadata.title,
            description: content.metadata.description,
        },
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = getLocaleOrNotFound(localeParam);

    return getLocaleMetadata(locale);
}

function getPersonJsonLd(locale: Locale) {
    const content = getHomePageContent(locale);

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: content.chrome.brand,
        alternateName: [
            "Muhammad Osimi",
            "Muhammad Saifiddinovich Asimov",
            "Муҳаммад Осимӣ",
        ],
        description: content.metadata.description,
        birthDate: "1920-08-25",
        deathDate: "1996-09-27",
        birthPlace: {
            "@type": "Place",
            name: "Khujand, Tajikistan",
        },
        jobTitle: content.hero.taglineLines.join(" "),
        knowsAbout: content.works.tags,
        url: `/${locale}`,
    };
}

export default async function HomePage({ params }: Props) {
    const { locale: localeParam } = await params;
    const locale = getLocaleOrNotFound(localeParam);
    const content = getHomePageContent(locale);
    const personJsonLd = getPersonJsonLd(locale);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd),
                }}
            />
            <Nav locale={locale} content={content.chrome} />
            <main>
                <Hero
                    locale={locale}
                    content={content.hero}
                    portraitSrc="/images/home/hero-portrait.jpg"
                />
                <QuoteBand content={content.quoteBand} />
                <BioPreview locale={locale} content={content.bioPreview} />
                <LegacyHighlights content={content.legacy} />
                <WorksPreview locale={locale} content={content.works} />
                <Documentary
                    locale={locale}
                    content={content.documentary}
                    posterSrc="/images/home/documentary-poster.jpg"
                />
                <QuoteGrid content={content.quoteGrid} />
                <ArchiveCTA locale={locale} content={content.archive} />
            </main>
            <Footer locale={locale} content={content.chrome} />
        </>
    );
}
