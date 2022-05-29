const findKey = function(object, callback) {
  for (x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const oneStar = (x) => x.stars === 1;
const twoStars = (x) => x.stars === 2;
const threeStars = (x) => x.stars === 3;
const fourStars = (x) => x.stars === 4;
const fiveStars = (x) => x.stars === 5;

console.log(findKey(movies, threeStars)); // => "noma"

assertEqual(findKey(movies, threeStars), "Akaleri"); //pass 
assertEqual(findKey(movies, oneStar), "Blue Hill");  //pass
assertEqual(findKey(movies, twoStars), "noma");  //pass
assertEqual(findKey(movies, oneStar), "noma");  //fail
assertEqual(findKey(movies, fourStars), "Akaleri"); //fail