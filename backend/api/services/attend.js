const db = require('../database');

const createAttend = async (attend) => {
  try {
    const { rows } = await db.query('INSERT INTO attendings (evt_id, dep_id, usr_id) VALUES ($1, $2, $3) RETURNING *', [attend.evt_id, attend.dep_id, attend.usr_id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getAttends = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM attendings');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { createAttend, getAttends };