import { textTitles, dataShop } from "./data.js";

const appContainer = document.getElementById("root");

const catContainer = appContainer.appendChild(document.createElement("span"));
const prodContainer = appContainer.appendChild(document.createElement("span"));
const descrContainer = appContainer.appendChild(document.createElement("span"));

catContainer.textContent = textTitles[0];
prodContainer.textContent = textTitles[1];
descrContainer.textContent = textTitles[2];

const createNode = (teg) => {
  return document.createElement(teg);
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
  allForButton(buttonElement);
};

const applyStyles = (element) => {
  element.classList.add("block");
};
const allForButton = (element) => {
  element.textContent = textTitles[3];
  element.classList.add("button");
  descrContainer.appendChild(element);
};

const clearBlock = () => {
  prodContainer.innerHTML = textTitles[1];
  descrContainer.innerHTML = textTitles[2];
};

dataShop.forEach((category) => {
  const categoryElement = createNode("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  catContainer.appendChild(categoryElement);
  categoryElement.addEventListener("click", makeCategory);
});

function makeCategory(event) {
  let initForSecondBlock = event.target.innerText;
  let currentCategory = dataShop.find((cat) => cat.name === initForSecondBlock);
  clearBlock();

  currentCategory.products.forEach((product) => {
    const productElement = createNode("div");
    applyStyles(productElement);
    productElement.textContent = product.name;
    prodContainer.appendChild(productElement);
    productElement.addEventListener("click", productSelect(product));
  });
}

function productSelect(product) {
  return function (event) {
    descrContainer.innerHTML = textTitles[2];

    let descriptionElement = createNode("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    descrContainer.appendChild(descriptionElement);
    createButton();
  };
}
