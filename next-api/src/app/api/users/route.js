import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;   /* this the GET method for make a api */
    return NextResponse.json(data)
}

export async function POST(request){
    const payload = await request.json()
    console.log(payload)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found",success:false},{status:400})
    }
    return NextResponse.json({result:"new user created", success:true},{status:201})
}