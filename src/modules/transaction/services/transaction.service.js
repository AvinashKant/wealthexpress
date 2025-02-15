const Transactions = require('../models/transaction.model');

/**
 * Read Activity from DB
 * @param {*} userId
 * @param {*} options
 */
  const getPaginatedTransactions = async (userId, options) => {
    const option = options;
    const filter = { user_id: { $in: userId }, type: options.type};
    option.sortBy = 'createdAt:desc';
    const activities = await Transactions.paginate(filter, option);
    return activities;
  };

module.exports = {
  getPaginatedTransactions
};