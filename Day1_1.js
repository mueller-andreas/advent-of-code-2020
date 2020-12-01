const fs = require("fs");

function twentyTwenty (filename) {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    for (let i = 0; i < data.length; i++) {
        element1 = parseInt(data[i]);
        for (let j = i; j < data.length; j++){
            element2 = parseInt(data[j]);
            if(element1+element2 ===2020) {
                return element1*element2;
            }
        }
    }
    console.log(data[1])
    return null;
}

console.log(twentyTwenty('./Input/Day1_1.txt'));