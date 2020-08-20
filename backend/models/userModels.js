import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    contactno:{type:Number,required:true,default:0}
})

const userModel=mongoose.model("User",userSchema)

export default userModel;