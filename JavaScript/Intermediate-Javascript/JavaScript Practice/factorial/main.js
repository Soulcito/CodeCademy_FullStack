

const factorial = (num) => {
  let res = num;
  for (let i = num - 1; i >= 1; i-- ) {
    res *= i;
  }
  return res;
}