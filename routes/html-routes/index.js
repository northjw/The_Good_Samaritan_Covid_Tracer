var express = require("express");

var router = express.Router();
var db = require("../../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/comments");
});

router.get("/comments", function(req, res) {
   // get comments from db and send to template
  db.Test.findAll({})
   .then( comments => res.render("index", { comments: comments }))
   .catch(err =>  { res.status(500); next(err) } )
});

module.exports = router;
