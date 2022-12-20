const { getUserProfile, createUserProfile, updateUserProfile, getUsersProfile } = require('../services/profile');

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await getUsersProfile();
    res.status(200).json({ profiles });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await getUserProfile(id);
    if (profile) {
      return res.status(200).json({ profile });
    }
    res.status(404).send('Profile with the specified ID does not exists');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const postNewProfile = async (req, res) => {
  try {
    const profile = await createUserProfile(req.body);
    res.status(201).json({ profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    await updateUserProfile(id, req.body);
    res.status(200).json({ profile: req.body });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getAllProfiles, getProfileById, postNewProfile, updateProfileById };