const ScoreTable = ({ number1, number2 }) => {
  return (
    <div className="score-table">
      <h3>Score table:</h3>
      <ul>
        <li>Crosses win: {number1}</li>
        <li>Zero win: {number2}</li>
      </ul>
    </div>
  );
};

export default ScoreTable;
