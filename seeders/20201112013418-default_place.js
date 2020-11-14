'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('places', [{
      place_name: "Alpha Chi Omega",
      category: 'building',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Alpha Delta Phi",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Alpha Epsilon Pi",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Armstrong Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Armstrong Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Avery Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Baker Field",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Broadway Residence Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Buell Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Butler Library",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Carman Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Casa Hispanica",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Casa Italiana",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "CEPSR",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Chandler",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Columbia Alumni Center",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Computer Center",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Computer Science",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Delta Gamma",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Deutches Haus",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Dodge Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Dodge Physical Fitness Center",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Earl Hall",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "East Campus",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Engineering Terrace",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Faculty House",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Fairchild",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Fayerweather",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Furnald",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Greene Annex",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Greenhouse Nursery",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Hamilton",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Hartley",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      place_name: "Havemeyer Extension",
      category: "building",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Place', null, {});
  }
};
