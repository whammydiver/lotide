const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(2, 5);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(["Hello", "World"]), "World"); // fails because the single value array isn't strictly equal to the string

let testArray = tail(words);
for (let x = 0; x < testArray.length; x++) {
  assertEqual(testArray[x], words[x + 1]);
}