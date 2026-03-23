# Muhammad Osimi Website — Detailed Project Specification

## 1. Project Overview

### 1.1 Project Name
Muhammad Osimi Website

### 1.2 Project Purpose
The website will serve as the official public-facing digital home for the life, work, thought, and legacy of **Muhammad Osimi**. It should present him as a scholar, humanist, science organizer, public figure, and international intellectual whose work connected philosophy, science, education, culture, and peace.

The website is not only a biography site. It is also:
- a legacy platform
- a multilingual public knowledge resource
- a documentary showcase
- a curated gateway into the broader Osimi archive ecosystem

### 1.3 Core Goals
- Present Muhammad Osimi with dignity, clarity, and historical depth
- Make his life and contributions accessible to international and regional audiences
- Support multiple languages from the beginning
- Provide a stable public website that can later integrate with the Osimi digital archive
- Create a platform that feels archival, scholarly, warm, and timeless

### 1.4 Success Criteria
The first release should:
- launch with a complete homepage and primary internal pages
- support multilingual routing
- be optimized for reading, SEO, and archival presentation
- remain mostly static and low-complexity
- establish a clean boundary between public-site content and archive-system infrastructure

---

## 2. Product Vision

The website should feel like a curated public exhibition rather than a generic profile site.

### 2.1 Product Positioning
The website should present Muhammad Osimi as:
- a scholar and philosopher
- a science organizer and institution builder
- a statesman and public intellectual
- a humanist voice for culture, language, memory, and unity
- a figure whose legacy continues through scholarship, documentary film, and archival preservation

### 2.2 User Experience Intent
Visitors should feel that they are entering a carefully curated historical and intellectual space.

The site should feel:
- dignified
- calm
- scholarly
- warm
- international
- archival, but not dusty

### 2.3 Product Principles
- Content first
- Readability over visual excess
- Timeless over trendy
- Structured over cluttered
- Multilingual by design
- Archive-aware, but not archive-heavy

---

## 3. Scope

## 3.1 In Scope for Version 1
- Public marketing/biographical site
- Multilingual routing foundation
- Homepage
- Biography page
- Timeline page
- Works page
- Documentary page
- Quotes page
- Archive landing page
- Shared layout and navigation
- SEO metadata per locale/page
- Structured content files for text and collections
- Static-first deployment

## 3.2 Out of Scope for Version 1
- Full archive browsing UI
- Public search across archive objects
- User accounts or login
- CMS for editors
- Advanced filtering systems
- Direct archive ingestion workflows
- Admin dashboard
- Dynamic content editing by non-technical users
- Public upload features

## 3.3 Future Scope
- Selected archive object previews on public site
- Search and browse integration with archive API
- Featured publications or object detail pages
- Gallery expansion
- Documentary screenings archive
- Interactive maps or institutional network views
- Editorial backend or CMS if needed

---

## 4. Primary Audiences

### 4.1 General Visitors
People who want to learn who Muhammad Osimi was.

Needs:
- strong summary
- easy navigation
- accessible biography
- meaningful quotations
- visual and emotional entry points

### 4.2 Scholars / Researchers / Students
People seeking a structured and trustworthy introduction to his life, work, and significance.

Needs:
- timeline
- works and ideas
- institutional context
- documentary information
- archive direction

### 4.3 Tajik / Persian-speaking / Regional Audiences
People for whom Osimi has direct cultural and historical importance.

Needs:
- Tajik and Russian support from the start
- dignified representation
- language-sensitive content
- cultural authenticity

### 4.4 Documentary Viewers / Media / Public Culture Audiences
Visitors entering through the film, screenings, or public legacy.

Needs:
- documentary overview
- screenings and recognition
- compelling story entry point

### 4.5 Family / Legacy Stewardship Stakeholders
People involved in preserving and presenting Osimi’s memory and materials.

Needs:
- trustworthy representation
- extensible platform
- archival compatibility
- high editorial control

---

## 5. Information Architecture

## 5.1 Primary Navigation
Approved top-level menu:
- Home
- Biography
- Timeline
- Works
- Documentary
- Archive
- Quotes

### 5.2 Footer Navigation
Recommended footer links:
- Biography
- Timeline
- Works
- Documentary
- Archive
- Quotes
- About Project
- Contact or Project Info

### 5.3 Route Map
Using locale-based routing:

- `/[locale]`
- `/[locale]/biography`
- `/[locale]/timeline`
- `/[locale]/works`
- `/[locale]/documentary`
- `/[locale]/archive`
- `/[locale]/quotes`

Initial locales:
- `en`
- `tg`
- `ru`

Possible future locales:
- `fa`
- `fr`

---

## 6. Page Specifications

## 6.1 Home Page
### Purpose
Provide a dignified and emotionally resonant introduction to Muhammad Osimi while directing visitors into deeper parts of the site.

### Required Sections
1. Hero
2. Featured quote band
3. Biography preview
4. Legacy milestones / timeline preview
5. Works preview
6. Documentary feature
7. Quote grid
8. Archive call-to-action
9. Footer

### Required Outcomes
- establish identity and importance immediately
- give both emotional and intellectual entry points
- help visitors understand breadth of legacy
- connect biography, ideas, film, and archive

---

## 6.2 Biography Page
### Purpose
Present a fuller narrative account of Muhammad Osimi’s life.

### Proposed Sections
- Introduction
- Early Life and Education
- War Service
- Academic Formation
- Tajik Polytechnic Institute
- Public Leadership and State Roles
- Academy of Sciences Presidency
- UNESCO and International Work
- Thought, Culture, and Language
- Final Years and Legacy

### Requirements
- narrative flow
- section-based structure for readability
- support photographs or archival inserts later
- include callouts or pull quotes where appropriate

---

## 6.3 Timeline Page
### Purpose
Provide a chronological reference view of key life events, appointments, publications, and public milestones.

### Requirements
- year-based or range-based entries
- readable on desktop and mobile
- support future filtering by category if needed
- categories may include: life, education, war, academia, government, UNESCO, publications

---

## 6.4 Works Page
### Purpose
Present Muhammad Osimi as a thinker, editor, scholar, translator, and cultural interpreter.

### Proposed Content Blocks
- major themes
- selected books
- editorial work
- encyclopedia work
- philosophical works
- history of science and civilization
- language and cultural heritage

### Requirements
- structured, not overwhelming
- allow later expansion into detailed bibliography
- support original and translated titles

---

## 6.5 Documentary Page
### Purpose
Feature the documentary *Osimi* as a contemporary bridge into his legacy.

### Proposed Sections
- introduction to the film
- synopsis
- narrator / production details
- locations filmed
- screenings
- awards and recognition
- trailer / poster / stills placeholder

### Requirements
- emotionally strong page
- support embedded media later
- support screenings timeline or list

---

## 6.6 Quotes Page
### Purpose
Present selected quotations as an accessible window into Osimi’s moral and intellectual voice.

### Requirements
- quote cards or grouped themes
- support original and translated versions
- support categories such as history, generosity, children, culture, language

---

## 6.7 Archive Landing Page
### Purpose
Introduce the broader archive initiative without overwhelming the visitor with technical archive details.

### Proposed Sections
- archive mission
- what kinds of materials are preserved
- why this work matters
- featured material previews (future)
- route to archive platform or published collection areas

### Requirements
- simple, dignified, and future-proof
- clearly distinguish public presentation from deep archive workflows

---

## 7. Multilingual Requirements

## 7.1 Language Strategy
The site must be multilingual from the beginning.

Initial supported languages:
- English
- Tajik
- Russian

### 7.2 Routing Strategy
Use route-based localization:
- `/en`
- `/tg`
- `/ru`

### 7.3 Language Switcher
Language switcher should appear in the header.

Guidelines:
- visible but elegant
- no country flags
- short format such as `EN | TG | RU` or native-language labels
- current locale clearly highlighted

### 7.4 Translation Model
Separate:
- UI strings
- page content
- collection content

### 7.5 Special Multilingual Content Rules
Some fields should support both original and translated values.

Examples:
- quotes
- book titles
- institutional names
- film details
- archival labels

### 7.6 Translation Policy
- English may serve as operational master for development workflow
- translations must be reviewed rather than auto-generated blindly
- preserve authenticity for historically meaningful terms and quotations

---

## 8. Visual and UX Design Specification

## 8.1 Design Tone
The design should communicate:
- ceremony
- scholarship
- memory
- archival quality
- seriousness without heaviness

## 8.2 Visual Identity
The selected production direction should be based on the ceremonial archive theme.

### Core Palette Direction
- deep softened burgundy
- warm ivory/parchment backgrounds
- charcoal text
- muted gold accents

### Typography Direction
- serif for headings and quotations
- sans-serif for navigation, UI, and body text

## 8.3 Layout Style
- spacious vertical rhythm
- section-based composition
- restrained motion
- strong typographic hierarchy
- elegant dividers and subtle accents

## 8.4 Interaction Style
- minimal client-side behavior
- soft hover states
- no distracting motion-heavy effects
- focus on reading and visual calm

## 8.5 Accessibility Requirements
- semantic HTML structure
- keyboard-accessible navigation
- sufficient color contrast
- descriptive alt text
- responsive layout across screen sizes
- accessible focus states

---

## 9. Technical Stack

## 9.1 Core Stack
- Next.js
- TypeScript
- Tailwind CSS
- App Router

## 9.2 Rendering Strategy
Prefer static generation wherever possible.

Goals:
- fast performance
- low operational complexity
- strong SEO
- reduced attack surface

## 9.3 Content Strategy
For version 1, use structured local content files instead of a CMS.

Content types may include:
- TypeScript content modules
- JSON data files
- MDX only where beneficial for long-form editorial content

## 9.4 Why This Stack
- good support for content-rich public websites
- strong route-based architecture
- good multilingual fit
- scalable without requiring backend complexity from day one

---

## 10. System Architecture

## 10.1 High-Level Separation
The public website must remain a distinct layer from the archive system.

### Public Website Responsibilities
- biography and legacy presentation
- multilingual public pages
- documentary showcase
- quote and timeline presentation
- curated archive entry points

### Archive System Responsibilities
- ingestion workflows
- preservation records
- object metadata
- storage and derivatives
- search and retrieval
- internal archive operations

## 10.2 Core Principle
The website may consume **published, curated outputs** from the archive later, but it must not be tightly coupled to raw ingestion or internal archive workflows.

## 10.3 Integration Phases
### Phase 1
Standalone public site with static curated content.

### Phase 2
Pull in selected published archive previews.

### Phase 3
Optional API-driven object pages or public archive search.

---

## 11. Repository and Project Structure

Suggested structure:

```text
src/
  app/
    [locale]/
      page.tsx
      biography/page.tsx
      timeline/page.tsx
      works/page.tsx
      documentary/page.tsx
      archive/page.tsx
      quotes/page.tsx
  components/
    layout/
    home/
    biography/
    timeline/
    documentary/
    quotes/
    archive/
    shared/
  content/
    en/
    tg/
    ru/
  data/
    quotes/
    timeline/
    works/
  lib/
    i18n/
    content/
    seo/
    utils/
  styles/
```

### 11.1 Component Groups
- layout components
- page sections
- reusable content blocks
- content rendering helpers

### 11.2 Content Organization
Recommended separation:
- locale-specific page files
- shared collections with localized values
- UI translation dictionary

---

## 12. Content Model

## 12.1 UI Strings
Examples:
- menu labels
- button labels
- footer labels
- common headings

## 12.2 Page Content
Per-locale page objects for:
- home
- biography
- documentary
- archive landing

## 12.3 Collection Types
### Quotes
Fields:
- id
- theme
- originalLanguage
- originalText
- translations
- attribution

### Timeline Events
Fields:
- id
- startYear
- endYear optional
- category
- localized title
- localized description
- optional source note

### Works
Fields:
- id
- original title
- translated title(s)
- year optional
- category
- description
- language(s)

### Screenings
Fields:
- id
- date
- city
- country
- venue
- label by locale

---

## 13. SEO and Metadata Requirements

## 13.1 General Requirements
- page-level title and description for every route
- locale-aware metadata
- social sharing previews
- structured, readable URLs

## 13.2 Priority SEO Pages
- home
- biography
- documentary
- archive landing

## 13.3 Metadata Content Strategy
Metadata should emphasize:
- Muhammad Osimi’s significance
- biography and legacy
- documentary visibility
- multilingual discoverability

---

## 14. Performance and Security Requirements

## 14.1 Performance
- mostly static pages
- optimized images
- minimal client JavaScript
- avoid heavy third-party scripts
- fast initial page load

## 14.2 Security Approach
Use Next.js conservatively.

Requirements:
- static-first architecture
- minimal server-side complexity
- keep dependencies tightly managed
- avoid unnecessary plugins
- patch framework and dependencies promptly
- keep public website separated from sensitive archive internals

## 14.3 Operational Simplicity
The public site should be simple to deploy, inspect, and maintain.

---

## 15. Content Sources and Editorial Basis

The initial editorial material should draw from:
- long-form biographical material
- documentary synopsis
- documentary screenings information
- known quotes and history-related quotations
- future curated family/archive materials

The content should remain historically careful, respectful, and editorially consistent.

---

## 16. Open Decisions

The following decisions still need final confirmation:
- exact production color token values
- whether navigation label is `Works` or `Works & Ideas` (recommended: `Works`)
- exact language switcher display format
- whether public site and archive site live in separate repos or a monorepo
- whether `fa` is included in phase 1 or later
- whether documentary page includes embedded video in v1 or placeholder CTA only

---

## 17. Delivery Plan

## Phase 1 — Foundation
- finalize specification
- set up Next.js app
- set up locale routing
- define content model
- implement shared layout and navigation

## Phase 2 — Core Pages
- build homepage
- build biography page
- build timeline page
- build documentary page
- build works page
- build quotes page
- build archive landing page

## Phase 3 — Content and Polish
- add finalized content in all target locales
- add SEO metadata
- responsive refinement
- accessibility review
- production cleanup

## Phase 4 — Archive Bridge
- add curated archive previews
- define published-content integration boundary
- prepare future public archive expansion

---

## 18. Final Architectural Summary

The Muhammad Osimi Website should be implemented as a **multilingual, content-first, static-first Next.js website** with strong editorial structure and a calm archival design language.

It should present Muhammad Osimi as a scholar, philosopher, science organizer, statesman, and humanist while also serving as the public gateway to a broader long-term archival mission.

The website must remain elegant, historically grounded, easy to extend, and clearly separated from the technical complexity of the archive backend.

