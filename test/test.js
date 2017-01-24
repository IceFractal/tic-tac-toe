const assert = require('assert');
const ttt = require('../logic/ttt');

const board = (new Array(9)).fill(0);

describe('Tic Tac Toe', () => {
  beforeEach(() => {
    ttt.init();
  });

  it('should generate a blank board', () => {
    assert.deepEqual(ttt.init(), board);
  });

  it('should take input', () => {
    const result = board.slice();
    result[2] = 1;
    assert.deepEqual(ttt.input(2), result);
  });

  it('should reset the board on init', () => {
    ttt.input(2);
    assert.deepEqual(ttt.init(), board);
  });
});
