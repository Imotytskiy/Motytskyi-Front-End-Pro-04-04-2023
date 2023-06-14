let weather = new XMLHttpRequest();
weather.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
  true
);
weather.onreadystatechange = function () {
  if (weather.readyState === 4) {
    if (weather.status === 200) {
      let readyWeather = JSON.parse(weather.responseText);
      console.log(readyWeather);
    } else {
      console.error("Error: " + weather.status);
    }
  }
};
weather.send();

window.onload = function () {
  document.getElementById("city").innerText = readyWeather.name;
  document.getElementById("temp").innerText = readyWeather.main.temp;
  document.getElementById("pressure").innerText = readyWeather.main.humidity;
  document.getElementById("description").innerText = readyWeather.description;
  document.getElementById("humidity").innerText = readyWeather.humidity;
  document.getElementById("speed").innerText = readyWeather.wind.speed;
  document.getElementById("dec").innerText = readyWeather.wind.dec;
  document.getElementById("icon").src =
    "http://openweathermap.org/img/w/10d.png";
};
