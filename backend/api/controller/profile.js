const { getUserProfileWithUser, createUserProfile, updateUserProfile, getUsersProfile } = require('../services/profile');

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
    const { id: userid } = req.params;
    const profile = await getUserProfileWithUser(userid);
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
    const {
      gender: pro_gender,
      phoneNumber: pro_phone,
      isSubbedNewsletter: pro_issubbed,
      userId: usr_id
    } = req.body;
    const createdProfile = await createUserProfile({
      pro_gender,
      pro_phone,
      pro_issubbed,
      usr_id
    });
    res.status(201).json({ profile: {
      gender: createdProfile.pro_gender,
      phoneNumber: createdProfile.pro_phone,
      isSubbedNewsletter: createdProfile.pro_issubbed,
      userId: createdProfile.usr_id
    }});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const { profile } = req.body;
    const updatedProfile = await updateUserProfile(id, profile);
    res.status(200).json({ profile: updatedProfile });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getAllProfiles, getProfileById, postNewProfile, updateProfileById };