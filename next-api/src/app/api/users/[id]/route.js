import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const data = user.filter((item)=>item.id == content.params.id);
    return NextResponse.json(data.length==0?{result:"No Data Found"}:{result:data[0]})
}   
export async function PUT(request,content){
    const payload = await request.json()

    payload.id = content.params.id
    console.log(payload)

    return NextResponse.json({result:payload,success:true},{status:200})
}
export async function DELETE(request,content){
    let id = content.params.id
    if(id){
        return NextResponse.json({result:"User Deleted",success:true},{status:200})
    }
    else{
        return NextResponse.json({result:"error", success:false},{status:400})
    }
}