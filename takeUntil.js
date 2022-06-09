const takeUntil = function(array, callback) {
  results = [];
  for (item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
}

module.exports = takeUntil;
