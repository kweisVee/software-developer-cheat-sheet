import { db } from "@/src/db";
import { categories } from "@/src/db/schema";

export default async function Home() {
  const allCategories = await db.select().from(categories);

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        {allCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </main>
  );
}