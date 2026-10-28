const info = document.getElementById("info");
const cards = [
  "🐶",
  "🐸",
  "🦊",
  "🐱",
  "🐼",
  "🐶",
  "🐵",
  "🦊",
  "🐱",
  "🐵",
  "🐸",
  "🐼",
];

let match = 0;
let first = null;
let second = null;
let isLocked = false;
function flip(index) {
  const card = document.getElementById("card" + index);
  if (card.textContent === "❓") {
    if (first === null) {
      first = index;
      const card = document.getElementById("card" + index);
      card.textContent = cards[index];
      return;
    }
    if (second === null) {
      second = index;
      const card = document.getElementById("card" + index);
      card.textContent = cards[index];
      if (cards[first] === cards[second]) {
        match++;
        info.textContent = `Олсон хос: ${match} /6`;
        first = null;
        second = null;
        if (match === 6) {
          info.textContent = "🎉 Congratulaions!";
        }
      } else {
        setTimeout(flipback, 1000);
      }
    }
  }
}
function flipback() {
  const firstCard = document.getElementById("card" + first);
  const secondCard = document.getElementById("card" + second);
  firstCard.textContent = "❓";
  secondCard.textContent = "❓";
  first = null;
  second = null;
}
function hideCard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.getElementById("card" + i);
    card.textContent = "❓";
  }
}

function seeCards() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.getElementById("card" + i);
    card.textContent = cards[i];
    setTimeout(hideCard, 3000);
  }
}
