const express = require("express");
const upload = require('../utils/multer');
const imageUpload = require('../controllers/imageController');
const { route } = require("../app");

const router = express.Router();

//allow multiple image uploads
router.post("/upload", imageUpload);

module.exports = router;