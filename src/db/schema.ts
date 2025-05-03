import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
	id: uuid("id").primaryKey().defaultRandom(),
	email: text("email").notNull().unique(),
	createdAt: timestamp("created_at").defaultNow(),
});
