import React from "react";
import styles from "./Square.module.css";
import { SquareState } from "../Board";
import { v4 as uuidv4 } from "uuid";
interface SquareStateProps {
  squareState: SquareState[];
}
function Square({ squareState }: SquareStateProps) {
  const squares = [...squareState];
  const clickHandler = (square: Partial<SquareState>): void => {
    console.log(` coordinates are : ${square.x} ${square.y}`);
  };

  return (
    <>
      {squares?.map((square) => (
        <div
          key={uuidv4()}
          className={styles.square}
          onClick={() => clickHandler(square)}
        >
          <p>{square.x}</p>
          <p>{square.y}</p>
        </div>
      ))}
    </>
  );
}

export default Square;
