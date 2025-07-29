const express = require('express');
const serverless = require('serverless-http'); // NEW
const bodyParser = require('body-parser');
const bfhlRoute = require('./route'); // adjusted path

const app = express();
app.use(bodyParser.json());
app.use('/bfhl', bfhlRoute);

module.exports = app;
module.exports.handler = serverless(app); // IMPORTANT
