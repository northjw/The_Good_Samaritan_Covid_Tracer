var express = require("express");

var router = express.Router();
var db = require("../../models");

// post route -> back to index
router.post("/comments/create", function(req, res, next) {
   // console.log(req.body)
   db.Test.create(req.body)
      .then( newComment => {
         res.redirect("/");
         // optionally return data created
         // res.json(newComment)
      })
      .catch(err =>  { res.status(500); next(err) } )
 });

module.exports = router;
 