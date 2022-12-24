const db = require('../database');

const createBooking = async (booking) => {
  try {
    const { rows } = await db.query('INSERT INTO bookings (evt_id, usr_id, bk_hascancelled, bk_iswaitlist) VALUES ($1, $2, $3, $4) RETURNING *', [booking.evt_id, booking.usr_id, booking.bk_hascancelled, booking.bk_iswaitlist]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateBooking = async (id, booking) => {
  try {
    const { rows } = await db.query('UPDATE bookings SET evt_id = $1, usr_id = $2, bk_hascancelled = $3, bk_iswaitlist = $4 WHERE bk_id = $5 RETURNING *', [booking.evt_id, booking.usr_id, booking.bk_hascancelled, booking.bk_iswaitlist, id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const deleteBooking = async (id) => {
  try {
    const { rows } = await db.query('DELETE FROM bookings WHERE bk_id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getBookings = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM bookings');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { createBooking, updateBooking, deleteBooking, getBookings };