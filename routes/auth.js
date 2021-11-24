const express = require('express');
const router = express.Router();

var AuthController = require('../controllers/auth');

router.post('/login', AuthController.login);

module.exports = router;