# Works Implementation Draft

This document turns `docs/works-research.md` into an implementation-ready draft for the future `Works` page.

Goal:
- replace the placeholder-style current page with a real, curated works page
- preserve readability while substantially increasing factual and bibliographic depth
- keep the first implementation selective rather than exhaustive

This draft is meant to be used directly when rewriting `content/works.ts`.

## Implementation Direction

The current `content/works.ts` structure is too thin for the amount of verified material now available. The next implementation should move from:

- theme summary
- 5-item selected list
- placeholder books-about-Osimi section
- roadmap prose

to a more structured page with:

- stronger hero framing
- curated intellectual fields
- selected authored works
- editorial and encyclopedia projects
- UNESCO and international publications
- translation and educational publishing
- selected article clusters
- books about Osimi

## Recommended Content Types

If we keep everything inside `content/works.ts`, the content model should expand from the current minimal shape to something closer to this:

```ts
type WorksField = {
  title: string
  body: string
}

type WorksItem = {
  originalTitle: string
  translatedTitle?: string
  year: string
  place?: string
  language?: string
  type: string
  role?: string
  summary: string
}

type WorksCluster = {
  title: string
  intro?: string
  items: WorksItem[]
}

type WorksPageContent = {
  metadata: {
    title: string
    description: string
  }
  hero: {
    label: string
    title: string
    subtitle: string
    intro: string
    quote: string
    attribution: string
  }
  fields: {
    label: string
    title: string
    intro: string
    items: WorksField[]
  }
  authoredWorks: WorksCluster
  editorialProjects: WorksCluster
  unescoProjects: WorksCluster
  translations: WorksCluster
  articleThemes: {
    label: string
    title: string
    intro: string
    items: Array<{
      title: string
      body: string
      examples: string[]
    }>
  }
  booksAbout: {
    label: string
    title: string
    intro: string
    items: Array<{
      title: string
      type: string
      note: string
    }>
  }
  relatedLinks: {
    title: string
    items: Array<{ href: string; label: string; description: string }>
  }
}
```

If preferred, the actual item arrays can later be moved into a separate data file.

## Recommended Public Page Structure

### 1. Hero

Recommended title:
- `Works and Intellectual Legacy`

Recommended subtitle:
- `Books, essays, editorial projects, and international scholarship`

Recommended intro direction:
- present Osimi as:
  - philosopher of science
  - historian of thought
  - editor and organizer of knowledge
  - interpreter of classical Central Asian intellectual heritage
  - UNESCO-connected international scholar

Recommended hero quote:
- `The chief weapon of a person - and especially of a scholar - is deep, comprehensive knowledge of the problem and impeccable logic.`

Reason:
- this quote is now verified and fits the section better than the current generosity quote

## 2. Intellectual Fields

Use six concise fields.

### Field 1
- Title: `Philosophy of Science`
- Body: `Works on matter, physical reality, scientific knowledge, and the conceptual foundations of modern science.`

### Field 2
- Title: `History of Thought`
- Body: `Studies of philosophical development, intellectual history, and the transmission of ideas across periods and traditions.`

### Field 3
- Title: `Central Asian Civilization`
- Body: `Research on the region's scientific, historical, and civilizational legacy, including Kushan, Bactrian, and broader UNESCO-linked scholarship.`

### Field 4
- Title: `Classical Thinkers and Literary Heritage`
- Body: `Interpretive and editorial work on Ibn Sina, Biruni, Jami, Hafiz, Amir Khusraw, Ahmad Donish, Sadriddin Aini, and other major figures of the Persian-Tajik intellectual tradition.`

### Field 5
- Title: `Encyclopedias, Dictionaries, and Public Knowledge`
- Body: `Large-scale editorial work that organized knowledge for broad public use, from philosophical dictionaries to national encyclopedias.`

### Field 6
- Title: `Translation and Educational Publishing`
- Body: `Russian-to-Tajik translations, school and university texts, and terminology-building work that helped shape modern scientific language in Tajik.`

## 3. First-Pass Curated Dataset

This is the recommended phase-one dataset for the page.

## Authored Works

### 1. Space and Time as the Basic Forms of Being of Matter
- originalTitle: `Пространство и время как основные формы бытия материи`
- year: `1955`
- place: `Moscow`
- language: `Russian`
- type: `Candidate dissertation`
- role: `Author`
- summary: `His candidate dissertation, marking the decisive shift from physics toward philosophy.`

### 2. Matter and the Physical Picture of the World
- originalTitle: `Материя ва тасвири физикии олам`
- translatedTitle: `Matter and the Physical Picture of the World`
- year: `1966`
- place: `Dushanbe, Irfon`
- language: `Tajik`
- type: `Book`
- role: `Author`
- summary: `A foundational work in Osimi's philosophy of science, linking modern physical knowledge with broader ontological questions.`

### 3. Russian-Tajik Terminological Dictionary of Philosophy
- originalTitle: `Луғати руси-тоҷикии терминологияи философия`
- translatedTitle: `Russian-Tajik Terminological Dictionary of Philosophy`
- year: `1966`
- place: `Dushanbe, Irfon`
- language: `Tajik / Russian`
- type: `Dictionary`
- role: `Compiler`
- summary: `A major contribution to the development of philosophical terminology in Tajik.`

### 4. Science of Central Asia in the Kushan Era and the Ways of Its Study
- originalTitle: `Наука Средней Азии кушанской эпохи и пути её изучения`
- year: `1968`
- place: `Dushanbe, Donish`
- language: `Russian`
- type: `Booklet / conference-oriented study`
- role: `Author`
- summary: `A compact study tied to the major Kushan conference and to Osimi's work on Central Asia as a civilizational field.`

### 5. The Formation of Philosophical Thinking
- originalTitle: `Пайдоиш ва ташаккули тафаккури фалсафӣ`
- translatedTitle: `The Formation of Philosophical Thinking`
- year: `1970`
- place: `Dushanbe, Donish`
- language: `Tajik`
- type: `Book`
- role: `Author`
- summary: `One of his central works on the history of thought and philosophical development.`

### 6. The Concept of Matter and the Problem of Physical Reality
- originalTitle: `Понятие материи и проблема физической реальности`
- year: `1970`
- place: `Moscow`
- language: `Russian`
- type: `Doctoral dissertation / published dissertation`
- role: `Author`
- summary: `A key work in philosophy of physics and ontology, bringing together his scientific and philosophical trajectories.`

### 7. Dialectical Materialism
- originalTitle: `Материализми диалектикӣ`
- translatedTitle: `Dialectical Materialism`
- year: `1974`
- place: `Dushanbe, Irfon`
- language: `Tajik`
- type: `Textbook`
- role: `Co-author`
- summary: `A university teaching text that reflects Osimi's role in philosophical education as well as research.`

### 8. Spiritual Culture of the New Human Being
- originalTitle: `Духовная культура нового человека`
- year: `1977`
- place: `Dushanbe`
- language: `Russian`
- type: `Book`
- role: `Author`
- summary: `An important bridge between philosophy, ethics, culture, and public life.`

### 9. Research on the Ethnic History of Ancient Central Asia in Soviet Scholarship
- originalTitle: `Исследование этнической истории древней Центральной Азии (II тыс. до н.э.) в Советской науке`
- year: `1977`
- place: `Moscow`
- language: `Russian`
- type: `Booklet / study`
- role: `Author`
- summary: `A compact study on the historiography of ancient Central Asia, with an English version also listed in the bibliography.`

### 10. Sadriddin Aini: 100 Years Since Birth
- originalTitle: `Садриддин Айни: 100 лет со дня рождения`
- year: `1978`
- place: `Moscow, Znanie`
- language: `Russian`
- type: `Book`
- role: `Co-author`
- summary: `A concise but important literary-historical work on one of the defining modern figures of Tajik culture.`

### 11. Amir Khusraw Dehlavi
- originalTitle: `Амир Хусрави Деҳлавӣ`
- year: `1976`
- place: `Dushanbe`
- language: `Tajik`
- type: `Book`
- role: `Co-author`
- summary: `A compact literary-historical work that reflects Osimi's commitment to classical Persianate heritage.`

### 12. Three Articles on Hafiz-Khoju-Bushaq
- originalTitle: `Се мақола дар бораи Ҳофиз-Хоҷу-Бусҳоқ`
- year: `1973`
- place: `Tehran`
- language: `Persian`
- type: `Book`
- role: `Co-author`
- summary: `A Persian-language publication demonstrating Osimi's work beyond Soviet publication circuits.`

## Editorial and Encyclopedia Projects

### 1. Tajik Soviet Encyclopedia
- originalTitle: `Энциклопедияи советии тоҷик`
- year: `1978-1988`
- place: `Dushanbe`
- language: `Tajik`
- type: `Encyclopedia`
- role: `Chief scientific editor`
- summary: `An eight-volume republic-scale encyclopedia and one of the central public knowledge projects associated with Osimi.`

### 2. Tajik SSR
- originalTitle: `Таджикская Советская Социалистическая Республика`
- year: `1974; 1984`
- place: `Dushanbe`
- language: `Russian`
- type: `One-volume encyclopedia / handbook`
- role: `Chief editor`
- summary: `A compact reference work presenting the history, culture, science, and public life of Tajikistan in encyclopedic form.`

### 3. Encyclopedia of Tajik Literature and Art
- originalTitle: `Энциклопедияи адабиёт ва санъати тоҷик`
- year: `1988-1989 (vols. 1-2 listed)`
- place: `Dushanbe`
- language: `Tajik`
- type: `Encyclopedia`
- role: `Editorial board / organizer`
- summary: `A major reference project extending encyclopedia work into literary and artistic heritage; the current bibliography excerpt explicitly lists the first two volumes.`

### 4. Abu Ali Ibn Sina. Selected Works
- originalTitle: `Абуали ибн Сино. Осори мунтахаб`
- year: `1980-1985`
- place: `Dushanbe`
- language: `Tajik`
- type: `Edited volume project`
- role: `Editorial chair / responsible editor`
- summary: `A multi-volume project that reflects Osimi's central role in making Ibn Sina available to modern readers.`

### 5. Ibn Sina. Canon of Medicine
- originalTitle: `Абуали ибни Сино. Қонуни тиб`
- year: `1989`
- place: `Dushanbe`
- language: `Tajik`
- type: `Edited classical text`
- role: `Editorial board member`
- summary: `A major classical publication connecting Osimi's scholarship to long-term civilizational editing work.`

### 6. Aini. Collected Works
- originalTitle: `Айни С. Куллиёт`
- year: `1969, 1976, 1977, 1981 (listed volumes)`
- place: `Dushanbe`
- language: `Tajik`
- type: `Edited collected works`
- role: `Editorial board member`
- summary: `Part of Osimi's effort to curate and stabilize modern Tajik literary heritage in published form; the bibliography excerpt lists selected volumes rather than the full run.`

### 7. Gulshani Adab
- originalTitle: `Гулшани адаб`
- year: `1975-1980`
- place: `Dushanbe`
- language: `Tajik`
- type: `Anthology / edited series`
- role: `Editorial board member`
- summary: `A multi-volume literary project central to public literary culture.`

### 8. Amir Khusraw. Selected Works
- originalTitle: `Дехлави Амир Хусрав. Осори мунтахаб`
- year: `1971-1975`
- place: `Dushanbe`
- language: `Tajik`
- type: `Edited collected works`
- role: `Editorial project participant`
- summary: `A four-volume project showing Osimi's commitment to classical Persianate literary publication.`

## UNESCO and International Publications

### 1. History of Civilizations of Central Asia
- originalTitle: `History of Civilizations of Central Asia`
- year: `1992-1998` 
- place: `Paris, UNESCO`
- language: `English`
- type: `UNESCO multivolume publication`
- role: `Editor / project organizer`
- summary: `The signature international scholarly project of Osimi's later career, culminating in his editorship of Volume IV, Part One with C.E. Bosworth.`

### 2. History of Humanity
- originalTitle: `History of Humanity`
- year: `1994-1996 publication context; Volume IV role confirmed in narrative sources`
- place: `Paris, UNESCO`
- language: `English`
- type: `UNESCO multivolume publication`
- role: `Participant in Volume IV; identified in narrative sources as co-editor`
- summary: `Part of Osimi's wider UNESCO publication work. The bibliography confirms his presence in the series, while narrative sources in the corpus identify him as co-editor of Volume IV and link him to the Transoxiana chapter written with N.N. Negmatov.`

### 3. Journal of Central Asia
- originalTitle: `Journal of Central Asia`
- year: `1994`
- place: `Islamabad`
- language: `English`
- type: `Journal editorial work`
- role: `Board of Editors`
- summary: `Evidence of Osimi's presence in international scholarly publishing beyond monographs and conference volumes.`

### 4. Information Bulletin UNESCO / IASCCA
- originalTitle: `Information Bulletin UNESCO`
- year: `1996`
- place: `Moscow`
- language: `English / Russian context`
- type: `Bulletin / organizational publication`
- role: `International Editorial Council; president attribution`
- summary: `Useful for showing his institutional and editorial role in the international association around Central Asian cultural studies.`

### 5. Selected Foreign-Language Publications
- Include as representative entries rather than a full list:
  - `Role of USSR Academy of Sciences in the formation and progress of Science in the Soviet Republics of Central Asia`
  - `The ways of exploring Central Asian science in Early Middle Ages`
  - `Poetic and socio-ethic views of Ibn Sina`
  - `The life and teachings of Ibn Sina`
  - `Central Asia: One of the centres of Islamic Civilization...`
  - `Rewriting Tajik history`

## Translation and Educational Publishing

Recommended subsection title:
- `Building Scientific Language in Tajik`

Recommended intro:
- `Before he emerged as a major philosopher and editor, Osimi played an important role in translating and adapting scientific, mathematical, and philosophical texts for Tajik readers, students, and schools.`

Representative entries:

### 1. Foundations of Marxist Philosophy
- originalTitle: `Асосҳои философияи марксистӣ`
- year: `1959`
- type: `Translation`
- summary: `A major philosophical translation showing Osimi's early role in Tajik-language intellectual mediation.`

### 2. Foundations of Marxism-Leninism
- originalTitle: `Асосҳои марксизм-ленинизм`
- year: `1960`
- type: `Translation / editorial translation`

### 3. Astronomy
- originalTitle: `Воронцов-Вельяминов Б.А. Астрономия`
- year: `1955`
- type: `School textbook translation`

### 4. Lenin Works
- originalTitle: `В.И.Ленин Асарҳо`
- year: `1957-1963`
- type: `Translation`

### 5. General Physics Course
- originalTitle: `Фриш С.Э, Тиморева А.В. Курси физикаи умумӣ`
- year: `1960`
- type: `Scientific textbook translation`

### 6. Anti-Dühring
- originalTitle: `Энгельс.Ф. Анти-Дюринг`
- year: `1975`
- type: `Translation`

## Selected Article Themes

These should not be rendered as hundreds of entries. Use thematic cards with examples.

### Theme 1. Ibn Sina and World Civilization
- Body: `Osimi returned repeatedly to Ibn Sina as philosopher, scientist, encyclopedist, and world-historical figure.`
- Examples:
  - `Авиценна и мировая цивилизация`
  - `Авиценна в контексте мировой цивилизации`
  - `Ибн Сина в истории мировой культуры`

### Theme 2. Philosophy of Science
- Body: `He wrote about scientific knowledge not as a narrow technical field, but as part of a larger philosophical picture of matter, truth, and development.`
- Examples:
  - `Алгебра и гармония`
  - `В.И. Ленин о союзе философии и естествознания`
  - `Относительно зависимости научного мышления...`

### Theme 3. Classical Science and Intellectual Heritage
- Body: `Osimi treated Biruni, Khwarazmi, and related figures as part of a living Central Asian scientific tradition.`
- Examples:
  - `Абдураӣҳони Берунӣ ...`
  - `Al-Biruni astronomical treatise in the Dari language`
  - `Al-Kwarazmi’s historical-cultural synthesis`

### Theme 4. Science, Culture, and Public Life in Tajikistan
- Body: `Many of his essays connect scholarship to social development, public culture, education, and the place of science in national life.`
- Examples:
  - `Илм дар хизмати халқ`
  - `Шаги науки Таджикистана`
  - `Благородная миссия русского языка`

## Books About Osimi

Keep this section distinct from his authored works.

For phase one, the page can still present this block more cautiously if the final list has not yet been curated. Recommended wording:

- `This section will gather biographical, memorial, and scholarly books about Osimi, separate from his own authored and edited works.`

## Notes For `content/works.ts` Rewrite

When rewriting the page:
- remove placeholder language such as `catalog in progress`
- remove incorrect shorthand like `Tajik Soviet Encyclopedia (1978)`
- do not reduce UNESCO work to vague “UNESCO era” language
- avoid publishing a huge flat bibliography
- keep the page curated, selective, and interpretable
- use exact original titles where possible
- use translated titles only as reader aids

## Suggested Phase-One Build Order

1. Rewrite hero and fields
2. Replace `selected` with curated `authoredWorks`
3. Add `editorialProjects`
4. Add `unescoProjects`
5. Add `translations`
6. Convert article material into thematic cards
7. Keep `booksAbout` modest unless a final reading list is ready

## Source Anchors For Implementation

Use these files first when writing `content/works.ts`:
- `docs/works-research.md`
- `docs/dates.md`
- `biography-rag/docs/BIBL2fl7.txt`
- `biography-rag/docs/опубли~1ei7.txt`
- `biography-rag/docs/BIBLIO~4pj3.txt`

These are sufficient for a strong first full implementation.
