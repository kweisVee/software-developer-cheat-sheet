
import { db } from "@/src/db";
import { categories, questions } from "@/src/db/schema";

export default async function Questions() {
    const allCategories = await db.select().from(categories);
    const allQuestions = await db.select().from(questions);

    async function addQuestion(formData: FormData) {
        "use server"
        const question = formData.get("question") as string; 
        const answer = formData.get("answer") as string;
        const categoryIdRaw = formData.get("categoryId") as string;
        const categoryId = Number(categoryIdRaw);
        const difficulty = formData.get("difficulty") as string;

        await db.insert(questions).values({
            question, answer, categoryId, difficulty
        });
    }

    return (
        <main>
            <form action={addQuestion}>
                <div>
                    <label htmlFor="question">Question: </label>
                    <input id="question" name="question" type="text" required/>
                </div>
                <div>
                    <label htmlFor="answer">Answer: </label>
                    <textarea id="answer" name="answer"/>
                </div>
                <div>
                    <label htmlFor="question-category-select">Category: </label>
                    <select id="question-category-select" name="categoryId" required>
                        {allCategories.map((category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )))}
                    </select>
                </div>
                <div>
                    <label htmlFor="difficulty-select">Difficulty: </label>
                    <select id="difficulty-select" name="difficulty" required>
                        <option value="">Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <br />
            <div className="questions-parent"> 
                <div className="question-title">
                    <h1>QUESTIONS</h1>
                </div>
                <ul>
                    {allQuestions.map((question => (
                        <li className="question-list" key={question.id}>
                            <div className="question">{question.question}</div>
                            <div className="answer">{question.answer}</div>
                            <div className="question-label">
                                <span className="category">{allCategories.find(c => c.id === question.categoryId)?.name}</span>&nbsp;
                                <span className="difficulty">{question.difficulty}</span>
                            </div>
                            <br />
                        </li>
                    )))}
                </ul>
            </div>
        </main>
    );
}