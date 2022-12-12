const cookie_parser=require("cookie-parser")

const jwt=require("jsonwebtoken")

authentication=(req,res,next)=>{
    token=req.cookies;
    if(token==undefined){
        res.send("authentication error")
    }else{

        jwt.verify(token.user,"zulk**123",(err,tokendata)=>{
            if(err){
                res.send(err)
                console.log("authenticatin aeerr");
            }
            else{
                res.tokendata=tokendata
                next()
            }
        })
    }
}

module.exports={authentication}