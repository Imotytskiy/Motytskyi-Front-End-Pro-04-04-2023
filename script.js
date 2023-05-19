const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = 'indigo';

const firstDiv = document.createElement('div');
parentElement.appendChild(firstDiv);
firstDiv.style.marginTop = '8%';
firstDiv.style.display = 'flex';
firstDiv.style.justifyContent = 'space-evenly';
firstDiv.style.alignItems = 'center';

let currentImageIndex = 4;

const prevButton = document.createElement('button');
prevButton.textContent = 'PREV';
firstDiv.appendChild(prevButton);

const newImg = document.createElement('img');
newImg.style.maxWidth = "500px";
newImg.style.height = "400px";
firstDiv.appendChild(newImg);


const nextButton = document.createElement('button');
nextButton.textContent = 'NEXT';
nextButton.setAttribute('type', 'button');
firstDiv.appendChild(nextButton);

function displayImg() {
  newImg.setAttribute('src', `images/${currentImageIndex}.jpg`);
  prevButton.style.visibility = currentImageIndex <= 1 ? "hidden" : "visible";
  nextButton.style.visibility = currentImageIndex >= 9 ? "hidden" : "visible";
}

prevButton.addEventListener('click', () => {
  if(currentImageIndex > 1) {
    currentImageIndex--;
    displayImg();
  }
});

nextButton.addEventListener('click', () => {
  if(currentImageIndex < 9) {
    currentImageIndex++;
    displayImg();
  }
});

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.setAttribute('type', 'button');
  button.style.border = "none";
  button.style.color = "black";
  button.style.padding = "15px 32px";
  button.style.textAlign = "center";
  button.style.textDecoration = "none";
  button.style.display = "inline-block";
  button.style.fontSize = "16px";
  button.style.margin = "4px 2px";
  button.style.cursor = "pointer";
});

displayImg();

