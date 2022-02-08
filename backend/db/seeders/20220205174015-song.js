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
    {user_id: 2, url: 'https://www.chosic.com/wp-content/uploads/2021/11/Weekend.mp3', title: 'chosic example 1', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 2, url: 'https://www.chosic.com/wp-content/uploads/2021/12/alex-productions-epic-cinematic-saga-trailer-myths.mp3', title: 'chosic example 2', favorite: false, createdAt: new Date(), updatedAt: new Date() },
    {user_id: 2, url: 'https://www.chosic.com/wp-content/uploads/2021/12/alex-productions-cinematic-piano-urano.mp3', title: 'chosic example 3', favorite: false, createdAt: new Date(), updatedAt: new Date() },
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
