#!/usr/bin/node
// Write a class Rectangle that defines a rectangle and creates an instance
// method called print() 
// that prints the rectangle using the character X
// The constructor must take 2 arguments: w and h

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let row = '';
    for (let i = 0; i < this.width; i++) {
      row = row + 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}

module.exports = Rectangle;
