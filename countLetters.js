const countLetters = function(string) {
  string = string.split(' ').join('');
  outputObject = {};
  for (let char in string) {
    const key = string[char];
    if (outputObject[key]) {
      outputObject[key] += 1;
    } else {
      outputObject[key] = 1;
    }
  }
  return outputObject;
};

module.exports = countLetters;

