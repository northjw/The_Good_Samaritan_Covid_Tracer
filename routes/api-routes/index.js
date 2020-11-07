const express = require("express");

const router = express.Router();
const db = require("../../models");

// post route -> back to index
router.post("/comments/create", (req, res, next) => {
   // console.log(req.body)
   db.Test.create(req.body)
      .then(newComment => {
         console.log(newComment);
         res.redirect("/");
      // optionally return data created
      // res.json(newComment)
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
