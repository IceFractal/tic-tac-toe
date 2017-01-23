/* eslint-disable no-nested-ternary */
const ttt = require('../logic/ttt');

const writeBoard = (b) => {
  process.stdout.write(
`
------------------
|${b[0] ? b[0] === 1 ? 'X' : 'O' : ' '}  q| ${b[1] ? b[1] === 1 ? 'X' : 'O' : ' '}  w| ${b[2] ? b[2] === 1 ? 'X' : 'O' : ' '}  e|
------------------
|${b[3] ? b[3] === 1 ? 'X' : 'O' : ' '}  a| ${b[4] ? b[4] === 1 ? 'X' : 'O' : ' '}  s| ${b[5] ? b[5] === 1 ? 'X' : 'O' : ' '}  d|
------------------
|${b[6] ? b[6] === 1 ? 'X' : 'O' : ' '}  z| ${b[7] ? b[7] === 1 ? 'X' : 'O' : ' '}  x| ${b[8] ? b[8] === 1 ? 'X' : 'O' : ' '}  c|
------------------
`);
};

const board = ttt.init();

writeBoard(board);
// writeBoard([1, 2, 0, 0, 0, 0, 2, 1, 0]);

const letToIndex = {
  q: 0,
  w: 1,
  e: 2,
  a: 3,
  s: 4,
  d: 5,
  z: 6,
  x: 7,
  c: 8,
};

process.stdin.setEncoding('utf8');
process.stdin.on('data', (letter) => {
  const lett = letter[0];
  if (typeof letToIndex[lett] !== 'undefined') writeBoard(ttt.input(letToIndex[lett]));
});
