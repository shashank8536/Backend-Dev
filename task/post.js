const http = require('http');
const queryString = require('querystring');
const { json } = require('stream/consumers');

const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url=="/login" && req.method==="POST"){
        let data = "";

        req.on("data",(chunk)=>{
            data+=chunk.toString();
        });
        req.on("end",()=>{
            console.log("raw data in form urlencoded" + data)
            let parsedData = queryString.parse(data)
            console.log("passed raw to js object", parsedData)

            let jsonString = JSON.stringify(parsedData);
            console.log("JS obj to json string"+jsonString)

            let final = JSON.parse(jsonString);
        })
        return;
    }
    res.end("server is working");
});
server.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})