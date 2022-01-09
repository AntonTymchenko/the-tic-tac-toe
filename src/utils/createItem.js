function createItemArr() {
  const item = (id) => <div key={id} className="" data-number={id}></div>;
  const arrOfItems = [];
  for (let i = 0; i < 9; i += 1) {
    arrOfItems.push(item(i + 1));
  }
  return arrOfItems;
}

export default createItemArr;
