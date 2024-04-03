import mongoose from "mongoose";    

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Must provide a username"],
        unique:[true,"Must be unique"]
    },
    email:{
        type:String,
        required:[true,"Must provide a email"],
        unique:[true,"Must be unique"]
    },
    password:{
        type:String,
        required:[true,"Must provide a password"],
    },
})
export const User = mongoose.models.users || mongoose.model("users",userModel)