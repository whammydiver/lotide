const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: arrays are identical");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: arrays do NOT match");
  }
}

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