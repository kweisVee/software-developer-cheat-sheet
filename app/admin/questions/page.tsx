
import { db } from "@/src/db";
import { categories } from "@/src/db/schema";

export default async function Questions() {
    const allCategories = await db.select().from(categories);

    return (
        <main>
            <form>
                <div>
                    <label htmlFor="question">Question: </label>
                    <input id="question" name="question" type="text" required/>
                </div>
                <div>
                    <label htmlFor="answer">Answer: </label>
                    <textarea id="answer" name="answer"/>
                </div>
                <div>
                    <label htmlFor="question-category">Category: </label>
                    <select id="question-category-select" name="categoryId" required>
                        {allCategories.map((category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )))}
                    </select>
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulty: </label>
                    <select id="difficulty-select" name="difficulty" required>
                        <option value="">Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </form>
        </main>
    );
}