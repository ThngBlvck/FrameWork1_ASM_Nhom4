const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./database');

const Departments = sequelize.define('departments', {
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
module.exports = Departments;
