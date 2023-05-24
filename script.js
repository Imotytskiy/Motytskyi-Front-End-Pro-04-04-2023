const appContainer = document.getElementById("root");

const firstButton = document.createElement("button");
firstButton.textContent = "Реалізувати перевірку на http/https";
firstButton.setAttribute("type", "submit");
appContainer.appendChild(firstButton);

const inputElement = document.createElement("input");
inputElement.setAttribute("type", "url");
inputElement.setAttribute("name", "url");
inputElement.setAttribute("id", "url");
inputElement.setAttribute("placeholder", "www.example.com");
inputElement.setAttribute("size", "0");
appContainer.appendChild(inputElement);

const secondButton = document.createElement("button");
secondButton.textContent = "Переадресовується на інший сайт";
secondButton.setAttribute("type", "button");

appContainer.appendChild(secondButton);

let url = "";

const validRedirect = (urlFromInput) => {
  if (urlFromInput.trim() === "") {
    return alert("Ведіть коректно URL наприклад www.amazon.com");
  }
  !urlFromInput.startsWith("http://") && !urlFromInput.startsWith("https://")
    ? (url = "http://" + urlFromInput)
    : (url = urlFromInput);
  return (inputElement.value = url);
};

firstButton.addEventListener("click", function () {
  const urlFromInput = inputElement.value;
  validRedirect(urlFromInput);
});

secondButton.addEventListener("click", function () {
  window.open(url, "_blank");
});
