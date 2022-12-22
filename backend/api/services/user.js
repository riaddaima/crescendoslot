const db = require('../database');

const createUser = async (user) => {
  try {
    const { rows } = await db.query('INSERT INTO users (usr_id, usr_fn, usr_ln, usr_email, usr_role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [user.usr_id, user.usr_fn, user.usr_ln, user.usr_email, user.usr_role]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getUser = async (id) => {
  try {
    const { rows } = await db.query('SELECT * FROM users WHERE usr_id = $1', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateUser = async (id, user) => {
  try {
    const { rows } = await db.query('UPDATE users SET usr_fn = $1, usr_ln = $2 WHERE usr_id = $3 RETURNING *', [user.usr_fn, user.usr_ln, id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const deleteUser = async (id) => {
  try {
    const { rows } = await db.query('DELETE FROM users WHERE usr_id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getUsers = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { getUser, createUser, updateUser, deleteUser, getUsers };