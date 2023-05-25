const appContainer = document.getElementById("root");

const firstButton = document.createElement("button");
firstButton.id = "checkButton";
firstButton.textContent = "Реалізувати перевірку на http/https";
appContainer.appendChild(firstButton);

const inputElement = document.createElement("input");
inputElement.setAttribute("placeholder", "www.example.com");
appContainer.appendChild(inputElement);

const secondButton = document.createElement("button");
secondButton.textContent = "Переадресовується на інший сайт";
secondButton.id = "redirectButton";
appContainer.appendChild(secondButton);

let url = "";
const validRedirect = (urlFromInput) => {
  let regex = /^(https?:\/\/)/;
  if (urlFromInput.trim() === "") {
    alert(
      "Будь ласка, введіть дійсну електронну адресу наприклад: www.amazon.com"
    );
    return;
  } else {
    url = regex.test(urlFromInput) ? urlFromInput : "http://" + urlFromInput;
    return url;
  }
};

document.addEventListener("click", (event) => {
  if (event.target.id === "checkButton") {
    validRedirect(inputElement.value);
  } else if (event.target.id === "redirectButton") {
    window.open(url, "_blank");
  }
});
