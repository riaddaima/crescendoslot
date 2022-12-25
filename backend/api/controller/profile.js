const { getUserProfileWithUser, createUserProfile, updateUserProfile } = require('../services/profile');

const getUserProfile = async (req, res) => {
  try {
    const { usr_id: userId } = req.user;
    const profile = await getUserProfileWithUser(userId);
    console.log(profile);
    if (profile.pro_id) {
      return res.status(200).json({ profile: {
        userId,
        firstName: profile.usr_fn,
        lastName: profile.usr_ln,
        email: profile.usr_email,
        gender: profile.pro_gender,
        phoneNumber: profile.pro_phone,
        isSubbedNewsletter: profile.pro_issubbed,
        role: profile.usr_role,
        newUser: false
      } });
    } else {
      return res.status(200).json({ profile: {
        userId,
        firstName: profile.usr_fn,
        lastName: profile.usr_ln,
        email: profile.usr_email,
        role: profile.usr_role,
        gender: 'M',
        phoneNumber: '',
        isSubbedNewsletter: false,
        role: 'parent',
        newUser: true
      } });
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

const updateProfile = async (req, res) => {
  try {
    const {
      gender: pro_gender,
      phoneNumber: pro_phone,
      isSubbedNewsletter: pro_issubbed,
    } = req.body;
    const { usr_id: userId } = req.user;
    const updatedProfile = await updateUserProfile(userId, { pro_gender, pro_phone, pro_issubbed });
    res.status(200).json({ profile: {
      gender: updatedProfile.pro_gender,
      phoneNumber: updatedProfile.pro_phone,
      isSubbedNewsletter: updatedProfile.pro_issubbed,
    }});
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getUserProfile, postNewProfile, updateProfile };