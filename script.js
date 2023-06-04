import { textTitles, prices, dataShop } from "./data.js";

const appContainer = document.getElementById("root");
const catContainer = document.getElementById("catContainer");
const accordion = document.getElementById("accordion");
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

const clearFirstBlock = () => {
  catContainer.innerHTML = textTitles.categories;
};

const createOrderElement = () => {
  const orderElement = document.createElement("div");
  applyStyles(orderElement);
  orderElement.classList.add("order");
  orderElement.textContent = textTitles.order;
  catContainer.appendChild(orderElement);
  return orderElement;
};

const orderElement = createOrderElement();

orderElement.addEventListener("click", function (event) {
  clearFirstBlock();
  catContainer.style.display = "none";
  const accordionContainer = document.getElementById("accordion-container");
  accordionContainer.style.display = "block";

  function createAccordionSection(sectionTitle, sectionContent) {
    // Створюємо елементи акордеона
    const button = document.createElement("button");
    button.classList.add("accordion");
    button.textContent = sectionTitle;

    const panel = document.createElement("div");
    panel.classList.add("panel");
    const paragraph = document.createElement("p");
    paragraph.textContent = sectionContent;
    panel.appendChild(paragraph);

    // Додаємо обробник події для розкривання/згортання секції при кліку на кнопку акордеона
    button.addEventListener("click", function () {
      panel.classList.toggle("active");
    });

    // Додаємо кнопку акордеона і панель до контейнера акордеона
    accordionContainer.appendChild(button);
    accordionContainer.appendChild(panel);
  }

  function createAccordionSections(count) {
    for (let i = 1; i <= count; i++) {
      createAccordionSection("Section " + i, "Section " + i);
    }
  }

  // Викликати функцію createAccordionSections з бажаною кількістю секцій
  createAccordionSections(5);

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
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
let jsonProduct = "";
let jsonIdProduct = "";
function productSelect(product) {
  return function (event) {
    descrContainer.innerHTML = textTitles.arcticleInfo;
    var descriptionElement = document.createElement("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    jsonProduct = product.name;
    jsonIdProduct = product.id;
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

    ////////////////////////////////////////////////////////////////////////////////HW25/////////////////////////////////////////////////////////////////////////
    const dateForJson = function () {
      let now = new Date();

      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;

      let formattedDate =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      return formattedDate;
    };

    createButton(formContainer, textTitles.confirm, function () {
      const jsonFormData = {};
      jsonFormData.id = jsonIdProduct;
      jsonFormData.quantity = formDisable["quantity"].value;
      jsonFormData.product = jsonProduct;
      jsonFormData.date = dateForJson().slice(0, -9);
      jsonFormData.price = prices[jsonIdProduct].toString();
      localStorage.setItem(dateForJson(), JSON.stringify(jsonFormData));
      document.getElementById("buyerform").reset();
      location.reload();
    });
    for (let i = 0; i < formDisable.elements.length; i++) {
      formDisable.elements[i].disabled = true;
    }
  });

  //////////////////////////////////////////////////////////////////////////////////hw25/////////////////////////////////////
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
//////
$(function () {
  $("#accordion").accordion();
});
