const db = require('../database');

const getUserProfile = async (id) => {
  try {
    const { rows } = await db.query('SELECT * FROM profiles WHERE pro_id = $1', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getUserProfileWithUser = async (userid) => {
  try {
    console.log(userid);
    const { rows } = await db.query('SELECT * FROM users NATURAL JOIN profiles WHERE profiles.usr_id = $1', [userid]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const getUsersProfile = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM profiles');
    return rows;
  } catch (error) {
    throw error;
  }
}

const createUserProfile = async (profile) => {
  try {
    const { rows } = await db.query('INSERT INTO profiles (pro_gender, pro_issubbed, usr_id) VALUES ($1, $2, $3) RETURNING *', [profile.pro_gender, profile.pro_issubbed, profile.usr_id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateUserProfile = async (id, profile) => {
  const { rows } = await db.query('UPDATE profiles SET (pro_gender, pro_issubbed) = ($1, $2) WHERE pro_id = $3 RETURNING *', [profile.pro_gender, profile.pro_issubbed, id]);
  return rows[0];
}

module.exports = {
  getUserProfile,
  getUsersProfile,
  createUserProfile,
  updateUserProfile,
  getUserProfileWithUser
};