import React, { useEffect } from 'react';

function Scoreboard({ count, bestScore, setBestScore, increment, reset }) {
  useEffect(() => {
    console.log('Count updated:', count);
    
    if (count > bestScore) {
      setBestScore(count);
    }
  }, [count, bestScore, setBestScore]);
 
  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Best Score: {bestScore}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Scoreboard;
