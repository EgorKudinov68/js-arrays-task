// BEGIN
const bubbleSort = (arr) => {
  
  const result = [...arr];
  
  
  for (let i = 0; i < result.length - 1; i++) {
    
    for (let j = 0; j < result.length - 1 - i; j++) {
      
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  
  return result;
};

export default bubbleSort;
// END