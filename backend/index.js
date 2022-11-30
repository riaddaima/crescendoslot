require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const { sequelize } = require('./database/models/index.js');

app.use(cors());
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});