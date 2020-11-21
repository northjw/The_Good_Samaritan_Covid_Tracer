module.exports = function(sequelize, DataTypes) {
   const UserPlaces = sequelize.define("UserPlaces", {
      date: {
         type: DataTypes.STRING,
         validate: {isDate: true}
      }
   });

   return UserPlaces;
};