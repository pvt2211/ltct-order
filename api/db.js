'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "order_api"
});

module.exports = db

// host: `remotemysql.com:3306`,
//   user: `AmlaS93HuP`,
//   password: `XIAmgqF3xW`,
//   database: `AmlaS93HuP`