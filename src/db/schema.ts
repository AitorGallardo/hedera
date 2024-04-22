import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Posible table for bookmarks

// CREATE TABLE bookmarks (
//   id SERIAL PRIMARY KEY,
//   url TEXT NOT NULL,
//   title TEXT,
//   description TEXT,
//   add_date TIMESTAMP,
//   icon TEXT
// );