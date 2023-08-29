const startButton = document.getElementById("startButton");
const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");

let startTime;
let endTime;

function generateRandomQuote() {
  const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "In the middle of difficulty lies opportunity.",
    "All our dreams can come true, if we have the courage to pursue them.",
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
  startButton.disabled = true;
  quoteElement.textContent = generateRandomQuote();
  inputElement.value = "";
  inputElement.disabled = false; // Remove the disabled attribute here
  inputElement.focus();
  resultElement.textContent = "";
  startTime = new Date();
}

function calculateTypingSpeed() {
  const typedText = inputElement.value.trim();

  if (typedText === quoteElement.textContent) {
    endTime = new Date();
    const timeDiff = (endTime - startTime) / 1000; // in seconds
    const wordCount = typedText.split(" ").filter((word) => word !== "").length;
    const typingSpeed = Math.round((wordCount / timeDiff) * 60); // words per minute

    resultElement.textContent = `Your typing speed is ${typingSpeed} words per minute.`;
    startButton.disabled = false;
    inputElement.disabled = true;
  }
}

startButton.addEventListener("click", startTest);
inputElement.addEventListener("input", calculateTypingSpeed);
