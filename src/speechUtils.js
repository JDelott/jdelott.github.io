// SpeechUtil.js

// Function to check if speech synthesis is supported in the browser
export function isSpeechSynthesisSupported() {
  return 'speechSynthesis' in window;
}

// Function to speak a given text using speech synthesis
export function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    console.error('Speech synthesis is not supported in this browser.');
  }
}
