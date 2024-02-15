let secretNumber = 5;

function checkGuess(num) {
    if (num > secretNumber ) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct');
        return true;
    }
}

checkGuess(10);
checkGuess(3);
checkGuess(5);
