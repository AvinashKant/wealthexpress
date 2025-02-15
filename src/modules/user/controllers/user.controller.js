const httpStatus = require('http-status');
const ApiError = require('../../../utils/ApiError');
const catchAsync = require('../../../utils/catchAsync');
const userService = require('../services/user.service');
const config = require('../../../../config/config');
const userResponse = require('../response/user.response');

const getUserDetails = catchAsync(async (req, res) => {
    // get user detail response
    const userObj = await userResponse.forObj(await userService.getUser(config.user_id));
    
    // if no user found return error
    if (!userObj) {
        throw new ApiError(httpStatus.default.NOT_FOUND, 'User not found.');
    }
    
    res.status(httpStatus.default.OK).send({ status: httpStatus.default.OK, message: '', data: userObj });
  });

  module.exports = { getUserDetails };