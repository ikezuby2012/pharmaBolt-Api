const express = require("express");
const isLoggedin = require("../utils/isLoggedin");
const { protect, restrictUser } = require("../controllers/authController");
const {
    createNewDrug, getAllDrugs, deleteDrug, getDrugById, updateDrugById, getMostExpensiveDrug
} = require("../controllers/drugController");
const { callback, toProtect } = require("../controllers/googleAuth");
const { route } = require("../app");

const router = express.Router();
router.get("/", getAllDrugs);
router.get("/:id", getDrugById);

router.use(protect);
router.get("/expensive-drugs", getMostExpensiveDrug);
router.route("/").post(createNewDrug);
router.route("/:id").patch(updateDrugById).delete(deleteDrug);

module.exports = router;