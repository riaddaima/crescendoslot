const db = require('../database');

const getUserProfile = async (userId) => {
  try {
    const { rows } = await db.query('SELECT * FROM profiles WHERE usr_id = $1', [userId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getUserProfileWithUser = async (userId) => {
  try {
    const { rows } = await db.query('SELECT * FROM users LEFT OUTER JOIN profiles on users.usr_id = profiles.usr_id where users.usr_id = $1', [userId]);
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
    const { rows } = await db.query('INSERT INTO profiles (pro_gender, pro_phone, pro_issubbed, usr_id) VALUES ($1, $2, $3, $4) RETURNING *', [profile.pro_gender, profile.pro_phone, profile.pro_issubbed, profile.usr_id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updateUserProfile = async (userId, profile) => {
  try {
    const { rows } = await db.query('UPDATE profiles SET (pro_gender, pro_phone, pro_issubbed) = ($1, $2, $3) WHERE usr_id = $4 RETURNING *', [profile.pro_gender, profile.pro_phone, profile.pro_issubbed, userId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserProfile,
  getUsersProfile,
  createUserProfile,
  updateUserProfile,
  getUserProfileWithUser
};