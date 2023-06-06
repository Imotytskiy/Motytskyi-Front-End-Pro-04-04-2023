function takeInfo() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
  });
}
takeInfo();
// function searchPost() {}
