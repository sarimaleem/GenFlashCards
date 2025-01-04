import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
    console.log("Get all words endpoint hit")

    const { data } = await supabase.from('flashcards').select('*');
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    console.log("Create word endpoint hit")

    const body = await req.json()
    const data = body.data;
    await supabase.from('flashcards').insert(data)
    return NextResponse.json({ message: "success", data }, { status: 201 });

}
