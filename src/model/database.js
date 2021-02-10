const Sequelize = require('sequelize')

module.exports = new Sequelize(
    'notes',
    'root',
    'root', {
        dialect: 'mysql',
        host: 'localhost',
        dialectOptions: {
                useUTC:false,
                dateStrings: true,
                typeCast: true,
                timezone: "+05:30"
        },
            timezone: '+01:00', // for writing to database

    },

);