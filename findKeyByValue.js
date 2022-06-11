const findKeyByValue = function(object, value) {
  for (let category in object) {
    if (object[category] === value) { // compares each object key value with the variable Value.
      return category; // if the value is found, the key is returned
    }
  }
}

module.exports = findKeyByValue;
