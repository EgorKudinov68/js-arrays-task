const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
  
  if (arr1.length === 0 || arr2.length === 0) {
    return 0;
  }
  
  const uniqueArr1 = _.uniq(arr1);
  const uniqueArr2 = _.uniq(arr2);
  
  let count = 0;
  
  for (let i = 0; i < uniqueArr1.length; i++) {
    for (let j = 0; j < uniqueArr2.length; j++) {
      if (uniqueArr1[i] === uniqueArr2[j]) {
        count++;
        break; 
      }
    }
  }
  
  return count;
};

export default getSameCount;
// END