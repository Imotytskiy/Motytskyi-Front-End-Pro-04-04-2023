function takeInfo() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = form.elements.post.value;

    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, typeof data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

takeInfo();
