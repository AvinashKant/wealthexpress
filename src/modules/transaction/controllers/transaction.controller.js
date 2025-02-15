const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const pick = require('../../../utils/pick');
const config = require('../../../../config/config');
const transactionService = require('../services/transaction.service');
const transactionResponse = require('../response/transaction.response');

// get transaction history
const getTransactions = catchAsync(async (req, res) => {
  let resStatus = httpStatus.default.OK;
  let msg = '';
  let transactions = '';
  let meta = '';

  try {
    const { query } = req;
    const options = pick(query, ['limit', 'page',  'type']);
    const results = await transactionService.getPaginatedTransactions(config.user_id, options);
    
    meta = results.meta;
    transactions = await transactionResponse.forArray(results.results);
  } catch (ex) {
    resStatus = httpStatus.default.INTERNAL_SERVER_ERROR;
    msg = 'Something went wrong.';
  }

  res.status(resStatus).send({ 
    status: resStatus, 
    message: msg, 
    data: transactions, 
    meta:meta 
  });
});

// get transaction chart detail
const getChartDetails = catchAsync(async (req, res) => {
  let resStatus = httpStatus.default.OK;
  let msg = '';
  let results = '';

  try {
    const { query } = req;
    results = await transactionService.getChartDetails(query.year);
  } catch (ex) {
    resStatus = httpStatus.default.INTERNAL_SERVER_ERROR;
    msg = 'Something went wrong.';
  }

  res.status(resStatus).send({ 
    status: resStatus, 
    message: msg, 
    data: results 
  });
});

module.exports = {
  getTransactions,
  getChartDetails,
};