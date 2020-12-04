const fs = require("fs");

function treeCount(filename, rightPara, downPara) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    let right = rightPara;
    let treeCount = 0;
    for (let down = downPara; down < data.length; down += downPara) {
        if (data[down][right] === "#") {
            treeCount++;
        }
        right = (right + rightPara) % data[down].length;
    }
    return treeCount;
}

console.log(treeCount('./Input/Day3.txt', 1, 1));
console.log(treeCount('./Input/Day3.txt', 3, 1));
console.log(treeCount('./Input/Day3.txt', 5, 1));
console.log(treeCount('./Input/Day3.txt', 7, 1));
console.log(treeCount('./Input/Day3.txt', 1, 2));

console.log(treeCount('./Input/Day3.txt', 1, 1)*treeCount('./Input/Day3.txt', 3, 1)*treeCount('./Input/Day3.txt', 5, 1)*treeCount('./Input/Day3.txt', 7, 1)*treeCount('./Input/Day3.txt', 1, 2));