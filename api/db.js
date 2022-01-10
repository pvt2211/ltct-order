'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = db

// host: `remotemysql.com:3306`,
//   user: `AmlaS93HuP`,
//   password: `XIAmgqF3xW`,
//   database: `AmlaS93HuP`