// BEGIN
const buildDefinitionList = (definitions) => {
  
  if (definitions.length === 0) {
    return '';
  }
  
  let result = '<dl>';
  
  for (const item of definitions) {
    const term = item[0];
    const description = item[1];
    
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  }
  
  result += '</dl>';
  
  return result;
};

export default buildDefinitionList;
// END