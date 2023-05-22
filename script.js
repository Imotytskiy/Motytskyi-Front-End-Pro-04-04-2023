import { textTitles, dataShop } from "./data.js";

function applyStyles(element) {
  element.classList.add("block");
}

const getId = document.getElementById("root");

(function () {
  let widthBlock = 15;
  for (let i = 1; i <= 3; i++) {
    widthBlock += widthBlock;
    let childBlock = document.createElement("div");
    childBlock.textContent = textTitles[i - 1];
    childBlock.style.width = `${widthBlock}%`;
    childBlock.classList.add("newdiv");
    getId.appendChild(childBlock);
  }
})();

(function () {
  dataShop.forEach((category) => {
    let categoryElement = document.createElement("div");
    applyStyles(categoryElement);
    categoryElement.textContent = category.name;
    getId.children[0].appendChild(categoryElement);
    categoryElement.addEventListener("click", function (event) {
      let initForSecondBlock = category.name;
      let currentCategory = dataShop.find(
        (cat) => cat.name === initForSecondBlock
      );
      getId.children[1].innerHTML = textTitles[1];
      getId.children[2].innerHTML = textTitles[2];
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
})();

function createButton() {
  let buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(function () {
      alert(textTitles[4]);
    });
    getId.children[1].innerHTML = textTitles[1];
    getId.children[2].innerHTML = textTitles[2];
  });
  applyStyles(buttonElement);
  buttonElement.classList.add("button-color");
  buttonElement.textContent = textTitles[3];
  getId.children[2].appendChild(buttonElement);
}
