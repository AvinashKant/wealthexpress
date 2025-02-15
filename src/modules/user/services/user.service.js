const User = require('../models/user.model');

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUser = async (id) => {
    return User.findById(id);
  };

module.exports = {
    getUser
};