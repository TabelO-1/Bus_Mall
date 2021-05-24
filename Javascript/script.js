'use strict'
console.log('hello world');
// 3. Actually Code (what code do we write) - Easy Part
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
let PRODUCTS_ARRAY = [
  {HTMLid : 'bag', imgURL : '../Images/bag.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'banana', imgURL : '../Images/banana.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'bathroom', imgURL : '../Images/bathroom.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'boots', imgURL : '../Images/boots.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'breakfast', imgURL : '../Images/breakfast.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'bubblegum', imgURL : '../Images/bubblegum.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'chair', imgURL : '../Images/chair.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'cthulhu', imgURL : '../Images/cthulhu.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'dog-duck', imgURL : '../Images/dog-duck.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'dragon', imgURL : '../Images/dragon.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'pen', imgURL : '../Images/pen.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'pet-sweep', imgURL : '../Images/pet-sweep.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'scissors', imgURL : '../Images/scissors.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'shark', imgURL : '../Images/shark.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'sweep', imgURL : '../Images/sweep.png', totalViews : 0, totalVotes : 0},
  {HTMLid : 'tauntaun', imgURL : '../Images/tauntaun.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'unicorn', imgURL : '../Images/unicorn.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'water-can', imgURL : '../Images/water-can.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'wine-glass', imgURL : '../Images/wine-glass.jpg', totalViews : 0, totalVotes : 0},
]
let clicks = 0;

function RenderImages() {
  console.log('Total Clicks = ', clicks);
  for (let i=0; i <= 2; i++) {
    let imageContainer = document.getElementById(`Img${i}Container`);
    let img = document.createElement('img');
    img.setAttribute('src', PRODUCTS_ARRAY[i].imgURL);
    img.setAttribute('id', PRODUCTS_ARRAY[i].HTMLid);
    imageContainer.appendChild(img);
    PRODUCTS_ARRAY[i].totalViews++;
    console.log('total views: ', PRODUCTS_ARRAY[i].HTMLid, PRODUCTS_ARRAY[i].totalViews);
  }
}
function handleClick(event) {
  clicks++;
  console.log('Image ' + event.target.id + ' was clicked');
  let imageid = event.target.id;
  
  for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
    if (imageid === PRODUCTS_ARRAY[i].HTMLid) {
      PRODUCTS_ARRAY[i].totalVotes++
      console.log('total votes ', PRODUCTS_ARRAY[i].totalVotes);
    }
  }
  if (clicks !== 25) {
    for (let i=0; i <=2; i++) {
      let shuffle = getRandomInt(PRODUCTS_ARRAY.length);
      let removeItem = PRODUCTS_ARRAY.shift();
      let addItem = PRODUCTS_ARRAY.splice(shuffle+4, 0, removeItem);
    }
    for (let i=0; i<3; i++) {
      let parent = document.getElementById(`Img${i}Container`);
      parent.removeChild(parent.lastChild);
    }
    RenderImages();
  } else {
    let divs = document.getElementsByTagName('div');
    for (let i=1; i<divs.length - 1; i++) {
      divs[i].removeEventListener('click', handleClick);
    }
    console.log('Thou hast reached 25 Clicks')
  }
  
}

(function startApp() {
  console.log('This app was made by Mason W. May 2021, enjoy!');
  for(let i=0; i < 3; i++) {
    let listen = document.getElementById(`Img${i}Container`);
    listen.addEventListener('click', handleClick);
  }
  RenderImages();
})();
