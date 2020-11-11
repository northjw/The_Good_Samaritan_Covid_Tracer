// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// dependencies
var Sequelize = require("sequelize");

// creating mySQL connection using Sequelize
var sequelize = new Sequelize("DB_NAME_GOES_HERE", "root", "PASSWORD_GOES_HERE", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// exports the connection for other files to use
module.exports = sequelize;