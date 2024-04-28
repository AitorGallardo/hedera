import { db } from "@/src/db/db";
import { bookmarks, users } from "./schema";

const usersData = [
  {
    name: "John Doe",
    email: "john@example.com",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
  },
];
const bookmarksData = [
    {
      url: 'https://example1.com',
      title: 'Example 1',
      description: 'This is an example bookmark 1.',
      icon: 'https://example1.com/icon.png',
    },
    {
      url: 'https://example2.com',
      title: 'Example 2',
      description: 'This is an example bookmark 2.',
      icon: 'https://example2.com/icon.png',
    },
    {
      url: 'https://example3.com',
      title: 'Example 3',
      description: 'This is an example bookmark 3.',
      icon: 'https://example3.com/icon.png',
    },
    {
      url: 'https://example4.com',
      title: 'Example 4',
      description: 'This is an example bookmark 4.',
      icon: 'https://example4.com/icon.png',
    },
  ];

const main = async () => {
  try {
    console.log("Seeding DB");
    // Delete all data
    await db.delete(users);
    await db.delete(bookmarks);

    await db.insert(users).values(usersData);
    await db.insert(bookmarks).values(bookmarksData);
  } catch {
    console.log("error");
  }
};

main();
