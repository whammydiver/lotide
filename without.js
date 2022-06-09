const without = function(originalArray, itemsToBeRemovedArray) {
  let newArray = [];
  let match = false;
  for (let x = 0; x < originalArray.length; x++) {
    for (let y = 0; y < itemsToBeRemovedArray.length; y++) {
      if (originalArray[x] === itemsToBeRemovedArray[y]) {
        match = true;
      }
    }
    if (match === true) {
      match = false
    } else {
      newArray.push(originalArray[x]);
    }
  }
  return newArray;
}

module.exports = without; 