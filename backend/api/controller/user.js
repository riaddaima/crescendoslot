const { createUser, getUser, updateUser, deleteUser, getUsers } = require('../services/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (user) {
      return res.status(200).json({ user });
    }
    res.status(404).send('User with the specified ID does not exists');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const postNewUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    /**
     * @riaddaima
     * We still need to create the profile of the user.
     */
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await updateUser(id, req.body);
    res.status(200).json({ user: req.body });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.status(204).send('User deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getAllUsers, getUserById, postNewUser, updateUserById, deleteUserById };