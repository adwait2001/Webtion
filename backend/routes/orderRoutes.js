import express from 'express';
import Order from '../models/orderModels'
import {isAuth,isAdmin} from '../utils'
const router =express.Router();

router.get("/",isAuth,isAdmin,async(req,res)=>{
    const orders=await Order.find({});
    res.send(orders)
})

router.post("/",isAuth,async(req,res)=>{
    const order=new Order({
        user_name:req.body.user_name,
        user_contact:req.body.user_contact,
        hosting_preference:req.body.hosting_preference
    });
    const newOrder=await order.save();
    if(newOrder){
        return res.status(201).send({message:"New order received",data:newOrder});
    }
    return res.status(500).send({message:"Error in creating Order"});
})

export default router;