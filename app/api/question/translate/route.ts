import { evaluateTranslation, translationRequest } from '@/service/openairequests';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    console.log("translate question api endpoint hit")

    const { searchParams } = new URL(req.url);
    const word = searchParams.get('word') || 'مرحبا';
    console.log("word to translate", word)

    const data = await translationRequest(word)
    const message = data.choices[0].message.content;

    const response = NextResponse.json({ 'data': message }, { status: 200 });
    return response
}

export async function POST(req: Request) {
    console.log("translate question post api endpoint hit")
    const { word, question, answer } = await req.json()
    console.log(word, question, answer)
    const gptResponse = await evaluateTranslation(word, question, answer);
    const evaluation = JSON.parse(gptResponse.choices[0]['message']['content'])
    return NextResponse.json(evaluation, { status: 201 })
}
