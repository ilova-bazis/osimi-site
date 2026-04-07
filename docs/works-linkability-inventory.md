# Works Linkability Inventory

This document inventories what is actually available in the workspace for linking, excerpting, or citing on the `Works` page.

Important distinction:
- some items exist as readable text files in the local RAG corpus
- some items exist only as bibliography records
- some items are represented by secondary discussion rather than full primary text

At the moment, almost none of these materials are publicly exposed through the site.

## Summary

Current site state:
- `public/` contains images only
- there are no public PDFs or work files exposed through the site

Current research state:
- the RAG corpus contains many local `.txt` extracts
- some of those are substantial enough to count as full-text or near-full-text reading copies
- others are only citations or secondary commentary

Recommended statuses used in this inventory:

- `Full text candidate`
  - readable text exists in the workspace
  - enough content is present for a meaningful on-site excerpt or possible future public text page

- `Excerpt-only candidate`
  - enough text exists for quotation or a short excerpt
  - but not enough confidence yet for a clean public “read full text” link

- `Bibliography-only`
  - only citation-quality evidence currently available
  - no clean full text located in the workspace yet

## A. Strong Full-Text Candidates

These are the best immediate candidates for future internal links or excerpt blocks, once curated.

### 1. `Алгебра и гармония`
- Status: `Full text candidate`
- Type: interview / article
- Evidence:
  - `biography-rag/docs/Алгебра и гармонияar1.txt`
  - `biography-rag/docs/Suhbat_russkii textpz8.txt`
  - supporting bibliography entry:
    - `biography-rag/docs/BIBL2fl7.txt:75`
- Notes:
  - appears to be a substantial readable interview text
  - publication header is preserved in the file itself:
    - `«Дружба народов», № 4, 1974 г.`
  - this is already strong enough for an excerpt-based “read selected text” block

### 2. `Материя ва тасвири физикии олам`
- Status: `Full text candidate`
- Type: philosophical book / substantial text extract
- Evidence:
  - `biography-rag/docs/MATERIYAnb8.txt`
  - `biography-rag/docs/MATERIYAlr6.txt`
  - `biography-rag/docs/MATERIYAyl3.txt`
  - bibliography anchor:
    - `biography-rag/docs/BIBL2fl7.txt:29`
- Notes:
  - the text files contain substantial primary text, not just description
  - they appear to represent either a book excerpt or a thematically extracted text segment
  - a proper public link would require curation and title confirmation on the file level
  - strong candidate for a featured excerpt or future text page

### 3. `Материализми диалектикӣ` / philosophy dictionary-related material
- Status: `Excerpt-only candidate`
- Type: textbook / terminology / conceptual text
- Evidence:
  - `biography-rag/docs/словарьul6.txt`
  - bibliography anchor:
    - `biography-rag/docs/BIBL2fl7.txt:31`
- Notes:
  - the available text is clearly rich and readable
  - but it may represent dictionary / terminology content rather than a clean single-book file
  - best used for excerpts or concept highlights rather than full-text linking for now

## B. Strong Excerpt-Only Candidates

These are excellent for quotations, pull excerpts, or “from the text” blocks, but should not yet be presented as full public reading links.

### 1. `В историческом измерении`
- Status: `Excerpt-only candidate`
- Type: interview / conversation
- Evidence:
  - bibliography only confirmed directly:
    - `biography-rag/docs/BIBL2fl7.txt:133`
    - `biography-rag/docs/BIBLIO~1pa0.txt:91`
- Notes:
  - no dedicated clean full-text file positively identified yet
  - likely worth a targeted file search later

### 2. `Исповедь души`
- Status: `Excerpt-only candidate`
- Type: interview / cultural conversation
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:215-217`
  - `biography-rag/docs/BIBLIO~1pa0.txt:169-171`
- Notes:
  - confirmed bibliographically in two variants
  - no clean full-text file positively identified yet
  - worth targeted recovery later because it is highly suitable for public excerpting

### 3. `Шаги науки Таджикистана`
- Status: `Excerpt-only candidate`
- Type: interview / public science article cluster
- Evidence:
  - interview version:
    - `biography-rag/docs/BIBL2fl7.txt:681`
  - newspaper pieces:
    - `biography-rag/docs/BIBL2fl7.txt:909-911`
- Notes:
  - appears in multiple bibliographic forms
  - likely useful for selected excerpts about the Academy and science in Tajikistan

### 4. `Илм дар хизмати халқ`
- Status: `Excerpt-only candidate`
- Type: article
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:207`
- Notes:
  - clean bibliographic anchor exists
  - no dedicated full-text extract yet identified

### 5. `Благородная миссия русского языка`
- Status: `Excerpt-only candidate`
- Type: article
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:103`
- Notes:
  - important for language / culture subsection
  - full readable text not yet identified in a dedicated file

## C. Bibliography-Only Major Authored Works

These are stable and usable as bibliography records, but no clean reading files have been confirmed yet.

### 1. `Дорулфунуни нахустини мо`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:19`
  - `biography-rag/docs/опубли~1ei7.txt:11`

### 2. `Духовная культура нового человека`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:21`
  - `biography-rag/docs/опубли~1ei7.txt:13`
- Note:
  - we also have a bibliographic note for a preface / introduction:
    - `biography-rag/docs/опубли~1ei7.txt:437`

### 3. `Пайдоиш ва ташаккули тафаккури фалсафӣ`
- Status: `Bibliography-only`, with strong secondary discussion
- Evidence:
  - bibliography:
    - `biography-rag/docs/BIBL2fl7.txt:39`
  - discussion / analysis:
    - `biography-rag/docs/Кароматулло Олимов+rz1.txt`
    - `biography-rag/docs/Mukhamadkhojaev+ap0.txt`
    - `biography-rag/docs/MS4_5_~1ws0.txt:864`
- Notes:
  - enough for page summary and interpretive note
  - not enough yet for a clean full-text public link

### 4. `Понятие материи и проблема физической реальности`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:41`
- Notes:
  - clearly bibliographically secure
  - no dedicated readable dissertation text file located in this pass

### 5. `Исследование этнической истории древней Центральной Азии...`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:23-25`
  - related article / proceedings evidence:
    - `biography-rag/docs/BIBL2fl7.txt:219`

### 6. `Садриддин Айни: 100 лет со дня рождения`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:45`

### 7. `Амир Хусрави Деҳлавӣ`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:15`

### 8. `Се мақола дар бораи Ҳофиз-Хоҷу-Бусҳоқ`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:47`

## D. Edited / Encyclopedia Projects

These are highly important for the works page, but currently function mainly as bibliography and project records rather than readable text links.

### 1. `Энсиклопедияи советии тоҷик`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/опубли~1ei7.txt` bibliography cluster
  - `biography-rag/docs/BIBL2fl7.txt` encyclopedia publication listings
- Notes:
  - strong metadata
  - no public-facing volume files currently exposed in workspace

### 2. `Таджикская Советская Социалистическая Республика`
- Status: `Bibliography-only`
- Evidence:
  - listed in bibliography files as one-volume reference work

### 3. `Абуали ибн Сино. Осори мунтахаб`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIB72-82di5.txt:1-13`
  - `biography-rag/docs/опубли~1ei7.txt:925-1005`
- Notes:
  - role information is strong
  - no clean full text of the edited volumes located in this pass

### 4. `Абуали ибни Сино. Қонуни тиб`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIB72-82di5.txt:1-13`
  - `biography-rag/docs/опубли~1ei7.txt:925-1005`

### 5. `Айни С. Куллиёт`
- Status: `Bibliography-only`
- Evidence:
  - `biography-rag/docs/BIB72-82di5.txt:1-13`
  - `biography-rag/docs/опубли~1ei7.txt:925-1005`

### 6. `Гулшани адаб`
- Status: `Bibliography-only`
- Evidence:
  - listed in edited-works bibliography cluster

## E. UNESCO and International Publication Work

These are among the strongest externally linkable candidates, because they are public international publications, even though the site does not yet expose local copies.

### 1. `History of Civilizations of Central Asia`
- Status: `External-link candidate`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:1125`
  - `biography-rag/docs/BIBLIO~1jd1.txt:945+`
  - RAG narrative support:
    - `biography-rag/docs/Федерико Майор+bk7.txt`
    - `biography-rag/docs/CONDOL~1ib6.txt`
- Notes:
  - best future link target is external UNESCO / library / WorldCat
  - if local files are ever added to `public/`, internal linking becomes possible

### 2. `History of Humanity`
- Status: `External-link candidate`
- Evidence:
  - bibliography:
    - `biography-rag/docs/BIBL2fl7.txt:1121`
  - narrative support for Volume IV role:
    - `biography-rag/docs/BIBLIO~4pj3.txt`
    - `biography-rag/docs/bibliogrnew1mq2.txt`

### 3. `Journal of Central Asia`
- Status: `External-link candidate`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:1119`
  - article listing:
    - `biography-rag/docs/BIBL2fl7.txt:957`

### 4. `Rewriting Tajik History`
- Status: `External-link candidate`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:961`
- Notes:
  - strong citation, but no local reading copy found in this pass

### 5. `Al-Kwarazmi’s Historical-Cultural Synthesis`
- Status: `External-link candidate`
- Evidence:
  - `biography-rag/docs/BIBL2fl7.txt:959`

## F. Translation and Educational Publishing

This category is strong as bibliography, but not yet as public reading links.

### Category status
- Status: `Bibliography-only` overall
- Evidence:
  - `biography-rag/docs/BIBLIO~1jd1.txt`
  - `biography-rag/docs/BIBLIO~1mh2.txt`
  - `biography-rag/docs/BIB72-82di5.txt`
- Notes:
  - the category itself is very well supported
  - but no clean standalone public reading files for these translated textbooks were identified in this pass

Representative items:
- `Асосҳои философияи марксистӣ`
- `Асосҳои марксизм-ленинизм`
- `Астрономия`
- `В.И. Ленин Асарҳо`
- `Никитин. Геометрия`
- `Новосёлов. Тригонометрия`
- `Пёрышкин, Крауклис. Курси физика`
- `Энгельс. Анти-Дюринг`

## G. Recommended Linking Strategy

### Use now on the public page

#### 1. Citation-only entries
For most books and edited volumes, show:
- title
- year
- short note
- no link yet

#### 2. Excerpt blocks
For items with strong local text:
- `Алгебра и гармония`
- `Материя ва тасвири физикии олам`

Use them as:
- expandable excerpts
- featured reading snippets
- quote-rich callouts

#### 3. External links
Add external links first for:
- `History of Civilizations of Central Asia`
- `History of Humanity`
- `Journal of Central Asia`
- selected foreign-language journal articles

### Do not do yet
- link directly to raw `biography-rag/docs/*.txt` files on the public site

Reasons:
- filenames are not publication-ready
- some files are duplicates
- some are OCR-cleaned extracts rather than stable editions
- they need curation before public exposure

## H. Best Next Step

Before adding links to the works page, create a curated public-assets set such as:

- `public/works/osimi/algebra-and-harmony.txt` or `.pdf`
- `public/works/osimi/matter-and-the-physical-picture-of-the-world-excerpt.txt`

Then the page can support:
- `Read excerpt`
- `Catalog reference`
- `External edition`

## Immediate Candidates For Curation

Highest-value files to curate first:

1. `biography-rag/docs/Алгебра и гармонияar1.txt`
2. `biography-rag/docs/Suhbat_russkii textpz8.txt`
3. `biography-rag/docs/MATERIYAnb8.txt`
4. `biography-rag/docs/MATERIYAlr6.txt`
5. `biography-rag/docs/MATERIYAyl3.txt`

These are the best current candidates for converting into publishable excerpt assets.
