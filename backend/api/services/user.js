const { User } = require('../../database/models');

const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw error;
  }
}

const getUser = async (id) => {
  try {
    const user = await User.findOne({
      where: { id },
      raw: true,
    });
    return user;
  } catch (error) {
    throw error;
  }
}

const updateUser = async (id, user) => {
  try {
    const updatedUser = await User.update(user, {
      where: { id },
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

const deleteUser = async (id) => {  
  try {
    const deletedUser = await User.destroy({
      where: { id },
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
}

const getUsers = async () => {
  try {
    const users = await User.findAll({ raw: true });
    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = { getUser, createUser, updateUser, deleteUser, getUsers };