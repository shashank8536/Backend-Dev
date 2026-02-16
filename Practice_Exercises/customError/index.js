import express from "express";
const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
})

app.use((req,res)=>{
    res.status(404).render("error", { message: "Page not found" });
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})