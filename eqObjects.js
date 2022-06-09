const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { //checks length
    return false;
  }
  for (let key of Object.keys(object1)) { //checks keys are identical
    if (!Object.keys(object2).includes(key)) {
      // console.log("failed identical key test");
      // console.log(Object.keys(object2).includes(key));
      return false;
    }
    if (Array.isArray(object1[key])) { //checks arrays are identical if element is an array
      // console.log(`object ${[key]} is an array!!!`);
      if (!eqArrays(object1[key], object2[key])) {
        // console.log("failed comparitive arrays test");
        return false;
      };
    } else if (!object1[key] === object2[key]) { //checks simple values are identical
      //console.log('failed simple element compatitor check ' + object[key])
      return false;
    }
  }
  return true; // if returned, no checks failed. 
};

module.exports = eqObjects;
