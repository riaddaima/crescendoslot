const apiRouter = require('express').Router({ mergeParams: true });
const userRouter = require('./routes/user');

apiRouter.get('/', (req, res, next) => {
  res.json({ message: 'API up and running ♪' });
});

apiRouter.use('/user', userRouter);

module.exports = apiRouter;