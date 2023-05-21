const parentElement = document.querySelector("body");
parentElement.style.backgroundColor = "#89CFF0";
parentElement.style.marginTop = "20%";
parentElement.style.display = "flex";
parentElement.style.justifyContent = "space-around";
parentElement.style.alignItems = "center";

const firstButton = document.createElement("button");
firstButton.textContent = "Реалізувати перевірку на http/https";
firstButton.setAttribute("type", "submit");
parentElement.appendChild(firstButton);

const inputElement = document.createElement("input");
inputElement.setAttribute("type", "url");
inputElement.setAttribute("name", "url");
inputElement.setAttribute("id", "url");
inputElement.setAttribute("placeholder", "www.example.com");
inputElement.setAttribute("size", "0");
parentElement.appendChild(inputElement);

const secondButton = document.createElement("button");
secondButton.textContent = "Переадресовується на інший сайт";
secondButton.setAttribute("type", "button");

parentElement.appendChild(secondButton);

let url = "";

function validRedirect(urlFromInput) {
  if (urlFromInput.trim() === "") {
    alert("Ведіть коректно URL наприклад www.amazon.com");
  }
  if (
    !urlFromInput.startsWith("http://") &&
    !urlFromInput.startsWith("https://")
  ) {
    url = "http://" + urlFromInput;
  } else {
    url = urlFromInput;
  }
  inputElement.value = url;
  return url;
}

firstButton.addEventListener("click", function () {
  const urlFromInput = inputElement.value;
  validRedirect(urlFromInput);
});

secondButton.addEventListener("click", function () {
  window.open(url, "_blank");
});
