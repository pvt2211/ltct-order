'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: `remotemysql.com`,
  port: `3306`,
  user: `BE9uYnNnuY`,
  password: `qTKEMEKs1T`,
  database: `BE9uYnNnuY`
});

module.exports = db
