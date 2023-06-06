function takeInfo() {
  var form = document.getElementById("myForm");

  document
    .getElementsByTagName("button")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log(event);
    });
}
takeInfo();
// function searchPost() {}
