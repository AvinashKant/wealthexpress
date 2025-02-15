const mongoose = require('mongoose');

const settingSchema = mongoose.Schema(
  {
    currency: {
      type: String,
      default: 'INR',
    },
  },
  { _id: false }
);

// user summary schema
const summarySchema = mongoose.Schema(
  {
    equity: {
      type: Number,
      default: 0,
    },
    mutual_fund: {
      type: Number,
      default: 0,
    },
    bank: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

// user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      ref: 'User',
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    summary: {
      type: summarySchema,
      default: {},
    },
    settings: {
      type: settingSchema,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef User
 */
const User = mongoose.model('users', userSchema);

module.exports = User;
