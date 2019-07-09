const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring")

app.get("/index",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"./09.html"))
})
app.get("/something",(req,res,next)=>{
    console.log(req.url);
    console.log(req.query)
    res.json({
        data:"返回信息"
    })
})
app.post("/getpost",(req,res,next)=>{
    var str = "";
    req.on("data",chunk=>str+=chunk)
    req.on("end",()=>{
        console.log(str);
        console.log(query.parse(str).name)
        res.json({
            data:"接收到了信息"
        })
    })
})
app.listen(3000)