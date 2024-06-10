const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./database');

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
