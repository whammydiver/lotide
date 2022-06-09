const findKeyByValue = function(object, value) {
  for (let category in object) {
    if (object[category] === value) {
      return category;
    }
  }
}

module.exports = findKeyByValue;
