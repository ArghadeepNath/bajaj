const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('./route'); // keep route/index.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/bfhl', bfhlRoute);

app.get('/', (req, res) => {
  res.send('Server is up & running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
