const express = require("express");
const isLoggedin = require("../utils/isLoggedin");
const { callback, toProtect} = require("../controllers/googleAuth");
const { login, signup,} = require("../controllers/authController");
const { route } = require("../app");


const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/google/callback", callback);
router.get("/protect", isLoggedin, toProtect);

module.exports = router;