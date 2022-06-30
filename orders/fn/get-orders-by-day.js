// 
//  get-orders-by-day.js
//  ~/orders/fn/
// 
//  created:    2022-06-28
// 
//  Orders - getOrdersByDay()
// 
'use strict';
// const log = require('../../log'); 
const config = require('../../config');
// const framework = require('../../framework'); 

const getOrdersByDay = (year, month, day) => {

  let rv = [];

  if (
    (!isNaN(year) && (year > 0))
    && (!isNaN(month) && (month > 0) && (month < 13))
    && (!isNaN(day) && (day > 0) && (day < 32))
  ) {

    const folderPath = require('./get-path-by-date').getFolderPathForDay(year, month, day);
    const fs = require('fs');
    const enc = config.framework.filesystem.ENCODING_DEFAULT
    const dirlist = fs.readdirSync(folderPath, enc);

    const path = require('path');
    dirlist.forEach(
      ofNm => {
        const order = {
          assetFilePaths: []
        };

        const orderFolderPath = path.join(folderPath, ofNm);
        const assetsList = fs.readdirSync(orderFolderPath, enc);
        assetsList.forEach(
          afNm => {
            const assetFilePath = path.join(orderFolderPath, afNm);
            order.assetFilePaths.push(assetFilePath);
          }
        );
        rv.push(order);
      }
    );

  }

  return rv;
};

module.exports = {
  getOrdersByDay: getOrdersByDay
};
