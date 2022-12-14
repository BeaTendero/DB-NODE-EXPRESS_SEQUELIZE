'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: 'admin',
          password: 'Patata1234',
          email: 'admin@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: 1
        },
        {
          name: 'user1',
          password: 'Patata1234',
          email: 'user1@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: 2
        },
        {
          name: 'user2',
          password: 'Patata1234',
          email: 'user2@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: 2

        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
