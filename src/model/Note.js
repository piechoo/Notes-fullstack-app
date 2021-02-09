const Sequelize = require("sequelize");
const db = require("./database");
const Noteversion = require("./Noteversion")

const Note = db.define('note', {
    NoteID: {
        type: Sequelize.TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    isDeleted: {
        type: Sequelize.BOOLEAN
    },

},{

})
Note.hasMany(Noteversion, {foreignKey: 'NoteID'});
module.exports = Note;