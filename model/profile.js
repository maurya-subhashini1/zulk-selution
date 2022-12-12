const mongoose=require("mongoose")

const profiles=mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
       
    }

)
const profile=mongoose.model("profile",profiles)

module.exports={profile};