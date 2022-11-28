/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  let newS = s.split('');
  const letterPairs = new Map();
  
  for (let i = 0; i < newS.length; i++) {
      const storedPair = letterPairs.get(newS[i]);
      
      if (storedPair) {
          newS[i] = storedPair;
      } else {
          const previousPairValues = Array.from(letterPairs.entries());
          const repeatedMap = previousPairValues.find(pair => pair[1] === t[i]);
          
          const isReapeatedMap = repeatedMap ? repeatedMap[0] !== newS[i] : false;
          if (isReapeatedMap) {
              return false;
          }
          
          letterPairs.set(newS[i], t[i]);
          newS[i] = t[i];
      }
  }
  
  return newS.join('') === t;    
};
