import { connectionSrt } from "@/lib/db"
import { Product } from "@/lib/model/products"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

// export async function PUT(request, content) {
//     const productId = content.params.productid
//     const filter = { _id: productId }
//     const payload = await request.json()
//     console.log(payload)
//     await mongoose.connect(connectionSrt)
//     const result = await Product.findOneAndUpdate(filter, payload)
//     return NextResponse.json({ result, success: true })

// }

// export async function GET(request, content) {
//     const productId = content.params.productid
//     const record = { _id: productId }
//     console.log(payload)
//     await mongoose.connect(connectionSrt)
//     const result = await Product.findById(record)
//     return NextResponse.json({ result, success: true })

// }

export async function PATCH(request,content){
    const productId = content.params.productid
    const filter ={_id:productId}
    const payload = await request.json()
    console.log(payload)
    await mongoose.connect(connectionSrt)
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(request,content){
    const productId = content.params.productid
    const record ={_id:productId}
    await mongoose.connect(connectionSrt)
    const result = await Product.findById(record)
    return NextResponse.json({result,success:true})
}
export async function DELETE(request,content){
    const productId = content.params.productid
    const record ={_id:productId}
    await mongoose.connect(connectionSrt)
    const result = await Product.deleteOne(record)
    return NextResponse.json({result,success:true})
}