// 
//  ordersDb.js
//  ~/orders/
// 
//  created:    2022-06-28
// 
//  orders database
// 
'use strict';
// const log = require('../log'); 
// const config = require('../config'); 
// const framework = require('../framework'); 

const getOrdersDb = () => {
    return {
          countOrdersByDay      : require('./fn/count-orders-by-day').countOrdersByDay
        , createOrderPackage    : require('./fn/create-order-package').createOrderPackage
        , getOrdersByDay        : require('./fn/get-orders-by-day').getOrdersByDay
        , getOrdersByMonth      : require('./fn/get-orders-by-month').getOrdersByMonth
        , getOrdersByYear       : require('./fn/get-orders-by-year').getOrdersByYear
        , getOrders             : require('./fn/get-orders').getOrders
    
    };
};

module.exports = {
    ordersDb: getOrdersDb()
};
