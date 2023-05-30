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
