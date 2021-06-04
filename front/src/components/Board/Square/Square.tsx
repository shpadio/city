import React from 'react';
import styles from './Square.module.css';
import { SquareState } from '../Board';

interface SquareStateProps {
    squareState:SquareState[]
}
function Square({ squareState }:SquareStateProps) {
  const squares = [...squareState];
  return (
    <>
      {squares?.map((square) => (
        <div className={styles.square}>
          <p>{square.x}</p>
          <p>{square.y}</p>
        </div>
      ))}
    </>

  );
}

export default Square;
