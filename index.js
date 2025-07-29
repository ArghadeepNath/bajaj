const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('./route/route');

const app = express();
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
