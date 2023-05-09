const express = require('express')

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user/create',userController.create_user);

router.get('/users',userController.users);

router.get('/users/:id', userController.user)

module.exports = router;