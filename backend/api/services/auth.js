const { OAuth2Client } = require('google-auth-library');
const { getUser } = require('../services/user');
const { getUserProfileWithUser } = require('../services/profile');

const clientId = process.env.CLIENT_ID;

const login = async (bearerToken) => {
  try {
    const client = new OAuth2Client(clientId);

    if (bearerToken) {
      // Verifying token using verifyIdToken.
      const ticket = await client.verifyIdToken({
          idToken: bearerToken,
          audience: clientId,
      });

      const payload = ticket.getPayload();
      const userid = payload['sub'];

      if (ticket) {
        const userProfile = await getUserProfileWithUser(userid);
        if (userProfile) {
          return {
            profile: {
              firstName: userProfile.usr_fn,
              lastName: userProfile.usr_ln,
              email: userProfile.usr_email,
              avatar: payload['picture'],
              phoneNumber: userProfile.usr_phone,
              gender: userProfile.pro_gender,
              isSubbedNewsletter: userProfile.pro_issubbed,
              newUser: false,
            },
            token: bearerToken
          };
        }
        return {
          profile: {
            firstName: payload['given_name'],
            lastName: payload['family_name'],
            email: payload['email'],
            avatar: payload['picture'],
            gender: 'Male',
            phoneNumber: '',
            isSubbedNewsletter: false,
            role: 'Parent',
            newUser: true,
          },
          token: bearerToken
        };
      }
      throw new Error('Invalid token');
    } else {
      throw new Error('No token provided');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { login };