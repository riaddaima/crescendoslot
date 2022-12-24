const { getEvents, createEvent, getEvent, updateEvent, deleteEvent } = require('../services/event');

const getAllEvents = async (req, res) => {
  try {
    let events = await getEvents(req.user.usr_id);
    events = events.map((event) => {
      return {
        id: event.evt_id,
        title: event.evt_name,
        start: event.evt_start,
        end: event.evt_end,
        extendedProps: {
          description: event.evt_description,
          venue: event.evt_venue,
          thumbnail: event.evt_thumbnail,
          capacity: event.evt_capacity,
          currentCapacity: event.evt_currcapacity,
          minAge: event.evt_minage,
          maxAge: event.evt_maxage,
          booked: event.booked
        }
      };
    });
          
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await getEvent(id);
    if (event) {
      return res.status(200).json({ event });
    }
    return res.status(404).send('Event with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const postNewEvent = async (req, res) => {
  try {
    const {
      title: evt_title,
      description: evt_description,
      date: evt_date,
      time: evt_time,
      location: evt_location,
      userId: usr_id
    } = req.body;
    const createdEvent = await createEvent({
      evt_title,
      evt_description,
      evt_date,
      evt_time,
      evt_location,
      usr_id
    });
    return res.status(201).json({ event: {
      title: createdEvent.evt_title,
      description: createdEvent.evt_description,
      date: createdEvent.evt_date,
      time: createdEvent.evt_time,
      location: createdEvent.evt_location,
      userId: createdEvent.usr_id
    }});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const updateEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const { event } = req.body;
    const updatedEvent = await updateEvent(id, event);
    return res.status(200).json({ event: updatedEvent });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteEventById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEvent(id);
    return res.status(204).send('Event deleted');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  postNewEvent,
  updateEventById,
  deleteEventById
};