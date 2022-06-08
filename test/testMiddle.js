const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {
  it('returns [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("returns [6, 7] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
  });
});
