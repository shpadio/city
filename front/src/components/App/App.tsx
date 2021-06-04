import React from "react";
import "./App.module.css";
import Board from "../Board/Board";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.main}>
        <Board />
      </div>
    </>
  );
}

export default App;
