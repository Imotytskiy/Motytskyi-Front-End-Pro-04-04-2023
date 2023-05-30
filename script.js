function chbx(obj) {
  let id = obj.id;
  document.getElementById("ENG").checked = false;
  document.getElementById("UKR").checked = false;
  document.getElementById("POL").checked = false;
  setTimeout(() => {
    document.getElementById(id).checked = true;
  }, 0);
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
