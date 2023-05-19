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
prevButton.setAttribute('type', 'button');
firstDiv.appendChild(prevButton);

const newImg = document.createElement('img');
newImg.style.width = "400px";
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

displayImg();