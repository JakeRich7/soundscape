'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Songs', [
    {user_id: 1, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', title: 'SoundHelix example 1', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 1, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', title: 'SoundHelix example 2', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 1, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', title: 'SoundHelix example 3', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 2, url: 'http://www.jsayles.com/music/2013/Elway%20Bevin%20-%20Browning.mp3', title: 'jsayles example 1', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 2, url: 'http://www.jsayles.com/music/2013/Anonymous%20-%20The%20Witches%27%20Dance.mp3', title: 'jsayles example 2', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 2, url: 'http://www.jsayles.com/music/nymphs.mp3', title: 'jsayles example 3', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 3, url: 'https://www.allesgemafrei.de/previews/Demo-Download/624.mp3', title: 'allesgemafrei example 1', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 3, url: 'https://www.allesgemafrei.de/previews/Demo-Download/377.mp3', title: 'allesgemafrei example 2', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 3, url: 'https://www.allesgemafrei.de/previews/Demo-Download/613.mp3', title: 'allesgemafrei example 3', favorite: false, createdAt: new Date(), updatedAt: new Date() },
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
