const { Router } = require('express');
const UserController = require('../api/controllers/userController');
const router = Router();

router.post('/register', UserController.register);

module.exports = router;