const countOnly = function(allItems, itemsToCount) {
  let countObject = {} // creates an empty object
  let count = 0;
  for (let item in itemsToCount) {
    if (itemsToCount[item]) { 
      for (let x = 0; x < allItems.length; x++) { // compares each item in itemsToCount with each item in allItems
        if (item === allItems[x]) {
          count += 1; // for each occurance of the itemToCount in allItems, the count += 1
        }
      }
      if (count > 0) {
        countObject[item] = count; // if count > 0 there is at least one match - create a key: value pair in our output object
      }
      count = 0;
    }
  }
  return countObject; 
}

module.exports = countOnly;
