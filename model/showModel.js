const mongoose=require("mongoose")

const validate=require("validator")



// const MONGO_URL="mongodb://localhost:27017/zulkSelution"

const uri = "mongodb://0.0.0.0:27017/zulkSelution";

mongoose.connect(uri).then(()=>{
    console.log("database connacting..");
})

const showscheema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        },
        category:{
            type:String,
            required:true
        },
        introduction:{
            type:String,
            required:true
        },
        bannerImage:{
            type:Array,
            required:true
        },
        createdTime:{
            type:String,
            default:new Date()
        },
        updatedTime:{
            type:String,
            default:new Date()
        }
    }

)
const showModule=mongoose.model("show",showscheema)

module.exports={showModule};