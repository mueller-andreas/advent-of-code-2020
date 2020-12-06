const fs = require("fs");

function treeCount(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");

}

console.log(treeCount('./Input/Day6.txt'));