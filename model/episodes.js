const mongoose=require("mongoose")
const validate=require("validator")

const EpisodesModule=mongoose.Schema(
    {
        showId:{
            type:String,
            required:true

        },
        title:{
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
        videoUrl:{
            type:String,
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

const epishode=mongoose.model("epishode",EpisodesModule)

module.exports={epishode};