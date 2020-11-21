const express = require("express");
const router = express.Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// get route -> index
router.get("/", (req, res) => {
   console.log(req.user);
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

router.get("/location", isAuthenticated, (req, res) => {
   res.render("location");
});

router.get("/contactUs", isAuthenticated, (req, res) => {
   res.render("contactUs");
});

router.get("/aboutus", isAuthenticated, (req, res) => {
   res.render("aboutus");
});

module.exports = router;
