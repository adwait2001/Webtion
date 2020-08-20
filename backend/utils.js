import jwt from "jsonwebtoken"
import config from './config'

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        contactno:user.contactno,
        isAdmin: user.isAdmin,
    },config.JWT_SECRET,{expiresIn:'48h'})
}

const isAuth=(req,res,next)=>{
    const token=req.headers.authorization;

    if (token) {
        const reqtoken=token.slice(7, token.length);
        jwt.verify(reqtoken,config.JWT_SECRET,(err,user)=>{
            if(err){
                return res.status(401).send({msg:"invalid token"})
            }
            req.user=user;
            next();
            return
        })
    }
    else{
        return res.status(401).send({msg:"Token is not supplied"})
    }
}


const isAdmin=(req,res,next)=>{
    console.log(req.user);
    if(req.user && req.user.isAdmin){
        return next();
    }
    else{
        return res.status(401).send({msg:"Invalid acess"})
    }
}

export {
    getToken,isAuth,isAdmin
}