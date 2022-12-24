const db = require('../database');

const createDependent = async (dependent, userId) => {
  try {
    const { rows } = await db.query('INSERT INTO dependents (usr_id, dep_fn, dep_ln, dep_dob, dep_gender) VALUES ($1, $2, $3, $4, $5) RETURNING *', [userId, dependent.dep_fn, dependent.dep_ln, dependent.dep_dob, dependent.dep_gender]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getDependent = async (id, userId) => {
  try {
    const { rows } = await db.query('SELECT * FROM dependents WHERE dep_id = $1 AND usr_id = $2', [id, userId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateDependent = async (id, dependent, userId) => {
  try {
    const { rows } = await db.query('UPDATE dependents SET dep_fn = $1, dep_ln = $2, dep_dob = $3, dep_gender = $4 WHERE dep_id = $5 AND usr_id = $6 RETURNING *', [dependent.dep_fn, dependent.dep_ln, dependent.dep_dob, dependent.dep_gender, id, userId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const deleteDependent = async (id, userId) => {
  try {
    const { rows } = await db.query('DELETE FROM dependents WHERE dep_id = $1 AND usr_id = $2 RETURNING *', [id, userId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getDependents = async (userId) => {
  try {
    const { rows } = await db.query('SELECT * FROM dependents WHERE usr_id = $1', [userId]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { getDependent, createDependent, updateDependent, deleteDependent, getDependents };