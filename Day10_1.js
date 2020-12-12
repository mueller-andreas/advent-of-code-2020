const fs = require("fs");

function countDiffs(filename) {
    const adapters = fs.readFileSync(filename, 'utf8').split("\n");
    let adaptersInt = [];
    let current = 0;
    let diffArray = [0, 0, 1];
    adapters.forEach(adapter => {
        adaptersInt.push(parseInt(adapter));
    });
    adaptersInt.sort((a, b) => a - b);

    adaptersInt.forEach(adapter => {
        if (current + 1 === adapter) {
            diffArray[0] = diffArray[0] + 1;
        } else if (current + 2 === adapter) {
            diffArray[1] = diffArray[1] + 1;
        } else {
            diffArray[2] = diffArray[2] + 1;
        }
        current = adapter;
    });
    console.log(diffArray);
    return diffArray[0]*diffArray[2];
}

console.log(countDiffs('./Input/Day10.txt'));