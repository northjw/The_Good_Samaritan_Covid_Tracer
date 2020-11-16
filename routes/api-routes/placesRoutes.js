const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/places", function(req, res) {
    Places.findAll({}).then(results => res.json(results))
});

module.exports = router;