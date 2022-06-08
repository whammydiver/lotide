const assert = require('chai').assert
const tail = require('../tail.js');

describe('#tail' , () => {
  it('returns [2, 3] from [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('returns ["Lighthouse", "Labs"] from ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  }) 
  it('returns [4] from [5, 4]', () => {
    assert.deepEqual(tail([5, 4]), [4]);
  });
});
