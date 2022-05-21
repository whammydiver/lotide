const pigLatin = function(word) {
  let pigLatinWord = "";
  for (let x = 0; x < word.length - 1; x++) {
    pigLatinWord += word[x + 1];
  }
  pigLatinWord += word[0] + "ay ";
  return pigLatinWord;
};

const args = process.argv;
const inputArray = args.slice(2);
let pigLatinString = "";
for (let x = 0; x < inputArray.length; x++) {
  pigLatinString += pigLatin(inputArray[x]);
}
console.log(pigLatinString);