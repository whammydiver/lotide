const countLetters = function(string) {
  outputObject = {};
  for (let char in string) {
    if (outputObject[string[char]]) {
      outputObject[string[char]] += 1;
    } else {
      outputObject[string[char]] = 1;
    }
  }
  return outputObject;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(countLetters("lighthouse labs in the house"));
