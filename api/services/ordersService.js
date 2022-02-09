const mysql = require("mysql");
const db = require("../db");
module.exports = {
  getOrders: () => {
    let sql = "SELECT * FROM orders ORDER BY orderId DESC";

    return new Promise((resolve, reject) => {
      db.query(sql, (err, response) => {
        if (err) reject(err);
        else {
          resolve(response);
        }
      });
    });
  },
  getOrderDetailByOrderId: (orderId) => {
    let sql = "SELECT * FROM order_detail WHERE orderId = ? ORDER BY id DESC";

    return new Promise((resolve, reject) => {
      db.query(sql, [orderId] , (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  },
  getProductsById: (productId) => {
    let sql = "SELECT * FROM products WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [productId], (err, response) => {
        if (err) reject(err);
        else resolve(response[0]);
      });
    })
  },
};
