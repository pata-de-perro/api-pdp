const express = require("express");
const router = express.Router();

const { createNewLocations } = require("../controllers/locations");
const { auth } = require("../middlewares/auth");

router.post("/:id", [auth], createNewLocations);

module.exports = router;
