import Scoreboard from './Scoreboard';
import './App.css';
import Cards from './Cards';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
 

  return (
    <div className='container'>
      <Scoreboard count={count} bestScore={bestScore} setBestScore={setBestScore} increment={increment} reset={reset} />
      <Cards increment={increment} reset={reset} />
    </div>
  );
}

export default App;

