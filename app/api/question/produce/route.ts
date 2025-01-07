import { productionRequest } from '@/service/openairequests';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    console.log("produce question api endpoint hit")

    const { searchParams } = new URL(req.url);
    const word = searchParams.get('word') || 'مرحبا';
    console.log(word)

    const data = await productionRequest(word)
    const message = data.choices[0].message.content;

    const response = NextResponse.json({ 'data': message }, { status: 200 });
    return response
}
