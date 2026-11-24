import { db } from "@/src/db";
import { categories, questions } from "@/src/db/schema";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allCategories = await db.select().from(categories);
  const allQuestions = await db.select().from(questions);

  return (
    <main className="min-h-screen px-4 md:px-20 pt-5" style={{ backgroundColor: "#202124" }}>
      <nav className="flex justify-between items-center mb-8">
        {/* <div>
          <span className="text-white font-bold text-xl">Review</span>
          <span className="font-bold text-xl" style={{
            color: "#8ab4f8"
          }}>Prep</span>
        </div> */}
        <Link href={`/admin/questions`} 
        className="px-4 py-2 rounded-md text-white font-bold" 
        style={{ backgroundColor: "#4f7cff" }}> + Add Question</Link>
      </nav>
      <div className="home-body border border-[#1e2a44] py-6 px-4 md:px-8 rounded-lg" style={{backgroundColor: "#0f172a"}}>
        <div className="categories-header">
            <h5 className="font-bold pb-2 text-[13px]" style={{color: "#8ab4f8"}}>BROWSE BY TOPIC</h5>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Categories</h1>
        </div>
        <div className="categories-list">
          <ul className="space-y-2 mt-4">
            {allCategories.map((category => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <li className="flex justify-between items-center mb-2 px-4 py-3 rounded-lg cursor-pointer text-white
                      font-semibold bg-[#1a2438] hover:bg-[#22304a]" style={{border: "1px solid #2a3957"}}>
                  <div>
                    {category.name}
                    <span style={{ color: "#a9b4c9"}} className="text-xs ml-2 font-normal">
                      {allQuestions.filter(q => q.categoryId === category.id).length} questions{" · "}{allCategories.filter(c => c.parentId === category.id).length} sub-categories
                    </span>
                  </div>
                  <ChevronRight size={22} strokeWidth={2.25} className="text-[#8ab4f8]" aria-hidden="true" />
                </li>
              </Link>
            )))}
          </ul>
        </div>
      </div>
    </main>
  );
}

