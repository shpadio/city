import React, { memo } from "react";

import Square from "./Square/Square";
import { AssetProps } from "../Assets/Asset";

export interface SquareState {
  x: number;
  y: number;
  isEmpty: boolean;
  asset?: AssetProps;
}
function Board() {
  function createBoard(countX: number, countY: number): SquareState[] {
    const board = [];
    let i = 0,
      j = 0;
    while (i < countY) {
      const coordinates = Object({ isEmpty: true, x: j, y: i });
      i++;
      if (i === countY && j < countX - 1) {
        i = 0;
        j++;
      }
      board.push(coordinates);
    }
    return board;
  }

  const squaresState = createBoard(5, 5);
  console.log(squaresState, "squaresState");

  return (
    <>
      <Square squareState={squaresState} />
    </>
  );
}

export default memo(Board);
