const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('angular_nhom4', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;