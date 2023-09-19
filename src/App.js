import React from 'react';
import './App.css';
import Timer from './Timer'; // Import the Timer component
import Moves from './Moves';

import { isSpeechSynthesisSupported } from './speechUtils';

function App() {
  const speechSupported = isSpeechSynthesisSupported();
  
  return (
    <div className="App">
      <Timer /> {/* Include the Timer component */}
      {speechSupported ? (
        <div>
          <Moves />
       
        </div>
      ) : (
        <p>Speech synthesis is not supported in this browser.</p>
      )}
    </div>
  );
}

export default App;
