const express = require("express");
const router = express.Router();
const tracerRoute = require("./tracer");

// get route -> index
router.get("/", (req, res) => {
   res.redirect("/tracer");
});

// comments page
router.use("/tracer", tracerRoute);

module.exports = router;
