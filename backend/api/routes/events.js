const express = require('express');

const eventsRouter = express.Router();
const { getAllEvents, getEventById, postNewEvent, updateEventById, deleteEventById } = require('../controller/events');
const { verify } = require('../middlewares/auth');

eventsRouter.get('/', verify, getAllEvents);
eventsRouter.get('/:id', verify, getEventById);
eventsRouter.post('/', verify, postNewEvent);
eventsRouter.put('/:id', verify, updateEventById);
eventsRouter.delete('/:id', verify, deleteEventById);

module.exports = eventsRouter;