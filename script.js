"use strict";
function secCount() {
  let year = document.getElementById("year").value;
  let city = document.getElementById("city").value;
  let sport = document.getElementById("sport").value;
  hourStr = hourStr.replace(/,/g, ".");                     // можна прибрати валідація на index.html проходить там можна також зробити патерн
  if (/^\d+(\.\d+)?$/.test(hourStr)) {  
    const hoursNum = Number(hourStr);
    const sec = hoursNum * 3600;
    alert(`${hoursNum} годин складає ${sec} секунд`);
  } else {
    alert(`Вкажіть наприклад: 4`);
  }
}
