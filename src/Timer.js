import React, { useState, useEffect } from 'react';

function Timer() {
  // State variables
  const [totalSeconds, setTotalSeconds] = useState(300); // Initial duration in seconds (5 minutes)
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setRemainingSeconds(totalSeconds);
    setIsRunning(true);
  };

  // Function to stop the timer and reset it
  const stopTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(totalSeconds);
  };

  // Use the useEffect hook to update the timer
  useEffect(() => {
    let interval;

    if (isRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      setIsRunning(false);
      // Handle timer completion (e.g., play a sound)
    }

    return () => clearInterval(interval);
  }, [isRunning, remainingSeconds, totalSeconds]);

  // Calculate minutes and seconds
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>
        Remaining Time: {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds} minutes
      </p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <div>
        <label>
          Set Timer Duration (minutes):
          <input
            type="number"
            value={totalSeconds / 60}
            onChange={(e) => setTotalSeconds(parseInt(e.target.value) * 60)}
          />
        </label>
      </div>
    </div>
  );
}

export default Timer;
