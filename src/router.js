const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderAddNote)
router.post("/addingnote", controller.addingNote)
router.get("/shownotes", controller.renderAddNote)


module.exports = router