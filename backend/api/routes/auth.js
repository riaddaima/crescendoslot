const express = require('express');
const { loginController } = require('../controller/auth');

const authRouter = express.Router();

authRouter.post('/login', loginController);

module.exports = authRouter;