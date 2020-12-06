const fs = require("fs");

function answerCount(filename) {
    const groups = fs.readFileSync(filename, 'utf8').split("\n\n");
    //const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let sum = 0;
    groups.forEach(group => {
        //console.log(group);
        let allAnswers = group.split("\n");
        //console.log(allAnswers);
        let uniqAnswers = new Set();
        allAnswers.forEach(answer => {
            for (const letter of answer) {
                uniqAnswers.add(letter);
            }
        });
        sum += uniqAnswers.size;
        //console.log(uniqAnswers.size);
    });
    return sum;
}

console.log(answerCount('./Input/Day6.txt'));