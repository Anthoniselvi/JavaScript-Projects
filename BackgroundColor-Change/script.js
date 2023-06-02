//Select any 10 colors
let colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "skyblue",
  "pink",
  "grey",
];

//change the background of Color Box when button is clicked
let button = document.getElementById("button");

button.addEventListener("click", function () {
  //select a random number between 0 - 9
  let index = parseInt(Math.random() * colors.length + 1);

  let BoxColor = document.getElementById("color-box");

  BoxColor.style.background = `${colors[index]}`;
});
