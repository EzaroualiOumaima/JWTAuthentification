const express = require("express");
const router = express.Router();
const {userLoggout, postLogin, postRegister} = require("../Controllers/UserController");
const verifyToken = require("../Middlewares/authMiddleware");

// Protected route
router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

// User Logged out
router.get("/loggout", verifyToken, userLoggout);

// Route for registartion
router.post("/register", postRegister);
//Route for login
router.post("/login", postLogin);

module.exports = router;
