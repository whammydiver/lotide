const letterPositions = function(sentence) {
  const results = {}; // creates an empty object
  sentence = sentence.split(" ").join(""); // removes spaces from the input sentance
  for (let x = 0; x < sentence.length; x++) { // loops through each letter of the sentance string
    if (results[sentence[x]]) { // checks for the existance of a key matching the letter. If it exists:
      results[sentence[x]].push(x); //  the index position (x) is pushed into an array at that key
    } else {
      results[sentence[x]] = [x]; // if not, the key is created and a new array is assigned with the index value included
    }
  }
  return results; // the object is returned
};

module.exports = letterPositions;