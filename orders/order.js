// 
//  order.js
//  ~/orders/
// 
//  created:    2022-06-28
// 
//  order
// 
'use strict';
// const log = require('../log'); 
// const config = require('../config'); 
// const framework = require('../framework'); 

const getOrder = () => {

    return {

        client: '',
        delivery: '',
        products: '',
        payment: '',
        payment_screenshot: '',
        order_screenshots: '', 
        additional: 
    };
};

module.exports = {
  getOrder: getOrder
};
