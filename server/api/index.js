const express = require("express");

const authRoutes = require("./auth/auth.routes");
const transactionRoutes = require("./transaction/transaction.routes");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/transactions", isLoggedIn, transactionRoutes);

module.exports = router;
