import React, { memo } from "react";

import Square from "./Square/Square";
import { AssetProps } from "../Assets/Asset";
import { createBoard } from "./functions";
import styles from "./Board.module.css";

export interface SquareState {
  x: number;
  y: number;
  isEmpty: boolean;
  asset?: AssetProps;
}
function Board() {
  const squaresState = createBoard(5, 5);
  return (
    <>
      <div className={styles.board}>
        <Square squareState={squaresState} />
      </div>
    </>
  );
}

export default memo(Board);
