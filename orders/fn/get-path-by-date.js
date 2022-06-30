// 
//  get-path-by-date.js
//  ~/orders/fn/
// 
//  created:    2022-06-29
// 
//  Obtain path to:
//  - order package folder by date
//  - order packages root folder by month
//  - order packages root folder by year
// 
'use strict';
// const log = require('../../log');
const config = require('../../config');
// const framework = require('../../framework');

const getFolderPathForYear = (year) => {

    let rv = '';

    // check inputs
    if (
        (!isNaN(year) && (year > 0))
        && (!isNaN(month) && (month > 0) && (month < 13))
    ) {

        const path = require('path');
        const ordersRootPath = config.orders.orders_dir_path;

        const names = require('./pathFolderRules');

        rv = path.join(
            ordersRootPath
            , names.getYearFolderName(year)
            );
    }

    return rv;
};

const getFolderPathForMonth = (year, month) => {

    let rv = '';

    // check inputs
    if (
        (!isNaN(year) && (year > 0))
        && (!isNaN(month) && (month > 0) && (month < 13))
    ) {

        const path = require('path');
        const ordersRootPath = config.orders.orders_dir_path;

        const names = require('./pathFolderRules');

        rv = path.join(
            ordersRootPath
            , names.getYearFolderName(year)
            , names.getMonthFolderName(month)
            );
    }

    return rv;
};

const getFolderPathForDay = (year, month, day) => {

    let rv = '';

    // check inputs
    if (
        (!isNaN(year) && (year > 0))
        && (!isNaN(month) && (month > 0) && (month < 13))
        && (!isNaN(day) && (day > 0) && (day < 32))
    ) {

        const path = require('path');
        const ordersRootPath = config.orders.orders_dir_path;

        const names = require('./pathFolderRules');

        rv = path.join(
            ordersRootPath
            , names.getYearFolderName(year)
            , names.getMonthFolderName(month)
            , names.getMonthFolderName(day)
            );
    }

    return rv;
};

module.exports = {
    getFolderPathForDay: getFolderPathForDay, 
    getFolderPathForMonth: getFolderPathForMonth, 
    getFolderPathForYear: getFolderPathForYear
};
