#!/usr/bin/node

// a function that converts a number from base 10 to another base
// passed as argument
// Prototype: exports.converter = function (base)
// not allowed to import any file and to declare any new variable (var, let, etc..)

exports.converter = function (base) {
  return (num) => num.toString(base);
};
