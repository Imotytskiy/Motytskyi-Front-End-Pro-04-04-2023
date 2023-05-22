import { textTitles, dataShop } from "./data.js";

const getId = document.getElementById("root");
const createDiv = document.createElement("div");

function applyStyles(element) {
  element.classList.add("block");
}

<<<<<<< HEAD
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
=======
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
    const categoryElement = document.createElement("div");
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
>>>>>>> 68147588a7e84c27a4db2323f630342c3b737eec

function createButton() {
  let buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(function () {
      alert(textTitles[4]);
    });
<<<<<<< HEAD
    cleanBlock();
=======
    getId.children[1].innerHTML = textTitles[1];
    getId.children[2].innerHTML = textTitles[2];
>>>>>>> 68147588a7e84c27a4db2323f630342c3b737eec
  });
  applyStyles(buttonElement);
  buttonElement.classList.add("button-color");
  buttonElement.textContent = textTitles[3];
  getId.children[2].appendChild(buttonElement);
}
