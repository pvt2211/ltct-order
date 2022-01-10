'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const orders = require('../models/orders.js')
const service = require('../services/ordersService.js')
module.exports = {
    welcome: (req, res) => {
        res.json({message: 'Welcome!'})
    },
    get: async (req, res) => {
        res.json(await orders.getOrders())
    },
    detail: (req, res) => {
        orders.getOrdersById(req.params.orderId).then(response => res.json(response)).catch
    },
    update: (req, res) => {
        let data = req.body;
        let orderId = req.params.orderId;
        let sql = 'UPDATE orders SET ? WHERE id = ?'
        db.query(sql, [data, orderId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    insert: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO orders SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM orders WHERE id = ?'
        db.query(sql, [req.params.orderId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}