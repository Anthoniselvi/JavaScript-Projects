const convertButton = document.getElementById("convert-button");
const textToConvert = document.getElementById("text-to-convert");
const audioPlayer = document.getElementById("audio-player");
const audioSymbol = document.getElementById("audio-symbol");

audioSymbol.style.display = "none"; // Initially hide the audio symbol

convertButton.addEventListener("click", () => {
  const text = textToConvert.value.trim();

  if (text) {
    convertToSpeech(text);
  }
});

function convertToSpeech(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  // Display audio symbol while speech is playing
  audioSymbol.style.display = "inline";

  // Hide audio symbol when speech ends
  utterance.onend = () => {
    audioSymbol.style.display = "none";
  };

  speechSynthesis.speak(utterance);
}
