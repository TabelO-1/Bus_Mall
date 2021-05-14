'use strict';
console.log('hello world');
// 3. Actually Code (what code do we write) - Easy Part*/
let imageArray = ['./Images/0.png', './Images/1.png', './Images/2.png', './Images/3.png','./Images/4.png', 
'./Images/5.png', './Images/6.png', './Images/7.png', './Images/8.png', './Images/9.png', './Images/10.png', 
'./Images/11.png', './Images/12.png', './Images/13.png', './Images/14.png',  './Images/15.png', './Images/16.png', 
'./Images/17.png', './Images/18.png', './Images/19.png',  './Images/20.png', './Images/21.png',  './Images/22.png', 
'./Images/23.png', './Images/24.png', ]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(imageArray[getRandomInt(25)]);
  console.log(imageArray[getRandomInt(25)]);
  console.log(imageArray[getRandomInt(25)]);

let leftImg = document.getElementById('leftImg');
let centerImg = document.getElementById('centerImg');
let rightImg = document.getElementById('rightImg');

  leftImg.addEventListener('click', leftimg);
  centerImg.addEventListener('click', centerimg);
  rightImg.addEventListener('click', rightimg);
  
function leftimg() {
  var left = new NewImage('leftImg')
  left.render
}
function centerimg() {
  var center = new NewImage('centerImg')
  center.render
}
function rightimg() {
  var right = new NewImage('rightImg')
  right.render
}
function NewImage(imgName) {
  this.name = imgName
  console.log(this.name + 'was clicked')
}