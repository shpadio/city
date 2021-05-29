import React, { useState, memo } from 'react';

import Square from './Square/Square';

const Board = ():React.ReactElement => {
  const [squaresState, setSquaresState] = useState([]);

  return (
    <>
      {
        squaresState?.map((square) => <Square square={square} />)
      }
    </>
  );
};

export default memo(Board);
