const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", function(req, res) {
    db.Places.findAll({}).then(function (results) {
        res.json(results);
    });
});

module.exports = router;