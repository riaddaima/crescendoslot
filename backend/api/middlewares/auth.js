const { OAuth2Client } = require('google-auth-library');
const { db } = require('../../database');

const clientId = process.env.CLIENT_ID;

const verify = async (req, res, next) => {
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
      // Find the user, if it is not found it will be created.
      const [user, createdUser] = await db.User.findOrCreate({
        where: { id: userid },
        defaults: {
          id: userid,
          fullName: payload['name'],
          email: payload['email'],
        }
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

      next();
    }
  }
}
/**
 * @riaddaima
 * Handle improper token to send a logout code to frontend here.
 */
verify().catch(console.error);