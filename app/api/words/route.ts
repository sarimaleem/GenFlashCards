import { client } from '@/lib/supabaseClient';
import { getAllFlashcards, createFlashcard } from '@/queries/words.queries';
import { NextResponse } from 'next/server';

export async function GET() {
    console.log("Get all words endpoint hit")
    console.log("client", client)
    const data = await getAllFlashcards.run(undefined, client)
    console.log(data)
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    console.log("Create word endpoint hit")

    const body = await req.json()
    const data = body.data;
    await createFlashcard.run(data, client);
    return NextResponse.json({ message: "success", data }, { status: 201 });

}
