const { OAuth2Client } = require('google-auth-library');
// const { db } = require('../../database/models');
const { getUser } = require('../services/user');

const clientId = process.env.CLIENT_ID;

const verify = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const client = new OAuth2Client(clientId);
  
    if (bearerHeader) {
      // Removing Bearer from string.
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      // Verifying token using verifyIdToken.
      const ticket = await client.verifyIdToken({
          idToken: bearerToken,
          audience: clientId,
      });

      const payload = ticket.getPayload();
      const userid = payload['sub'];
  
      if (ticket) {
        const user = await getUser(userid);
        if (user) return next();
        throw new Error('User not found');
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
/**
 * @riaddaima
 * Handle expired token to send a logout code to frontend here.
 */
// verify().catch(console.error);

module.exports = { verify };