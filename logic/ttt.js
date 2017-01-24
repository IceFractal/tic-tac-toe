
class Board {
  constructor() {
    this.board = (new Array(9)).fill(0);
    this.turn = 1;
  }

  get() {
    return this.board;
  }

  getTurn() {
    return this.turn;
  }

  reset() {
    this.board = (new Array(9)).fill(0);
    this.turn = 1;
  }

  move(index) {
    if (!this.board[index]) {
      this.board[index] = this.turn;
      if (this.turn === 1) this.turn++;
      else this.turn--;
      return this.board;
    }
    return this.board;
  }
}

module.exports = Board;
