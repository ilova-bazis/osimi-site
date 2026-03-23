Here is a **build-ready specification** for the **Biography page** that you can use as a reference during design and implementation.

# Biography Page Specification

## 1. Purpose

The Biography page should present a **fuller, structured narrative** of Muhammad Osimi’s life. It must go beyond the homepage summary and help the visitor understand:

* who he was
* what shaped him
* what he built
* what he stood for
* why his legacy matters

This page should feel like a **scholarly narrative**, not a dry encyclopedia entry.

---

## 2. Page Goals

The page must:

* tell a coherent life story
* balance history, intellect, and humanity
* support long-form reading without feeling heavy
* present Muhammad Osimi as a scholar, humanist, institution builder, and public figure
* create a bridge from biography into timeline, works, documentary, and archive

---

## 3. Audience

Primary audiences:

* general visitors learning about him for the first time
* students and researchers looking for structured context
* regional and family audiences seeking dignified representation
* documentary viewers wanting deeper background

---

## 4. Page Tone

The biography page should feel:

* dignified
* calm
* reflective
* historically grounded
* readable
* literary, but not overly ornate

Writing style should be:

* clear
* elegant
* active voice
* moderate sentence length variation
* sectioned for easy scanning

---

## 5. Route

Localized route structure:

* `/en/biography`
* `/tg/biography`
* `/ru/biography`

---

## 6. Page Layout Overview

Recommended order:

1. Hero / page introduction
2. Short overview statement
3. Main biography sections
4. Pull quote or visual break
5. Legacy summary
6. Related navigation / next steps

---

## 7. Detailed Section Specification

## 7.1 Biography Hero

### Purpose

Set the tone immediately and establish the page as the authoritative narrative account of his life.

### Required Content

* page label: `Biography`
* main title: `Muhammad Osimi`
* subtitle or short identity line
* brief intro paragraph
* optional portrait or archival image

### Example content direction

Title:
**Muhammad Osimi**

Subtitle:
**A life shaped by science, philosophy, public service, and cultural memory**

Intro text should summarize him as:

* physicist
* philosopher
* academic leader
* institution builder
* president of the Academy of Sciences
* UNESCO-linked intellectual figure

### Layout

* text left
* portrait right
* there would be more photos accompanying the biography

### Requirements

* elegant but restrained
* not too visually busy
* should feel more textual than homepage hero
* despite the long text it should feel easy to jump around the paragraphs, like in wikipedia

---

## 7.2 Biography Overview Block

### Purpose

Give visitors a concise framing before the long-form narrative begins.

### Content

A short 2–4 paragraph introduction answering:

* why Muhammad Osimi matters
* what the reader is about to encounter
* what makes his life distinctive

### Requirements

* concise
* high signal
* acts as an abstract for the full page

---

## 7.3 Main Narrative Body

The biography should be divided into clear sections.

Recommended sections:

### A. Early Life and Education

Covers:

* birth in Khujand
* family/cultural beginnings if available
* early schooling
* scientific education
* university studies in physics and mathematics

Purpose:
Show the foundations of his intellectual life.

---

### B. War Years and Service

Covers:

* World War II service
* military duty
* honors if included
* effect of war on his generation and worldview

Purpose:
Show historical gravity and formative experience.

---

### C. Academic Formation and Philosophy

Covers:

* return to academic life
* teaching
* graduate studies
* doctoral work
* emergence of philosophical inquiry
* science and philosophy connection

Purpose:
Show how he became more than a scientist — a thinker.

---

### D. Institution Building

Covers:

* becoming first rector of the Tajik State Polytechnic Institute
* building and organizing institutions
* role in education and modernization

Purpose:
Show leadership, organizational force, and public contribution.

---

### E. Public Leadership and State Service

Covers:

* ministerial or national leadership roles
* broader public service
* educational and scientific policy influence

Purpose:
Show that he was active not only in scholarship, but in civic and national life.

---

### F. Academy of Sciences Presidency

Covers:

* leadership of the Academy of Sciences
* length of tenure
* significance of the period
* scientific and institutional impact

Purpose:
This is one of the core pillars of the biography and should receive strong emphasis.

---

### G. International and UNESCO Work

Covers:

* international scholarly presence
* UNESCO-related work
* role in major regional/civilizational scholarship
* work across countries and intellectual networks

Purpose:
Show that his influence extended beyond Tajikistan.

---

### H. Thought, Culture, and Humanism

Covers:

* philosophy of science
* history
* education
* language
* culture
* moral and humanistic voice

Purpose:
This section should move the page from chronology into meaning.

---

### I. Final Years and Legacy

Covers:

* later years
* final public role or period
* death
* continuing legacy through memory, scholarship, film, and archive

Purpose:
Close with dignity and continuity.

---

## 7.4 Pull Quote / Visual Pause

### Purpose

Break up the long reading flow and reintroduce his own voice.

### Placement

Best placed after 2–4 narrative sections, not too early and not too late.

### Content

Use one major quote, for example one related to:

* history
* culture
* children
* generosity
* memory

### Requirements

* large serif typography
* visually calm
* optional translated/original display in future multilingual expansion

---

## 7.5 Legacy Summary Block

### Purpose

End the page with synthesis, not just chronology.

### Content

A short section explaining why Muhammad Osimi remains important today.

This should connect biography to:

* scholarship
* institutions
* documentary
* archive preservation
* cultural memory

### Requirements

* concise
* emotionally grounded
* suitable as closing text

---

## 7.6 Related Links / Next Paths

### Purpose

Guide users deeper into the site.

### Recommended links

* View Timeline
* Explore Works
* Watch Documentary
* Visit Archive

### Layout

Simple card row or inline CTA group near page bottom.

---

## 8. Content Structure Recommendation

Use `content/` for the biography page itself.

Example:

```text
content/
  en/
    biography.ts
  tg/
    biography.ts
  ru/
    biography.ts
```

### Suggested page content shape

```ts
export const biographyPage = {
  hero: {
    label: "Biography",
    title: "Muhammad Osimi",
    subtitle: "A life shaped by science, philosophy, public service, and cultural memory",
    intro: "..."
  },
  overview: {
    paragraphs: ["...", "..."]
  },
  sections: [
    {
      id: "early-life",
      title: "Early Life and Education",
      paragraphs: ["...", "..."]
    }
  ],
  closing: {
    title: "Legacy",
    paragraphs: ["..."]
  }
}
```

---

## 9. UX Requirements

The page must be designed for **long reading**.

### Required UX qualities

* clear visual hierarchy
* comfortable line length
* strong spacing between sections
* easy scrolling rhythm
* not too many competing visual elements
* section headings always visible and clear

### Recommended enhancements

* sticky sub-navigation on desktop
* section anchor links
* “Back to top” at bottom
* reading progress indicator only if subtle

---

## 10. Optional In-Page Section Navigation

A local biography nav can be very helpful.

### Example

* Early Life
* War Service
* Academic Formation
* Institution Building
* Academy Leadership
* UNESCO Work
* Legacy

### Placement options

* under hero
* left-side sticky rail on desktop
* dropdown/select on mobile

### Recommendation

Good for v1 if kept simple.

---

## 11. Visual Design Requirements

### Typography

* serif for main title and pull quotes
* sans-serif for body and navigation
* section headings strong but not oversized

### Color use

* ivory background or soft white
* burgundy accents
* muted gold dividers
* charcoal body text

### Imagery

Optional but valuable:

* one hero portrait
* one or two archival inserts later
* avoid overloading page with images

### Decorative elements

Use sparingly:

* thin dividers
* quote marks
* subtle section accents

---

## 12. Accessibility Requirements

* semantic headings in correct order
* accessible landmarks
* alt text for all images
* sufficient contrast
* keyboard-accessible in-page navigation if present
* no text embedded only inside images

---

## 13. SEO Requirements

Biography page should have strong localized metadata.

### Suggested metadata direction

Title:
`Muhammad Osimi Biography`

Description:
`Read the biography of Muhammad Osimi — scholar, philosopher, science organizer, public figure, and President of the Academy of Sciences of Tajikistan.`

Each locale should have its own metadata version.

---

## 14. Engineering / Component Specification

Suggested component breakdown:

* `BiographyHero`
* `BiographyOverview`
* `BiographySection`
* `BiographyQuoteBreak`
* `BiographyClosing`
* `BiographyRelatedLinks`
* optional `BiographySectionNav`

### Component behavior

`BiographySection` should support: title
* paragraphs
* optional image
* optional pull note
* optional side annotation

---

## 15. Responsive Behavior

### Desktop

* generous margins
* optional side navigation
* image and text can sit side by side where appropriate

### Tablet

* simpler stacked layout
* reduce width of side features

### Mobile

* single-column only
* no overly wide quote blocks
* section spacing preserved
* in-page nav collapses cleanly

---

## 16. What to Avoid

Do not make the biography page:

* too dense
* too academic in tone
* too visually decorative
* dependent on large image galleries
* just a wall of text
* overly fragmented into tiny sections

Avoid:

* excessive animations
* crowded sidebars
* overly short paragraphs everywhere
* timeline duplication inside the page

The biography is for **narrative**.
The timeline page is for **chronology**.

---

## 17. Completion Criteria

The Biography page is complete when it:

* has a strong introduction
* contains all major life phases in clear sections
* reads smoothly from start to finish
* includes at least one quote break
* ends with a meaningful legacy synthesis
* links clearly to timeline, works, documentary, and archive
* works well in all supported locales

---

## 18. Final Summary

The Biography page should function as the **main narrative heart** of the Muhammad Osimi website.

It should:

* tell the story of his life with dignity
* reveal the range of his contributions
* balance historical detail with human depth
* support multilingual reading
* serve as the foundation for understanding the rest of the site

If you want, next I can turn this into a **technical implementation spec** too — with exact TypeScript shape, component tree, and page content schema.
