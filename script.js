const formTitles = [
  "Ім'я",
  "Прізвище",
  "Дата народження",
  "Стать",
  "Місто",
  "Адреса",
  "Мови, якими володіє",
];
console.log(formTitles.length);
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";

  const tableContainer = document.getElementById("tableContainer");
  tableContainer.style.display = "block";

  const formData = new FormData(form);
  let i = 1;
  let str = "";
  formData.forEach((value) => {
    const formKey = document.getElementById(i.toString() + "a");
    formKey.innerHTML = formTitles[i - 1];
    const formValue = document.getElementById(i.toString() + "b");
    if (i <= formTitles.length - 1) {
      formValue.innerHTML = value;
      i++;
    } else {
      str = str + " " + value;
    }
    document.getElementById("7b").innerHTML = str;
  });
});

// function chbx(obj) {                                                              // жалко удалять задание неправильно прочитал
//   document.getElementById("ENG").checked = false;
//   document.getElementById("UKR").checked = false;
//   document.getElementById("POL").checked = false;
//   document.getElementById(obj.id).checked = true;
// }

// document.getElementsByName("lang");
// document.getElementById("ENG").addEventListener("click", function () {
//   chbx(this);
// });

// document.getElementById("UKR").addEventListener("click", function () {
//   chbx(this);
// });

// document.getElementById("POL").addEventListener("click", function () {
//   chbx(this);
// });
