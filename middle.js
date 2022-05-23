// FUNCTION IMPLEMENTATION
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

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[(array.length / 2) - 1]);
    newArray.push(array[array.length / 2])
  } else {
    newArray.push(array[((array.length + 1) / 2) -1])
  }
  return newArray;
}


console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // => [3, 4]