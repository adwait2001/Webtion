import mongoose, { Schema, Mongoose } from 'mongoose'

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    image:{type:String,required:true},
    cost:{type:String,required:true},
    category: { type: String, required: true },
    link_to_web:{type:String,required:true}
})

const productModel=mongoose.model("Product",productSchema);

export default productModel;