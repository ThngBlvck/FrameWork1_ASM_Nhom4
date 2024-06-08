const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./Database');

const Dayoff = sequelize.define('dayoff', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dayoff: {
    type: DataTypes.DATE,
    allowNull: true
  },
  employee_id : {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  timestamps: false
});
module.exports = Dayoff;
