const express = require('express');
const equityTransactions = require('../controllers/transaction.controller');

const router = express.Router();

// transaction history
router.get('/transactions', equityTransactions.getTransactions);

// transaction chart
router.get('/chart', equityTransactions.getChartDetails);

module.exports = router;