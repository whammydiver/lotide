const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");
  for (let char in sentence) {
    if (results[sentence[char]]) {
      results[sentence[char]].push(char);
    } else {
      results[sentence[char]] = [char];
    }
  }
  



  return results;
};

let sentence = process.argv.slice(2);
console.log(sentence);
sentenceString = '';
for (let x = 0; x < sentence.length; x++) {
  sentenceString += sentence[x];
}
console.log(letterPositions(sentenceString));

//sentence.join();
//console.log(letterPositions(sentence));