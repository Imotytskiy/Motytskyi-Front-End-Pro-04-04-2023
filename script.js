let dataJson = null;

function takeInfo() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const postNumber = form.elements.post.value;

    fetch(`https://jsonplaceholder.typicode.com/todos/${postNumber}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("choose-post").style.display = "none";
        document.getElementById("post-button").style.display = "block";
        console.log(data);
        show(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

takeInfo();

function show(info) {
  document.getElementById("write-obj").style.display = "block";
  console.log(info, info.title);
  const post = document.getElementById("seepost");
  post.innerText = info.title + "\n" + info.body;
}
