// input an array - returns an array without the original array index 0. (chops off the first element)
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;