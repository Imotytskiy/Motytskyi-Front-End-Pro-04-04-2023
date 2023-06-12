function takePost() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const postId = form.elements.post.value;
    takePostComments(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => (res.ok ? res : Promise.reject(res))) //  200-299
      .then((res) => res.json())
      .then((data) => showPost(data))
      .catch((error) => console.error(error));
  });
}

takePost();

function takePostComments(postId) {
  const form = document.getElementById("comment-button");

  form.addEventListener("click", function (event) {
    fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((data) => showComments(data))
      .catch((error) => console.error(error));
  });
}

function showPost(post) {
  console.log(post, post.title);
  const postContainer = document.getElementById("seepost");
  postContainer.innerText = `userId: ${post.userId} \n id: ${post.id} \n title: ${post.title} \n  body: ${post.body}`;
}

function showComments(comments) {
  let str = "";
  for (let i = 0; i < comments.length; i++)
    str += `Ім'я: ${comments[i].name} <br> E-mail: ${
      comments[i].email
    } <br> КОМЕНТАР №${i + 1}: ${comments[i].body} <br><br>`;
  document.getElementById("seepost").innerHTML = str;
}
