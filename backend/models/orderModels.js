import mongoose,{Schema, Mongoose} from 'mongoose';

const OrderSchema=new mongoose.Schema({
    user_name:{type:String,required:true},
    user_contact:{type:Number,required:true},
    hosting_preference:{type:Boolean,required:false}
})

const orderModel=mongoose.model("Order",OrderSchema);

export default orderModel;