const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/notes", controller.addNote)
router.get("/notes", controller.getNotes)
router.delete('/notes', controller.deleteNote)
router.put('/notes', controller.updateNote);
router.get("/history", controller.history)
router.get("/notecontent", controller.noteContent)



module.exports = router