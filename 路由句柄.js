const express = require("express");
const app = express();

app.get("/index",function(req,res,next){
    console.log("这是第一个函数");
    next();
},function () {
    console.log("这是第二个函数");
}
)
app.listen(3000)