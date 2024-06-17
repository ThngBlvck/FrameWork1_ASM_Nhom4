const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./database.js');

const Efficiency = sequelize.define('efficiencys', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  job: DataTypes.STRING,
  progress: DataTypes.INTEGER,
  employee_id: DataTypes.INTEGER,
},{
    timestamps: false
  })

module.exports = Efficiency;
