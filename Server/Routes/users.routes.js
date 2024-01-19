const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const verifyToken = require("../Middlewares/authMiddleware");
const { route } = require('./routes');
// Protected route 
router.get("/" , verifyToken , (req, res) => {
    res.status(200).json({message: 'Protected route accessed'})
})

// User Logged out 

router.get('/loggout' , verifyToken , userController.userLoggout)

// Route for registartion
router.post('/register' , userController.postRegister);
//Route for login
router.post ('/login' , userController.postLogin)


module.exports = router 
