'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 90;
document.querySelector('.score').textContent = 50;
document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20)+ 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener
('click',function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);
   if(!guess){
     document.querySelector('.message').textContent = '⚡️ No Number!!!';
   }
   else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🐶 Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#f25a58';
    document.querySelector('.number').style.width = '30rem';
   }
   else if(guess > secretNumber){
     if(score > 1){
      document.querySelector('.message').textContent = 'Too High!!';
      score--;
      document.querySelector('.score').textContent = score;
     }else{
       document.querySelector('.message').textContent = '🙀 You lost the Game!!';
       document.querySelector('.score').textContent = 0;
     }
   }
   else if(guess < secretNumber){
     if(score > 1){
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
     }else{
       document.querySelector('.message').textContent = '🙀 You lost the Game!!';
       document.querySelector('.score').textContent = 0;
     }
   }
});