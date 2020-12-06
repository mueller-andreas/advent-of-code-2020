const fs = require("fs");

function answerCount(filename) {
    const groups = fs.readFileSync(filename, 'utf8').split("\n\n");
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphabetMap = new Map();
    let sum = 0;
    groups.forEach(group => {
        alphabet.forEach(letter => {
            alphabetMap.set(letter, 0);
        });
        const allAnswers = group.split("\n");
        allAnswers.forEach(answer => {
            for (const letter of answer) {
                alphabetMap.set(letter, alphabetMap.get(letter) + 1);
            }
        });
        alphabet.forEach(letter => {
            if (alphabetMap.get(letter) === allAnswers.length) {
                sum++;
            }
        });
        alphabetMap.clear;
    });
    return sum;
}

console.log(answerCount('./Input/Day6.txt'));