// BEGIN
const addPrefix = (arr, prefix) => {
  const result = [];
  
  for (const item of arr) {
    result.push(`${prefix} ${item}`);
  }
  
  return result;
};

export default addPrefix;
// END