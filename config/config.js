const dotenv = require("dotenv");

dotenv.config();

const defaultConfig = {
  URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
};

module.exports = defaultConfig;
