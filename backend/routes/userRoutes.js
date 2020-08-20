import express from 'express';
import User from '../models/userModels'
import {getToken} from '../utils'
const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: "Adwait",
            email: "adwaitnsk.2009@rediffmail.com",
            password: "12345",
            isAdmin: true,
            contactno:9518394022
        })
        const newuser = await user.save()
        res.send(newuser)
    } catch (error) {
        res.send({ msg: error.message })
    }
})

router.post("/signin", async (req, res) => {
    const signinuser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinuser) {
        res.send({
            _id: signinuser.id,
            name: signinuser.name,
            email: signinuser.email,
            isAdmin: signinuser.isAdmin,
            contactno:signinuser.contactno,
            token: getToken(signinuser)
        })
    } else {
        res.status(401).send({ msg: "Invalid Email or Password" })
    }
})

router.post("/register", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contactno:req.body.contactno
    })

    const newUser = await user.save()
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            contactno:newUser.contactno,
            token: getToken(newUser)
        })
    }
    else{
        res.status(401).send({msg:"Invalid User Data"})
    }
})


export default router