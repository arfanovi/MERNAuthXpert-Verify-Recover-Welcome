const express = require("express");
const router = express.Router();
// const User = require("../models/User");

const { signup } = require("../controllers/user.controller");


router.post("/signup", signup);
// router.post("/login", login);

module.exports = router;