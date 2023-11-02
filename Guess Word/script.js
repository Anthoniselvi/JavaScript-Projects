document.addEventListener("DOMContentLoaded", () => {
  const wordList = [
    "apple",
    "banana",
    "cherry",
    "dates",
    "grape",
    "kiwi",
    "lemon",
    "mango",
    "orange",
    "pear",
    "papaya",
    "dragonfruit",
    "strawberry",
    "watermelon",
  ];

  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  let prefixLength = 2;
  let suffixLength = 3;

  let maskedWord =
    randomWord.substring(0, prefixLength) +
    "_".repeat(randomWord.length - prefixLength - suffixLength) +
    randomWord.substring(randomWord.length - suffixLength);

  let attempts = 3;

  const wordDisplay = document.getElementById("word-display");
  const guessInput = document.getElementById("guess-input");
  const checkButton = document.getElementById("check-button");
  const message = document.getElementById("message");

  const updateWordDisplay = () => {
    wordDisplay.textContent = maskedWord;
  };

  updateWordDisplay();

  checkButton.addEventListener("click", () => {
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1) {
      message.textContent = "Please enter a single letter.";
    } else if (randomWord.includes(guess)) {
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guess) {
          maskedWord =
            maskedWord.substring(0, i) + guess + maskedWord.substring(i + 1);
        }
      }
      updateWordDisplay();

      if (maskedWord === randomWord) {
        message.textContent = "You won! The word is: " + randomWord;
        checkButton.disabled = true;
      }
    } else {
      attempts--;
      message.textContent = "Incorrect guess. " + attempts + " attempts left.";

      if (attempts === 0) {
        message.textContent = "Good Try. The Actual Word is: " + randomWord;
        checkButton.disabled = true;
      }
    }

    guessInput.value = "";
  });
});
