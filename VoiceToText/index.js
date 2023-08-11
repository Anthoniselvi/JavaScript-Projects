const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

// Initialize the SpeechRecognition API
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

// Set recognition parameters
recognition.interimResults = true; // Get intermediate results as the user speaks

// Event listener for the "Start Recording" button
startBtn.addEventListener("click", () => {
  recognition.start();
  startBtn.disabled = true;
  startBtn.textContent = "Recording...";
});

// Event listener for the recognition result
recognition.addEventListener("result", (event) => {
  const transcript = Array.from(event.results)
    .map((result) => result[0].transcript)
    .join("");
  result.textContent = transcript;
});

// Event listener when recognition ends
recognition.addEventListener("end", () => {
  startBtn.disabled = false;
  startBtn.textContent = "Start Recording";
});

// Event listener for recognition errors
recognition.addEventListener("error", (event) => {
  result.textContent = "Error occurred: " + event.error;
  startBtn.disabled = false;
  startBtn.textContent = "Start Recording";
});
