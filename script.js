// const parentElement = document.querySelector('body');
// parentElement.style.backgroundColor = '#89CFF0';
// parentElement.style.marginTop = '10%';
// parentElement.style.display = 'flex';
// parentElement.style.justifyContent = 'space-around';
// parentElement.style.alignItems = 'center';

// const firstButton = document.createElement('button');
// firstButton.textContent = 'Реалізувати перевірку на http/https';
// firstButton.setAttribute('type', 'submit');
// parentElement.appendChild(firstButton);

// const inputElement = document.createElement('input');
// inputElement.setAttribute('type', 'url');
// inputElement.setAttribute('name', 'url');
// inputElement.setAttribute('id', 'url');
// inputElement.setAttribute('placeholder', 'www.example.com');
// inputElement.setAttribute('size', '30');
// inputElement.setAttribute('required', '');
// parentElement.appendChild(inputElement);

// const secondButton = document.createElement('button');
// secondButton.textContent = 'Переадресовується на інший сайт';
// secondButton.setAttribute('type', 'button');
// parentElement.appendChild(secondButton);


function validRedirect(urlFromInput) {
  // let urlSecure = "https://";
  let url = "";
  if (!urlFromInput.startsWith('http://') && !urlFromInput.startsWith('https://')) {
    url = "http://" + urlFromInput;
  } else {
    url = urlFromInput;
  }
  return url;
}

// firstButton.addEventListener('click', function () {
//     const urlFromInput = inputElement.value;
//     validRedirect(urlFromInput);
// });

console.log(validRedirect("www.example.com"));

