const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderAddNote)
router.post("/notes", controller.addNote)
router.get("/notes", controller.getNotes)
router.get("/history", controller.history)
router.get("/notecontent", controller.noteContent)
router.delete('/notes', controller.deleteNote)
router.put('/notes', controller.updateNote);


module.exports = router