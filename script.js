function chbx(obj) {
  document.getElementById("ENG").checked = false;
  document.getElementById("UKR").checked = false;
  document.getElementById("POL").checked = false;
  document.getElementById(obj.id).checked = true;
}

document.getElementById("ENG").addEventListener("click", function () {
  chbx(this);
});

document.getElementById("UKR").addEventListener("click", function () {
  chbx(this);
});

document.getElementById("POL").addEventListener("click", function () {
  chbx(this);
});
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";

  const tableContainer = document.getElementById("tableContainer");
  tableContainer.style.display = "block";

  const formData = new FormData(form);
  let i = 1;
  formData.forEach((value, key) => {
    // const formKey = document.getElementById(i.toString() + "a");  // можно латинницей attr name давать?
    const formValue = document.getElementById(i.toString() + "b");
    if (formKey && formValue) {
      formKey.innerHTML = `${key}`;
      formValue.innerHTML = `${value}`;
      i++;
    }
  });
});
