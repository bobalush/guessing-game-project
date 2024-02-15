const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function askGuess() {
    rl.question('Enter a guess: ', (num) =>{
        let guess = Number(num);
        if (checkGuess(guess)) {
            console.log('You win!');
            rl.close();
        } else {
            askGuess();
        }
    })
};



let secretNumber = 5;

function checkGuess(num) {
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

/* checkGuess(10);
checkGuess(3);
checkGuess(5); */
askGuess();
