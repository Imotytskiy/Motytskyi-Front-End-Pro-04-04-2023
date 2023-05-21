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
console.log("TEST", block2);
// let block3 = flexContainer.children[2];

let currentCategory = null;
let initForSecondBlock = null;

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
    console.log(`TEST`, category.name);
    initForSecondBlock = category.name;
    console.log(`TEST`, initForSecondBlock);
    currentCategory = dataShop.find((cat) => cat.name === initForSecondBlock);
    console.log(`TEST`, currentCategory);
    block2.innerHTML = blockTitles[1];
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
    });
  });
});

//   category.products.forEach((products) => {
//     let productElement = document.createElement("div");
//     productElement.style.padding = "10px 40px";
//     productElement.style.margin = "10px 20px";
//     productElement.style.background = "grey";
//     productElement.style.color = "white";
//     productElement.style.cursor = "pointer";
//     productElement.style.textAlign = "center";
//     productElement.style.borderRadius = "5px";
//     productElement.style.border = "none";
//     productElement.style.transitionDuration = "0.4s";
//     productElement.style.display = "block";
//     productElement.textContent = products.name;
//     block2.appendChild(productElement);
// });
// });
// })();

// import { blockTitles, dataShop } from "./categories.js";

// (function () {
//   var flexContainer = document.createElement("div");

//   flexContainer.id = "root";

//   flexContainer.style.display = "flex";
//   flexContainer.style.flexDirection = "row";
//   flexContainer.style.justifyContent = "space-around";

//   let widthBlock = 15;
//   for (var i = 1; i <= 3; i++) {
//     widthBlock += widthBlock;
//     let childBlock = document.createElement("div");
//     childBlock.textContent = blockTitles[i - 1];
//     childBlock.style.width = `${widthBlock}%`;
//     childBlock.style.textAlign = "center";
//     childBlock.style.border = "1px solid black";
//     childBlock.style.padding = "10px";
//     childBlock.style.margin = "10px";
//     flexContainer.appendChild(childBlock);
//   }

//   document.body.appendChild(flexContainer);

//   let block1 = flexContainer.children[0];
//   let block2 = flexContainer.children[1];
//   let block3 = flexContainer.children[2];

//   let initForSecondBlock = null;
//   let initForThirdBlock = null;

//   dataShop.forEach((category) => {
//     let categoryElement = document.createElement("div");
//     categoryElement.style.padding = "10px 40px";
//     categoryElement.style.margin = "10px 20px";
//     categoryElement.style.background = "grey";
//     categoryElement.style.color = "white";
//     categoryElement.style.cursor = "pointer";
//     categoryElement.style.textAlign = "center";
//     categoryElement.style.borderRadius = "5px";
//     categoryElement.style.border = "none";
//     categoryElement.style.transitionDuration = "0.4s";
//     categoryElement.style.display = "block";
//     categoryElement.textContent = category.name;
//     categoryElement.addEventListener("click", function (event) {
//       initForSecondBlock = category.name;
//       let currentCategory = dataShop.find(
//         (category) => category.name === initForSecondBlock
//       );
//       if (currentCategory) {
//         currentCategory.products.forEach((product) => {
//           let productsElement = document.createElement("div");
//           productsElement.style.padding = "10px 40px";
//           productsElement.style.margin = "10px 20px";
//           productsElement.style.background = "grey";
//           productsElement.style.color = "white";
//           productsElement.style.cursor = "pointer";
//           productsElement.style.textAlign = "center";
//           productsElement.style.borderRadius = "5px";
//           productsElement.style.border = "none";
//           productsElement.style.transitionDuration = "0.4s";
//           productsElement.style.display = "block";
//           productsElement.textContent = product.name;
//           // productsElement.addEventListener("click", function (event) {
//           //   initForSecondBlock = product.name;
//           //   console.log(`TEST`, product.name);
//           // });
//           block2.appendChild(productsElement);
//         });
//       }
//     }
//     });
//     block1.appendChild(categoryElement);
//   });

// if (initForSecondBlock != null) {
//   let currentCategory = dataShop.find(
//     (category) => category.name === initForSecondBlock
//   );
//   if (currentCategory) {
//     currentCategory.products.forEach((product) => {
//       let productsElement = document.createElement("div");
//       productsElement.style.padding = "10px 40px";
//       productsElement.style.margin = "10px 20px";
//       productsElement.style.background = "grey";
//       productsElement.style.color = "white";
//       productsElement.style.cursor = "pointer";
//       productsElement.style.textAlign = "center";
//       productsElement.style.borderRadius = "5px";
//       productsElement.style.border = "none";
//       productsElement.style.transitionDuration = "0.4s";
//       productsElement.style.display = "block";
//       productsElement.textContent = product.name;
//       // productsElement.addEventListener("click", function (event) {
//       //   initForSecondBlock = product.name;
//       //   console.log(`TEST`, product.name);
//       // });
//       block2.appendChild(productsElement);
//     });
//   }
// }

// console.log(dataShop);
