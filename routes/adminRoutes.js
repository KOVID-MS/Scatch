const express = require("express");
const router = express.Router();
const dbgr = require("debug")("development:createowner");
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin");

if(process.env.NODE_ENV === "development"){

    router.post("/create", async(req,res)=>{
        const {fullname,email,password} = req.body;
        let admins = await adminModel.find();
        if(admins.length > 0){
            return res.status(502).send("You have no permission to create owner");
        }
        bcrypt.genSalt(10,(err,salt)=>{
            if(err){
                dbgr(err)
            }
            else{
                bcrypt.hash(password,salt,async (err,hash)=>{
                    if(err){
                        dbgr(err);
                    }
                    else{
                        let createdadmin = await adminModel.create({
                        fullname,
                        email,
                        password:hash
                    })
                    res.status(201).json(createdadmin);
                    dbgr(createdadmin);
                    }
                })
            }
            
        })
    })
};


router.get("/",(req,res)=>{
    res.send("Hey there!");
})

module.exports = router;
