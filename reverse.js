const reverse = function(word) {
  let reversedWord = "";
  for (let x = word.length - 1; x >= 0; x--) {
    reversedWord += word[x];
  }
  return reversedWord;
};

const args = process.argv;
const inputArray = args.slice(2);

for (let x = 0; x < inputArray.length; x++) {
  console.log(reverse(inputArray[x]));
}