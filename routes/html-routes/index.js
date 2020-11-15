const express = require("express");
const router = express.Router();
var isAuthenticated = require("../../config/middleware/isAuthenticated");


// get route -> index
router.get("/", (req, res) => {
   if (req.user) {
      res.redirect("/postCommets");
   } 
   res.render("index");
});

router.get("/register", (req, res) => {
   if (req.user) {
      res.redirect("/postComments");
   }
   res.render("register");
});

router.get("/postComments", isAuthenticated, function(req, res) {
   res.render("postComments");
 });


module.exports = router;
