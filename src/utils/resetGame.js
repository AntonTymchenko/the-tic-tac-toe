export const resetGame = (arr1, arr2) => {
  arr1.map((item) => (item.className = ""));
  arr2.map((item) => (item.className = ""));
};
