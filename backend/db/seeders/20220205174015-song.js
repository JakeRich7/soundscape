'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Songs', [
    {user_id: 1, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', title: 'SoundHelix Example', favorite: false, createdAt: new Date(), updatedAt: new Date() },
   ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
