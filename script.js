const appContainer = document.getElementById("root");

const firstButton = document.createElement("button");
firstButton.textContent = "Реалізувати перевірку на http/https";
appContainer.appendChild(firstButton);

const inputElement = document.createElement("input");

inputElement.setAttribute("placeholder", "www.example.com");
appContainer.appendChild(inputElement);

const secondButton = document.createElement("button");
secondButton.textContent = "Переадресовується на інший сайт";
appContainer.appendChild(secondButton);

let url = "";
const validRedirect = (urlFromInput) => {
  if (urlFromInput.trim() === "") {
    alert("Please enter a valid URL, for example: www.amazon.com");
    return;
  }

  const regex = /^(https?:\/\/)/;
  url = regex.test(urlFromInput) ? urlFromInput : "http://" + urlFromInput;
  console.log(url, regex.test(urlFromInput));
  return (inputElement.value = url);
};

firstButton.addEventListener("click", () => {
  validRedirect(inputElement.value);
});

secondButton.addEventListener("click", () => {
  console.log(url);
  window.open(url, "_blank");
});
