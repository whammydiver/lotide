const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

module.exports = letterPositions;