const countLetters = function(string) {
  string = string.split(' ').join('');
  outputObject = {};
  for (let char in string) {
    if (outputObject[string[char]]) {
      outputObject[string[char]] += 1;
    } else {
      outputObject[string[char]] = 1;
    }
  }
  return outputObject;
};

module.exports = countLetters;

