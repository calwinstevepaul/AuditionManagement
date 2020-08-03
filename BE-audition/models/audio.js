'use strict';
module.exports = (sequelize, DataTypes) => {
  const audio = sequelize.define('audio', {
    userId: DataTypes.INTEGER,
    song: DataTypes.STRING,
    audio: DataTypes.STRING
  }, {});
  audio.associate = function(models) {
    // associations can be defined here
  };
  return audio;
};