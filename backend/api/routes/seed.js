const express = require('express');

const seederRouter = express.Router();

const demoUsers = require('../database/seeders/user');
const demoProfiles = require('../database/seeders/profile');
const { createUser } = require('../services/user');
const { createUserProfile } = require('../services/profile');

seederRouter.post('/', (req, res) => {
  console.log('Seeding the database..');
  demoUsers.forEach(async (user) => await createUser(user));
  demoProfiles.forEach(async (profile) => await createUserProfile(profile));
  console.log('Seeding complete!');
  return res.status(200).json('Seeding complete!');
});

module.exports = seederRouter;