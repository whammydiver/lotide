const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) { //compares two arrays - returns true if identical, false if not.
  if (array1.length !== array2.length) { //tests the length is the same
    return false;
  }
  for (let x = 0; x < array1.length; x++) { // compares each item.
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
}


const eqObjects = function(object1, object2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  if (Object.keys(object1).length !== Object.keys(object2).length) { //checks length
    return false;
  }
  for (let key of Object.keys(object1)) { //checks keys are identical, returns false if not
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
    if (Array.isArray(object1[key])) { //checks arrays are identical if element is an array, returns false if not
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      };
    } else if (!object1[key] === object2[key]) { //checks simple values are identical, returns false if not
      return false;
    }
  }
  return true; // if returned, no checks failed. 
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false