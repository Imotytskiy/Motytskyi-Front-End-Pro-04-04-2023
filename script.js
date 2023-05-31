import { textTitles, dataShop } from "./data.js";

const appContainer = document.getElementById("root");
const catContainer = document.getElementById("catContainer");
const prodContainer = document.getElementById("prodContainer");
const descrContainer = document.getElementById("descrContainer");
const formContainer = document.getElementById("formContainer");
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
    descrContainerWidth >= 315
      ? (formContainer.style.width = descrContainerWidth + "px")
      : (formContainer.style.width = "315px");

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

//  script for form

function newPostChecker() {
  const postInput = document.getElementById("flexCheckDefault");
  const areaInput = document.getElementById("newPost");
  postInput.addEventListener("input", () => {
    areaInput.disabled = !postInput.checked;
    if (!postInput.checked) {
      areaInput.value = "";
      areaInput.placeholder = "заблоковано знову";
    } else {
      areaInput.placeholder = "Вкажіть номер складу";
    }
    areaInput.focus();
  });
}
newPostChecker();

function rangeInput() {
  const rangeInput = document.getElementById("customRange2");
  const rangeValue = document.getElementById("rangeValue");

  rangeInput.addEventListener("input", () => {
    document.getElementById("rangeValue").textContent = rangeInput.value;
  });
}
rangeInput();

(function () {
  const formDisable = document.getElementById("buyerform");

  formDisable.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formDisable);

    let string = "";
    formData.forEach((key, value) => {
      string += `${value}  :  ${key}<br><br>`;
    });

    document.getElementById(
      "formPost"
    ).innerHTML = `Iнформація про товар та про доставку<br><br>${string}`;

    for (let i = 0; i < formDisable.elements.length; i++) {
      formDisable.elements[i].disabled = true;
    }
  });
})();

// document.addEventListener("DOMContentLoaded", function () {
//   validateForm();
// });

//  validateForm() => {
//   let validate = true;
//   const rangeInput = document.getElementById("customRange2");
//   const rangeValue = document.getElementById("rangeValue");
//   const form = document.getElementById("buyerform");
//   form.addEventListener("submit", function (event) {
//     let numberInput = document.querySelector('input[type="number"]');
//     let textInputs = document.querySelectorAll('input[type="text"]');
//     let commentInput = document.querySelector("textarea");

//     if (
//       isNaN(numberInput.value) &&
//       document.getElementById("flexCheckDefault").checked
//     ) {
//       event.preventDefault();
//       alert("Будь ласка, вкажіть номер складу");
//       validate = false;
//     }

//     if (commentInput.value.trim() === "") {
//       event.preventDefault();
//       alert("Будь ласка, заповніть поле коментар");
//       validate = false;
//     }

//     textInputs.forEach((textInput) => {
//       if (textInput.value.trim() === "") {
//         event.preventDefault();
//         alert("Будь ласка, заповніть це поле");
//         validate = false;
//       }
//     });
//   });
// }
