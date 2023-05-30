function chbx(obj) {
  var that = obj;
  if (document.getElementById(that.id).checked == true) {
    document.getElementById("ENG").checked = false;
    document.getElementById("UKR").checked = false;
    document.getElementById("POL").checked = false;
    document.getElementById(that.id).checked = true;
  }
}

addEventListener;
