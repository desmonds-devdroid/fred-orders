// 
//  ordersDb.js
//  ~/orders/
// 
//  created:    2022-06-28
// 
//  orders database
// 
'use strict';
const log = require('../log'); 
const config = require('../config'); 
const framework = require('../framework'); 

const getOrdersDb = () => {
    return {
          countOrdersByDay      : require('./fn/count-orders-by-day')
        , createOrderPackage    : require('./fn/create-orders-package')
        , getOrdersByDay        : require('./fn/get-orders-by-day')
        , getOrdersByMonth      : require('./fn/get-orders-by-month')
        , getOrdersByYear       : require('./fn/get-orders-by-year')
        , getOrders             : require('./fn/get-orders')
    
    };
};

module.exports = {
    ordersDb: getOrdersDb()
};
