const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');

// Ruta para la página de inicio
router.get('/registro', registerController.getRegisterPage);
router.get('/', loginController.getLoginPage);
router.post('/registro', registerController.register);
router.post('/login', loginController.login);

module.exports = router;
