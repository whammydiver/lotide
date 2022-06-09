const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions')

let sentence = process.argv.slice(2);
sentenceString = '';
for (let x = 0; x < sentence.length; x++) {
  sentenceString += sentence[x];
}
console.log(letterPositions(sentenceString));

// TEST CODES
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("goodbye").o, [1, 2]);
assertArraysEqual(letterPositions("bexley").e, [1, 4]);
assertArraysEqual(letterPositions("ranji").j, [3]);
assertArraysEqual(letterPositions("monkman").m, [0, 4]);
assertArraysEqual(letterPositions("cheeks").e, [2, 3]);
assertArraysEqual(letterPositions("charlie").e, [6]);
assertArraysEqual(letterPositions("paul").a, [1]);
assertArraysEqual([1,2,3], [1,2,3]);