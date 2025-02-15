const Transactions = require('../models/transaction.model');

/**
 * Generate response transaction object
 * @param {Object} transaction - Single transaction
 * @returns {Object}
 */
const forObj = (transaction) => {
  if (JSON.stringify(transaction) === '{}') {
    return {};
  }
  if (!(transaction instanceof Transactions)) {
    throw new Error('something_went_wrong');
  }

  // Create a new object for each transaction
  const newTransactionObj = {
    id: transaction.id || null,
    remark: transaction.remark || null,
    amount: transaction.amount || 0,
    created_at: transaction.createdAt,
    currency: 'INR',
  };

  return newTransactionObj;
};

/**
 * Transforms an array of transactions
 * @param {Array} transactionArray - Array of transactions
 * @returns {Array}
 */
const forArray = async (transactionArray) => {
  if (transactionArray.length === 0) {
    return [];
  }

  // Use map to transform each element and Promise.all to wait for all async operations
  const transactions = await Promise.all(
    transactionArray.map(async (element) => await forObj(element))
  );

  return transactions;
};

module.exports = {
  forObj,
  forArray
};
