import express from 'express';
import Product from '../models/productModels'
import { isAuth, isAdmin } from '../utils';
const router = express.Router();


router.get("/",async(req,res)=>{
    const products=await Product.find({});
    res.send(products);
})

router.get("/:id",async(req,res)=>{
    const product=await Product.findById(req.params.id);
    res.send(product);
})

router.put('/:id',isAuth,isAdmin, async(req,res)=>{
    const productId=req.params.id;
    const product=await Product.findById(productId);
    if(product){
        product.name=req.body.name;
        product.desc=req.body.desc;
        product.image=req.body.image;
        product.price=req.body.price;
        product.category=req.body.category;
        product.linK_to_web=req.body.linK_to_web;
        const updated_product=await product.save();
        if (updated_product) {
            return res.status(200).send({message:"product updated",data:updated_product})
        } 
    }
    return res.status(500).send({message:"error in updating product"})
})

router.delete('/:id',isAuth,isAdmin,async(req,res)=>{
    const deleted_product=await Product.findById(req.params.id);
    if (deleted_product) {
        await deleted_product.remove();
        res.send({message:"product deleted"})
    }
    else{
        res.send("error in deletion")
    }
})


router.post("/", isAuth, isAdmin, async (req, res) => {
    const product = new Product({
        name:req.body.name,
        cost:req.body.cost,
        desc:req.body.desc,
        image:req.body.image,
        price:req.body.price,
        category:req.body.category,
        link_to_web:req.body.link_to_web
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });
  })
  
export default router;