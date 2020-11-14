const express = require("express");
const router = express.Router();


// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   // db.Test.findAll({})
   //    .then(comments => res.render("index", { comments: comments }))
   //    .catch(err => {
   //       res.status(500);
   //       next(err);
   //    });
   res.render("index");
});

router.get("/register", (req, res) => {
   res.render("register");
});

module.exports = router;
