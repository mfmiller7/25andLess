const express = require('express');
require('dotenv').config();

const routes = require('./routes');

const app = express();
const port = process.env.PORT;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});