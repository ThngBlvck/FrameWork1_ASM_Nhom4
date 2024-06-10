const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./Database');

const Employee = sequelize.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    position_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false
});
module.exports = Employee;