const express = require('express');

const bookingRouter = express.Router();
const { bookEvent } = require('../controller/booking');
const { verify } = require('../middlewares/auth');


bookingRouter.post('/', verify, bookEvent);

module.exports = bookingRouter;