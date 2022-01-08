import arrOfItems from "../utils/createItem";
import checkingWinner from "../utils/checkingWinner";
import { resetGame } from "../utils/resetGame";
import { useState } from "react";
import { changeItemClass } from "../utils/noChangeItemClass";
import ScoreTable from "./ScoreTable";

let crosses = [];
let zero = [];

const Table = () => {
  const [move, setMove] = useState(true);
  const [countCrosses, setCountCrosses] = useState(0);
  const [countZero, setCountZero] = useState(0);

  const onClickTable = (e) => {
    setMove(!move);
    if (move) {
      changeItemClass(e.target, "crosses", crosses, setMove, true);
      if (checkingWinner(crosses)) {
        setTimeout(() => {
          alert(`Winner is Crosses`);
          resetGame(crosses, zero);
          crosses = [];
          zero = [];
          setMove(true);
        });
        setCountCrosses((state) => (state += 1));
      }
    } else {
      changeItemClass(e.target, "zero", zero, setMove, false);
      if (checkingWinner(zero)) {
        setTimeout(() => {
          alert(`Winner is Zero`);
          resetGame(zero, crosses);
          crosses = [];
          zero = [];
          setMove(true);
        });
        setCountZero((state) => (state += 1));
      }
    }
  };

  return (
    <div className="table-wrapper">
      <div className="main-table" onClick={onClickTable}>
        {arrOfItems}
      </div>
      <ScoreTable number1={countCrosses} number2={countZero} />
    </div>
  );
};

export default Table;
