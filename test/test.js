const assert = require('assert');
const Board = require('../logic/ttt');

const board = new Board();

const blank = (new Array(9)).fill(0);

describe('Tic Tac Toe', () => {
  beforeEach(() => {
    board.reset();
  });

  it('should generate a blank board', () => {
    assert.deepEqual(board.get(), blank);
  });

  it('should take input', () => {
    const result = blank.slice();
    result[2] = 1;
    assert.deepEqual(board.move(2), result);
  });

  it('should reset the board and turn', () => {
    board.move(2);
    board.reset();
    assert.deepEqual(board.get(), blank);
    assert.deepEqual(board.getTurn(), 1);
  });
});
