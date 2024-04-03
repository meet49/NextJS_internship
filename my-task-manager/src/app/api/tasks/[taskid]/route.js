import { connectionStr } from "@/lib/db"
import { Task } from "@/lib/model/tasks"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PATCH(request,content){
    const taskID = content.params.taskid
    const record ={_id:taskID}
    const payload = await request.json()
    await mongoose.connect(connectionStr)
    const result = await Task.findByIdAndUpdate(record,payload)
    return NextResponse.json({result})
}

export async function GET(request,content){
    const taskID = content.params.taskid
    const record ={_id:taskID}
    await mongoose.connect(connectionStr)
    const result = await Task.findById(record)
    return NextResponse.json({result})
}
export async function DELETE(request,content){
    const taskID = content.params.taskid
    const record ={_id:taskID}
    await mongoose.connect(connectionStr)
    const result = await Task.deleteOne(record)
    return NextResponse.json({result})
}