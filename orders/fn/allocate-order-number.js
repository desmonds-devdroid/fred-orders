// 
//  allocate-order-number.js
//  ~/orders/fn/
// 
//  created:    2022-06-30
// 
//  basic description
// 
'use strict';
// const log = require('../log'); 
const config = require('../../config'); 
// const framework = require('../framework'); 

const allocateOrderNumber = (year, month, day) => {

    let rv = '<invalid>';

    if (
        (!isNaN(year) && (year > 0))
        && (!isNaN(month) && (month > 0) && (month < 13))
        && (!isNaN(day) && (day > 0) && (day < 32))
    ) {

        const folderPath = require('./get-path-by-date').getFolderPathForDay(year, month, day);
        const fs = require('fs');
        const dirlist = fs.readdirSync(folderPath, config.framework.filesystem.ENCODING_DEFAULT);
        const nextNum = (dirlist.length + 1)
                        .toString().padStart(4, '0');

        const orderNumber = `${year}${month}${day}-${nextNum}`;

        const path = require('path');
        const newFolderPath = path.join(folderPath, orderNumber);
        fs.mkdirSync(newFolderPath);

        rv = newFolderPath;
    }
    
    return rv;

};

module.exports = {
    allocateOrderNumber: allocateOrderNumber
};
