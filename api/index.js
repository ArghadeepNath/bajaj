const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('../route/route');

const app = express();
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoute);

module.exports = app;
