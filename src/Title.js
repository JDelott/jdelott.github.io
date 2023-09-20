// Title.js
import React from 'react';

function Title() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 center-text"> 
      {/* Add the center-text class for centering */}
      <h1 className="text-4xl font-bold text-white">Shadow Wrestler</h1>
    </div>
  );
}

export default Title;
