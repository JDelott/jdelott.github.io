import React, { useState, useEffect } from 'react';
import './custom-tailwind.css'; // Import your custom CSS file

const moves = ['SHOOT', 'SPRAWL', 'BLOCK'];

function Moves() {
  const [currentMove, setCurrentMove] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isCommandsEnabled, setIsCommandsEnabled] = useState(true);

  useEffect(() => {
    const announceMove = () => {
      if (isCommandsEnabled) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        setCurrentMove(randomMove);
        // Speak the move only if not muted
        if (!isMuted) {
          speak(randomMove);
        }
      }
    };

    const moveInterval = setInterval(announceMove, 3000);

    return () => clearInterval(moveInterval);
  }, [isMuted, isCommandsEnabled]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  return (
    <div className="moves-container">
      <h2 className="moves-heading">Current Move:</h2>
      <p className="moves-text">{currentMove}</p>
      <div className="flex items-center space-x-4">
        <label className="checkbox-label ml-2"></label>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsCommandsEnabled(!isCommandsEnabled)}
            className={`timer-button ${
              isCommandsEnabled ? 'on-button' : 'off-button'
            }`}
          >
            {isCommandsEnabled ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`timer-button ${
              isMuted
                ? 'moves-mute-button moves-mute-bg'
                : 'moves-unmute-button moves-unmute-bg'
            }`}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moves;
