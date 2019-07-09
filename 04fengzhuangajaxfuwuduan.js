const express = require("express");
const path = require("path");
const app = express();
app.get("/",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"./03封装自己的ajax.html"))
})
app.post("/post",(req,res,next)=>{
    res.json({
        data:"我是一个post响应的数据"
    })
})
app.get("/get",(req,res,next)=>{
    res.send("我是一个get响应")
})
app.listen(3000)
