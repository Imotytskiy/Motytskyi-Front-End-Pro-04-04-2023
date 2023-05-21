import { blockTitles, dataShop } from "./categories.js";

// (function () {
var flexContainer = document.createElement("div");

flexContainer.id = "root";

flexContainer.style.display = "flex";
flexContainer.style.flexDirection = "row";
flexContainer.style.justifyContent = "space-around";

let widthBlock = 15;
for (var i = 1; i <= 3; i++) {
  widthBlock += widthBlock;
  let childBlock = document.createElement("div");
  childBlock.textContent = blockTitles[i - 1];
  childBlock.style.width = `${widthBlock}%`;
  childBlock.style.textAlign = "center";
  childBlock.style.border = "1px solid black";
  childBlock.style.padding = "10px";
  childBlock.style.margin = "10px";
  flexContainer.appendChild(childBlock);
}

document.body.appendChild(flexContainer);

let block1 = flexContainer.children[0];
let block2 = flexContainer.children[1];
let block3 = flexContainer.children[2];

let currentCategory = null;
let currentDescription = null;
let initForSecondBlock = null;
let initForThirdBlock = null;

dataShop.forEach((category) => {
  let categoryElement = document.createElement("div");
  categoryElement.style.padding = "10px 40px";
  categoryElement.style.margin = "10px 20px";
  categoryElement.style.background = "grey";
  categoryElement.style.color = "white";
  categoryElement.style.cursor = "pointer";
  categoryElement.style.textAlign = "center";
  categoryElement.style.borderRadius = "5px";
  categoryElement.style.border = "none";
  categoryElement.style.transitionDuration = "0.4s";
  categoryElement.style.display = "block";
  categoryElement.textContent = category.name;
  block1.appendChild(categoryElement);
  categoryElement.addEventListener("click", function (event) {
    initForSecondBlock = category.name;
    currentCategory = dataShop.find((cat) => cat.name === initForSecondBlock);
    block2.innerHTML = blockTitles[1];
    block3.innerHTML = blockTitles[2];
    currentCategory.products.forEach((product) => {
      let productElement = document.createElement("div");
      productElement.style.padding = "10px 40px";
      productElement.style.margin = "10px 20px";
      productElement.style.background = "grey";
      productElement.style.color = "white";
      productElement.style.cursor = "pointer";
      productElement.style.textAlign = "center";
      productElement.style.borderRadius = "5px";
      productElement.style.border = "none";
      productElement.style.transitionDuration = "0.4s";
      productElement.style.display = "block";
      productElement.textContent = product.name;
      block2.appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        initForThirdBlock = product.description;
        block3.innerHTML = blockTitles[2];
        let descriptionElement = document.createElement("div");
        descriptionElement.style.padding = "10px 40px";
        descriptionElement.style.margin = "10px 20px";
        descriptionElement.style.background = "grey";
        descriptionElement.style.color = "white";
        descriptionElement.style.cursor = "pointer";
        descriptionElement.style.textAlign = "center";
        descriptionElement.style.borderRadius = "5px";
        descriptionElement.style.border = "none";
        descriptionElement.style.transitionDuration = "0.4s";
        descriptionElement.style.display = "block";
        console.log(
          product.name,
          currentDescription,
          initForThirdBlock,
          initForSecondBlock
        );
        descriptionElement.textContent = product.description;
        block3.appendChild(descriptionElement);
      });
    });
  });
});
