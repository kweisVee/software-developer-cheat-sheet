# ReviewPrep design

## Look
Dark theme with a blue accent.

- Page background: #202124
- Main panel: #0f172a (rounded corners, thin #1e2a44 border)
- Cards / rows: #1a2438 (border #2a3957)
- Opened area inside a row: #152036
- Accent blue (buttons): #4f7cff
- Light blue (labels, icons, "Prep" in the name): #8ab4f8
- Text: #e8eaed (headings white)
- Font: Inter

## Page: Categories (step 1)
1. Top bar: the name **ReviewPrep** on the left ("Review" in white, "Prep" in light blue, small blue book icon). An **Add Question** button on the right.
2. A panel with the heading **Categories**.
3. One full-width row per category: Behavioral, Backend, Frontend, AI, React, For Managers.
   - Each row shows the category name, a count (for example "5 questions · 3 sub-categories") and a chevron.
   - Clicking a row opens or closes it. Several rows can be open at once.
4. When a category is open it shows:
   - its own questions first (numbered), then
   - a "Sub-categories" label, then one smaller indented row per sub-category.
   - Clicking a sub-category opens its questions the same way.

## Data shape
- A category has a name, its own questions, and sub-categories.
- A sub-category has a name and its questions.
- A question has text (answers come in a later step).

## Not designed yet
Question detail with the answer revealed, the flashcard study view, Add Question form, stats.

## Design
- The design is described in `docs/design.md`. A visual reference is in `docs/design/step-1.html` (for spacing and styling only; do not copy it).
- The site name is ReviewPrep. It has a dark theme with a blue accent.
- Home page: one row per category. Clicking a row opens it to show its own questions, then its sub-categories as smaller indented rows. Clicking a sub-category opens its questions.
- Design one step at a time. If something isn't in `docs/design.md` yet, ask me instead of guessing.