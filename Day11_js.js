const fs = require("fs");

function countDiffs(filename) {
    const adapters = fs.readFileSync(filename, 'utf8').split("\n");
    let adaptersInt = [];

}

console.log(countDiffs('./Input/Day11.txt'));