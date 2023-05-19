
const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = 'black';

const firstDiv = document.createElement('div');
parentElement.appendChild(firstDiv);
firstDiv.style.marginTop = '8%';
firstDiv.style.display = 'flex';
firstDiv.style.justifyContent = 'center';
firstDiv.style.alignItems = 'center';


function getRandomInt(max = 9) {             
  return Math.floor(Math.random() * max) + 1; // exclude 0.jpg use +1
}
function nextPrev (){

}





function nextPrev () {
  let img = getRandomInt();
  const pathToTheFile = `images/${img}.jpg`;
  return pathToTheFile;
}


function displayImg() {

const newImg = document.createElement('img');
newImg.setAttribute('src', takeRandomImg());
newImg.style.width = "400px";
newImg.style.height = "400px";
firstDiv.appendChild(newImg);

}

displayImg();

