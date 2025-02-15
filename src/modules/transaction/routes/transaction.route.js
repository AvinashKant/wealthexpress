const express = require('express');
const equityTransactions = require('../controllers/transaction.controller');

const router = express.Router();

router.get('/', equityTransactions.getTransactions);

module.exports = router;