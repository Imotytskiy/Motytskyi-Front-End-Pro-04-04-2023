import { textTitles, dataShop } from "./data.js";

const appContainer = document.getElementById("root");
const catContainer = document.getElementById("catContainer");
const prodContainer = document.getElementById("prodContainer");
const descrContainer = document.getElementById("descrContainer");
const formContainer = document.getElementById("formContainer");

catContainer.textContent = textTitles.categories;
prodContainer.textContent = textTitles.goodsList;
descrContainer.textContent = textTitles.arcticleInfo;

const applyStyles = (element) => {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.classList.add("button");
  }
};

function createButton(container, text, clickHandler) {
  var buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  applyStyles(buttonElement);
  container.appendChild(buttonElement);
  buttonElement.addEventListener("click", clickHandler);
}

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
    var descriptionElement = document.createElement("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    descrContainer.appendChild(descriptionElement);
    createButton(descrContainer, textTitles.buy, function (event) {
      formContainer.style.display = "block";
      clearBlock();
    });
  };
}

//  script for form

(function () {
  const rangeInput = document.getElementById("customRange2");

  rangeInput.addEventListener("input", () => {
    document.getElementById("rangeValue").textContent = rangeInput.value;
  });

  const formDisable = document.getElementById("buyerform");
  formDisable.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formDisable);
    let string = "";
    formData.forEach((value, key) => {
      string += `<div class="formarray">${key}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${value}</div>`;
    });

    document.getElementById(
      "formPost"
    ).innerHTML = `<div class="formarray">Iнформація про товар та про доставку<br>${string} </div>`;
    deleteButtons();
    createButton(formContainer, textTitles.edit, () => {
      enableFormElements();
    });
    createButton(formContainer, textTitles.confirm, function () {
      document.getElementById("buyerform").reset();
      location.reload();
    });
    for (let i = 0; i < formDisable.elements.length; i++) {
      formDisable.elements[i].disabled = true;
    }
  });

  function deleteButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (
        button.textContent.trim() === "РЕДАГУВАТИ" ||
        button.textContent.trim() === "ПІДТВЕРДИТИ"
      ) {
        button.remove();
      }
    });
  }

  function createButton(container, text, clickHandler) {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    applyStyles(buttonElement);
    container.appendChild(buttonElement);
    buttonElement.addEventListener("click", clickHandler);
  }

  function enableFormElements() {
    for (let i = 0; i < formDisable.elements.length; i++) {
      formDisable.elements[i].disabled = false;
    }
  }
})();

// function deleteButtons() {
//   const editButton = document.querySelector(
//     'button[textContent="РЕДАГУВАТИ"]'
//   );
//   const confirmButton = document.querySelector(
//     'button[textContent="ПІДТВЕРДИТИ"]'
//   );

//   if (editButton) {
//     editButton.remove();
//   }

//   if (confirmButton) {
//     confirmButton.remove();
//   }
// }

// document.getElementById(
//   "formPost"
// ).innerHTML = `<div class="formarray">Iнформація про товар та про доставку<br>${string} </div>`;
// const button = document.querySelector(".button");
// button.style.display = "none";
// for (let i = 0; i < formOnOff.elements.length; i++) {
//   formOnOff.elements[i].disabled = true;
// }

// createButton(formContainer, textTitles.edit, formOn);
// function formOn() {
//   button.style.display = "block";
//   for (let i = 0; i < formOnOff.elements.length; i++) {
//     formOnOff.elements[i].disabled = false;
//   }
// }

// createButton(formContainer, textTitles.confirm);
// });
// })();
