const express = require("express");
const router = express.Router();
const tracerRoute = require("./tracer");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// get route -> index
router.get("/", (req, res) => {
   if (req.user) {
      res.redirect("/location");
   } 
   res.render("index");
});

router.get("/register", (req, res) => {
   if (req.user) {
      res.redirect("/location");
   }
   res.render("register");
});

router.get("/location", isAuthenticated, function(req, res) {
   res.render("location");
});


module.exports = router;
