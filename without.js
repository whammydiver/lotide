// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log("✅✅✅ Assertion Passed: arrays are identical");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: arrays do NOT match");
  }
}

const without = function(originalArray, itemsToBeRemovedArray) {
  let newArray = [];
  let match = false;
  for (let x = 0; x < originalArray.length; x++) {
    for (let y = 0; y < itemsToBeRemovedArray.length; y++) {
      if (originalArray[x] === itemsToBeRemovedArray[y]) {
        match = true;
      }
    if (match === true) {
      match = false
    } else {
      newArray.push(originalArray[x]);
    }
    }
  }
  return newArray;
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual(2, 5);

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);