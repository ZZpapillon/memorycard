import Scoreboard from './Scoreboard';
import './App.css';
import Cards from './Cards';
import React, { useState, useEffect } from 'react';
import pokeLogo from './poke.gif'
import logoP from './logoP.png'
import ball from './ball.png'
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
      <div className='header'>
      <Scoreboard count={count} bestScore={bestScore} setBestScore={setBestScore} increment={increment} reset={reset} />
      </div> 
    <div className='sidebar'>
       <div className='logo'> <img src={logoP} alt='Pokemon Logo' /> </div> 
       <div className='gif'> <img src={pokeLogo} alt='Pokemon Logo' /> </div> 
       <div className='text'>Memory</div>
       <div className='ball'><img src={ball} /></div>

</div>

      <div className='content'>   
      <Cards increment={increment} reset={reset} />
      </div> 
      <div className='footer'>@Zdeslav Zaksek</div>
    </div>
  );
}

export default App;

