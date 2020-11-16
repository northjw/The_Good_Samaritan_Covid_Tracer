const express = require("express");
const router = express.Router();
const db = require("../../models");


router.post("/", function(req, res) {
    console.log(req.body)
    db.UserPlaces.create({
      date: req.body.date,
      PlacePlaceId: req.body.PlacePlaceId,
      UserUserId: req.body.UserUserId
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

module.exports = router;