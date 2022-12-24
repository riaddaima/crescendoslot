const express = require('express');

const profileRouter = express.Router();
const { getUserProfile, postNewProfile, updateProfile } = require('../controller/profile');
const { verify } = require('../middlewares/auth');

profileRouter.get('/', verify, getUserProfile);
profileRouter.post('/', verify, postNewProfile);
profileRouter.put('/', verify, updateProfile);

module.exports = profileRouter;