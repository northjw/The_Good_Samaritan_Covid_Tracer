const express = require("express");
const tracerRoute = require("./tracer");
const router = express.Router();

router.use("/tracer", tracerRoute);

module.exports = router;
