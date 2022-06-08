const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: Arrays match");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: Arrays do NOT match.");
  }
}

module.exports = assertArraysEqual;
