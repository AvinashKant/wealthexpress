const User = require('../models/user.model');

const userObj = {
  id: null,
  name: null,
  email: null,
  summary: {
    equity: {
      amount: 0,
      change: null
    },
    mutual_fund: {
      amount: 0,
      change: null
    },
    bank: {
      amount: 0,
      change: null
    }
  },
  settings: {
    currency: null
  }
};

/**
 * generate response user object
 * @param {Array} user
 * @returns {Array}
 */
const forObj = async (user) => {
  // check if not an empty object
  if (JSON.stringify(user) === '{}') {
    return {};
  }

  // check if instance of model
  if (!(user instanceof User)) {
    throw new Error('Something went wrong');
  }
  
  // prepare response
  userObj.id = user.id || null;
  userObj.name = user.name || null;
  userObj.email = user.email || null;
  userObj.summary.equity.amount = user.summary.equity || 0;
  userObj.summary.equity.change = "+12%";
  userObj.summary.mutual_fund.amount = user.summary.mutual_fund || 0;
  userObj.summary.mutual_fund.change = "-5%";
  userObj.summary.bank.amount = user.summary.bank || 0;
  userObj.settings.currency = user.settings.currency || null;

  return userObj;
};

module.exports = {
  forObj,
};
