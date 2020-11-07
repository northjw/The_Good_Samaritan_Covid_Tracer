const express = require("express");

const router = express.Router();
const db = require("../../models");

// get route -> index
router.get("/", (req, res) => {
   res.redirect("/comments");
});

router.get("/comments", (req, res) => {
   // get comments from db and send to template
   db.Test.findAll({})
      .then(comments => res.render("index", { comments: comments }))
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
