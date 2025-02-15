const Transactions = require('../models/transaction.model');

const transactionObj = {
  id: null,
  remark: null,
  amount: null,
  created_at: null,
  currency: 'INR',
};
/**
 * generate response user object
 * @param {Array} user
 * @returns {Array}
 */
const forObj = async (transaction) => {
  if (JSON.stringify(transaction) === '{}') {
    return {};
  }
  if (!(transaction instanceof Transactions)) {
    throw new Error('something_went_wrong');
  }
  transactionObj.id = transaction.id || null;
  transactionObj.remark = transaction.remark || null;
  transactionObj.amount = transaction.amount || 0;
  transactionObj.created_at = transaction.createdAt;

  return transactionObj;
};

const forArray = async (transactionArray) => {
    if (transactionArray.length === 0) {
      return [];
    }
    const transactions = [];
    await transactionArray.forEach(async (element) => {
      transactions.push(await forObj(element));
    });
    return transactions;
  };

module.exports = {
  forObj,
  forArray
};
