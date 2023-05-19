const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = '#89CFF0';
parentElement.style.marginTop = '10%';
parentElement.style.display = 'flex';
parentElement.style.justifyContent = 'space-around';
parentElement.style.alignItems = 'center';

const firstButton = document.createElement('button');
firstButton.textContent = 'Реалізувати перевірку на http/https';
firstButton.setAttribute('type', 'button');
parentElement.appendChild(firstButton);

const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'url');
inputElement.setAttribute('name', 'url');
inputElement.setAttribute('id', 'url');
inputElement.setAttribute('placeholder', 'https://example.com');
inputElement.setAttribute('pattern', 'https://.*');
inputElement.setAttribute('size', '30');
inputElement.setAttribute('required', '');
parentElement.appendChild(inputElement);

const secondButton = document.createElement('button');
secondButton.textContent = 'Переадресовується на інший сайт';
secondButton.setAttribute('type', 'button');
parentElement.appendChild(secondButton);

let urlSecure = "";
let url = "";

function validRedirect(urlFromInput) {
  if (!urlFromInput.startsWith('http://') && !urlFromInput.startsWith('https://')) {
      urlSecure = 'https://' + urlFromInput;
      url = 'http://' + urlFromInput;
  } else {
      url = urlFromInput;
  }
}

firstButton.addEventListener('click', function () {
    const urlFromInput = inputElement.value;
    validRedirect(urlFromInput);
});

secondButton.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 301 || xhr.status === 302) {
          window.location.href = urlSecure;
        }
      }
    };
    xhr.send();
});