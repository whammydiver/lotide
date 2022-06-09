const reverse = function(word) {
  let reversedWord = "";
  for (let x = word.length - 1; x >= 0; x--) {
    reversedWord += word[x];
  }
  return reversedWord;
};

module.exports = reverse;
