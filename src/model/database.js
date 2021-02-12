const Sequelize = require('sequelize')
const config = require('./config')

module.exports = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        dialect: config.database.dialect,
        host: config.database.host,
        dialectOptions: config.database.dialectOptions,
            timezone: config.database.timezone, // for reading from
            storage: './database/notes.db'
    },

);