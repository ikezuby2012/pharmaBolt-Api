const express = require("express");
const multer = require('../utils/multer');
const { imageUpload } = require('../controllers/imageController');
const router = express.Router();

//allow multiple image uploads
router.post("/upload", multer.array('image'), imageUpload);

module.exports = router;