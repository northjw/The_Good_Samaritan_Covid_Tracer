
/*eslint-disable*/
"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("places", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         place: {
            type: Sequelize.INTEGER
         },
         name: {
            type: Sequelize.STRING
         },
         category: {
            type: Sequelize.STRING
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
         }
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("places");
   }
};