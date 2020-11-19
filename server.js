const express = require("express");
const nodemailer = require('nodemailer');
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
var passport = require("./config/passport");
var session = require("express-session");
const errorHandler = require("./utils/errorHandler");

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRoutes);
app.use(htmlRoutes);

const exphbs = require("express-handlebars");

app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      partialsDir: __dirname + "/views/partials/"
   })
);
app.set("view engine", "handlebars");


// drops all tables on every restart
db.sequelize.sync().then(async () => {

   app.listen(PORT, () => {
      console.log("🌎 => live on http://localhost:%s", PORT);
   });
});
