import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    // ✅ API returns JSON, NOT JSX
    return NextResponse.json(data.slice(0, 5));
}
