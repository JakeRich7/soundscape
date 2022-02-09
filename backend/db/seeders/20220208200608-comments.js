'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {user_id: 1, song_id: 1, body: "This is my favorite song EVER!! Enjoy:D", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 2, song_id: 1, body: "This song makes me feel like blowing bubbles", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 3, song_id: 1, body: "Love it!", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 3, song_id: 2, body: "Bro! What polysynth did you use to make this?", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 3, song_id: 4, body: "Folk metal is the only real music, which makes this half a song", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 2, song_id: 7, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 3, song_id: 8, body: "PrEtTy GoOd, PrEtTy GoOd", createdAt: new Date(), updatedAt: new Date() },
      {user_id: 1, song_id: 9, body: "Wow, this is the only song I like besides my own. Thanks for sharing", createdAt: new Date(), updatedAt: new Date() },
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
