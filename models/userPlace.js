module.exports = function(sequelize, DataTypes) {
    var UserPlaces = sequelize.define("UserPlaces", {
      date: {
          type: DataTypes.STRING,
          validate: {isDate: true}
      }
    });

    return UserPlaces;
};