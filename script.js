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
    if (descrContainerWidth >= 315) {
      formContainer.style.width = descrContainerWidth + "px";
    } else {
      formContainer.style.width = "315px";
    }
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
  postInput.addEventListener("input", function () {
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

  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = rangeInput.value;
  });
}
rangeInput();

const formDisable = document.getElementById("buyerform");

formDisable.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formDisable);

  const firstNameInput = document.getElementById("validationCustom01");
  const lastNameInput = document.getElementById("validationCustom02");
  const middleNameInput = document.getElementById("validationCustom03");
  const newPostCheckbox = document.getElementById("flexCheckDefault");
  const rangeInput = document.getElementById("customRange2");

  formData.append("Ім'я", firstNameInput.value);
  formData.append("Прізвище", lastNameInput.value);
  formData.append("По-батькові", middleNameInput.value);
  formData.append("Склад Нової пошти для надсилання", newPostCheckbox.checked);
  formData.append("Кількість товару", rangeInput.value);

  const formDataForBack = JSON.stringify(Array.from(formData));
  console.log(formDataForBack);

  for (let i = 0; i < formDisable.elements.length; i++) {
    formDisable.elements[i].disabled = true;
  }
});

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
