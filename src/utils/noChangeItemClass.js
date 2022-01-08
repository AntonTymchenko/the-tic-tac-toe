export const changeItemClass = (el, className, arr, func, funcVal) => {
  if (el.className === "") {
    el.className = className;
    arr.push(el);
  } else {
    func(funcVal);
  }
};
