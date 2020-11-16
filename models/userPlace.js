module.exports = function(sequelize, DataTypes) {
    var UserPlace = sequelize.define("UserPlace", {
      date: {
          type: DataTypes.STRING,
          validate: {isDate: true}
      }
    });

    return UserPlace;
};