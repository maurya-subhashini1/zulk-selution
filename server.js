const express=require("express")
const router=require("./routes/router")
const cookie=require("cookie-parser")

const PORT=3000

const app=express();
app.use(cookie())

app.use(express.json());
app.use("/",router)

app.listen(PORT,()=>{
    console.log(`server${PORT} is runing`);
})