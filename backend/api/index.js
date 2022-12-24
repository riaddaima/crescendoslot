const apiRouter = require('express').Router({ mergeParams: true });

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const authRouter = require('./routes/auth');
const seederRouter = require('./routes/seed');
const eventsRouter = require('./routes/events');
const dependentRouter = require('./routes/dependent');

apiRouter.get('/', (req, res, next) => {
  res.json({ message: 'API up and running ♪' });
});

apiRouter.use('/user', userRouter);
apiRouter.use('/profile', profileRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/seed', seederRouter);
apiRouter.use('/events', eventsRouter);
apiRouter.use('/dependents', dependentRouter);

module.exports = apiRouter;