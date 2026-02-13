import express from "express";
const app = express();

let mid1=(req,res,next)=>{
    console.log("middleware 1");
    next()
}
let mid2=(req,res,next)=>{
    console.log("middleware 2");
    next()
}
app.use(mid1);
app.use(mid2);

app.get("/user",(req,res)=>{
    console.log("req url->" + req.url);

    res.send("server is running");
})

app.listen(3000,()=>{
    console.log("server is running");
})