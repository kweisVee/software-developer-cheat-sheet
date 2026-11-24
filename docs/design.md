# ReviewPrep design

## Look
Dark theme with a blue accent. Mobile-first: everything must work well on a phone.

- Page background: #202124
- Main panel: #0f172a (rounded 28px, 1px border #1e2a44)
- Rows and cards: #1a2438 (border #2a3957, rounded 16-20px)
- Opened area inside a row: #152036
- Hover on rows: #22304a
- Accent blue (buttons): #4f7cff
- Light blue (small labels, icons, "Prep" in the logo): #8ab4f8
- Text: #e8eaed (headings white, answers #d5dcea, muted text #a9b4c9)
- Font: Inter
- All tappable rows are at least 44px tall. Keyboard focus shows a light blue outline.

## Header (every page)
- Left: logo link to the home page. A small blue rounded square with a book icon, then "ReviewPrep" ("Review" white, "Prep" light blue).
- Right: "Add Question" blue pill button.

## Home page: `/`
- Panel with a small label "Browse by topic" and the heading "Categories".
- One full-width row per category: Behavioral, Backend, Frontend, AI, React, For Managers.
- Each row shows the name, a muted count (for example "7 questions · 3 sub-categories") and a right chevron.
- Clicking a row goes to that category's page. No dropdowns on this page.

## Category page: `/[category]` (for example `/frontend`)
- A "← All categories" link back to the home page.
- Small label "Category", the category name as the heading, and the muted count.
- **Questions** section: the category's own questions. Each is a row with a chevron. Clicking it opens or closes the answer underneath.
- **Sub-categories** section: one row per sub-category (name, question count, chevron). Clicking opens it to show its questions, and each of those opens to show its answer the same way.
- Several dropdowns can be open at once.
- Categories with no sub-categories hide that section.

## Add Question page: `/add`
- Separate page (not a popup), single column, narrow (max 720px) and centered. Mobile-first.
- Same header (logo only) and a "← All categories" link.
- Same navy panel with the label "New question" and the heading "Add a question".
- Fields, each with a visible label above it:
  - Category: dropdown of all categories.
  - Sub-category (optional): dropdown that changes with the category. First option is "None, this belongs to the category itself".
  - Question: multi-line text box.
  - Answer: larger multi-line text box.
- Field style: background #1a2438, border #2a3957, rounded 14px, 16px text, at least 52px tall. On focus the border turns #4f7cff.
- Buttons: "Save question" (full width on phones, color #3b6af0, white text, pill shape) and a "Cancel" text link back to the home page.
- After saving, show a "Question saved." message in a box with a light blue check icon.
- White text on buttons uses #3b6af0 (not #4f7cff) so it is readable.

## Data shape
- Category: name, its own questions, sub-categories.
- Sub-category: name, its questions.
- Question: text and answer.

## Decisions
- A sub-category does not get its own page for now. If one grows very large, it can get its own route later (for example `/frontend/css`).

## Not designed yet
Add Question form, flashcard/study view, stats.