#!/usr/bin/node
// a class Square defines a square and inherits Rectangle of 4-rectangle.js
// use the "class" notation for defining your class and extends
// The constructor must take 1 argument: size
// The constructor of Rectangle must be called (by using super())

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
