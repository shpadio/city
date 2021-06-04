import React, { memo } from 'react';

import Square from './Square/Square';
import { AssetProps } from '../Assets/Asset';

export interface SquareState {
  x:number,
  y:number,
  isEmpty:boolean,
  asset?:AssetProps
}
function Board() {
  function createBoard(countX:number, countY:number):SquareState[] {
    const board = [];
    for (let i = 0; i < countX; i += 1) {
      const squareX = Object({ isEmpty: true, x: 0, y: i });
      i = 0;
      for (let j = 0; j < countY; j += 1) {
        const squareY = Object({ isEmpty: true, x: j, y: 0 });
        board.push(squareX, squareY);
      }
    }
    return board;
  }

  const squaresState = createBoard(5, 5);
  console.log(squaresState, 'squaresState');

  return (
    <>
      <Square squareState={squaresState} />
    </>
  );
}

export default memo(Board);
