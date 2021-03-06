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
        const password = lineArray[2];
        const letter = lineArray[1];
        for (let i = 0; i < password.length; i++) {
            if (password[i] === letter) {
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