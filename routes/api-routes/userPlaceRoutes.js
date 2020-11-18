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

router.get("/:user_id?", function(req, res){
  db.UserPlaces.findAll({
      where: {
          UserUserId: req.params.user_id
      }
  }).then((result) => {
      return res.json(result);
  })
})

router.get("/places/:place_id?", function(req, res){
  db.UserPlaces.findAll({
      where: {
          PlacePlaceId: req.params.place_id
      }
  }).then((result) => {
      return res.json(result);
  })
})

router.get("/date/:user_id?", function (req, res) {
  db.UserPlaces.findAll({
    order: [['date', 'DESC']],
    where: {
      UserUserId: req.params.user_id
    }
  }).then((result) => {
    return res.json(result);
  })
})

router.get("/date/:user_id?/:date?", function (req, res) {
  db.UserPlaces.findAll({
    where: {
      UserUserId: req.params.user_id,
      date: req.params.date
    }
  }).then((result) => {
    return res.json(result);
  })
})

module.exports = router;