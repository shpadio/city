import React, {Dispatch, SetStateAction, useState} from "react";
import styles from "./Square.module.css";
import { SquareState } from "../Board";
import { v4 as uuidv4 } from "uuid";
import OptionsDropdown from "../OptionsDropdown/OptionsDropdown";
interface SquareStateProps {
  squareState: SquareState[];
  setSquaresState:Dispatch<SetStateAction<SquareState[]>>
}
function Square({ squareState ,setSquaresState}: SquareStateProps) {
  const squares = [...squareState];
  const [isDropdownVisible,setIsDropDownVisible] = useState(false)
  const [coordinates,setCoordinates] = useState<Partial<SquareState>>({})

  const clickHandler = (square: Partial<SquareState>): void => {
    console.log(` coordinates are : ${square.x} ${square.y}`);
    setCoordinates(square)
    setIsDropDownVisible(true)
  };

  return (
    <>
      {squares.map((square) => (
        <div
          key={uuidv4()}
          className={styles.square}
          onClick={() => clickHandler(square)}
        >
          {isDropdownVisible && <OptionsDropdown squaresState={squares} setSquaresState={setSquaresState} coordinates={coordinates}/>}
          <p>{square.x}</p>
          <p>{square.y}</p>
        </div>
      ))}
    </>
  );
}

export default Square;
