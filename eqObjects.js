const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // console.log(array1, array2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
}

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false