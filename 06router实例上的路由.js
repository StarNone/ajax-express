const express = require("express");
const app = express();
const pageRoutes = require("./07路由实例上的路由.js").default.default

app.use("/page",pageRoutes);

app.listen(3000)