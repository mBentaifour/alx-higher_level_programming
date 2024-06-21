#!/usr/bin/node

// a function that returns the reversed version of a list
// Prototype: exports.esrever = function (list)
// not allow to use the built-in method reverse

exports.esrever = function (list) {
  const newArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    newArray.push(list[i]);
  }
  return newArray;
};
