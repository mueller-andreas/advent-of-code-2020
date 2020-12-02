const fs = require("fs");

function passwordCheck(filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    let validCount = 0;
    data.forEach(line => {
        const lineArray = line.split(/[ ,:]+/);
        const policy = lineArray[0].split("-");
        const min = parseInt(policy[0]);
        const max = parseInt(policy[1]);
        let count = 0;
        for (let i = 0; i < lineArray[2].length; i++) {
            if (lineArray[2][i] === lineArray[1]) {
                count++;
            }
        }
        if (count >= min && count <= max) {
            validCount++;
        }
    });
    return validCount;
}



console.log(passwordCheck('./Input/Day2.txt'));