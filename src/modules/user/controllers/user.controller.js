const httpStatus = require('http-status');
const ApiError = require('../../../utils/ApiError');
const Mongoose = require('mongoose');
const catchAsync = require('../../../utils/catchAsync');
const userService = require('../services/user.service');
const config = require('../../../../config/config');
const userResponse = require('../response/user.response');

const getUserDetails = catchAsync(async (req, res) => {
    const userObj = await userResponse.forObj(await userService.getUser(config.user_id));
    // const userObj = await userService.getUser(new Mongoose.Types.ObjectId(config.user_id));
    if (!userObj) {
        throw new ApiError(httpStatus.default.NOT_FOUND, 'user.error.user_not_found');
        // throw new ApiError(httpStatus.NOT_FOUND, i18n.__('user.error.user_not_found'));
    }
    res.status(httpStatus.default.OK).send({ status: httpStatus.default.OK, message: '', data: userObj });
  });

  module.exports = {
    getUserDetails,
  };