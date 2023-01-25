"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routers_1 = require("@/routers");
var app = (0, express_1["default"])();
app.use(routers_1.healthRouter);
app.listen(5000, function () {
    console.log("Server is up and running.");
});
