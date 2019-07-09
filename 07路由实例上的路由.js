const {Router} = require("express");
const router = Router();

router.get("/index",(req,res)=>{
    res.send(`
        <h1>我是主页</h1>
        <a href="/page/details">跳转到详情页</a>
    `)
})
router.get("/details",(req,res)=>{
    res.send(`
        <h1>我是详情页</h1>
        <a href="/page/index">跳转到主页</a>
    `)
})
module.exports = router;