const express = require("express");
const isLoggedin = require("../utils/isLoggedin");
const { login, signup,} = require("../controllers/authController");
const { callback, protect} = require("../controllers/googleAuth");
const { route } = require("../app");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/google/callback", callback);
router.get("/protect", isLoggedin, protect)

module.exports = router;