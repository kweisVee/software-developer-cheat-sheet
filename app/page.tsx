import { db } from "@/src/db";
import { categories } from "@/src/db/schema";
import Link from "next/link";

export default async function Home() {
  const allCategories = await db.select().from(categories);

  return (
    <main className="px-20 pt-5">
      <Link href={`/admin/questions`}>Add Question</Link>
      <hr/>
      <div className="categories-header">
          <h1 className="text-3xl font-bold">Categories</h1>
      </div>
      <div className="categories-list">
        <ul>
          {allCategories.map((category => (
            <li>
              <Link href={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          )))}
        </ul>
      </div>
    </main>
  );
}

