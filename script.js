import { blockTitles, dataShop } from "./data.js";

function applyStyles(element) {
  element.style.padding = "10px 40px";
  element.style.margin = "10px 20px";
  element.style.background = "grey";
  element.style.color = "white";
  element.style.cursor = "pointer";
  element.style.textAlign = "center";
  element.style.borderRadius = "5px";
  element.style.border = "none";
  element.style.transitionDuration = "0.4s";
  element.style.display = "block";
}

let widthBlock = 15;
for (let i = 1; i <= 3; i++) {
  widthBlock += widthBlock;
  let childBlock = document.createElement("div");
  childBlock.textContent = blockTitles[i - 1];
  childBlock.style.width = `${widthBlock}%`;
  childBlock.style.textAlign = "center";
  childBlock.style.border = "1px solid black";
  childBlock.style.padding = "10px";
  childBlock.style.margin = "10px";
  document.getElementById("root").appendChild(childBlock);
}

let block1 = document.getElementById("root").children[0];
let block2 = document.getElementById("root").children[1];
let block3 = document.getElementById("root").children[2];

let currentCategory = null;
let initForSecondBlock = null;
let initForThirdBlock = null;

dataShop.forEach((category) => {
  let categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  block1.appendChild(categoryElement);
  categoryElement.addEventListener("click", function (event) {
    initForSecondBlock = category.name;
    currentCategory = dataShop.find((cat) => cat.name === initForSecondBlock);
    block2.innerHTML = blockTitles[1];
    block3.innerHTML = blockTitles[2];
    currentCategory.products.forEach((product) => {
      let productElement = document.createElement("div");
      applyStyles(productElement);
      productElement.style.background = "grey";
      productElement.textContent = product.name;
      block2.appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        initForThirdBlock = product.description;
        block3.innerHTML = blockTitles[2];
        let descriptionElement = document.createElement("div");
        applyStyles(descriptionElement);
        descriptionElement.style.background = "grey";
        descriptionElement.textContent = product.description;
        block3.appendChild(descriptionElement);
        let buttonElement = document.createElement("button");
        buttonElement.addEventListener("click", function (event) {
          setTimeout(function () {
            alert("ТОВАР КУПЛЕНИЙ");
          }, 0);
          block2.innerHTML = blockTitles[1];
          block3.innerHTML = blockTitles[2];
        });
        applyStyles(buttonElement);
        buttonElement.style.background = "#00d2ff";
        buttonElement.textContent = "КУПИТИ";
        block3.appendChild(buttonElement);
      });
    });
  });
});
