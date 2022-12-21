const express = require('express');

const profileRouter = express.Router();
const { getAllProfiles, getProfileById, postNewProfile, updateProfileById } = require('../controller/profile');
const { verify } = require('../middlewares/auth');

profileRouter.get('/', getAllProfiles);
profileRouter.get('/:id', getProfileById);
profileRouter.post('/', verify, postNewProfile);
profileRouter.put('/:id', verify, updateProfileById);

module.exports = profileRouter;