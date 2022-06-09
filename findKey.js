const findKey = function(object, callback) {
  for (x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
}

module.exports = findKey;