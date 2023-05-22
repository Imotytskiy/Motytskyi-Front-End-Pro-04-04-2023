import { textTitles, dataShop } from "./data.js";

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
  childBlock.textContent = textTitles[i - 1];
  childBlock.style.width = `${widthBlock}%`;
  childBlock.style.textAlign = "center";
  childBlock.style.border = "1px solid black";
  childBlock.style.padding = "10px";
  childBlock.style.margin = "10px";
  document.getElementById("root").appendChild(childBlock);
}

dataShop.forEach((category) => {
  let categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  document.getElementById("root").children[0].appendChild(categoryElement);
  categoryElement.addEventListener("click", function (event) {
    let initForSecondBlock = category.name;
    let currentCategory = dataShop.find(
      (cat) => cat.name === initForSecondBlock
    );
    document.getElementById("root").children[1].innerHTML = textTitles[1];
    document.getElementById("root").children[2].innerHTML = textTitles[2];
    currentCategory.products.forEach((product) => {
      let productElement = document.createElement("div");
      applyStyles(productElement);
      productElement.textContent = product.name;
      document.getElementById("root").children[1].appendChild(productElement);
      productElement.addEventListener("click", function (event) {
        let initForThirdBlock = product.description;
        document.getElementById("root").children[2].innerHTML = textTitles[2];
        let descriptionElement = document.createElement("div");
        applyStyles(descriptionElement);
        descriptionElement.textContent = product.description;
        document
          .getElementById("root")
          .children[2].appendChild(descriptionElement);
        let buttonElement = document.createElement("button");
        buttonElement.addEventListener("click", function (event) {
          setTimeout(function () {
            alert(textTitles[4]);
          });
          document.getElementById("root").children[1].innerHTML = textTitles[1];
          document.getElementById("root").children[2].innerHTML = textTitles[2];
        });
        applyStyles(buttonElement);
        buttonElement.style.background = "#00d2ff";
        buttonElement.textContent = textTitles[3];
        document.getElementById("root").children[2].appendChild(buttonElement);
      });
    });
  });
});
