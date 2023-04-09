"use strict";
//second level
function secCount() {
  let hourStr = document.getElementById("hours").value;
  hourStr = hourStr.replace(/,/g, ".");
  if (/^\d+(\.\d+)?$/.test(hourStr)) {
    const hoursNum = Number(hourStr);
    const sec = hoursNum * 3600;
    alert(`${hoursNum} годин складає ${sec} секунд`);
  } else {
    alert(`Вкажіть кількість годин: 4, 5.5`);
  }
}