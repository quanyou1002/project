'use strict';
/*
const p = document.querySelector('.message');
console.log(p);
p.textContent = 'Correct Number'
document.querySelector('.number').textContent = '7'
document.querySelector('.score').textContent='15';
document.querySelector('.guess').value = 7;
document.querySelector('.highscore').textContent = '15';
document.querySelector('body').style.backgroundColor = '#60b347';
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber)

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!'        
    } else if (guess === secretNumber) {
        displayMessage('Correct number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        console.log(guess);
        console.log(secretNumber);
        if(score > 1 ) {
            displayMessage(guess > secretNumber ?'guess too high!' :'guess too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }       
    } 
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    
    document.querySelector('.message').textContent = 'Start Guessing...'          
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    });
