// input an array and a stop trigger. reads through the input array, builds a return array of 
// all values until finding the stop trigger. 

const takeUntil = function(array, callback) {
  results = [];
  for (item of array) { 
    if (!callback(item)) { // checks the item against the stop trigger. if the callback fails (doesn't match) :
      results.push(item); // the item is added to our new Array
    } else { // otherwise
      return results; // the match halts the function and ew return the array built thus far.
    }
  }
}

module.exports = takeUntil;
