import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { data } = await supabase.from('flashcards').select('*').eq('id', id);
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

    await supabase.from('flashcards').update(data).eq('id', id);
    return NextResponse.json({ "message": "success" }, { status: 201 });
}


export async function DELETE({ params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await supabase.from('flashcards').delete().eq('id', id);
    return NextResponse.json({ "message": "success" }, { status: 201 });
}

