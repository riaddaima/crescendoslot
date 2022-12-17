const { OAuth2Client } = require('google-auth-library');
const { getUser } = require('../services/user');

const clientId = process.env.CLIENT_ID;

const login = async (req, res, next) => {
  try {

    const bearerToken = req.body['jwt-token'];
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
        // const userProfile = await getUserProfile(userid);
        if (user) {
          return res.status(200).json({
            ...user,
            newUser: false
          });
        }
        return res.status(200).json({
          firstName: payload['given_name'],
          lastName: payload['family_name'],
          email: payload['email'],
          avatar: payload['picture'],
          gender: 'Male',
          phoneNumber: '',
          isSubbedNewsletter: false,
          role: 'Parent',
          newUser: true
        });
        /**
         * @riaddaima
         * Should handle logs for newly created users.
         */
        // if (createdUser) {
        //   await db.Logs.create({
        //     type: LOGS.type,
        //     message: `A new user (${createdUser.email}) has been created.`,
        //     usr_id: userid,
        //   });
        // }
      }
      throw new Error('Invalid token');
    } else {
      throw new Error('No token provided');
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}