const httpStatus = require('http-status');
const catchAsync = require('../../../utils/catchAsync');
const equityTransactionService = require('../services/transaction.service');
const pick = require('../../../utils/pick');
const config = require('../../../../config/config');
const transactionResponse = require('../response/transaction.response');

const getTransactions = catchAsync(async (req, res) => {
    let resStatus = httpStatus.default.OK;
    let msg = '';
    let transactions = '';
    let meta = '';
    try {
      const { query } = req;
      const options = pick(query, ['limit', 'page',  'type']);
      results = await equityTransactionService.getPaginatedTransactions(config.user_id, options);
      meta = results.meta;
      transactions = await transactionResponse.forArray(results.results);
    } catch (ex) {
      console.log(ex);
      resStatus = httpStatus.default.INTERNAL_SERVER_ERROR;
      msg = 'something_went_wrong';
    }
  
    res.status(resStatus).send({ status: resStatus, message: msg, data: transactions, meta:meta });
  });

  module.exports = {
    getTransactions,
  };