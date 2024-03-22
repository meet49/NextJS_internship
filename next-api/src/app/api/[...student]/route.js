import { NextResponse } from "next/server"

export async function GET(request,content){
    const studentDetail = content.params.student
    console.log(studentDetail)
    return NextResponse.json({result:studentDetail},{status:200})
}