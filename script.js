import { textTitles, dataShop } from "./data.js";

const getId = document.getElementById("root");
const createDiv = document.createElement("div");

function applyStyles(element) {
  element.classList.add("block");
}

function cleanBlock() {
  getId.children[1].innerHTML = textTitles[1];
  getId.children[2].innerHTML = textTitles[2];
}

(function () {
  let widthBlock = 15;
  for (let i = 1; i <= 3; i++) {
    widthBlock += widthBlock;
    let childBlock = createDiv;
    childBlock.textContent = textTitles[i - 1];
    childBlock.style.width = `${widthBlock}%`;
    childBlock.classList.add("newdiv");
    getId.appendChild(childBlock);
  }
})();

dataShop.forEach((category) => {
  const categoryElement = createDiv;
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  getId.children[0].appendChild(categoryElement);

  categoryElement.addEventListener("click", function (event) {
    let initForSecondBlock = category.name;
    let currentCategory = dataShop.find(
      (cat) => cat.name === initForSecondBlock
    );
    cleanBlock();

    currentCategory.products.forEach((product) => {
      let productElement = createDiv;
      applyStyles(productElement);
      productElement.textContent = product.name;
      getId.children[1].appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        getId.children[2].innerHTML = textTitles[2];
        let descriptionElement = createDiv;
        applyStyles(descriptionElement);
        descriptionElement.textContent = product.description;
        getId.children[2].appendChild(descriptionElement);
        createButton();
      });
    });
  });
});

function createButton() {
  let buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(function () {
      alert(textTitles[4]);
    });
    cleanBlock();
  });
  applyStyles(buttonElement);
  buttonElement.classList.add("button-color");
  buttonElement.textContent = textTitles[3];
  getId.children[2].appendChild(buttonElement);
}
