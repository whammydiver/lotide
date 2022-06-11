// given an array input, returns the middle item(s) by index 
// (i.e. returnArray[1] of inputArray[0, 1, 2] or returnArray[1, 2] of inputArray[0, 1, 2, 3]) 

const middle = function(array) {
  let newArray = []; // creates an empty array
  if (array.length <= 2) { // if the input array is 2 or less numbers, returns the empty newArray,
    return newArray;
  }
  if (array.length % 2 === 0) { // checks if the input array contains an even or odd number of elements
    newArray.push(array[(array.length / 2) - 1]); // if even, push the first of the middle two elements to newArray
    newArray.push(array[array.length / 2]) // if even, push the second of the middle two elements to newArray
  } else {
    newArray.push(array[((array.length - 1) / 2)]) // if odd, push the middle element to newArray
  }
  return newArray; // return newArray 
}

module.exports = middle;