import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json([{ name: "Meet", age: 21, city: "surat" }, { name: "Meet", age: 21, city: "surat" }, { name: "Meet", age: 21, city: "surat" }, { name: "Meet", age: 21, city: "surat" }, { name: "Meet", age: 21, city: "surat" }])
}