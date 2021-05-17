'use strict';
console.log('hello world');
// 3. Actually Code (what code do we write) - Easy Part*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let leftImg = document.getElementById('leftImg');
let centerImg = document.getElementById('centerImg');
let rightImg = document.getElementById('rightImg');

  leftImg.addEventListener('click', leftimg);
  centerImg.addEventListener('click', centerimg);
  rightImg.addEventListener('click', rightimg);
  
function leftimg() {
  console.log('The Left Image was clicked')
}
function centerimg() {
  console.log('The Center Image was clicked')
}
function rightimg() {
  console.log('The Right Image was clicked')
}

let PRODUCTS_ARRAY = [
  {HTMLid : 'bag', imgURL : '../Images/bag.jpg', totalViews : 0, totalVotes : 0},
  {HTMLid : 'bannana', imgURL : '../Images/bannana.jpg', totalViews : 0, totalVotes : 0},
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

function handleClick() {
  console.log('An Image Was Clicked')
}

function RenderImages() {
  //this function will render 3 images from the array
}