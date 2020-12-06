const fs = require("fs");

function treeCount(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    let hightestId = 0;
    let sortedArray = [];
    data.forEach(seat => {
        let seatInt = 0;
        for (let i = 0; i < 7; i++) {
            if (seat[i] === "B") {
                seatInt += Math.pow(2, 6-i);
            } 
        }
        seatInt = seatInt * 8;
        for (let i = 7; i < 10; i++) {
            if (seat[i] === "R") {
                seatInt += Math.pow(2, 9-i);
            }
        }
        sortedArray.push(seatInt);
    });
    sortedArray.sort();
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] + 1 != sortedArray[i+1]) {
            return sortedArray[i] + 1;
        }
    }
    return null;
}

console.log(treeCount('./Input/Day5.txt'));