const seats = [
  ["🟩", "🟩", "🔴", "🟩"],
  ["🔴", "🟩", "🟩", "🟩"],
  ["🟩", "🟩", "🟩", "🔴"],
];
const row = 1;
const seat = 3;
for (let i = 0; i < seats.length; i++) {
  for (let j = 0; j < seats[i].length; j++) {
    if (i + 1 === row && j + 1 === seat) {
      if (seats[i][j] === "🟩") {
        console.log(`✅ Эгнээ ${row}, суудал ${seat} сул байна`);
      } else {
        console.log(`❌ Эгнээ ${row}, суудал ${seat} захиалагдсан`);
      }
    }
  }
}

const classroom = [
  ["Бат", "Сараа", "Ану"], // урд эгнээ
  ["Болд", "Тэмүүлэн", "Нараа"], // арын эгнээ
];

console.log(
  `🏫 ${classroom.length} эгнээ × ${classroom[0].length} ширээ = 6 сурагч`,
);
const hoid = classroom.length - 1;
const baruunHoid = classroom[hoid].length - 1;
console.log(`↘️ Хамгийн ард, баруун талд: ${classroom[hoid][baruunHoid]}`);

const urd = 0;
const gol = classroom[urd].length - 2;
console.log(`⬆️ Урд эгнээний голд: ${classroom[urd][gol]}`);

const pixels = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

for (let i = 0; i < pixels.length; i++) {
  for (let g = 0; g < pixels[i].length; g++) {
    if (pixels[i][g] === 0) {
      pixels[i][g] = "⬜";
    } else {
      pixels[i][g] = "🟥";
    }
  }
}
console.log(pixels);

const names = ["Бат", "Сараа", "Ану"];
const steps = [
  [8000, 6500, 10000],
  [12000, 9000, 7000],
  [5000, 4000, 6000],
];

let best = 0;
let bestMember = 0;

for (let personIndex = 0; personIndex < names.length; personIndex++) {
  let alham = 0;
  for (let a = 0; a < steps[personIndex].length; a++) {
    alham += steps[personIndex][a];
  }
  if (best < alham) {
    best = alham;
    bestMember = personIndex;
  }
  console.log(`${names[personIndex]}: ${alham} алхам`);
}

console.log(` 🏆 Хамгийн их: ${names[bestMember]}`);

const subjects = ["Мат", "Физ", "Англи"];
const scores = [
  [90, 80, 70], // Бат
  [60, 95, 86], // Сараа
  [75, 65, 99], // Ану
];

