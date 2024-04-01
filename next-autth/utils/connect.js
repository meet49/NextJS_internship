import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }
    catch(error){
        console.log("error somthing went wrong",error)
    }
}