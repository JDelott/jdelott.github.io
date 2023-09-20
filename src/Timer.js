import React, { useState, useEffect } from 'react';
import './styles.css';
import './custom-tailwind.css';
import buzzerSound from './audio/mixkit-ice-hockey-sports-buzzer-941.wav';

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
    stopBuzzer(); // Stop the buzzer sound
  };

  // Function to play the buzzer sound
  const playBuzzer = () => {
    const audio = new Audio(buzzerSound);
    audio.play();
  };

  // Function to stop the buzzer sound
  const stopBuzzer = () => {
    const audio = new Audio(buzzerSound);
    audio.pause();
    audio.currentTime = 0;
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
      playBuzzer(); // Play the buzzer sound when the timer completes
    }

    return () => clearInterval(interval);
  }, [isRunning, remainingSeconds, totalSeconds]);

  // Calculate minutes and seconds
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div className="timer-container">
      <p className="timer-text timer-text-lg">
        {minutes < 10 ? `${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} 
      </p>
      <div className="space-x-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className={`timer-button ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className={`timer-button ${!isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Stop
        </button>
      </div>
      <div className="mt-4">
        <label className="timer-label">
          <h2 className="timer-heading font-bold set-timer-duration-text">Set Time:</h2>
          <input
            type="number"
            min="1" // Minimum value allowed (1 minute)
            step="1" // Step size for incrementing/decrementing (1 minute)
            value={totalSeconds / 60}
            onChange={(e) => setTotalSeconds(parseInt(e.target.value) * 60)}
            className="mt-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 w-20 input"
            placeholder="min"
          />
        </label>
      </div>
    </div>
  );
}

export default Timer;
