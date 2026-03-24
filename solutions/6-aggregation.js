// BEGIN
export const calculateSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  
  let sum = 0;
  
  for (const num of arr) {
    if (num % 3 === 0) {
      sum += num;
    }
  }
  return sum;
};
// END