"use strict";
// First level

// let sum = 0;

// for (let i = 1; i <= 3; ++i) {
//    sum = sum + Number(prompt(`Введіть число ${i}`,""));
// };
// alert((sum/3).toFixed(2));

// Second level

const numRegex = /^-?\d*\.?\d+(e[-+]?\d+)?$/;
let num,
  sum = 0;
for (let i = 1; i <= 3; ++i) {
  num = Number(prompt(`Введіть число ${i}`, "").replace(/,/g, "."));
  if (numRegex.test(num)) {
    sum += num;
  } else {
    alert("Тільки числа:");
    i--;
  }
}
alert(`Середнє арифметичне ${(sum / 3).toFixed(2)}`);
