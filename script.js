import { textTitles, dataShop } from "./data.js";

const appContainer = document.getElementById("root");

const catContainer = document.getElementById("catContainer");
const prodContainer = document.getElementById("prodContainer");
const descrContainer = document.getElementById("descrContainer");
const formContainer = document.getElementById("formContainer");
// console.log(formContainer.style.width);
// console.log(descrContainer.style.width);
let descrContainerWidth = descrContainer.offsetWidth;
window.addEventListener("resize", () => {
  descrContainerWidth = descrContainer.offsetWidth;
  formContainer.style.width = descrContainerWidth + "px";
});

catContainer.textContent = textTitles.categories;
prodContainer.textContent = textTitles.goodsList;
descrContainer.textContent = textTitles.arcticleInfo;

const applyStyles = (element) => {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.classList.add("button");
  }
};

const createButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = textTitles.buy;
  applyStyles(buttonElement);
  descrContainer.appendChild(buttonElement);
  buttonElement.addEventListener("click", function (event) {
    formContainer.style.width = descrContainerWidth + "px";
    formContainer.style.display = "block";

    clearBlock();
  });
};

const clearBlock = () => {
  prodContainer.innerHTML = textTitles.goodsList;
  descrContainer.innerHTML = textTitles.arcticleInfo;
};

dataShop.forEach((category) => {
  const categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  catContainer.appendChild(categoryElement);
  categoryElement.addEventListener("click", makeCategory);
});

function makeCategory(event) {
  let currentCategory = dataShop.find(
    (category) => category.name === event.target.innerText
  );
  clearBlock();

  currentCategory.products.forEach((product) => {
    const productElement = document.createElement("div");
    applyStyles(productElement);
    productElement.textContent = product.name;
    prodContainer.appendChild(productElement);
    productElement.addEventListener("click", productSelect(product));
  });
}
function productSelect(product) {
  return function (event) {
    descrContainer.innerHTML = textTitles.arcticleInfo;

    let descriptionElement = document.createElement("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    descrContainer.appendChild(descriptionElement);
    createButton();
  };
}
