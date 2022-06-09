const countOnly = function(allItems, itemsToCount) {
  let countObject = {}
  let count = 0;
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      for (let x = 0; x < allItems.length; x++) {
        if (item === allItems[x]) {
          count += 1;
        }
      }
      if (count > 0) {
        countObject[item] = count;
      }
      count = 0;
    }
  }
  return countObject;
}

module.exports = countOnly;
