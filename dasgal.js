const topic = document.getElementById("topic");

function greetByHour(name, hour) {
  if (hour >= 0 && hour <= 12) {
    console.log(`☀️ Өглөөний мэнд, ${name}`);
  } else if (hour > 12 && hour <= 18) {
    console.log(`🌤 Өдрийн мэнд, ${name}`);
  } else {
    console.log(`🌙 Оройн мэнд, ${name}`);
  }
}
greetByHour("Бат", 9);
greetByHour("Сараа", 14);
greetByHour("Ану", 20);

function stars(count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += "⭐️";
  }
  console.log(result);
}

stars(3);
stars(5);
stars(1);

function countdown(sekund) {
  for (let i = sekund; i >= 1; i--) {
    console.log(i);
  }
  console.log("🚀 Хөөрлөө!");
}
countdown(3);
countdown(1);

function ticketPrice(age) {
  if (age >= 0 && age <= 6) {
    console.log(`🎟 ${age} нас: Үнэгүй 🎈`);
  } else if (age > 6 && age <= 18) {
    console.log(`🎟 ${age} нас: 3000₮`);
  } else if (age > 18 && age <= 60) {
    console.log(`🎟 ${age} нас: 6000₮`);
  } else {
    console.log(`🎟 ${age} нас: 2000₮`);
  }
}
ticketPrice(4);
ticketPrice(12);
ticketPrice(30);
ticketPrice(65);

function table(n, upTo) {
  for (let i = 1; i <= upTo; i++) {
    console.log(`${n} x ${i} = ${n * i} `);
  }
}
table(7, 3);
table(9, 2);

function evens(from, to) {
  let box = "";
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      box += i + " ";
    }
  }
  console.log(box);
}

evens(1, 10);
evens(15, 20);

function countDivisible(n, d) {
  let numberBox = 0;
  for (let i = 1; i <= n; i++) {
    if (i % d === 0) {
      numberBox++;
    }
  }
  console.log(`Хуваагч ${d}: 1–${n} хооронд ${numberBox} тоо`);
}

countDivisible(20, 3);
countDivisible(100, 7);
countDivisible(5, 6);

function sumList(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(`Нийлбэр: ${sum}`);
}

sumList([1, 2, 3]);
sumList([10, 20, 30, 40]);
sumList([]);

function maxOf(number) {
  let ihToo = number[0];
  for (let i = 1; i < number.length; i++) {
    if (ihToo < number[i]) {
      ihToo = number[i];
    }
  }
  console.log(`Хамгийн их: ${ihToo}`);
}

maxOf([3, 9, 2]);
maxOf([-5, -2, -9]);

function attendance(names, present) {
  let irts = 0;
  for (let i = 0; i < present.length; i++) {
    if (present[i] === true) {
      irts++;
      console.log(`✅ ${names[i]}`);
    } else {
      console.log(`❌ ${names[i]}`);
    }
  }
  console.log(`Ирц: ${irts} / 4`);
}

attendance(["Бат", "Сараа", "Ану", "Болд"], [true, false, true, true]);
function electricityBill(kwh) {
  let bill = 0;
  if (kwh <= 100) {
    bill = kwh * 150;
  } else if (kwh > 100 && kwh <= 200) {
    bill = 100 * 150 + (kwh - 100) * 200;
  } else {
    bill = 100 * 150 + 100 * 200 + (kwh - 200) * 300;
  }
  console.log(`⚡ ${kwh} кВт·ц → ${bill}₮`);
}

electricityBill(80);
electricityBill(150);
electricityBill(260);
electricityBill(100);

function reverseLine(names) {
  let nameBox = "";
  for (let i = names.length - 1; i >= 0; i--) {
    if (names.length === 0) {
      nameBox = nameBox + "Hooson";
    } else {
      nameBox = nameBox + (names[i] + "·");
    }
  }
  console.log(nameBox);
}

reverseLine(["Бат", "Сараа", "Ану", "Болд"]);
reverseLine(["Өглөө", "Өдөр"]);
reverseLine([]);

function findAll(items, target) {
  let fruitBox = "";
  for (let i = 0; i < items.length; i++) {
    let fruit = 0;
    if (items[i] === target) {
      fruit++;
      if (fruit === 0) {
        fruitBox = fruitBox + "oldsongui";
      } else {
        fruitBox = fruitBox + (i + 1) + ",";
      }
    }
  }
  console.log(`${target} → ${fruitBox}`);
}

findAll(["🍎", "🍌", "🍎", "🍇", "🍎"], "🍎");
findAll(["🍎", "🍌", "🍎", "🍇", "🍎"], "🍇");
findAll(["🍎", "🍌"], "🥝");

function stats(){
    for(let i=0; i<stats.length;i++){
        
    }
}

stats([4, 9, 2, 5]);
stats([-3, -7, -2]);