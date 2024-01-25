const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


// authController.js

exports.signin = (req, res) => {
    // Your implementation for signin
  };
  
  exports.register = (req, res) => {
    // Your implementation for register
  };
  router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);
module.exports = router;