const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(2, 5);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS