// Перше завдання 

function outNumbers() {
    let i = 20;
    let arr = [];
    while (i <= 30) {
        arr.push(i);
        i+=0.5;
    }
  return alert(arr);
}
outNumbers();

// Друге завдання

// function dollarCost() {
//     let kurs = 27;
//     let arr = [];
//     for (let i = 10; i <= 100; i+=10){
//         let res = i*kurs;
//         arr.push(res);
//     }
//     return alert(arr);
// }
// dollarCost();

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