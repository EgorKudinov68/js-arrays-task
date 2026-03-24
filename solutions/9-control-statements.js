// BEGIN
const getTotalAmount = (money, currency) => {
  let total = 0;
  
  for (const item of money) {
    const itemCurrency = item.slice(0, 3);
    
    if (itemCurrency === currency) {
      const amount = Number(item.slice(4));
      total += amount;
    }
  }
  
  return total;
};

export default getTotalAmount;
// END