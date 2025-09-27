import React, { useState, useRef } from 'react';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
    setIsRunning(false);
  };


  const seconds = timer % 60;
  const minutes = Math.floor((timer / 60) % 60);
  const hours = Math.floor(timer / 3600);
  const time = `${hours}:${minutes}:${seconds}`;

  return (
    <div>
      <h1>Stop Watch</h1>
      <span>Time {time}</span>
      <div>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;