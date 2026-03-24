// BEGIN
export const getMax = (arr) => {
  
  if (arr.length === 0) {
    return null;
  }

  const [first, ...rest] = arr;
  
  let max = first;
  
  for (const value of rest) {
    if (value > max) {
      max = value;
    }
  }
  
  return max;
};
// END