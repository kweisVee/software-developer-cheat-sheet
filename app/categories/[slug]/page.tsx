
import { eq } from "drizzle-orm";
import { db } from "@/src/db";
import { categories, questions } from "@/src/db/schema";
import Link from "next/link";  
import { ChevronLeft } from "lucide-react";

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
        // <main className="max-w-2xl mx-auto px-4 py-8">
        <main className="min-h-screen px-4 md:px-20" style={{ backgroundColor: "#202124" }}>
            <Link href="/" className="mb-4 block">
                <div className="flex items-center text-[#a9b4c9] text-sm font-semibold">
                <ChevronLeft size={22} strokeWidth={2.25} className="text-[#A9B4C9]" aria-hidden="true"/> 
                All Categories 
                </div>
            </Link>
            <div className="home-body border border-[#1e2a44] py-6 px-4 md:px-8 rounded-lg" style={{backgroundColor: "#0f172a"}}>
                <div className="categories-header flex justify-between">
                <div className="categories-header">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">{categoryResult[0].name}</h1>
                </div>
                <div className="categories-header-right self-center">
                    <Link href={`/admin/questions`} 
                    className="px-4 py-2 rounded-md text-white font-bold" 
                    style={{ backgroundColor: "#4f7cff" }}> 
                    + Add Question
                    </Link>
                </div>
                </div>
                
                <div className="category-question-main m-8">
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
            </div>
        </main>
    )
};