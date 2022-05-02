const express = require("express");
<<<<<<< HEAD
const upload = require('../utils/multer');
const imageUpload = require('../controllers/imageController');
const { route } = require("../app");

const router = express.Router();

//allow multiple image uploads
router.post("/upload", imageUpload);
=======
const multer = require('../utils/multer');
const { imageUpload } = require('../controllers/imageController');
const router = express.Router();

//allow multiple image uploads
router.post("/upload", multer.array('image'), imageUpload);
>>>>>>> e9815dd778e0d23b4cbebdd733465b3188203e3c

module.exports = router;