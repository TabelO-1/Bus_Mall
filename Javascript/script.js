'use strict';
console.log('hello world');
// 3. Actually Code (what code do we write) - Easy Part*/
let imageArray = ['0.png', '1.png', '2.png', '3.png',
 '4.png', '5.png', '6.png', '7.png', '8.png', '9.png',
 '10.png', '11.png', '12.png', '13.png', '14.png', 
 '15.png', '16.png', '17.png', '18.png', '19.png', 
 '20.png', '21.png',  '22.png', '23.png', '24.png', ]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(imageArray[getRandomInt(25)]);
  console.log(imageArray[getRandomInt(25)]);
  console.log(imageArray[getRandomInt(25)]);