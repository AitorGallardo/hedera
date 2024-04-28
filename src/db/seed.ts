import {db} from "@/src/db/db";
import { bookmarks, users } from "./schema";

const usersData = [
    {
      name: 'John Doe',
      email: 'john@example.com',
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
    {
      name: 'Bob Smith',
      email: 'bob@example.com',
    },
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
  ];

const main = async () => {
    try{
        console.log('Seeding DB',);
        // Delete all data
        await db.delete(users);
        await db.delete(bookmarks);

        await db.insert(users).values(usersData)


    }catch{
        console.log('error')
    }
}