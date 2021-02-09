const Sequelize = require('sequelize')

module.exports = new Sequelize(
    'notes',
    'root',
    'root', {
        dialect: 'mysql',
        host: 'localhost',
        dialectOptions: {
        },
        timezone: '+01:00', // for writing to database
    },

);