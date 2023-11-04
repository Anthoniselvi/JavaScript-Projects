const colorBox = document.getElementById("color-box");
const colorValue = document.getElementById("color-value");
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const alphaSlider = document.getElementById("alpha-slider");

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  const alpha = alphaSlider.value;

  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  colorBox.style.backgroundColor = rgbaColor;
  colorValue.textContent = rgbaColor;
}

// Update color and color name in real-time as sliders change
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
alphaSlider.addEventListener("input", updateColor);

// Initialize the color when the page loads
updateColor();
