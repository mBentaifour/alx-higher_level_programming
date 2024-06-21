#!/usr/bin/node

// a script imports an array and computes a new array using map()
// import list from the file 100-data.js
// use a map. Tips
// Print both the initial list and the new list

const list = require('./100-data').list;

const newList = list.map((value, index) => value * index);
console.log(list);
console.log(newList);
