// 
//  pathFolderRules.js
//  ~/orders/fn/
// 
//  created:    2022-06-29
// 
//  Rules for folder names
// 
'use strict';
// const log = require('../../log'); 
// const config = require('../../config'); 
// const framework = require('../../framework'); 

const getMonthFolderName = month => {
  let rv = '';
  if (month > 0 && month < 13) {
    switch (month) {
      case 1:
        rv = 'January';
        break;
      case 2:
        rv = 'February';
        break;
      case 3:
        rv = 'March';
        break;
      case 4:
        rv = 'April';
        break;
      case 5:
        rv = 'May';
        break;
      case 6:
        rv = 'June';
        break;
      case 7:
        rv = 'July';
        break;
      case 8:
        rv = 'August';
        break;
      case 9:
        rv = 'September';
        break;
      case 10:
        rv = 'October';
        break;
      case 11:
        rv = 'November';
        break;
      case 12:
        rv = 'December';
        break;
    
      default:
        break;
    }
    rv = `${month.toString().padStart(2, '0')} ${rv}`;
  }
  return rv;
};

const getYearFolderName = year => {
  const rv = year.toString();
  return rv;
};

const getDayFolderName = (year, month, day) => { 
  const y = year.toString();
  const m = month.toString().padStart(2, '0');
  const d = day.toString().padStart(2, '0');
  const rv = `${y}-${m}-${d}`;
  return rv;
};

const getOrderFolderName = orderNumber => {
  return orderNumber;
};


const pathFolderRules = {

  getMonthFolderName: getMonthFolderName, 
  getYearFolderName: getYearFolderName, 
  getDayFolderName: getDayFolderName, 
  getOrderFolderName: getOrderFolderName

};

module.exports = pathFolderRules;
