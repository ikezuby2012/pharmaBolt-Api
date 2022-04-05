const express = require("express");
const { login, signup, protect, restrictUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;