import { textTitles, dataShop } from "./data.js";

const getId = document.getElementById("root");

const createNode = (teg) => {
  return document.createElement(teg);
};

const applyStyles = (element) => {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.textContent = textTitles[3];
    element.classList.add("button");
    getId.children[2].appendChild(element);
  }
};

const clearBlock = () => {
  getId.children[1].innerHTML = textTitles[1];
  getId.children[2].innerHTML = textTitles[2];
};

const createButton = () => {
  const buttonElement = createNode("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(() => {
      alert(textTitles[4]);
    });
    clearBlock();
  });
  applyStyles(buttonElement);
};

for (let i = 1; i <= 3; i++) {
  let childBlock = createNode("span");
  childBlock.textContent = textTitles[i - 1];
  childBlock.classList.add("span");
  getId.appendChild(childBlock);
}

dataShop.forEach((category) => {
  const categoryElement = createNode("div");
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
      let productElement = createNode("div");
      applyStyles(productElement);
      productElement.textContent = product.name;

      getId.children[1].appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        getId.children[2].innerHTML = textTitles[2];
        let descriptionElement = createNode("div");
        applyStyles(descriptionElement);
        descriptionElement.textContent = product.description;
        getId.children[2].appendChild(descriptionElement);
        createButton();
      });
    });
  });
});
