const formTitles = [
  "Ім'я",
  "Прізвище",
  "Дата народження",
  "Стать",
  "Місто",
  "Адреса",
  "Мови, якими володіє",
];

function chbx(obj) {
  document.getElementById("ENG").checked = false;
  document.getElementById("UKR").checked = false;
  document.getElementById("POL").checked = false;
  document.getElementById(obj.id).checked = true;
}
document.getElementById("ENG").addEventListener("click", () => {
  chbx(this);
});

document.getElementById("UKR").addEventListener("click", () => {
  chbx(this);
});

document.getElementById("POL").addEventListener("click", () => {
  chbx(this);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";

  const tableContainer = document.getElementById("tableContainer");
  tableContainer.style.display = "block";

  const formData = new FormData(form);
  let i = 1;
  formData.forEach((value) => {
    const formKey = document.getElementById(i.toString() + "a");
    const formValue = document.getElementById(i.toString() + "b");
    if (value) {
      formKey.innerHTML = `${formTitles[i - 1]}`;
      formValue.innerHTML = `${value}`;
      i++;
    }
  });
});
