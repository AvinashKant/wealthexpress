const { config } = require('dotenv');

config({ path: "./.env" });

module.exports = {
  port: process.env.PORT || 8000,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  user_id: process.env.USER_ID || '67b036201e9009e27c1ed2a1',
};
