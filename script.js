import { textTitles, dataShop } from "./data.js";

const getId = document.getElementById("root");

const applyStyles = (element) => {
  element.classList.add("block");
  if (element === "button") {
    buttonElement.classList.add("button");
  }
};

const clearBlock = () => {
  getId.children[1].innerHTML = textTitles[1];
  getId.children[2].innerHTML = textTitles[2];
};

for (let i = 1; i <= 3; i++) {
  let childBlock = document.createElement("span");
  childBlock.textContent = textTitles[i - 1];
  childBlock.classList.add("span");
  document.getElementById("root").appendChild(childBlock);
}

dataShop.forEach((category) => {
  const categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;

  getId.children[0].appendChild(categoryElement);
  categoryElement.addEventListener("click", function (event) {
    let initForSecondBlock = category.name;
    let currentCategory = dataShop.find(
      (cat) => cat.name === initForSecondBlock
    );
    clearBlock();

    currentCategory.products.forEach((product) => {
      let productElement = document.createElement("div");
      applyStyles(productElement);
      productElement.textContent = product.name;

      getId.children[1].appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        getId.children[2].innerHTML = textTitles[2];
        let descriptionElement = document.createElement("div");
        applyStyles(descriptionElement);
        descriptionElement.textContent = product.description;
        getId.children[2].appendChild(descriptionElement);
        createButton();
      });
    });
  });
});

const createButton = () => {
  let buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(() => {
      alert(textTitles[4]);
    });
    clearBlock();
  });
  applyStyles(buttonElement);
  buttonElement.textContent = textTitles[3];
  buttonElement.classList.add("button");
  getId.children[2].appendChild(buttonElement);
};
