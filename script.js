// Перше завдання 

function outNumbers(event) {
  event.preventDefault(); 

  let from = parseFloat(document.getElementById("from").value);
  const to = parseFloat(document.getElementById("to").value);
  const step = parseFloat(document.getElementById("step").value);
  let arr = [];
  while (from <= to) {
      arr.push(from);
      from += step;
  }
  document.getElementById("output").value = arr.join(', ');
}
// Друге завдання

function dollarCost(event) {
    event.preventDefault();
    let kurs = parseFloat(document.getElementById("kurs").value);
    const max = parseFloat(document.getElementById("max").value);
    const stepDollar = parseFloat(document.getElementById("stepDollar").value);
    let arrDol = [];
    for (let i = stepDollar; i <= max; i+=stepDollar){
        let res = i*kurs;
        arrDol.push(res);
    }
    document.getElementById("out").value = arrDol.join(', ');
}
// Третє завдання

// Дане ціле число. Вивести всі цілі числа від 1 до 100, 
// квадрат яких не перевищує числа N
// function intOut() {
//     let max = +prompt("Введіть число не більше 100", "");
//     let i = 1;
//     let arr = [];
//     while (i <= 100) {
//          if ((i*i) <=  max) {
//             arr.push(i);
//             i++;
//          }
//          else{
//             break;
//          }
//     }
//     return(arr);
// }
// alert(intOut());

// Четверте завдання

// function primeNum() {
//    let num = +prompt("Введіть число", "");
//    let answer = `${num}, є простим числом`;
//    if (num === 1 || num === 0) {
//       answer = `${num}, не є простим числом`;
//    } else {
//       for(let i = 2; i < num; ++i ){
//          if (num % i === 0){
//             answer = `${num}, не є простим числом`;
//             break;
//          }
//       }
//    }
//    return answer; 
// }
// alert(primeNum());
//  П'яте завдання
// 
//  function exponentNum() {
//    let num = +prompt("Введіть число", "");
//    let answer = `можна`;
//    while(num !== 1 || num % 1 !== 0){
//          if (num % 3 !== 0){
//            answer = `не можна`;
//            break;
//          }
//           num = num / 3;
//    }
//    return answer;
//  }
//  alert(exponentNum());