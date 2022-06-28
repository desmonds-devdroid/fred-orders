// 
//  config.js 
//  ~/config/ 
// 
//  created:    01/01/2021 
// 
//  app-wide configuration 
// 
'use strict';

const config = () => {

    return {

        // clients
        orders: require('../orders/config')
      
        // log
        , log: require('../log/config')

        // framework
        , framework: require('../framework/config')

    };
};

module.exports = config();
