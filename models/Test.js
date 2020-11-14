module.exports = function(sequelize, DataTypes) {
   const Test = sequelize.define("test", {
      comment: {
         type: DataTypes.STRING,
         validate: { len: [1, 500] }
      }
   });
   return Test;
};
