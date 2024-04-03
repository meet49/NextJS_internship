import { connectionStr } from "@/lib/db"
import { User } from "@/lib/model/signinsignup"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(req){
    let payload = await req.json()
    await mongoose.connect(connectionStr)
    let user = new User(payload)
    let result = await user.save()
    return NextResponse.json({result})
}