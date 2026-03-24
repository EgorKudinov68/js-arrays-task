const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  
  if (locations.length === 0) {
    return null;
  }
  
  const [x, y] = point;
  
  let nearestLocation = null;
  let minDistance = Infinity;
  
  for (const location of locations) {
    
    const [name, coordinates] = location;
    
    const [x1, y1] = coordinates;
    
    const distance = getDistance([x, y], [x1, y1]);
    
    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = location;
    }
  }
  
  return nearestLocation;
};
// END
