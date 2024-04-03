import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/signinsignup";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    let data = await User.find()
    return NextResponse.json({data})
}

export async function POST(req){
    let payload = await req.json()
    await mongoose.connect(connectionStr)
    let result = await User.findOne(payload)
    return NextResponse.json({result})
}