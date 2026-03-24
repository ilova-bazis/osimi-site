"use client";

import { useMemo, useState } from "react";
import type { TimelineCategory, TimelineStreamItem } from "@/content/timeline";

export type TimelinePageProps = {
    label: string;
    title: string;
    subtitle: string;
    intro: string;
    categoriesLabel: string;
    foldLabel: string;
    allLabel: string;
    emptyLabel: string;
    countSuffix: string;
    categories: Array<{ key: TimelineCategory; label: string }>;
    stream: TimelineStreamItem[];
};

function TimelineCard({
    entry,
    detail = false,
}: {
    entry:
        | Extract<TimelineStreamItem, { type: "entry" }>["entry"]
        | Extract<
              TimelineStreamItem,
              { type: "fold" }
          >["fold"]["entries"][number];
    detail?: boolean;
}) {
    return (
        <article
            className={`timeline-entry${detail ? " timeline-entry--detail" : ""}`}
        >
            <div className="timeline-entry__year-wrap">
                <p className="timeline-entry__year">{entry.displayYear}</p>
                <span className="timeline-entry__line" aria-hidden="true" />
            </div>
            <div className="timeline-entry__card">
                <span className="timeline-pill" data-category={entry.category}>
                    {entry.categoryLabel}
                </span>
                <p className="timeline-entry__description">{entry.body}</p>
                {entry.notes.length > 0 ? (
                    <ul className="timeline-entry__notes">
                        {entry.notes.map((note) => (
                            <li key={`${entry.id}-${note}`}>{note}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </article>
    );
}

export default function TimelinePage({
    label,
    title,
    subtitle,
    intro,
    categoriesLabel,
    foldLabel,
    allLabel,
    emptyLabel,
    countSuffix,
    categories,
    stream,
}: TimelinePageProps) {
    const [selectedCategory, setSelectedCategory] =
        useState<TimelineCategory | null>(null);

    const filteredStream = useMemo<TimelineStreamItem[]>(() => {
        if (!selectedCategory) {
            return stream;
        }

        return stream.reduce<TimelineStreamItem[]>((acc, item) => {
            if (item.type === "entry") {
                if (item.entry.category === selectedCategory) {
                    acc.push(item);
                }

                return acc;
            }

            const entries = item.fold.entries.filter(
                (entry) => entry.category === selectedCategory,
            );
            if (entries.length === 0) {
                return acc;
            }

            const first = entries[0];
            const last = entries[entries.length - 1];
            const range =
                first.displayYear === last.displayYear
                    ? first.displayYear
                    : `${first.displayYear} - ${last.displayYear}`;
            const countLabel = `${entries.length} ${countSuffix}`;

            acc.push({
                type: "fold",
                fold: {
                    ...item.fold,
                    label: `${foldLabel} ${range} · ${countLabel}`,
                    entries,
                },
            });

            return acc;
        }, []);
    }, [countSuffix, foldLabel, selectedCategory, stream]);

    return (
        <>
            <section
                className="timeline-hero section section--ivory"
                aria-labelledby="timeline-title"
            >
                <div className="container timeline-hero__inner">
                    <div className="timeline-hero__content">
                        <p className="label">{label}</p>
                        <h1
                            className="page-hero__title timeline-hero__title"
                            id="timeline-title"
                        >
                            {title}
                        </h1>
                        <p className="page-hero__subtitle timeline-hero__subtitle">
                            {subtitle}
                        </p>
                        <div className="divider" />
                        <p className="section-body timeline-hero__intro">
                            {intro}
                        </p>
                    </div>

                    <aside
                        className="timeline-hero__legend"
                        aria-label={categoriesLabel}
                    >
                        <p className="timeline-hero__legend-title">
                            {categoriesLabel}
                        </p>
                        <div className="timeline-hero__legend-list">
                            <button
                                type="button"
                                className={`timeline-pill timeline-pill--filter${selectedCategory === null ? " is-active" : ""}`}
                                onClick={() => setSelectedCategory(null)}
                                aria-pressed={selectedCategory === null}
                            >
                                {allLabel}
                            </button>
                            {categories.map((category) => (
                                <button
                                    type="button"
                                    className={`timeline-pill timeline-pill--filter${selectedCategory === category.key ? " is-active" : ""}`}
                                    key={category.key}
                                    data-category={category.key}
                                    onClick={() =>
                                        setSelectedCategory((current) =>
                                            current === category.key
                                                ? null
                                                : category.key,
                                        )
                                    }
                                    aria-pressed={
                                        selectedCategory === category.key
                                    }
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>

            <section
                className="timeline section section--ivory-d"
                aria-label={label}
            >
                <div className="container">
                    <div className="timeline__list">
                        {filteredStream.map((item) => {
                            if (item.type === "entry") {
                                return (
                                    <TimelineCard
                                        key={item.entry.id}
                                        entry={item.entry}
                                    />
                                );
                            }

                            return (
                                <details
                                    className="timeline-fold"
                                    key={item.fold.id}
                                >
                                    <summary className="timeline-fold__summary">
                                        <span className="timeline-fold__label">
                                            {item.fold.label}
                                        </span>
                                    </summary>
                                    <div className="timeline-fold__body">
                                        {item.fold.entries.map(
                                            (
                                                entry: (typeof item.fold.entries)[number],
                                            ) => (
                                                <TimelineCard
                                                    key={entry.id}
                                                    entry={entry}
                                                    detail
                                                />
                                            ),
                                        )}
                                    </div>
                                </details>
                            );
                        })}
                        {filteredStream.length === 0 ? (
                            <p className="timeline__empty">{emptyLabel}</p>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}
