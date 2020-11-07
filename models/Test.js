module.exports = function(sequelize, DataTypes) {
   var Test = sequelize.define("Test", {
     comment:{ 
        type: DataTypes.STRING,
         validate: { len: [1,500] } }
   });
   return Test;
 };
 