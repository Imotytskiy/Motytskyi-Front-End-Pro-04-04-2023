"use strict";
//first level
// function secCount(){

//   let hourStr = prompt ("Вкажіть кількість годин",'');
//       hourStr = hourStr.replace(/,/g, ".");
//       if (/^\d+(\.\d+)?$/.test(hourStr)) {
//       const hoursNum = Number(hourStr);
//       const sec = hoursNum*3600;
//       const arr = [sec,hoursNum];
//       return arr;
//     }else{
//       alert(`Вкажіть кількість годин: 4, 5.5`)
//       secCount();
//     }}
// let seconds = secCount();
// alert(`${seconds[1]} годин складає ${seconds[0]} секунд`);
//second level
function secCount() {
  let hourStr = document.getElementById("hours").value;
  hourStr = hourStr.replace(/,/g, ".");                     // можна прибрати валідація на index.html проходить там можна також зробити патерн
  if (/^\d+(\.\d+)?$/.test(hourStr)) {  
    const hoursNum = Number(hourStr);
    const sec = hoursNum * 3600;
    alert(`${hoursNum} годин складає ${sec} секунд`);
  } else {
    alert(`Вкажіть наприклад: 4`);
  }
}