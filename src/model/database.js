const Sequelize = require('sequelize')

module.exports = new Sequelize(
    'notes',
    'root',
    'root', {
        dialect: 'mysql',
        host: 'localhost',
    },

);