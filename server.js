const fs = require("fs");

// console.log("first");
const data = "This is a new data"

const read =(err,data)=>{
    if(err) throw err
    console.log("file write success");
}

console.log("end");

fs.readFile("./log,txt","utf-8",read);