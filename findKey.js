const findKey = function(object, callback) {
  for (x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
} // code provided by Compass

module.exports = findKey;