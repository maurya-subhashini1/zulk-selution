const {epishode}=require("../model/episodes")

exports.createEpishode=async(req, res)=>{
    var {
        showId,
        title,
        introduction,
        bannerImage,
        videoUrl,
        createdTime,
        updateTime
    }=req.body;

    const createEpishode=await epishode.create({
        showId,
        title,
        introduction,
        bannerImage,
        videoUrl,
        createdTime,
        updateTime
    })
    res.send({
        status:200,
        success:true,
        message:"epishode created...",
        createEpishode
    })
}



exports.getListOfEpishode=async(req,res)=>{
    const limit=req.query.limit||20;
    const page=req.query.page||1;

    const  storeListOfEpishode=await epishode.find({}).limit(limit * 1).skip((page-1)*limit)

    if(!storeListOfEpishode){
        res.send("data nt found !")
    }

    res.send({
        status:200,
        success:true,
        message:"get epishode successfully...",
        storeListOfEpishode

    })
}



exports.updateEpishode=async(req,res)=>{
    let updateData=await epishode.findById({_id:req.params.id})
    if(!updateData){
        res.send('Data not found')
    }
    updateEpishode=await epishode .findByIdAndUpdate(
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


exports.deletedEpishode=async(req,res)=>{
    let deletedEpishode=await epishode.findOne({id:req.query.id })
    console.log(deletedEpishode);
    if(!deletedEpishode){
        res.send("data not found.")
    }
    const deletedata=await epishode.findByIdAndDelete()
    res.send({
        status:200,
        success:true,
        message:"deleted show successfully..."

    })

}