const mysql = require("mysql");
const db = require("../db");


module.exports = {
  getOrders: () => {
    let sql = "SELECT * FROM orders ORDER BY id DESC";

    return new Promise((resolve, reject) => {
      db.query(sql, (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  },
  getOrdersById: (orderId) => {
    let sql = "SELECT * FROM orders WHERE id = ?";
    
    return new Promise((resolve, reject) => {
      db.query(sql, orderId, (err, response) => {
        if (err) reject(err);
        else resolve(response[0]);
      });
    })
  },
  update: (data, orderId) => {
    let sql = "UPDATE orders SET ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [data, orderId], (err, response) => {
        if (err) reject(err);
        return resolve({ message: "Update success!" });
      });
    })
  },
  insert: (data) => {
    let sql = "INSERT INTO orders SET ?";
    
    return new Promise((resolve, reject) => {
      db.query(sql, [data], (err, response) => {
        if (err) reject(err);
        return resolve({ message: "Insert success!" });
      });
    })
  },
  delete: (orderId) => {
    let sql = "DELETE FROM orders WHERE id = ?";
    db.query(sql, [orderId], (err, response) => {
      if (err) throw err;
      return { message: "Delete success!" };
    });
  },
};
