const flatten = function(nestedArray) {
  let newArray = []; // creates an empty array 
  for (item of nestedArray) {
    if(Array.isArray(item)) { // check array element to determine if the element itself is an array. If it is :
      let result = flatten(item); // call this function again and hold the resulting array in variable 'result'
      for (value of result) { // loop through 'result' and add each element to our output newArray
        newArray.push(value);
      }
    } else {
      newArray.push(item); // if original item is not an array but a value, add the value to newArray
    }
  }
  return newArray; // return the flattened array
}

module.exports = flatten;

