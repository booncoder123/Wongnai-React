const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");

router.get("/allData", usersController.getAllData);
router.get("/search", usersController.searchByAttribute);
router.get("/searchByKeyword/:key", usersController.searchByKeyword);

module.exports = router;
