const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/user",(req,res)=>{
    res.send("hello user");
})
app.get("/userdetails",(req,res)=>{
    let user = {
        status: "success",
        message: "Hello from Express!",
        timestamp: new Date().toISOString()
    }
    res.status(200).json(user);
})
app.get("/about",(req,res)=>{
    res.send("About this website");
})
app.listen(3000,()=>{
    console.log("server is running");
})