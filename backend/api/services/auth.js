const { OAuth2Client } = require('google-auth-library');
const { getUser } = require('../services/user');
const { getUserProfile } = require('../services/profile');

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
        const user = await getUser(userid);
        const userProfile = await getUserProfile(userid);
        if (user) {
          return {
            ...user,
            gender: userProfile.gender,
            isSubbedNewsletter: userProfile.isSubbedNewsletter,
            newUser: false,
            token: bearerToken
          };
        }
        return {
          firstName: payload['given_name'],
          lastName: payload['family_name'],
          email: payload['email'],
          avatar: payload['picture'],
          gender: 'Male',
          phoneNumber: '',
          isSubbedNewsletter: false,
          role: 'Parent',
          newUser: true,
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