const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; // compares the length of each array. If !=, returns false
  }
  for (let x = 0; x < array1.length; x++) { 
    if (array1[x] !== array2[x]) {
      return false; // compares each array item by item. If any 2 items !=, returns false.
    }
  }
  return true; // if all code above runs with no return, the arrays must be equal. Returns true.
}

module.exports = eqArrays;

