'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: 'admin',
          password: '1234',
          email: 'admin@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user1',
          password: '1234',
          email: 'user1@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user2',
          password: '1234',
          email: 'user2@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
