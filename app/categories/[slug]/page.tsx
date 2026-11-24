
import { eq } from "drizzle-orm";
import { db } from "@/src/db";
import { categories, questions } from "@/src/db/schema";
import Link from "next/link";  

export default async function CategoryPage({ params } : {params: Promise<{slug : string}>}) {
    const { slug } = await params;
    const categoryResult = await db.select().from(categories).where(eq(categories.slug, slug));
    
    if (!categoryResult[0]) {                                                 
        return (
            <main><p>Category not found.</p></main> 
        )                       
    }    
    
    const categoryId = categoryResult[0].id;
    const allQuestions = await db.select().from(questions).where(eq(questions.categoryId, categoryId));
    return (
        <main className="max-w-2xl mx-auto px-4 py-8">
            <Link href="/">All Categories </Link>
            <div className="category-question-main m-8">
                <h1 className="text-3xl font-bold">
                    {slug}
                </h1>
                <div>
                    <ol className="my-2">
                        {allQuestions.map(question => (
                            <li key={question.id}>
                                <div>
                                    {question.question}
                                </div>
                                <div>
                                    {question.answer}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </main>
    )
};