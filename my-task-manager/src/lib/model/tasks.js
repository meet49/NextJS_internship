import mongoose from "mongoose";    

const taskModel = new mongoose.Schema({
    task:String,
    check:{
        type:Boolean,
        default:false
    }
})
export const Task = mongoose.models.tasks || mongoose.model("tasks",taskModel)