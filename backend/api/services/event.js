const db = require('../database');

const getEvents = async (userId) => {
  try {
    const { rows } = await db.query('select e1.*, count(attendings.evt_id) as "evt_currcapacity", (select count(usr_id) from attendings where evt_id = e1.evt_id and usr_id = $1) > 0 as "booked" from events e1 left outer join attendings on e1.evt_id = attendings.evt_id group by (e1.evt_id)', [userId]);
    return rows;
  } catch (error) {
    throw error;
  }
}

const createEvent = async (event) => {
  try {
    const { rows } = await db.query('INSERT INTO events (evt_name, evt_start, evt_end, evt_capacity, evt_minage, evt_maxage, evt_venue, evt_description, evt_thumbnail) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [event.evt_name, event.evt_start, event.evt_end, event.evt_capacity, event.evt_minage, event.evt_maxage, event.evt_venue, event.evt_description, event.evt_thumbnail]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getEvent = async (id) => {
  try {
    const { rows } = await db.query('SELECT * FROM events WHERE evt_id = $1', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateEvent = async (id, event) => {
  try {
    const { rows } = await db.query('UPDATE events SET evt_name = $1, evt_desc = $2, evt_date = $3, evt_time = $4, evt_loc = $5, evt_img = $6, evt_host = $7 WHERE evt_id = $8 RETURNING *', [event.evt_name, event.evt_desc, event.evt_date, event.evt_time, event.evt_loc, event.evt_img, event.evt_host, id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const deleteEvent = async (id) => {
  try {
    const { rows } = await db.query('DELETE FROM events WHERE evt_id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getEvents, createEvent, getEvent, updateEvent, deleteEvent };