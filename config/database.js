const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  const { connection } = await mongoose.connect(config.mongoose.url);
  console.log(`Mongodb is connected with ${connection.host}`);
};

module.exports = {connectDB};