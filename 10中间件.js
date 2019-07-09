const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))

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
app.post((req,res,next)=>{
    var str = "";
    req.on("data",chunk=>str+=chunk)
    req.on("end",()=>{
        // console.log(str);
        // console.log(query.parse(str).name)
        req.body = query.parse(str);
        next();
        res.json({
            data:"接收到了信息"
        })
    })
})
app.post("/getpost",(req,res,next)=>{
    console.log(req.body);
    res.json(req.body);
})
app.listen(3000)