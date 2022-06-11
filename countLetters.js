const countLetters = function(string) {
  string = string.split(' ').join(''); // removes all spaces from the string
  outputObject = {}; // creates an empty object
  for (let char in string) {
    const key = string[char];
    if (outputObject[key]) {
      outputObject[key] += 1; // if a key already exists for the letter in the string, add 1 to the instance total
    } else {
      outputObject[key] = 1; // if a key does not yet exist for the letter in the string, create one and set its value to 1
    }
  }
  return outputObject; // return the count object
};

module.exports = countLetters;

