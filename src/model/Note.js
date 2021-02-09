const Sequelize = require("sequelize");
const db = require("./database");


const Level = db.define('Notes', {
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
},{

})

module.exports = Level;