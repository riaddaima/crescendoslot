const express = require('express');

const seederRouter = express.Router();

const demoUsers = require('../database/seeders/user');
const demoProfiles = require('../database/seeders/profile');
const demoEvents = require('../database/seeders/event');
const demoDependents = require('../database/seeders/dependent');
const demoBooking = require('../database/seeders/booking');
const demoAttend = require('../database/seeders/attend');
const demoPlan = require('../database/seeders/plan');

const { createUser } = require('../services/user');
const { createUserProfile } = require('../services/profile');
const { createEvent } = require('../services/event');
const { createDependent } = require('../services/dependent');
const { createBooking } = require('../services/booking');
const { createAttend } = require('../services/attend');
const { createPlan } = require('../services/plan');

seederRouter.post('/', (req, res) => {

  console.log('Seeding the database..');

  demoUsers.forEach(async (user) => await createUser(user));
  console.log('Users seeded..');
  demoProfiles.forEach(async (profile) => await createUserProfile(profile));
  console.log('Profiles seeded..');
  demoEvents.forEach(async (event) => await createEvent(event));
  console.log('Events seeded..');
  demoDependents.forEach(async (dependent) => await createDependent(dependent));
  console.log('Dependents seeded..');
  demoBooking.forEach(async (booking) => await createBooking(booking));
  console.log('Bookings seeded..');
  demoAttend.forEach(async (attend) => await createAttend(attend));
  console.log('Attends seeded..');
  demoPlan.forEach(async (plan) => await createPlan(plan));
  console.log('Plans seeded..');

  console.log('Seeding complete!');
  return res.status(200).json('Seeding complete!');
});

module.exports = seederRouter;