const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Database");

const Communications = sequelize.define(
  "communications",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    timestamps: false,
  }
);
module.exports = Communications;
