'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    user_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    favorite: DataTypes.BOOLEAN
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {foreignKey: 'user_id'});
    Song.hasMany(models.Comment, {foreignKey: 'song_id'});
  };
  return Song;
};
