require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DBUSER,
  dbPassword: process.env.PASS,
  dbName: process.env.DB,
};

module.exports = { config };
