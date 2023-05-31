const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("formContainer").style.display = "none";
  document.getElementById("tableContainer").style.display = "block";

  document.getElementById("name").innerHTML = form["first-name"].value;
  document.getElementById("surname").innerHTML = form["last-name"].value;
  document.getElementById("birth").innerHTML = form["birth"].value;
  document.getElementById("gender").innerHTML = form["gender"].value;
  document.getElementById("cityValue").innerHTML = form["city"].value;
  document.getElementById("adress").innerHTML = form["adress"].value;
  let lang = "";
  lang = form["langEng"].checked ? form["langEng"].value + "<br>" : "";
  lang += form["langUkr"].checked ? form["langUkr"].value + "<br>" : "";
  lang += form["langPol"].checked ? form["langPol"].value + "<br>" : "";
  document.getElementById("lang").innerHTML = lang;
});
