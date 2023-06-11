let dataJson = null;
let postId = null;
let comments = null;

function takePost() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    postId = form.elements.post.value;

    fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("choose-post").style.display = "none";
        document.getElementById("post-button").style.display = "block";
        show(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

takePost();

function takePostComments() {
  const form = document.getElementById("comment-button");

  form.addEventListener("click", function (event) {
    fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        show(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

takePostComments();

function show(info) {
  document.getElementById("write-obj").style.display = "block";
  console.log(info, info.title);
  const post = document.getElementById("seepost");
  console.log(info, typeof info);
  if (comments) {
    let str = "";
    for (let i = 0; i < info.length; i++) {
      str += `${info[i].name} <br>`;
    }
    post.innerHTML = str;
  } else {
    post.innerText =
      info.userId + "\n" + info.id + "\n" + info.title + "\n" + info.body;
  }
}
