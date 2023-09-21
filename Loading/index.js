const counterElement = document.querySelector(".counter");

const barElement = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum() {
  counterElement.innerText = index + "%";
  barElement.style.width = index + "%";
  index++;
  if (index < 101) {
    setTimeout(updateNum, 20);
  }
}
