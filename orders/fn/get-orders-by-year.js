// 
//  get-orders-by-year.js
//  ~/orders/fn/
// 
//  created:    2022-06-28
// 
//  Orders - getOrdersByYear()
// 
'use strict';
// const log = require('../../log'); 
// const config = require('../../config'); 
// const framework = require('../../framework'); 

const getOrdersByYear = year => {

  let rv = [];

  if (
    (!isNaN(year) && (year > 0))
  ) {

    const getter = require('./get-orders-by-month');
    for (let m = 1; m < 13; m++)
      rv.push(...getter.getOrdersByMonth(year, m));
  }

  return rv;
}

module.exports = {
  getOrdersByYear: getOrdersByYear
};
