import { db } from "@/src/db";
import { categories } from "@/src/db/schema";

export default async function Home() {
  const allCategories = await db.select().from(categories);

  return (
    <main>
      <h1>HELLO</h1>
    </main>
  );
}

