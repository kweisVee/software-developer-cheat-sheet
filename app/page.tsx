import { db } from "@/src/db";
import { categories } from "@/src/db/schema";
import Link from "next/link";

export default async function Home() {
  const allCategories = await db.select().from(categories);

  return (
    <main className="min-h-screen px-20 pt-5" style={{ backgroundColor: "#202124" }}>
      <nav className="flex justify-between items-center mb-8">
        <div>
          <span className="text-white font-bold text-xl">Review</span>
          <span className="font-bold text-xl" style={{
            color: "#8ab4f8"
          }}>Prep</span>
        </div>
        <Link href={`/admin/questions`} 
        className="px-4 py-2 rounded-md text-white font-bold" 
        style={{ backgroundColor: "#4f7cff" }}> + Add Question</Link>
      </nav>
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

