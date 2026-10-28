const raw = "   BaT_ErDeNe   ";
const correctRaw = raw.toLowerCase().trim();
console.log(correctRaw);
console.log(`${correctRaw.length} temdegt`);

const email = "bat@gmail.com";
const correctMail = email.includes("@");
const correctEmail = email.includes(".");
if (correctMail === true && correctEmail === true) {
  console.log(`✅ Зөв имэйл`);
} else {
  console.log(`❌ Имэйл буруу байна`);
}

const phone = "99112233";
const code = phone.slice(0, 4) + "****";
if (code.length === 8) {
  console.log(code);
} else {
  console.log(`⚠️ Дугаар 8 оронтой байх ёстой`);
}

const fullName = "Бат Эрдэнэ";
const firstAlphabet = fullName.split(" ");
console.log(`${firstAlphabet[0][0]}.${firstAlphabet[1][0]}`);

const template = "Сайн уу, {name}! Таны захиалга {time}-д бэлэн болно.";
const name = "Бат";
const time = "14:30";
const result = template.replace("{name}", name).replace("{time}", time);
console.log(result);

const cart = ["🍎", "🥛"];
cart.push("🍞");
cart.push("🧀");
cart.pop();
const cartIndex = cart.length;
console.log(`🛒 ${cart.join("")}`);
console.log(`${cart.length} бараа`);

const playlist = ["Өглөө", "Бороо", "Од"];
const song = "Бороо";
const checkedPlaylist = playlist.includes(song);
if (checkedPlaylist === true) {
  console.log(`⚠️ «${song}» аль хэдийн байна`);
  console.log(`${playlist.join("·")}`);
} else {
  console.log(`✅ «${song}» нэмэгдлээ`);
  console.log(`${playlist.join("·")}`);
}

const queue = ["Бат", "Сараа", "Ану", "Болд"];
const me = "Ану";
const checkedList = queue.includes(me);
const number = queue.indexOf(me) + 1;
if (checkedList === true) {
  console.log(` 🧾 ${me} — дугаар ${number}, өмнө ${number - 1} хүн
`);
} else {
  console.log(`😶 ${me} дараалалд алга`);
}

const todos = [
  "📚 Гэрийн даалгавар",
  "⚽ Бөмбөг тоглох",
  "📖 Ном унших",
  "🧹 Өрөө цэвэрлэх",
];
const done = "⚽ Бөмбөг тоглох";
const num = todos.indexOf(done);
if (num === -1) {
  console.log(`😶 «${done}» жагсаалтад алга`);
}
const answer = confirm(`Устгах уу: ${done}`);
if (answer) {
  todos.splice(num, 1);
  console.log(`🗑 Устгалаа`);
} else {
  console.log(`› ↩️ Цуцаллаа`);
}
console.log(todos.join(" · "));

const sentence = "  монгол улсын наадам  ";
const after = sentence.trim().split(" ");
let b = "#";
for (let i = 0; i < after.length; i++) {
  const a = after[i][0].toUpperCase() + after[i].slice(1);
  b += a;
}
console.log(b);

const text = "Монгол хэл бол маш баян хэл";
const target = "хэл";
const longText = text.trim().split(" ");
console.log(`📝 ${longText.length} үг`);
let textBox = "";
for (let i = 0; i < longText.length; i++) {
  if (longText[i].length > textBox) {
    textBox = longText[i];
    console.log(`📏 Хамгийн урт: ${textBox} (${textBox.length} үсэг)`);
  }
}
let howMuch = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === target) {
    howMuch++;
  }
}
console.log(`🔁 «${target}» ${howMuch} удаа`);

const password = "Pinecone2026";
const username = "bat";
let nohtsol = 0;
if (password.length >= 8) {
  nohtsol++;
  console.log(`✅ 8+ тэмдэгт`);
} else {
  console.log(`❌ 8-аас богино
`);
}

let too = 0;
for (let i = 0; i < password.length; i++) {
  if (Number(password[i]) > 0) {
    too++;
  }
}
if (too > 0) {
  nohtsol++;
  console.log(`✅ Тоо орсон`);
} else {
  console.log(`❌ Тоо алга`);
}

let tomUseg = 0;
for (let i = 0; i < password.length; i++) {
  if ((password[i] = password[i].toUpperCase)) {
    tomUseg++;
  }
}
if (tomUseg > 0) {
  nohtsol++;
  console.log(`✅ Том үсэг орсон`);
} else {
  console.log(`❌ Том үсэг алга`);
}

const nerShalgah = password.includes(username);
if (nerShalgah === false) {
  nohtsol++;
  console.log(`✅ Нэвтрэх нэр ороогүй`);
} else {
  console.log(`❌ Нэвтрэх нэрээ бүү ашигла`);
}
if (nohtsol === 4) {
  console.log(`💪 Хүчтэй`);
} else if (nohtsol < 4 && nohtsol >= 2) {
  console.log(`🙂 Дунд`);
} else {
  (console, log(`😟 Сул`));
}

const commands = [
  "add 🍎",
  "add 🥛",
  "add 🍎",
  "remove 🥛",
  "remove 🧀",
  "add 🍞",
];
