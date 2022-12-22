const { OAuth2Client } = require('google-auth-library');
const { createUser, getUser } = require('../services/user');
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
        const user = await getUser(userid);
        const userProfile = await getUserProfileWithUser(userid);
        if (user && userProfile) {
          return {
            profile: {
              userId: userid,
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
        if (!user && !userProfile) {
          await createUser({
            usr_id: userid,
            usr_email: payload['email'],
            usr_fn: payload['given_name'],
            usr_ln: payload['family_name'],
            usr_role: 'parent',
          });
        }
        return {
          profile: {
            userId: userid,
            firstName: payload['given_name'],
            lastName: payload['family_name'],
            email: payload['email'],
            avatar: payload['picture'],
            gender: 'M',
            phoneNumber: '',
            isSubbedNewsletter: false,
            role: 'parent',
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