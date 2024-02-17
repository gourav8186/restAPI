const express = require("express");
const router = express.Router();

const {getModels} = require("../controllers/product");

router.route("/").get(getModels);

module.exports = router; 