const express = require("express");

const { signup, login, authenticate } = require("./auth.controllers");

const router = express.Router();

// to verify and authenticate user on client
router.get("/", authenticate);

// user signup
router.post("/signup", signup);

// user login
router.post("/login", login);

module.exports = router;
