const express = require('express');
const router = express.Router();
const { handleBfhlRequest } = require('../controller/controller');

router.post('/', handleBfhlRequest);

module.exports = router;
