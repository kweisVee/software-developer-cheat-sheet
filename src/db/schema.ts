import { sql } from "drizzle-orm";
import { pgTable, bigint, text, unique, timestamp, check, type AnyPgColumn } from "drizzle-orm/pg-core";

export const categories = pgTable(
    "categories", {
        id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
        name: text("name").notNull(),
        parentId: bigint("parent_id", {mode: "number"})
            .references((): AnyPgColumn => categories.id, { onDelete: "restrict"}),
        slug: text("slug").notNull(),
        createdAt: timestamp("created_at", {withTimezone: true}).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", {withTimezone: true}).notNull().defaultNow()
    },
    (c) => [
        unique().on(c.parentId, c.slug).nullsNotDistinct()
    ]
);

export const questions = pgTable(
    "questions", {
        id: bigint("id", {mode: "number"}).primaryKey().generatedAlwaysAsIdentity(),
        question: text("question").notNull(),
        answer: text("answer"),
        categoryId: bigint("category_id", {mode: "number"}).notNull()
            .references(() => categories.id, { onDelete: "restrict"}),
        difficulty: text("difficulty").notNull(),
        reviewedAt: timestamp("reviewed_at", {withTimezone: true}),
        createdAt: timestamp("created_at", {withTimezone: true}).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", {withTimezone: true}).notNull().defaultNow()
    },
    (q) => [
        check("difficulty_check", sql`${q.difficulty} in ('easy', 'medium', 'hard')`)
    ]
);