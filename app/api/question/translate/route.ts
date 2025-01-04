import { supabase } from '@/lib/supabaseClient';
import { gptRequest, translationRequest } from '@/service/openairequests';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    console.log("get translation question api endpoint hit")

    const word = 'مرحبا' 
    const data = await translationRequest(word)
    const message = data.choices[0].message.content;

    const response = NextResponse.json({ 'data': message }, { status: 200 });
    return response
}
