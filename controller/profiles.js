const {profile}=require("../model/profile")
const jwt =require("jsonwebtoken")
const cookie=require("cookie-parser")


exports.createProfile=async(req, res)=>{
    var {
        name,
        password,
        email
    }=req.body;

    const createProfiles=await profile.create({
        name,
        password,
        email
    })
    res.send({
        status:200,
        success:true,
        message:"profile created...",
        createProfiles
    })
}



exports.Login=async(req,res)=>{
    var name=req.body.name
    var password=req.body.password

    profile.findOne({name:name},{password:password})

    .then(profiles =>{
        let token=jwt.sign({id:profiles.id},"zulk**123",{expiresIn:"8h"})
        res.cookie("user",token)

        res.send({
            status:200,
            success:true,
            message:"login successfully...",
            token
    
        })
    })
}
