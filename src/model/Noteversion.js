const Sequelize = require("sequelize");
const db = require("./database");

const Noteversion = db.define('noteversion', {
    version:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NoteID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
},{
})

module.exports = Noteversion;