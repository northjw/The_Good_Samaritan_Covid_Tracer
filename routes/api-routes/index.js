/*eslint-disable*/
const express = require("express");
const router = express.Router();
const placesRoutes = require("./placesRoutes");
const userPlaceRoutes = require("./userPlaceRoutes");
const emailRoutes = require("./emailRoutes");
const db = require("../../models");
const passport = require("../../config/passport");


router.post("/login", passport.authenticate("local"), (req, res) => {
   res.json(req.user);
});

router.get("/user_data", (req, res) => {
   if (!req.user) {
      res.json({});
   } else {
      res.json({
         user_id: req.user.user_id,
         email: req.user.email,
         covid: req.user.covid,
         covidDate: req.user.covidDate
      });
   }
});

router.get("/user_data/user_id/:user_id?", (req, res)=> {
   db.User.findOne({
      where: {
         user_id: req.params.user_id
      }
   }).then((result) => {
      return res.json(result);
   });
});

router.put("/covid_check", (req, res) => {
   db.User.update({
      covid: req.body.covid,
      covidDate: req.body.date
   },
   {
      where: {
         user_id: req.body.user_id
      }
   })
      .then((updates) => {
         res.json(updates);
      });
});


router.post("/signup", (req, res) => {
   db.User.create({
      user_id: req.body.user_id,
      email: req.body.email,
      password: req.body.password
   })
      .then(() => {
         res.redirect(307, "/api/login");
      })
      .catch((err) => {
         res.status(401).json(err);
      });
});

router.get("/logout", (req, res) => {
   req.logout();
   res.redirect("/");
});

router.use("/place_data", placesRoutes);
router.use("/user_place", userPlaceRoutes);
router.use("/email", emailRoutes);

module.exports = router;
