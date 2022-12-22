const { login } = require('../services/auth');

const loginController = async (req, res) => {
  try {
    const bearerToken = req.body.token;
    const user = await login(bearerToken);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { loginController };