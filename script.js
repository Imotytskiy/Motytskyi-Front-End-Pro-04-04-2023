
function getRandomInt(max = 8) {              // use 8 because include 0.jpg (real 9)
  return Math.floor(Math.random() * max) + 1; // exclude 0.jpg use +1
}

function takeRandomImg() {
  let img = getRandomInt();
  const pathToTheFile = `images/${img}.jpg`;
  return pathToTheFile;
}

const randomImagePath = takeRandomImg();

const firstDiv = document.createElement('div');

const parentElement = document.querySelector('body');
parentElement.appendChild(firstDiv);

const newImg = document.createElement('img');

newImg.setAttribute('src', randomImagePath);
firstDiv.appendChild(newImg);


