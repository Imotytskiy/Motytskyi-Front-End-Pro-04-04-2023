import { textTitles, dataShop } from "./data.js";

const appContainer = document.getElementById("root");

const catContainer = appContainer.appendChild(
  document.createElement("section")
);
const prodContainer = appContainer.appendChild(
  document.createElement("section")
);
const descrContainer = appContainer.appendChild(
  document.createElement("section")
);

catContainer.textContent = textTitles.categories;
prodContainer.textContent = textTitles.goodsList;
descrContainer.textContent = textTitles.arcticleInfo;

const applyStyles = (element) => {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.textContent = textTitles.buy;
    element.classList.add("button");
    descrContainer.appendChild(element);
  }
};

const createButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", function (event) {
    setTimeout(() => {
      alert(textTitles.buyed);
    });
    clearBlock();
  });
  applyStyles(buttonElement);
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
