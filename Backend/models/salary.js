const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Database");

const Salary = sequelize.define(
  "salary",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    salary: {
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
module.exports = Salary;
