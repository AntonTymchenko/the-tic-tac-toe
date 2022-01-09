const checkingWinner = (arr) => {
  if (arr.length === 0) {
    return false;
  }
  const arrComb = arr.map((item) => +item.dataset.number);

  let count = 0;
  let result = false;
  const winComb = [
    [1, 2, 3],
    [2, 5, 8],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [3, 6, 9],
  ];

  for (let i = 0; i < winComb.length; i += 1) {
    for (let num of arrComb) {
      if (winComb[i].includes(num)) {
        count += 1;
      }
      if (count === 3) {
        result = true;
        break;
      } else {
        continue;
      }
    }
    count = 0;
  }
  if (!result && arr.length === 5) {
    return "draw";
  } else if (!result) {
    return false;
  }
  return result;
};
export default checkingWinner;
