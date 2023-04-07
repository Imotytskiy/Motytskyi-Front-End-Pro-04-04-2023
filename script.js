"use strict";
//first level
function getResult() {
  const numRegex = /^-?\d*\.?\d+$/; // не треба використовувати числа 34+EX453;

  let firstNum = prompt("Введіть перше число", "");
  let secondNum = prompt("Введіть друге число", "");

  if (numRegex.test(firstNum) && numRegex.test(secondNum)) {
    const num1 = Number(firstNum);   // приводим до типу Number
    const num2 = Number(secondNum);

    const plus = num1 + num2;
    const minus = num1 - num2;
    const multy = num1 * num2;
    let div = num1 / num2;   // якщо поділимо но ноль то в div зайде Infinity

    if (!isFinite(div)){
      div = "на нуль ділити неможна";
    }else{
      div = `${firstNum} / ${secondNum} = ${div}`;
    }
    
    return (`Користувач ввів ${firstNum} і ${secondNum}:\n ${firstNum} + ${secondNum} = ${plus}\n ${firstNum} - ${secondNum} = ${minus}\n ${firstNum} * ${secondNum} = ${multy}\n ${div}`);
  } else {
    alert("Введіть будь-ласка два числа");
    return getResult();
  }
}

let decision = getResult();
alert(decision);s