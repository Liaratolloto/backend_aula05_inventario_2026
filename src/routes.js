const express = require("express")
const router = express.Router();

const { create, read } = require("./controlles")

router.post("/bens",create)
router.get("/bens",read)

module.exports = router