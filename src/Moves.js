import React, { useState, useEffect } from 'react';
import './custom-tailwind.css'; // Import your custom CSS file

const moves = ['shoot', 'sprawl', 'block'];

function Moves() {
  const [currentMove, setCurrentMove] = useState('');
  const [speed, setSpeed] = useState(3000); // Initial speed (3 seconds)
  const [isMuted, setIsMuted] = useState(false); // Initialize mute status to false

  // Function to announce a move using speech synthesis
  const speak = (text) => {
    if ('speechSynthesis' in window && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser or is muted.');
    }
  };

  useEffect(() => {
    const announceMove = () => {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      setCurrentMove(randomMove);
      setSpeed(Math.random() * 2000 + 2000); // Random speed between 2 to 4 seconds

      // Call the speak function to announce the move
      speak(randomMove);
    };

    const moveInterval = setInterval(announceMove, speed);

    return () => clearInterval(moveInterval);
  }, [speed, isMuted]);

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">Current Move:</h2>
      <p className="text-3xl font-bold mb-4">{currentMove}</p>
      <button
      onClick={() => setIsMuted(!isMuted)}
      className={`custom-button ${
        isMuted
          ? 'red-button'
          : 'green-button'
      }`}
    >
  {isMuted ? 'Unmute' : 'Mute'}
</button>

    </div>
  );
}

export default Moves;
