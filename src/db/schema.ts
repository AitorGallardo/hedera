import { serial, text, timestamp, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  email: varchar("email", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  title: varchar('title', { length: 256 }),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  addDate: timestamp("add_date").notNull().defaultNow(),
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

