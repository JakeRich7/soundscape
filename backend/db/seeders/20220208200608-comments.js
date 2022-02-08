'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {user_id: 1, song_id: 1, body: "This is my first text comment!", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 2, song_id: 1, body: "2nd user made this comment", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 3, song_id: 1, body: "3rd user made this comment", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
