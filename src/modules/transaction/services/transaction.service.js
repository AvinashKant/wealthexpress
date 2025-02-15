const Transactions = require('../models/transaction.model');
const chartData = require('../../../utils/chartData.json');

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


/**
 * Read Activity from DB
 * @param {*} year
 */
const getChartDetails = async (year) => {
  const chartDetail = chartData.find((element) => parseInt(element.year) === parseInt(year));

  if (!chartDetail) {
    throw new Error('Data not found');
  }
  
  return chartDetail.dataset;
};

module.exports = {
  getPaginatedTransactions,
  getChartDetails
};