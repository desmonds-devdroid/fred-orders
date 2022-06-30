//
//  test.js
//  ~/
// 
//  created:    2022-06-28
// 
//  Tests for Fred's Orders
// 
'use strict';
const log = require('./log'); 
const config = require('./config'); 
const framework = require('./framework'); 

const fn = () => {

    const fs = require('fs');
    const dirlist = fs.readdirSync(__dirname);
    log.log(__dirname);
    log.log(dirlist.length);
    log.log(dirlist);
    console.log(dirlist);
    const rv = framework.getObjectType(dirlist);
    return rv;
    
};

let r = fn();
log.log(
    `result: ${r}`
    , log.levels.Information
);