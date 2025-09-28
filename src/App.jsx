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

  const minutes = Math.floor((timer / 60) % 60);
  const seconds = timer % 60;
  const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div>
      <h1>Stopwatch</h1>
      <span>Time {time}</span>
      <div>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;