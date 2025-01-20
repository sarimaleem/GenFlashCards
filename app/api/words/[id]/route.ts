import { client } from '@/lib/supabaseClient';
import { deleteFlashcard, getFlashcard, updateFlashcard } from '@/queries/words.queries';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const data = await getFlashcard.run({id}, client)
    console.log(data)
    return NextResponse.json(data);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const body = await req.json()
    const data = body.data;

    await updateFlashcard.run({id, word: data['word'], definition: data['definition']}, client)
    return NextResponse.json({ "message": "success" }, { status: 201 });
}


export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await deleteFlashcard.run({ id }, client);
    return NextResponse.json({ "message": "success" }, { status: 201 });
}
