const env = require("dotenv");
env.config({ quiet: true });
module.exports = {
  PORT: process.env.PORT || 3001,
  DB_URL: process.env.DB_URL,
  EMAIL: process.env.EMAIL,
  EMAIL_PASS: process.env.EMAIL_PASS,
  NODE_ENV: process.env.NODE_ENV,
  PROD_DB_URL: process.env.PROD_DB_URL,
};
