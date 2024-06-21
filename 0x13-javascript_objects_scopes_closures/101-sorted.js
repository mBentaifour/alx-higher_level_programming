#!/usr/bin/node

// script that imports an array and computes a new array using map()
// Your script must import dict from the file 101-data.js

const dictionary = require('./101-data.js').dict;
let newdict = {};
for (let key in dictionary) {
  if (newdict[dictionary[key]] === undefined) {
    newdict[dictionary[key]] = [];
  }
newdict[dictionary[key]].push(key);
}
console.log(newdict);
