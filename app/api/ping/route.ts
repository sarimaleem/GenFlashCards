import { NextResponse } from 'next/server';

export async function GET() {
    console.log("ping endpoint hit")
    return NextResponse.json({"data": "pong"})
}
