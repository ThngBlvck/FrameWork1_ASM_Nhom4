const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('angular_nhom4', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
