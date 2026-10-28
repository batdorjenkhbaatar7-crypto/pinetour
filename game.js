const BoxContainer = document.getElementById("boxContainer");
const moveStarRight = document.getElementById("moveStarRight");
const Refresh = document.getElementById("Refresh");
const movement = document.getElementById("movement");
const moveNum = document.getElementById("moveNum");
let starposition = 1;
function buildTrack() {
  BoxContainer.textContent = "";
  for (let i = 1; i <= 10; i++) {
    if (i === starposition) {
      BoxContainer.textContent += "⭐️";
    } else {
      BoxContainer.textContent += "⬜️";
    }
  }
}
function moveRight() {
  if (starposition < 10) {
    starposition++;
    buildTrack();
    if (starposition === 10) {
      movement.textContent = "Bariand hurlee 🎉";
    } else {
      movement.textContent = "";
    }
  }
}
function moveLeft() {
  if (starposition > 1) {
    starposition--;
    buildTrack();
    movement.textContent = "";
  }
}
function refresh() {
  movement.textContent = "";
  starposition = 1;
  buildTrack();
}

buildTrack();
