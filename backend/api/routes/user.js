const express = require('express');

const userRouter = express.Router();
const { getAllUsers, getUserById, postNewUser, updateUserById, deleteUserById } = require('../controller/user');
const { verify } = require('../middlewares/auth');

userRouter.get('/', getAllUsers);
userRouter.get('/:id', verify, getUserById);
userRouter.post('/', verify, postNewUser);
userRouter.put('/:id', verify, updateUserById);
userRouter.delete('/:id', verify, deleteUserById);

module.exports = userRouter;