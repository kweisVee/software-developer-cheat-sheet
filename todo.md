# To-Do

## Done
- [x] Create GitHub repo + scaffold Next.js app
- [x] Write CLAUDE.md with project context and learning rules
- [x] Create Supabase project + design schema (categories, questions)
- [x] Set up Drizzle + run first migration
- [x] Display categories on the homepage
- [x] Add Category form (name + slug)

## Now
- [ ] Add parent category dropdown to the Add Category form

## Next
- [ ] Add Question form (question, answer, category, difficulty)
- [ ] Category, subcategory, and question pages (e.g. /backend/java)
- [ ] Render answers as Markdown (react-markdown)
- [ ] Load the question bank into the database
- [ ] Keep updated_at current ($onUpdate or a database trigger)
- [ ] "Reviewed" button that sets reviewed_at (local only for now)
- [ ] Deploy to Vercel

## Later
- [ ] Form validation with Zod + friendly error messages
- [ ] Images: S3 bucket + IAM + public read policy + billing budget alert; upload via console first, presigned URLs later
- [ ] Analytics: page views first, then custom events (e.g. "question reviewed" clicks)
- [ ] Supabase Auth with anonymous sign-ins for signed-out visitors
- [ ] User progress table (user + question + reviewed_at), moving reviewed_at off questions
- [ ] RLS policies so users only see/change their own progress
- [ ] Tags (many-to-many) once patterns show up in the content
- [ ] v2 features: search, filtering, practice mode