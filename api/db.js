'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = db


// host: `remotemysql.com`,
// port: `3306`,
// user: `BE9uYnNnuY`,
// password: `qTKEMEKs1T`,
// database: `BE9uYnNnuY`