const express = require("express");
const app = express();
const path = require("path");
app.get("/",(req,res,next) =>{
    console.log(req.url);
    res.sendFile(path.resolve(__dirname,"./02post.html"));
})
app.post("/",(req,res,next)=>{
    res.send("收到post请求")
})
app.listen(3000);