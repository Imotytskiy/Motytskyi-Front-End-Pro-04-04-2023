"use strict";
const sports = [
  { kind: 'футбол', sportsmen: '"Ліонель Мессі", "Кріштіану Роналду", "Неймар"' },
  { kind: 'тенніс', sportsmen: '"Рафаель Надаль", "Роджер Федерер", "Новак Джокович"' },
  { kind: 'плавання', sportsmen: '"Майкл Фелпс", "Кейт Ледекі", "Місі Франклін"' },
];


function findSport(sport) {
  const kindOfSport = sports.find(item => item.kind === sport);
  if (kindOfSport) {
    return `Круто! Хочеш стати ${kindOfSport.sportsmen}?`;
  } else {
    return `Шкода, що Ви не захотіли обрати вид спорту`;
  }
}

const countriesAndCapitals = [
  { country: 'України', capital: 'Київ' },
  { country: 'США', capital: 'Вашингтон' },
  { country: 'Великої Британії', capital: 'Лондон' },
];

function findCapital(city) {
  const capital = countriesAndCapitals.find(item => item.capital === city);
  if (capital) {
    return `Ти живеш у столиці ${capital.country}`;
  } else {
    if (city === "") {
      return "Шкода, що Ви не захотіли ввести назву міста";
    } else {
      return `Ти живеш у місті ${city}, але нам не відомо, яка є його столиця`;
    }
}
}

function userPortrait() {
  let birthYear = document.getElementById("year").value;
  let city = document.getElementById("city").value;
  let sport = document.getElementById("sport").value;
  const now = new Date();
  let realYear = now.getFullYear() - birthYear;
  const age = realYear !== now.getFullYear()  ? `Вам ${realYear} років` : "Шкода, що Ви не захотіли ввести дату народження";
  city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  // city = city === "" ? "Шкода, що Ви не захотіли ввести назву міста" : city;
  sport = sport.toLowerCase();
  alert(`${age} ${findCapital(city)} ${findSport(sport)}`);
}