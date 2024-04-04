import { connectionStr } from "@/lib/db";
import { Contact } from "@/lib/model/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    let data = await Contact.find()
    return NextResponse.json({data})
}

export async function POST(req){
    let payload = await req.json()
    await mongoose.connect(connectionStr)
    let contact = new Contact(payload)
    let result = await contact.save()
    return NextResponse.json({result})
}