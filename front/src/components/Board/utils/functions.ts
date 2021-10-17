import { SquareState } from "../Board";

export function createBoard(countX: number, countY: number): SquareState[] {
  const board = [];
  let i = 0,
    j = 0;
  while (i < countY) {
    const coordinates = Object({ isEmpty: true, x: j, y: i, asset: {
      title:'', logo:'', price:0,
      }
    });
    i++;
    if (i === countY && j < countX - 1) {
      i = 0;
      j++;
    }
    board.push(coordinates);
  }
  return board;
}
