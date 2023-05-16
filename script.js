
const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = 'black';

const firstDiv = document.createElement('div');
parentElement.appendChild(firstDiv);
firstDiv.style.marginTop = '8%';
firstDiv.style.display = 'flex';
firstDiv.style.justifyContent = 'center';
firstDiv.style.alignItems = 'center';


function getRandomInt(max = 9) {              //  8 because include 0.jpg (real 9) Expected output: max
  return Math.floor(Math.random() * max) + 1; // exclude 0.jpg use +1
}

function takeRandomImg() {
  let img = getRandomInt();
  const pathToTheFile = `images/${img}.jpg`;
  return pathToTheFile;
}


function displayImg() {

const newImg = document.createElement('img');
newImg.setAttribute('src', takeRandomImg());
firstDiv.appendChild(newImg);

}

displayImg();

