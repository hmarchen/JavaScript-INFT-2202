const express = require("express");
const { ICEdisplayHomePage } = require("../controllers/iceController");
require("../script");
// initiating router object
const router = express.Router();



// ICE #7 /Hello-world
router.get("/home", ICEdisplayHomePage);

module.exports = router;