function takeInfo() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = form.elements.post.value;
    console.log(number);
  });
}

takeInfo();
