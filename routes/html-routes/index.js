const express = require("express");
const router = express.Router();
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// get route -> index
router.get("/", (req, res) => {
   console.log(req.user)
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

router.get("/contactUs", isAuthenticated, function(req, res) {
   res.render("contactUs");
});

router.get("/aboutus", isAuthenticated, function(req, res) {
   res.render("aboutus");
});

module.exports = router;
