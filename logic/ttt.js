
let board = (new Array(9)).fill(0);
let turn = 1; // 1 = X, 2 = O

module.exports.init = () => {
  board = (new Array(9)).fill(0);
  return board;
};

module.exports.board = () => (board);

module.exports.input = (loc) => {
  if (!board[loc]) {
    board[loc] = turn;
    if (turn === 1) turn++;
    else turn--;
    return board;
  }
  return board;
};

module.exports.turn = () => (turn);

