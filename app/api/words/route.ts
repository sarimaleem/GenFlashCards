import { supabase } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
    console.log("words endpoint hit")
    const { data } = await supabase.from('flashcards').select('*');
    console.log(data)
    return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
    console.log("word creation endpoint hit")
    const body = await req.json()
    const data = body.data;
    await supabase.from('flashcards').insert(data)
    return NextResponse.json({ message: "success", data }, { status: 201 });

}
