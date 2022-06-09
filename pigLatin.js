const pigLatin = function(word) {
  let pigLatinWord = "";
  for (let x = 0; x < word.length - 1; x++) {
    pigLatinWord += word[x + 1];
  }
  pigLatinWord += word[0] + "ay ";
  return pigLatinWord;
};

module.exports = pigLatin;