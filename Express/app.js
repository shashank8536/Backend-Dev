const express = require('express');
const app = express();

const data = require("./data");

app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/userAge1", (req, res) => {

    let finaldata = data.map((ele) => {
        let finalName = "";

        if (ele.gender === "male") {
            finalName = "Mr. " + ele.name;
        } else if (ele.gender === "female") {
            finalName = "Mrs. " + ele.name;
        }
        return{finalName}
    });

    res.json(finaldata);
});

app.get("/userdetails",(req,res)=>{
    let name = req.query.name;
    let age = req.query.size;

    res.json({name,age});
})
app.get("/userAge",(req,res)=>{
    let name = data.filter((ele)=>ele.age > 25)
    console.log(name);
    res.json(name);
})

app.get("/user/:id",(req,res)=>{
    const id = parseInt(req.params.id)

    let user = data.find((ele)=>ele.id===id)

    res.json(user);
})
app.listen(3000,()=>{
    console.log("server is running");
})