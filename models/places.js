/*eslint-disable*/

"use strict";
const {
   Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Places extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
      // define association here
         Places.belongsToMany(models.User, { through: "UserPlaces" });
      }
   }
   Places.init({
      place_id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      place_name: DataTypes.STRING,
      category: DataTypes.STRING
   }, {
      sequelize,
      modelName: "Places",
   });
   return Places;
  
};