'use strict';
const secretNumber = (Math.trunc(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;
// console.log(secretNumber);



document.querySelector('.check').addEventListener("click" , () =>  { 

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    console.log(secretNumber);

    if (!guess) {

        document.querySelector(".message").textContent = "Not a valid input!! ❌"
    }
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector(".message").textContent = "Correct Input, You have won the  game ✔🎉🎇🙌"
        document.querySelector("body").style.backgroundImage = "linear-gradient(to right, green, yellow)";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }


    }
    else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector(".message").textContent = "Too high 📈"
        }

        else {
            
       document.querySelector(".message").textContent = "You lost the game😢" 
        }

    }
    else if (guess < secretNumber) {
        if (score > 1) {
          score--;
          document.querySelector('.score').textContent = score;
          document.querySelector('.message').textContent = 'Too low 📉';
        } else {
          document.querySelector('.message').textContent =
            'You lost the game😢';
        }

    }

});

document.querySelector(".again").addEventListener("click", () => { 
     window.location.reload();

    // score = 20;
    // constsecretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';

    // document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = '?';
    // document.querySelector('.guess').value = '';

    // document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.width = '15rem';

});