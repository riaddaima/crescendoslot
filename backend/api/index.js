const apiRouter = require('express').Router({ mergeParams: true });

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');

apiRouter.get('/', (req, res, next) => {
  res.json({ message: 'API up and running ♪' });
});

apiRouter.use('/user', userRouter);
apiRouter.use('/profile', profileRouter);

module.exports = apiRouter;