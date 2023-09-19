import React from 'react';
import './App.css';
import Timer from './Timer';
import Moves from './Moves';
import './styles.css';
import { isSpeechSynthesisSupported } from './speechUtils';
import './custom-tailwind.css';

function App() {
  const speechSupported = isSpeechSynthesisSupported();

  return (
    <div className="h-screen flex flex-col justify-center items-center pt-20">
      <header className="text-4xl font-bold mb-8 text-gray-800">Shadow Wrestler</header>
      <div className="container mx-auto">
        <div className="center">
          <Timer />
          {speechSupported ? (
            <div>
              <Moves />
            </div>
          ) : (
            <p>Speech synthesis is not supported in this browser.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
