const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

//let attemptsLeft = 5;
function askLimit() {
    rl.question('Enter the nubmer of attempts for the game: ', (limitInput) => {
        const attemptsLeft = Number(limitInput);
        askRange(attemptsLeft);
    })
}
function askRange(attemptsLeft) {
    rl.question('Enter a min number: ', (min) => {
        rl.question('Enter a mx number: ', (max) => {
            min = Number(min);
            max = Number(max); 
            console.log(`I'm thinking of a number between ${min} and ${max}...`);

            const secretNumber = randomInRange(min, max);

            askGuess(secretNumber, attemptsLeft);
        })
    })
}

function askGuess(secretNumber, attemptsLeft) {
    if (attemptsLeft <=0) {
        console.log('Sorry, you ran out of attempts. Game over!');
        rl.close();
        return;
    }

    rl.question('Enter a guess: ', (num) =>{
        let guess = Number(num);
        if (checkGuess(guess, secretNumber)) {
            console.log('You win!');
            rl.close();
        } else {
            askGuess(secretNumber, attemptsLeft - 1);
            //console.log(attemptsLeft);
        }
    });
};


function checkGuess(num, secretNumber) {
    if (num > secretNumber ) {
        console.log('Too high.');
        return false;
    } 
    if (num < secretNumber) {
        console.log('Too low.');
        return false;
    }
    if (num === secretNumber) {
        console.log('Correct');
        return true;
    }
}

function randomInRange(num1, num2) {
    return Math.floor(Math.random()*(num2 - num1 + 1) + num1);
}



//askRange();
askLimit();
