const mysql = require("mysql");
const db = require("../db");

const service = require("../services/ordersService")
module.exports = {

  getOrders: async () => {
    const allOrders = await service.getOrders()
    allOrders?.forEach( element => {
      service.getOrderDetailByOrderId(element.orderId).then(response => {
        // response.forEach(value => {
        //   service.getProductsById(value.productId).then(res => {
        //     element.products.push(res)
        //     console.log(element.products);
        //   })
        // })
        element.products = response
      })
      .catch
    });
    return allOrders
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
  getOrdersById: (orderId) => {
    let sql = "SELECT * FROM orders WHERE orderId = ?";
    
    return new Promise((resolve, reject) => {
      db.query(sql, [orderId], (err, response) => {
        if (err) reject(err);
        else resolve(response[0]);
      });
    })
  },
  update: (data, orderId) => {
    let sql = "UPDATE orders SET ? WHERE orderId = ?";
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
    let sql = "DELETE FROM orders WHERE orderId = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [orderId], (err, response) => {
        if (err) reject(err);
        return resolve({ message: "Delete success!" });
      });
    })
  },
};
