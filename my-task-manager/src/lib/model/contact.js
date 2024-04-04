import mongoose from "mongoose";    

const contactModel = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide a name"],
    },
    email:{
        type:String,
        required:[true,"Must provide a email"],
    },
    mobile:{
        type:String,
        required:[true,"Must provide a mobile"],
    },
})
export const Contact = mongoose.models.contacts || mongoose.model("contacts",contactModel)