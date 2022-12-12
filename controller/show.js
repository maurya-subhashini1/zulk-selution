const {showModule}=require("../model/showModel")

exports.createshow=async(req, res)=>{
    var {
        name,
        category,
        introduction,
        bannerImage,
        createdTime,
        updateTime
    }=req.body;

    const createshows=await showModule.create({
        name,
        category,
        introduction,
        bannerImage,
        createdTime,
        updateTime
    })
    res.send({
        status:200,
        success:true,
        message:"show created...",
        createshows
    })
}



exports.getShowData=async(req,res)=>{
    const limit=req.query.limit||20;
    const page=req.query.page||1;

    const  storeList=await showModule.find({}).limit(limit * 1).skip((page-1)*limit)

    if(!storeList){
        res.send("data nt found !")
    }

    res.send({
        status:200,
        success:true,
        message:"get shows successfully...",
        storeList

    })
}



exports.updateShow=async(req,res)=>{
    let updateData=await showModule.findById({_id:req.params.id})
    if(!updateData){
        res.send('Data not found')
    }
    updateEpishode=await showModule .findByIdAndUpdate(
        req.params.id,
        req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:true
        }
    )
    if(!updateEpishode){
        res.send('Data not found')
    }
    res.send({
        status:200,
        success:true,

    message:'Data updated successfully',updateEpishode
    })


}


exports.deleteShow=async(req,res)=>{
    let deleteShows=await showModule.findOne({id:req.query.id })
    if(!deleteShows){
        res.send("data not found.")
    }
    const deletedata=await showModule.findByIdAndDelete()
    res.send({
        status:200,
        success:true,
        message:"deleted show successfully...",
    })

}