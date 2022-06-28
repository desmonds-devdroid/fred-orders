//
//  test.js
//  ~/
// 
//  created:    2022-06-28
// 
//  Tests for Fred's Orders
// 
'use strict';
const log = require('./log'); 
const config = require('./config'); 
const framework = require('./framework'); 

const fn = () => {

    const db = require('./orders/ordersDb').ordersDb;
    
    const rv = [];
    rv.push(db.getOrdersByYear());
    rv.push(db.getOrdersByMonth());
    rv.push(db.getOrdersByDay());
    rv.push(db.getOrders());
    rv.push(db.createOrderPackage());
    rv.push(db.countOrdersByDay());
    return '\n - ' + rv.toString().replace(/,/g, '\n - ');
};

let r = fn();
log.log(
    `result: ${r}`
    , log.levels.Information
);