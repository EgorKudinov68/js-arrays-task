// BEGIN
const getSuperSeriesWinner = (scores) => {
  let canadaWin = 0;
  let ussrWin = 0;
  
  for (const game of scores) {
    const [canada, ussr] = game;
    
    if (canada > ussr) {
      canadaWin++;
    } else if (ussr > canada) {
      ussrWin++;
    }
  }
  
  if (canadaWin > ussrWin) {
    return 'canada';
  } else if (ussrWin > canadaWin) {
    return 'ussr';
  } else {
    return null;
  }
};

export default getSuperSeriesWinner;
// END