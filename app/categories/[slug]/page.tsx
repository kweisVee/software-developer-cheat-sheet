
import { eq } from "drizzle-orm";
import { db } from "@/src/db";
import { categories, questions } from "@/src/db/schema";

export default async function CategoryPage({ params } : {params: Promise<{slug : string}>}) {
    const { slug } = await params;
    const categoryResult = await db.select().from(categories).where(eq(categories.slug, slug));
    const categoryId = categoryResult[0].id;
    
    if (!categoryResult[0]) {                                                 
        return (
            <main><p>Category not found.</p></main> 
        )                       
    }    
    
    const allQuestions = await db.select().from(questions).where(eq(questions.categoryId, categoryId));
    return (
        <main>
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