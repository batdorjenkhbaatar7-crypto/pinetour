const topic = document.getElementById("topic");
const boxContainer = document.getElementById("boxContainer");
const moveleft = document.getElementById("moveleft");
const moveright = document.getElementById("moveright");
const movement = document.getElementById("movement");
let position = 1;
let counter = 0;
function buildTrack() {
  boxContainer.textContent = "";
  movement.textContent = "Uildel: " + counter;
  for (let i = 1; i <= 10; i++) {
    if (i === position) {
      boxContainer.textContent += "🚀";
    } else {
      boxContainer.textContent += "⬜️";
    }
  }
}
function moveRight() {
  if (position > 1) {
    position--;
    counter++;
    buildTrack();
  }
}
function moveLeft() {
  if (position < 10) {
    position++;
    counter++;
    buildTrack();
  }
}
function reset() {
  position = 1;
  counter = 0;
  buildTrack();
}
buildTrack();
