const fs = require("fs");

function getRange(filename) {
    const numbers = fs.readFileSync(filename, 'utf8').split("\n");
    let lowerEnd = 0;
    let upperEnd = 1;
    let sum = 0;
    const solution = 15353384;
    //const solution = 127;
    sum = parseInt(numbers[lowerEnd]) + parseInt(numbers[upperEnd]);
    while (sum != solution) {
        if (sum < solution) {
            upperEnd++;
            sum += parseInt(numbers[upperEnd]);
        } else {
            lowerEnd++;
            upperEnd = lowerEnd + 1;
            sum = parseInt(numbers[lowerEnd]) + parseInt(numbers[upperEnd]);
        }
    }
    return getLowAndHigh(numbers, [lowerEnd, upperEnd]);
}

function getLowAndHigh(numbers, rangeInfo) {
    let low = Number.MAX_SAFE_INTEGER;
    let high = 0;

    for(let i = rangeInfo[0]; i < rangeInfo[1]; i++) {
        if (parseInt(numbers[i]) < low) {
            low = parseInt(numbers[i]);
        }
        if (parseInt(numbers[i]) > high) {
            high = parseInt(numbers[i]);
        }
    }
    return low + high;
}

console.log(getRange('./Input/Day9.txt'));
//console.log(encodingCheck('./Input/test.txt'));