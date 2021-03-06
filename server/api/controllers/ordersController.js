'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

const table = 'orders'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM orders ORDER BY id DESC'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM orders WHERE id = ?'
        db.query(sql, [req.params.orderId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
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