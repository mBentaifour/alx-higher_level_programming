#!/usr/bin/node

// a script that writes a string to a file
// Write me

const fs = require('fs');

fs.writeFile(process.argv[2], process.argv[3], 'utf-8',
  function (err) {
    if (err) {
      console.log(err);
    }
  });
