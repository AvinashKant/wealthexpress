const mongoose = require('mongoose');
const { paginate } = require('../../../plugins');
const { transactionType } = require('../../../utils/common');

const transactionsSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: Number,
      enum: [transactionType.EQUITY, transactionType.MUTUALFUND, transactionType.BANK],
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

transactionsSchema.plugin(paginate);

/**
 * @typedef Transactions
 */
const Transactions = mongoose.model('transactions', transactionsSchema);

module.exports = Transactions;
