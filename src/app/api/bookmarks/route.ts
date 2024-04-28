import { db } from "@/src/db/db";
import { NextResponse } from "next/server";

export async function GET() {
        const res = await db.query.users.findMany({

          });

        const data = await res.json()
     
        return NextResponse.json({ message:'hola mundo' })
    }
