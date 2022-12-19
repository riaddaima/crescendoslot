const { User, Profile } = require('../../database/models');

const getUserProfile = async (id) => {
  try {
    const profile = await Profile.findOne({
      where: { userId: id },
      raw: true,
      include: {
        model: User,
        as: 'user'
      }
    });
    return profile;
  } catch (error) {
    throw error;
  }
}

const createUserProfile = async (profile) => {
  try {
    const createdProfile = await Profile.create(profile);
    return createdProfile;
  } catch (error) {
    throw error;
  }
}

const updateUserProfile = async (id, profile) => {
  try {
    const updatedProfile = await Profile.update(profile, {
      where: { userId: id },
    });
    return updatedProfile;
  } catch (error) {
    throw error;
  }
}

const getUsersProfile = async () => {
  try {
    const profiles = await Profile.findAll({
      raw: true,
      include: {
        model: User,
        as: 'user'
      }
    });
    return profiles;
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserProfile, createUserProfile, updateUserProfile, getUsersProfile };