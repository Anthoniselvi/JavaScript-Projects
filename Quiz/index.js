const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");

const questions = [
  {
    question: 'What does "JS" stand for in JavaScript?',
    choices: ["Java Syntax", "Just Saying", "JavaScript", "Jumpstart"],
    correctChoice: 2,
  },
  {
    question:
      "Which built-in method combines the text of two strings and returns a new string?",
    choices: ["concat()", "attach()", "append()", "combine()"],
    correctChoice: 0,
  },
  // Add more questions here
];

let currentQuestionIndex = 0;

function showQuestion(questionIndex) {
  const currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.className = "choice-button";
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => checkAnswer(index));
    choicesElement.appendChild(choiceButton);
  });
}

function checkAnswer(choiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (choiceIndex === currentQuestion.correctChoice) {
    alert("Correct!");
  } else {
    alert("Wrong. Try again.");
  }
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    alert("Quiz completed!");
  }
}

nextButton.addEventListener("click", loadNextQuestion);

// Initialize with the first question
showQuestion(currentQuestionIndex);
