const express = require("express");
const isLoggedin = require("../utils/isLoggedin");
const { protect, restrictUser } = require("../controllers/authController");
const {
    createNewDrug, getAllDrugs, deleteDrug, getDrugById, updateDrugById
} = require("../controllers/drugController");
const { callback, toProtect } = require("../controllers/googleAuth");
const { route } = require("../app");

const router = express.Router();

router.use(protect);
router.route("/").post(createNewDrug).get(getAllDrugs);
router.route("/:id").get(getDrugById).patch(updateDrugById).delete(deleteDrug);

module.exports = router;