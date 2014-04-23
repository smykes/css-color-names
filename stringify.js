#!/usr/bin/env node

/**
 * given a file, or data over stdin,
 * split it on newlines and emit a json object kv
 */
var fs = require('fs'),
    file = process.argv[2] || '/dev/stdin',
    arr = fs.readFileSync(file, 'utf-8').trim().split('\n'),
    ret = {},
    array = [];

arr.forEach(function(line) {
    ret = {};
    var s = line.split(' ');
    ret.color = s[0];
    ret.hexCode = s[1];
    array.push(ret);
});


var array = array.sort(function compare(a, b) {
    if (a.color < b.color) {
        return -1;
    }
    if (a.color > b.color) {
        return 1;
    } else {
        return 0;
    }
});


console.log(JSON.stringify(array, null, 2));