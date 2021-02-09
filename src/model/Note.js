const Sequelize = require("sequelize");
const db = require("./database");


const Note = db.define('note', {
    NoteID: {
        type: Sequelize.TINYINT,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    isActual: {
        type: Sequelize.BOOLEAN
    },
    isDeleted: {
        type: Sequelize.BOOLEAN
    },

},{

})

module.exports = Note;