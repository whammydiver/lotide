const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [10, 20, 25, 32, 8, 56, 2];

const results = map(words, word => word[0]);
console.log(results);

assertArraysEqual((map(words, word => word[0])), ["g", "c", "t", "m", "t"]);
assertArraysEqual((map(numbers, num => num * 2)), [20, 40, 50, 64, 16, 112, 4]);
assertArraysEqual((map(numbers, num => num / 2)), [5, 10, 12.5, 16, 4, 28, 1]);
assertArraysEqual((map(numbers, num => num / 2)), [5, 10, 12, 16, 4, 28, 1]);
assertArraysEqual((map(words, word => word.slice(2))), ["ound", "ntrol", "", "jor", "m"]);


