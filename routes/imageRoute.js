const express = require("express");
const upload = require('../utils/multer');
const { imageUpload } = require('../controllers/imageController');
const { route } = require("../app");
const multer = require('../utils/multer');
const router = express.Router();

//allow multiple image uploads
router.post("/upload", imageUpload);

//allow multiple image uploads
router.post("/upload", multer.array('image'), imageUpload);

module.exports = router;