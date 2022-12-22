require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const apiRouter = require('./api');

app.use(cors());
app.use(express.json());

const PORT = 3001

app.use('/api', apiRouter);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});