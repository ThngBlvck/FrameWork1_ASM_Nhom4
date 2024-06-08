const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./Database');

const Position = sequelize.define('position', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: false
});
module.exports = Position;
