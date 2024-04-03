import { connectionStr } from "@/lib/db";
import { Task } from "@/lib/model/tasks";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(connectionStr)
        data = await Task.find()
    } catch (error) {
        data = { result: "error" }
    }

    return NextResponse.json({ result: data })
}

export async function POST(request){
    let payload = await request.json()
    await mongoose.connect(connectionStr)
    let task = new Task(payload)
    let result = await task.save()
    return NextResponse.json({result})
}