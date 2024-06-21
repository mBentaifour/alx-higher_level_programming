#!/usr/bin/node

// a script that concats 2 files
// The first argument is the file path of the first source file
// The second argument is the file path of the second source file
// The third argument is the file path of the destination

const dictionary = require('./101-data.js').dict;
let newdict = {};
for (let key in dictionary) {
  if (newdict[dictionary[key]] === undefined) {
    newdict[dictionary[key]] = [];
  }
  newdict[dictionary[key]].push(key);
}
console.log(newdict);
