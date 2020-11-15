const express = require("express");
const router = express.Router();
const db = require("../../models");
var passport = require("../../config/passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

router.post("/signup", function(req, res) {
    db.User.create({
      user_id: req.body.user_id,
      email: req.body.email,
      password: req.body.password
    })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
