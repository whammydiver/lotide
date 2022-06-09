const flatten = function(nestedArray) {
  let newArray = [];
  for (item of nestedArray) {
    if(Array.isArray(item)) {
      let result = flatten(item); 
      for (value of result) {
        newArray.push(value);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}

module.exports = flatten;

