let currentTimer = undefined;

function showTime() {
  if (document.getElementById("railway").checked == true) {
    console.log("railway time clicked");
    showRailwayTime();
  }
  if (document.getElementById("normal").checked == true) {
    console.log("normal button clicked");
    showNormalTime();
  }
}

function showRailwayTime() {
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  hour = beforeZero(hour);
  minutes = beforeZero(minutes);
  seconds = beforeZero(seconds);

  document.getElementById("display").innerHTML =
    hour + " : " + minutes + " : " + seconds;
  clearTimeout(currentTimer);
  console.log(currentTimer);
  currentTimer = setTimeout(showRailwayTime, 1000);
}

function showNormalTime() {
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let morningorevening = "AM";

  if (hour >= 12) {
    morningorevening = "PM";
  } else {
    morningorevening = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }

  hour = beforeZero(hour);
  minutes = beforeZero(minutes);
  seconds = beforeZero(seconds);

  document.getElementById("display").innerHTML =
    hour + " : " + minutes + " : " + seconds + " " + morningorevening;
  clearTimeout(currentTimer);
  currentTimer = setTimeout(showNormalTime, 1000);
}

function beforeZero(hour) {
  if (hour <= 9) return "0" + hour;
  else return hour;
}

function beforeZero(minutes) {
  if (minutes <= 9) return "0" + minutes;
  else return minutes;
}

function beforeZero(seconds) {
  if (seconds <= 9) return "0" + seconds;
  else return seconds;
}
