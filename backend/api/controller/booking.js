const { createBooking } = require('../services/booking');
const { createAttend } = require('../services/attend');

const bookEvent = async (req, res) => {
  try {
    const { events, dependents } = req.body;
    const { usr_id: userId } = req.user;
    events.forEach(async (event) => {
      const booking = await createBooking({ evt_id: event.id, usr_id: userId, bk_hascancelled: false, bk_iswaitlist: false });
      dependents.forEach(async (dependent) => {
        const attend = await createAttend({ evt_id: event.id, usr_id: userId, dep_id: dependent.id });
        console.log(event, dependent);
      });
    });
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { bookEvent };