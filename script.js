function takePost() {
  const form = document.getElementById("form");
  const postContainer = document.getElementById("seepost");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const postId = form.elements.post.value;
    takePostComments(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            const errorMsg = "Пост не знайдено";
            console.error(errorMsg);
            postContainer.innerText = errorMsg;
            throw new Error(errorMsg);
          }
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => showPost(data))
      .catch((error) => {
        console.error("Помилка завантаження: ", error);
        postContainer.innerText = "Помилка завантаження: " + error.message;
      });
  });
}

takePost();

function takePostComments(postId) {
  const form = document.getElementById("comment-button");
  const postContainer = document.getElementById("seepost");

  form.addEventListener("click", function (event) {
    if (postId > 100 || postId < 1) {
      const errorMsg = "ID посту повинен бути між 1 та 100";
      console.error(errorMsg);
      postContainer.innerText = errorMsg;
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            const errorMsg = "Коментарі до цього посту не знайдено";
            console.error(errorMsg);
            postContainer.innerText = errorMsg;
            throw new Error(errorMsg);
          }
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => showComments(data))
      .catch((error) => {
        console.error("Помилка завантаження: ", error);
        postContainer.innerText = "Помилка завантаження: " + error.message;
      });
  });
}

function showPost(post) {
  console.log(post, post.title);
  const postContainer = document.getElementById("seepost");
  postContainer.style.display = "block";
  postContainer.innerHTML = `
    <p><strong>userId:</strong> ${post.userId}</p>
    <p><strong>id:</strong> ${post.id}</p>
    <p><strong>title:</strong> ${post.title}</p>
    <p><strong>body:</strong> ${post.body}</p>
  `;
  document.getElementById("comment-button").style.display = "block";
}

function showComments(comments) {
  let str = "";
  for (let i = 0; i < comments.length; i++)
    str += `Ім'я: ${comments[i].name} <br> E-mail: ${
      comments[i].email
    } <br> КОМЕНТАР №${i + 1}: ${comments[i].body} <br><br>`;
  document.getElementById("seepost").innerHTML = str;
}
// if (postId > 100 || postId < 1) {
//   const errorMsg = "ID посту повинен бути зазначене від 1 до 100";
//   console.error(errorMsg);
//   postContainer.innerText = errorMsg;
//   return;
// }
