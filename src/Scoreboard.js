import React, { useEffect } from 'react';

function Scoreboard({ count, bestScore, setBestScore, increment, reset }) {
  useEffect(() => {
    // Get the best score from local storage on component mount
    const storedBestScore = localStorage.getItem('bestScore');
    if (storedBestScore) {
      setBestScore(parseInt(storedBestScore));
    }
  }, [setBestScore]);

  useEffect(() => {
    // Update the best score if the current score is higher
    if (count > bestScore) {
      setBestScore(count);
      localStorage.setItem('bestScore', count.toString());
    }
  }, [count, bestScore, setBestScore]);
  

  return (
    <div className='scoreboard'>
      <div>Count: {count}</div>
     
      <div>Best Score: {bestScore}</div>
      
    </div>
  );
}

export default Scoreboard;
