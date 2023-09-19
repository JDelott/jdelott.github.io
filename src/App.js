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
    <div className="h-screen flex flex-col justify-center items-center pt-20"> {/* Add pt-20 for top padding */}
      <div className="container mx-auto">
        <div className="center"> {/* Use .center to apply the center class */}
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
