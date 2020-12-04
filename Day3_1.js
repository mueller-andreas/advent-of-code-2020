const fs = require("fs");

function treeCount(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    let right = 3;
    let treeCount = 0;
    console.log(data.length);

    for (let down = 1; down < data.length; down++) {
        if (data[down][right] === "#") {
            treeCount++;
            console.log("right: " + right + " down: " + down + " count: " + treeCount);
        }
        right = (right + 3) % data[down].length;
    }
    return treeCount;
}

console.log(treeCount('./Input/Day3.txt'));