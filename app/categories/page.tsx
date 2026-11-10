import { db } from "@/src/db";
import { categories } from "@/src/db/schema";
import Link from "next/link"

export default async function CategoriesPage() {
    const allCategories = await db.select().from(categories);

    return (
        <main className="max-w-2xl mx-auto px-4 py-8">
            <div className="categories-header">
                <h1 className="text-3xl font-bold">Categories</h1>
            </div>
            <div className="categories-list">
                <ul className="mt-4 space-y-2">
                    {allCategories.map((category => (
                        <li className="border rounded-lg p-4 hover:bg-gray-100" key={category.id}>
                            <Link className="block font-medium text-blue-600" href={`/categories/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    )))}
                </ul>
            </div>
        </main>
    )
}