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



let secretNumber = randomInRange(0, 100);

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

function randomInRange(num1, num2) {
    return Math.floor(Math.random()*(num2 - num1 + 1) + num1);
}
/* checkGuess(10);
checkGuess(3);
checkGuess(5); */
askGuess();

/* console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20 */
