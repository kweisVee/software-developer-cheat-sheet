import { db } from "@/src/db";
import { categories } from "@/src/db/schema";
import { redirect } from "next/navigation";

export default async function Home() {
  const allCategories = await db.select().from(categories);

  async function addCategory(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const parentIdRaw = formData.get("parentId") as string;
    const parentId = parentIdRaw ? Number(parentIdRaw) : null;
    await db.insert(categories).values({ name, slug, parentId });
    redirect("/admin/categories");
  }

  return (
    <main>
        <h1>Add Category</h1>
        <form action={addCategory}>
            <div>
                <label htmlFor="name">Name </label>
                <input id="name" name="name" type="text" required />
                </div>
            <div>
                <label htmlFor="slug">Slug </label>
                <input id="slug" name="slug" type="text" required />
            </div>
            <div>
                <select id="parent-category-select" name="parentId">
                    <option value="">None (top-level)</option>
                    {allCategories.map((category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )))}
                </select>
            </div>
            <button type="submit">Add Category</button>
        </form>
        <br />
        <div><h1>CATEGORIES</h1></div>
        <ul>
            {allCategories.map((category) => (
                <li key={category.id}>{category.name}</li>
            ))}
        </ul>
    </main>
  );
}

