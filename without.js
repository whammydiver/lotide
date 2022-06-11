// input 2 arrays. function returns the first array minus all matching element in the second array. 

const without = function(originalArray, itemsToBeRemovedArray) {
  let newArray = []; // creates a new empty array
  let match = false; // sets a trigger to false
  for (let x = 0; x < originalArray.length; x++) {
    for (let y = 0; y < itemsToBeRemovedArray.length; y++) {
      if (originalArray[x] === itemsToBeRemovedArray[y]) { // cycles through the original array and the check array of items to not include
        match = true; // if a match is found, set the trigger variable to true (each element of the original must be checked against each of the discard list array - a single match triggers to not include the original element)
      }
    }
    if (match === true) { // if match is true, we do not include the original array element in our new array, and reset the trigger to begin the process for the next element check
      match = false 
    } else { // if there is no match then the original element is added to our new array.
      newArray.push(originalArray[x]);
    }
  }
  return newArray; // returns our new array of only those elements unique to the original array
}

module.exports = without; 