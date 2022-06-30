// 
//  get-orders-by-month.js
//  ~/orders/fn/
// 
//  created:    2022-06-28
// 
//  Orders - getOrdersByMonth()
// 
'use strict';
// const log = require('../../log'); 
// const config = require('../../config'); 
// const framework = require('../../framework'); 

const getOrdersByMonth = (year, month) => {

  let rv = [];

  if (
    (!isNaN(year) && (year > 0))
    && (!isNaN(month) && (month > 0) && (month < 13))
  ) {

    const getter = require('./get-orders-by-day');
    for (let d = 1; d < 32; d++)
      rv.push(...getter.getOrdersByDay(year, month, d));
  }

  return rv;
}

module.exports = {
  getOrdersByMonth: getOrdersByMonth
};
